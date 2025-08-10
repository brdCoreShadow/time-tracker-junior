import { ITimeFrame } from "@/utils/types";
import * as SC from "./TimeFrameStyled";

const TimeFrame:React.FC<Partial <ITimeFrame>> = ({timeframe, handleTimeframe, chosenTimeframe}) => {


const choseTimeframe = () => {
    handleTimeframe!(timeframe!)
}

  return (
    <li>
      <SC.TimeFrameBtn type="button" data-timeframe={timeframe} onClick={choseTimeframe} stressed={chosenTimeframe === timeframe ? "active" : ""}>
        {timeframe}
      </SC.TimeFrameBtn>
    </li>
  );
};

export default TimeFrame;
