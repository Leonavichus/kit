import React from "react";
import UserCard from "./UserCard";
import "./style.css";

export default function UserList(props) {
  return (
    <div id="users">
      {props.users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
}
