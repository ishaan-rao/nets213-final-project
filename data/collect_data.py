import tweepy
import carmen
import csv
import time

API_KEY = "YPwLF2rHJxgL0jtEXKuBV1MvY"
SECRET_KEY = "WG0ZEiXj5kW4u525V4qpGBuvd16MIOEjSfCGm9T9WQQKaW5SPC"
BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAALZMOgEAAAAAZe9wA48BrsmmeQOONpAZvoI9AHI%3DsZdqYcwt9m69fltycJeCcZL6niDcYlVCf3loMXd6jkv78zW6Oi"


### auth stuff :(
auth = tweepy.AppAuthHandler(API_KEY, SECRET_KEY)
api = tweepy.API(auth)


### carmen stuff 
resolver = carmen.get_resolver() 
resolver.load_locations()


### Load tweets
FILE_NAME = 'covid19_vaccine_tweets_2.csv'
NUM_TWEETS = 100000
QUERY = "#CovidVaccine"


### Load in previous tweet ids so no duplicates
ids = set()
with open(FILE_NAME, 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        ids.add(row['id'])

print("Currently have: " + str(len(ids)) + " unique ids")

tweets = []
print("Getting " + str(NUM_TWEETS) + " about " + QUERY + " from Twitter")

with open(FILE_NAME, 'a', newline='') as csvfile:
    fieldnames = ['id', 'text', 'created_at', 'state', 'county', 'city']

    writer = csv.DictWriter(csvfile, fieldnames)

    writer.writeheader()
    while len(tweets) < NUM_TWEETS:
        try:
            for tweet in tweepy.Cursor(api.search, q=QUERY, lang='en').items(NUM_TWEETS):
                location = resolver.resolve_tweet(tweet._json)

                #We don't care about tweets not from the US
                if location == None or location[1].country != 'United States':
                    print("Found tweet without location data. Dropping")
                    continue

                tweet_json = tweet._json

                if tweet.id in ids:
                    print("Found duplicate tweet. Dropping")
                    continue

                #We don't care about retweets of people getting vaccines
                if tweet.text.startswith("RT "):
                    print("Found retweet. Dropping")
                    continue

                #Replace newlines with serialized form so formatting doesn't get messed up

                tweet.text.replace('\n', '\"\n\"')
                tweetDict = {
                    'id': tweet.id,
                    'text': tweet.text,
                    'created_at': tweet.created_at,
                    'state': location[1].state if (location[1].state != None and location[1].state != "") else "None",
                    'county': location[1].county if (location[1].county != None and location[1].county != "") else "None",
                    'city': location[1].city if (location[1].city != None  and location[1].city != "") else "None",
                }

                print("Found good tweet. Nice!")
                tweets.append(tweetDict)
                ids.add(tweet.id)
                writer.writerow(tweetDict)
        except tweepy.TweepError:
            print("Hit rate limit. Waiting 15 minutes")
            time.sleep(60 * 15)
            continue
        


print("Got " + str(len(tweets)) + " unique tweets from the US.")






