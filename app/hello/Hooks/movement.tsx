import { useEffect, useState } from "react";

export const usePersonControls = () => {
  const keys: { [key: string]: string } = {
    ArrowRight: "right",
    ArrowLeft: "left",
  };
  
  const moveFieldByKey = (key: string) => keys[key];
  // const keys = {
  //   ArrowRight: "right",
  //   ArrowLeft: "left",
  // };

  // const moveFieldByKey = (key) => keys[key];

  const [movement, setMovement] = useState({
    left: false,
    right: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
    };
    const handleKeyUp = (e: any) => {
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return movement;
};

export const resize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
};
