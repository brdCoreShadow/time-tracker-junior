import { useEffect, useState } from "react";
import * as SC from "./AppStyled";
import UserItem from "./components/UserItem/UserItem";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { AxiosResponse } from "axios";
import { getAll } from "./utils/services";
import { ITracking } from "./utils/types";
import Loading from "./components/Loading/Loading";
import TrackItems from "./components/TrackItems/TrackItems";

const App: React.FC = () => {
  const [chosenTimeframe, setChosenTimeframe] = useState<string>("Daily");
  const [tracking, setTracking] = useState<ITracking[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chosenTrack, setChosenTrack] = useState<ITracking[] | null>(null);

  const handleTimeframe = (timeframe: string) => {
    setChosenTimeframe(timeframe);
  };

  useEffect(() => {
    const fetchTracking = async () => {
      setIsLoading(true);
      const response: AxiosResponse | undefined = await getAll({
        timeframe: chosenTimeframe,
      });

      if (response?.data) {
        setTracking(response.data.data);
      }
      setIsLoading(false);
    };

    fetchTracking();
  }, [chosenTimeframe]); 

  useEffect(() => {
    const fetchChosenTrack = () => {
      const result = tracking?.filter(
        ({ timeframe }) => {return timeframe.toUpperCase() === chosenTimeframe.toUpperCase()
        }
      );

      setChosenTrack(result ?? null);
    };

    fetchChosenTrack();
  }, [tracking, chosenTimeframe]);

  
  return (
    <SC.AppCon>
      <SharedLayout>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {" "}
            <UserItem
              handleTimeframe={handleTimeframe}
              chosenTimeframe={chosenTimeframe}
            />
            {chosenTrack && <TrackItems tracking={chosenTrack} />}
          </>
        )}
      </SharedLayout>
    </SC.AppCon>
  );
};

export default App;
