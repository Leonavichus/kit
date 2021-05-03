import React from "react";
import BestFriendCard from "./BestFriendCard";
import "./style.css";

class BestFriendsList extends React.Component {
  render() {
    return (
      <div id="friend">
        {this.props.friends.friends.map((friend) => (
          <BestFriendCard friend={friend} />
        ))}
      </div>
    );
  }
}

export default BestFriendsList;
