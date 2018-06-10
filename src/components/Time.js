import React, { Component } from 'react';

class Time extends Component {
  render() {
    const timeFun = () =>
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`;
    return (
      <div className="flexCenter">
        <span className="timeDisplay">{`${new Date().getHours()}:${timeFun()}`}</span>
      </div>
    );
  }
}

export default Time;
