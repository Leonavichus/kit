import React from "react";

export default function RespCardList(props) {
  return (
    <div>
      {props.resps.map((resp, index) => {
        return (
          <nav key={index}>
            <img src={resp.owner.avatar_url} width="70" height="70" alt="" />
            <br />
            <a href={resp.html_url}>{resp.name}</a>
            <br />
            {" Автор: "}
            {resp.owner.login}
          </nav>
        );
      })}
    </div>
  );
}
