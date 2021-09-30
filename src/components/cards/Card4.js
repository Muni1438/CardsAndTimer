import React, { useState } from "react";
import { IncreaseCard4Count } from "../../redux/Actions";
function Card4({ MainState, dispatch }) {
  const [Card4Sec, setCard4Sec] = useState(0);
  const [Card4Min, setCard4Min] = useState(0);
  const [Clock, setClock] = useState(false);
  const ClickCounter4 = () => {
    dispatch(IncreaseCard4Count());
    TimerOn();
  };
  const TimerOn = () => {
    setInterval(() => {
      setCard4Sec((prev) => prev + 1);
    }, 1000);
  };

  if (Card4Sec === 60) {
    setCard4Min((prev) => prev + 1);
    setCard4Sec(0);
  }
  return (
    <React.Fragment>
      <div
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: "whitesmoke",
          borderRadius: "10px",
          margin:"10px"
        }}
        onClick={ClickCounter4}
      >
        <h1>Card 4</h1>
        <h2> No Of Clicks: {MainState.Card4Counter}</h2>
        <h3>Timer</h3>
        <span>{Card4Min >= 10 ? Card4Min : "0" + Card4Min} </span>:
        <span> {Card4Sec >= 10 ? Card4Sec : "0" + Card4Sec}</span>
      </div>
    </React.Fragment>
  );
}

export default Card4;
