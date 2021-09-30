import {
  INCREASE_CARD1_COUNTER,
  INCREASE_CARD2_COUNTER,
  INCREASE_CARD3_COUNTER,
  INCREASE_CARD4_COUNTER,
  INCREASE_HEADCOUNTER,
} from "./ActionTypes";

export const IncreaseHeadCounter = () => {
  return {
    type: INCREASE_HEADCOUNTER,
  };
};
export const IncreaseCard1Count = () => {
  return {
    type: INCREASE_CARD1_COUNTER,
  };
};
export const IncreaseCard2Count = () => {
  return {
    type: INCREASE_CARD2_COUNTER,
  };
};
export const IncreaseCard3Count = () => {
  return {
    type: INCREASE_CARD3_COUNTER,
  };
};
export const IncreaseCard4Count = () => {
  return {
    type: INCREASE_CARD4_COUNTER,
  };
};
