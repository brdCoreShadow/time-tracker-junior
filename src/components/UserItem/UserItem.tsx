import { navDb } from "@/db/db";
import * as SC from "./UserItemStyled";

import avaPic from "../../assets/images/image-jeremy.png";
import TimeFrame from "../TimeFrame/TimeFrame";
import { ITimeFrame } from "@/utils/types";

const UserItem: React.FC<Partial <ITimeFrame>> = ({handleTimeframe, chosenTimeframe, tracking}) => {
  
const user_name = tracking?.[0]?.user_name ?? "Unknown";  

    return (
    <SC.UserItemStyled>
      <SC.AvaCon>
        <SC.AvaThumb>
          <img src={avaPic} alt="avatar" />
        </SC.AvaThumb>
        <SC.ContentCon>
          <p>Report for</p>
          <h3>{user_name}</h3>
        </SC.ContentCon>
      </SC.AvaCon>
      <SC.DashBoardCon>
        <SC.DashboarList>
          {navDb.map(({ id, timeframe }) => {
            return (
             <TimeFrame key={id} timeframe={timeframe} handleTimeframe={handleTimeframe || (() => {})} chosenTimeframe={chosenTimeframe}/>
            );
          })}
        </SC.DashboarList>
      </SC.DashBoardCon>
    </SC.UserItemStyled>
  );
};

export default UserItem;
