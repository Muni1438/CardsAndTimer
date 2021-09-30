import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { IncreaseHeadCounter } from "../redux/Actions";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";

function Main() {
  const [Mseconds, setMseconds] = useState(0);
  const [Mminutes, setMminutes] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setMseconds((prev) => prev + 1);
    }, 1000);
  }, []);
  // Redux
  let MainState = useSelector((state) => state);
  const dispatch = useDispatch();
  //
  if (Mseconds === 60) {
    setMminutes((prev) => prev + 1);
    setMseconds(0);
  }
  return (
    <div
      style={{ height: "100vh", backgroundColor: "slategray",overflow:"auto" }}
      onClick={() => dispatch(IncreaseHeadCounter())}
    >
      <nav>
        <h2>Every Click Counts: {MainState.HeadCounter}</h2>
        <h1>
          <span>{Mminutes >= 10 ? Mminutes : "0" + Mminutes}</span>:
          <span>{Mseconds >= 10 ? Mseconds : "0" + Mseconds}</span>
        </h1>
      </nav>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "100px",
          flexWrap: "wrap",
        }}
      >
        <Card1 MainState={MainState} dispatch={dispatch} />
        <Card2 MainState={MainState} dispatch={dispatch} />
        <Card3 MainState={MainState} dispatch={dispatch} />
        <Card4 MainState={MainState} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Main;
