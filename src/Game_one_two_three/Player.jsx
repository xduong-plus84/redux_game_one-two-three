import React, { Component } from "react";
import { connect } from "react-redux";
import { playerAction } from "../redux/actions/playerAction";
import { BAO, BUA, KEO } from "../redux/constants/keoBuaBao";

class Player extends Component {
  render() {
    console.log(this.props.player);
    return (
      <div className="player d-flex flex-column align-items-center">
        <div className="speech-bubble mb-2 p-2 ml-4">
          <img src={`./img/${this.props.player}.png`} style={{ width: 100 }} />
        </div>

        <img src="./img/player.png" style={{ width: 200 }} />
        <div>
          <button
            onClick={() => {
              this.props.playerAction(KEO);
            }}
          >
            <img src="./img/keo.png" style={{ width: 30 }} />
          </button>
          <button
            onClick={() => {
              this.props.playerAction(BUA);
            }}
          >
            <img src="./img/bua.png" style={{ width: 30 }} />
          </button>
          <button
            onClick={() => {
              this.props.playerAction(BAO);
            }}
          >
            <img src="./img/bao.png" style={{ width: 30 }} />
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  // lấy dữ liệu về dưới dạng props
  return {
    player: state.reducerGameOneTwoThree.player,
  };
};

let mapDispatchToProps = (dispatch) => {
  // đẩy dữ liệu lên store
  return {
    playerAction: (value) => {
      dispatch(playerAction(value));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
