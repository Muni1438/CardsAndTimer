import React, { useState } from "react";
import { IncreaseCard3Count } from "../../redux/Actions";
function Card3({ MainState, dispatch }) {
  const [Card3Sec, setCard3Sec] = useState(0);
  const [Card3Min, setCard3Min] = useState(0);
  const [Clock, setClock] = useState(false);
  const ClickCounter3 = () => {
    dispatch(IncreaseCard3Count());
    TimerOn();
  };
  const TimerOn = () => {
    setInterval(() => {
      setCard3Sec((prev) => prev + 1);
    }, 1000);
  };

  if (Card3Sec === 60) {
    setCard3Min((prev) => prev + 1);
    setCard3Sec(0);
  }
  return (
    <React.Fragment>
      <div
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: "tomato",
          borderRadius: "10px",
          margin:"10px"
        }}
        onClick={ClickCounter3}
      >
        <h1>Card 3</h1>
        <h2> No Of Clicks: {MainState.Card3Counter}</h2>
        <h3>Timer</h3>
        <span>{Card3Min >= 10 ? Card3Min : "0" + Card3Min} </span>:
        <span> {Card3Sec >= 10 ? Card3Sec : "0" + Card3Sec}</span>
      </div>
    </React.Fragment>
  );
}

export default Card3;
