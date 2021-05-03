import React from "react";
import { connect } from "react-redux";
import BestFriendList from "./BestFriendList";

class Friend extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <h2>Best_Friend</h2>
        <BestFriendList friends={this.props.friends} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(Friend);
