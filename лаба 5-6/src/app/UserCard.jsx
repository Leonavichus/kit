import React from "react";
import UserAvatar from "./UserAvatar";
import "./style.css";

export default function UserCard({ user }) {
  return (
    <div key={user.login.uuid}>
      <UserAvatar src={user.picture.medium} />
      <h4>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h4>
      <p>{user.email}</p>
      <p>{user.gender}</p>
      <p>{user.location.street.name}</p>
      <p>{`${user.dob.date} | ${user.dob.age} age`}</p>
      <p>{user.phone}</p>
    </div>
  );
}
