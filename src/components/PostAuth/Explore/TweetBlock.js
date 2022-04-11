import tweets from "./Tweets.json"
import Tweet from "./Tweet.js"
import React from "react";

const TweetBlock = () => {
  return (
      <div className="mt-1 mb-3">
        { tweets.map(tweet => {return (<Tweet tweet={tweet} key={tweet.account}/>);}) }
      </div>
  );
}

export default TweetBlock;