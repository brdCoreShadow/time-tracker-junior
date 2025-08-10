import { useState } from "react";
import * as SC from "./AppStyled";
import UserItem from "./components/UserItem/UserItem";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";

const App: React.FC = () => {
  const [chosenTimeframe, setChosenTimeframe] = useState("Daily");
  const [tracking, setTracking] = useState(null);

  const handleTimeframe = (timeframe: string) => {
    setChosenTimeframe(timeframe);
  };

  return (
    <SC.AppCon>
      <SharedLayout>
        <UserItem
          handleTimeframe={handleTimeframe}
          chosenTimeframe={chosenTimeframe}
        />
      </SharedLayout>
    </SC.AppCon>
  );
};

export default App;
