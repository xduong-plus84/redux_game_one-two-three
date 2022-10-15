import React, { Component } from "react";
import { connect } from "react-redux";
import { endGameAcion, playGameAction } from "../redux/actions/playGame.Action";

class Result extends Component {
  render() {
    return (
      <div className="result my-5">
        <h1 className="text-warning display-4" style={{ letterSpacing: 4 }}>
          {this.props.thongBao}
        </h1>
        <p>
          Số bàn thắng:
          <span className="text-success mx-2">{this.props.soBanThang}</span>
        </p>
        <p>
          Số lần chơi:
          <span className="text-primary mx-2">{this.props.soLanChoi}</span>
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
    thongBao: state.reducerGameOneTwoThree.thongBao,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputer = setInterval(() => {
        dispatch(playGameAction());
        count++;
        if (count > 10) {
          clearInterval(randomComputer);
          dispatch(endGameAcion());
        }
      }, 100);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
