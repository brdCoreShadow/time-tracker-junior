import { TrackItemsProps } from "@/utils/types";
import * as SC from "./TrackItemsStyled"

const TrackItems:React.FC<Partial <TrackItemsProps>> = ({tracking}) => {
    return ( 
        <>
        {tracking!.map(({id, activity, current_hours, previous_hours}) => {
            return (
                <SC.TrackItemStyled key={id}>
                    <SC.CurrentDataCon>
                        <p>{activity}</p>
                        <h3>{current_hours}hrs</h3>
                    </SC.CurrentDataCon>
                    <SC.PrevDataCon>
                        <p>...</p>
                        <h3>last week: {previous_hours}hrs</h3>
                    </SC.PrevDataCon>
                </SC.TrackItemStyled>
            )
        })}
        </>
     );
}
 
export default TrackItems;