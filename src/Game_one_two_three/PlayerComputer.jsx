import React, { Component } from "react";
import { connect } from "react-redux";

class PlayerComputer extends Component {
  render() {
    return (
      <div className="playerComputer d-flex flex-column">
        <div className="speech-bubble mb-2 p-2 ml-4">
          <img
            src={`./img/${this.props.playerComputer}.png`}
            style={{ width: 100 }}
          />
        </div>

        <img src="./img/playerComputer.png" style={{ width: 200 }} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    playerComputer: state.reducerGameOneTwoThree.playerComputer,
  };
};

export default connect(mapStateToProps, null)(PlayerComputer);
