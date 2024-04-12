'use client'
import type { NextPage } from "next";
// import styles from "../../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Game from "../Components/Game";
import { AppCtx } from "../Context/SocketContext";
import { useContext, useEffect } from "react";
import { PointLightShadow } from "three";
const HomeGame: NextPage = () => {
  const context: any = useContext(AppCtx);
  return (
    <>
      {/* {
        context.play &&
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
        </div>
      } */}
      <div className='flex flex-col items-center justify-center' style={{ width: '600px', height: '600px', position: 'relative' }}>
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
          />
          {/* <axesHelper args={[200, 200, 200]} /> */}
          <ambientLight intensity={0.8} color={"white"} />
          <Game gameData={context?.gameData} movepaddle={context?.movepaddle} />
        </Canvas>
        {/* <button type="submit" className="btn btn-neutral w-full max-w-xs"></button> */}
        <div className={`absolute w-full h-full bg-red flex items-center justify-center ${context?.play ? 'backdrop-blur-0' : 'backdrop-blur-md'}`}>
          <button
            className=" btn btn-neutral w-full max-w-[150px] items-center justify-center text-center"
            style={{
              // color: "white",
              position: "absolute",
              fontWeight: "bold",
              // backgroundColor: "transparent",
              cursor: "pointer",
              zIndex: 999,
              bottom: '20px',
            }}
            onClick={() => context?.setPlay(true)}
          >
            PLAY
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeGame;
