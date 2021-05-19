import React from "react";
import UserCard from "./UserCard";
import { connect } from "react-redux";
import "./style.css";

function UserList(props) {
  return (
    <div id="users">
      {props.users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps)(UserList);
