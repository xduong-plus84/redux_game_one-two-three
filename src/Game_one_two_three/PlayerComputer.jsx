import React, { Component } from "react";
import { connect } from "react-redux";

class PlayerComputer extends Component {
  render() {
    let keyframe = `@keyframes mymove${Date.now()}{
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0px;}
    }`;
    return (
      <div className="playerComputer d-flex flex-column align-items-center">
        <div className="speech-bubble ml-4" style={{ width: 150, height: 100 }}>
          <style>{keyframe}</style>
          <img
            src={`./img/${this.props.playerComputer}.png`}
            style={{
              width: 100,
              position: "absolute",
              left: 0,
              right: 0,
              margin: "0 auto",
              animation: `mymove${Date.now()} 0.5s`,
            }}
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
