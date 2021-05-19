import React from "react";

import ButtonAddDel from "./ButtonAddDel";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RemoveFriend } from "./AddFriend";
import UserAvatar from "./UserAvatar";

class BestFriendCard extends React.Component {
  render() {
    const { friend } = this.props;

    return (
      <div>
        <UserAvatar src={friend.photo} />
        <h4>{friend.name}</h4>
        <p>{friend.email}</p>
        <p>{friend.gender}</p>
        <p>{friend.location}</p>
        <p>{friend.age}</p>
        <p>{friend.phone}</p>
        <ButtonAddDel
          label="Remove from friends"
          handleClick={() => this.props.RemoveFriend(friend)}
        />
      </div>
    );
  }
}

function mapStateToProps(state, friends) {
  return {
    friends: this.state
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ RemoveFriend: RemoveFriend }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BestFriendCard);
