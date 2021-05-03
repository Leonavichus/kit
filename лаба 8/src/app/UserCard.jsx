import React from "react";
import UserAvatar from "./UserAvatar";
import ButtonAddDel from "./ButtonAddDel";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AddFriend } from "./AddFriend";
import "./style.css";

class UserCard extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div key={user.login.uuid}>
        <UserAvatar src={user.picture.medium} />
        <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
        <p>{user.email}</p>
        <p>{user.gender}</p>
        <p>{user.location.street.name}</p>
        <p>{`${user.dob.date} | ${user.dob.age} age`}</p>
        <p>{user.phone}</p>
        <ButtonAddDel
          label="Add to friends"
          handleClick={() => this.props.AddFriend(user)}
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
  return bindActionCreators({ AddFriend: AddFriend }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserCard);
