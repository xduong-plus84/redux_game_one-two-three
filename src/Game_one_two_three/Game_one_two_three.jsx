import React, { Component } from "react";
import "./game_one_two_three.css";
import Player from "./Player";
import PlayerComputer from "./PlayerComputer";
import Result from "./Result";

export default class Game_one_two_three extends Component {
  render() {
    return (
      <div className="gameOneTwoThree">
        <div className="container">
          <div className="row my-2">
            <div className="col-3">
              <Player />
            </div>
            <div className="col-6">
              <Result />
            </div>
            <div className="col-3">
              <PlayerComputer />
            </div>
          </div>
        </div>
        <div className="footerGame">
          <img
            src="./img/bgGame.png"
            style={{ width: "100vw", height: "50vh" }}
          />
        </div>
      </div>
    );
  }
}
