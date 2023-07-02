'use client'
import type { NextPage } from "next";
// import styles from "../../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Game from "../Components/Game";
import { AppCtx } from "../Context/SocketContext";
import { useContext } from "react";
import { PointLightShadow } from "three";
const HomeGame: NextPage = () => {
  const context: any = useContext(AppCtx);
  return (
    <>
      {/* <div
        style={{
          color: "white",
          position: "absolute",
          fontWeight: "bold",
          backgroundColor: "transparent",
          cursor: "pointer",
          zIndex: 999,
        }}
        // onClick={() => socket.emit("startGame")}
      >
        PLAY
      </div>
      <div
        style={{
          color: "white",
          position: "absolute",
          fontWeight: "bolder",
          backgroundColor: "transparent",
          cursor: "pointer",
          left: "50%",
          zIndex: 999,
        }}
      >
        {context.gameData.score.player1} - {context.gameData.score.player2}
      </div> */}
      <div className='' style={{width: '600px', height: '600px'}}>
        <Canvas
          shadows={true}
          camera={{
            fov: 10,
            position: [-0.018223506966510716, -54, 20],
            near: 0.1,
            far: 1000,
          }}
          className={'w-full h-full'}
        >
          <pointLight
            position={[0, 0, 20]}
            color={"white"}
            intensity={1}
            // angle={20}
            // distance={100}
          />
          {/* <axesHelper args={[200, 200, 200]} /> */}
          <ambientLight intensity={0.8} color={"white"} />
          <Game  gameData={context.gameData} />
        </Canvas>
      </div>
    </>
  );
};

export default HomeGame;
