// Code DigitalClicker Component Here
import React from "react";

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  incrementTimesClicked = () => {
    this.setState(state => {
      return { timesClicked: state.timesClicked + 1 };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementTimesClicked}>
          {this.state.timesClicked}
        </button>
      </div>
    );
  }
}
