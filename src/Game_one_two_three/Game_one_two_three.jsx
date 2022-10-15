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
          <h1 style={{ color: "yellow", letterSpacing: 4 }}>
            I'm Iron man.
            <br /> I'll kick your ass !!
          </h1>
          <div className="d-flex justify-content-around my-2">
            <Player />

            <Result />

            <PlayerComputer />
          </div>
        </div>
        <div className="footerGame">
          <img
            src="./img/bgGame.png"
            style={{ width: "100vw", height: "40vh" }}
          />
        </div>
      </div>
    );
  }
}
