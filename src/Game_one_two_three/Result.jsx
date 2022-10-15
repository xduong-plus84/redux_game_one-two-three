import React, { Component } from "react";
import { connect } from "react-redux";
import { playGameAction } from "../redux/actions/playGame.Action";

class Result extends Component {
  render() {
    return (
      <div className="result mx-5 my-auto">
        <p>
          Số bàn thắng:{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </p>
        <p>
          Số lần chơi:{" "}
          <span className="text-primary">{this.props.soLanChoi}</span>
        </p>
        <button
          onClick={() => {
            this.props.playGame();
          }}
          className="bg-success text-white p-3"
        >
          Play Game
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  // lấy dữ liệu về dưới dạng props
  return {
    soBanThang: state.reducerGameOneTwoThree.soBanThang,
    soLanChoi: state.reducerGameOneTwoThree.soLanChoi,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch(playGameAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
