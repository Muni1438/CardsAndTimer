import React, { useState } from "react";
import { IncreaseCard1Count } from "../../redux/Actions";
function Card1({ MainState, dispatch }) {
  const [Card1Sec, setCard1Sec] = useState(0);
  const [Card1Min, setCard1Min] = useState(0);
  const [Clock, setClock] = useState(false);
  const ClickCounter1 = () => {
    dispatch(IncreaseCard1Count());
    TimerOn();
  };
  const TimerOn = () => {
    setInterval(() => {
      setCard1Sec((prev) => prev + 1);
    }, 1000);
  };

  if (Card1Sec === 60) {
    setCard1Min((prev) => prev + 1);
    setCard1Sec(0);
  }
  return (
    <React.Fragment>
      <div
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: "orchid",
          borderRadius: "10px",
          margin:"10px"
        }}
        onClick={ClickCounter1}
      >
        <h1>Card 1</h1>
        <h2> No Of Clicks: {MainState.Card1Counter}</h2>
        <h3>Timer</h3>
        <span>{Card1Min >= 10 ? Card1Min : "0" + Card1Min} </span>:
        <span> {Card1Sec >= 10 ? Card1Sec : "0" + Card1Sec}</span>
      </div>
    </React.Fragment>
  );
}

export default Card1;
