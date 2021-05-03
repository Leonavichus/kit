import React from "react";

export default class ButtonAddDel extends React.Component {
  render() {
    const { label, handleClick } = this.props;
    return <button onClick={handleClick}>{label}</button>;
  }
}
