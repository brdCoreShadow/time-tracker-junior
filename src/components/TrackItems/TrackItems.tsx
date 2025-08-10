import { TrackItemsProps } from "@/utils/types";
import * as SC from "./TrackItemsStyled";
import { useScreenSize } from "@/hooks/useScreenSize";

const TrackItems: React.FC<Partial<TrackItemsProps>> = ({ tracking }) => {
  const { isMobile } = useScreenSize();

  const trackItemHandler = (activity: string): string => {
    switch (activity) {
      case "Work":
        return "#FF8B64";
      case "Play":
        return "#55C2E6";
      case "Study":
        return "#FF5E7D";
      case "Exercise":
        return "#4BCF82";
      case "Social":
        return "#7335D2";
      case "Self Care":
        return "#F1C75B";
      default:
        return "gray";
    }
  };

  const handleLastPeriod = (timeframe: string): string => {
    if (timeframe === "daily") return "day";
    if (timeframe === "weekly") return "week";
    if (timeframe === "monthly") return "month";
    return "";
  };

  return (
    <>
      {tracking?.map(
        ({ id, activity, current_hours, previous_hours, timeframe }) => (
          <SC.Wrapper
            key={id}
            activity={activity}
            trackItemHandler={trackItemHandler}
          >
            <SC.TrackItemStyled>
              <SC.CurrentDataCon>
                <p>{activity}</p>
                {isMobile ? <h3>{current_hours}hrs</h3> : <p>...</p>}
              </SC.CurrentDataCon>
              <SC.PrevDataCon>
                {isMobile ? <p>...</p> : <p>{current_hours}hrs</p>}
                <h3>
                  last {handleLastPeriod(timeframe)}: {previous_hours}hrs
                </h3>
              </SC.PrevDataCon>
            </SC.TrackItemStyled>
          </SC.Wrapper>
        )
      )}
    </>
  );
};

export default TrackItems;
