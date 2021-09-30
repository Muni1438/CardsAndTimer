import React, { useState } from "react";
import { IncreaseCard2Count } from "../../redux/Actions";
function Card2({ MainState, dispatch }) {
  const [Card2Sec, setCard2Sec] = useState(0);
  const [Card2Min, setCard2Min] = useState(0);
  const [Clock, setClock] = useState(false);
  const ClickCounter2 = () => {
    dispatch(IncreaseCard2Count());
    TimerOn();
  };
  const TimerOn = () => {
    setInterval(() => {
      setCard2Sec((prev) => prev + 1);
    }, 1000);
  };

  if (Card2Sec === 60) {
    setCard2Min((prev) => prev + 1);
    setCard2Sec(0);
  }
  return (
    <React.Fragment>
      <div
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: "springgreen",
          borderRadius: "10px",
          margin:"10px"
        }}
        onClick={ClickCounter2}
      >
        <h1>Card 2</h1>
        <h2> No Of Clicks: {MainState.Card2Counter}</h2>
        <h3>Timer</h3>
        <span>{Card2Min >= 10 ? Card2Min : "0" + Card2Min} </span>:
        <span> {Card2Sec >= 10 ? Card2Sec : "0" + Card2Sec}</span>
      </div>
    </React.Fragment>
  );
}

export default Card2;
