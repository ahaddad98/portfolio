'use client'
import { createContext } from "react";
import React, { useEffect, useState } from "react";
import Router from "next/router";

type Position = {
  x: Number;
  y: Number;
  z: Number;
};
type GameDataType = {
  ball: Position;
  player1: Position;
  player2: Position;
  speed: Number;
  score: {
    player1: Number;
    player2: Number;
  };
};
interface AppContextInterface {
  // socket: any | undefined;
  gameData: GameDataType;
  movepaddle: (left: boolean, right: boolean) => void;
  play: boolean,
  setPlay: any
}
export const AppCtx = createContext<AppContextInterface | null>(null);
let dx = 1
let dy = 1
let player1 = {
  position: { x: 0, y: -60 / 2 + 3, z: 0 },
  size: 40 / 5,
  height: 1.5,
  width: 2,
};
let player2 = {
  position: { x: 0, y: 60 / 2 - 3, z: 0 },
  size: 40 / 5,
  height: 1.5,
  width: 2,
}
let ball = {
  position: { x: 0, y: 0, z: 1 },
  args: [1, 100, 100],
};
let stage = {
  w: 40,
  h: 60,
  cLeft: {
    position: [-40 / 2, 0, 0.75],
    args: [1.5, 1.5, 61.5],
  },
  cRight: {
    position: [40 / 2, 0, 0.75],
    args: [1.5, 1.5, 61.5],
  },
  cTop: {
    position: [0, -60 / 2, 0.75],
    args: [1.5, 1.5, 40],
  },
  cBottom: {
    position: [0, 60 / 2, 0.75],
    args: [1.5, 1.5, 40],
  },
};
// const socket = io("http://localhost:3001");
export const SocketContext = ({ children }: any) => {
  const [gameData, setData] = useState<any>({
    ball: {
      x: 0,
      y: 0,
      z: 1,
    },
    player1: {
      x: 0,
      y: -60 / 2 + 3,
      z: 0,
    },
    player2: {
      x: 0,
      y: 60 / 2 - 3,
      z: 0,
    },
    score: {
      player1: 0,
      player2: 0,

    }
  });

  const movepaddle = (left: boolean, right: Boolean) => {
    if (
      gameData.player1.x +
      player1.size / 2 +
      Number(right) * 3 -
      Number(left) * 3 <
      stage.w / 2 &&
      gameData.player1.x -
      player1.size / 2 +
      Number(right) * 3 -
      Number(left) * 3 >
      -stage.w / 2
    )
      gameData.player1.x +=
        Number(right) * 3 - Number(left) * 3;
  }
  const [play, setPlay] = useState(false)
  useEffect(() => {
    console.log(play);
    if (play) {
      const interval = setInterval(() => {
        const leftCollision =
          gameData.ball.x + dx < -stage.w / 2 + stage.cLeft.args[1];
        const rightCollision =
          gameData.ball.x + dx > stage.w / 2 - stage.cRight.args[1];
        const player1Collision =
          gameData.ball.y + dy - 0.5 === gameData.player1.y &&
          gameData.ball.x + dx >= gameData.player1.x - player1.size / 2 &&
          gameData.ball.x + dx <= gameData.player1.x + player1.size / 2;
        const player2Collision = gameData.ball.y + dy - 0.5 === gameData.player2.y;
        const topCollision = gameData.ball.y + dy < -stage.h / 2;
        const bottomCollision = gameData.ball.y + dy > stage.h / 2;

        if (leftCollision || rightCollision) {
          dx *= -1;
        }

        if (player1Collision || player2Collision) {
          dy *= -1;
        }

        if (topCollision || bottomCollision) {
          if (topCollision) {
            gameData.score.player1++;
          } else {
            gameData.score.player2++;
          }
          gameData.ball = {
            x: 3,
            y: 3,
            z: 1,
          };
        }

        gameData.ball.x += 0.5 * dx;
        gameData.ball.y += 0.5 * dy;

        if (gameData.score.player1 === 5 || gameData.score.player2 === 5) {
          gameData.ball.y = 0;
          gameData.ball.x = 0;
          gameData.ball.z = 1;
          gameData.score.player1 = 0;
          gameData.score.player2 = 0;
          //  &&
          // gameData.ball.x + dx >= gameData.player1.x - player1.size / 2 &&
          // gameData.ball.x + dx <= gameData.player1.x + player1.size / 2;
          clearInterval(interval);
          setPlay(false);
        }
      }, 10);
    }
  }, [play]);

  return (
    <AppCtx.Provider
      value={{
        gameData,
        movepaddle,
        play,
        setPlay
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};
