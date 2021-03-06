import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1463909811364368385"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="debabra13263133"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/DebabrataSahoo"}
          options={{ text: "Hello", via: "debabra13263133" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
