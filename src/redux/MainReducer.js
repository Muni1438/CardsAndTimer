import { Card1Timer } from "./Actions";
import {
  CARD1_TIMER,
  HEADER_TIMER,
  INCREASE_CARD1_COUNTER,
  INCREASE_CARD2_COUNTER,
  INCREASE_CARD3_COUNTER,
  INCREASE_CARD4_COUNTER,
  INCREASE_HEADCOUNTER,
  UPDATE_CARD1_TIMER,
  UPDATE_HEADER_TIMER,
} from "./ActionTypes";

const initialState = {
  HeadCounter: 0,
  Card1Counter: 0,
  Card2Counter: 0,
  Card3Counter: 0,
  Card4Counter: 0,
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_HEADCOUNTER:
      return { ...state, HeadCounter: state.HeadCounter + 1 };

    case INCREASE_CARD1_COUNTER:
      return { ...state, Card1Counter: state.Card1Counter + 1 };
    case INCREASE_CARD2_COUNTER:
      return { ...state, Card2Counter: state.Card2Counter + 1 };
    case INCREASE_CARD3_COUNTER:
      return { ...state, Card3Counter: state.Card3Counter + 1 };
    case INCREASE_CARD4_COUNTER:
      return { ...state, Card4Counter: state.Card4Counter + 1 };

    default:
      return state;
  }
};

export default MainReducer;
