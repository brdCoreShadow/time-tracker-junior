export interface IChild {
    children:React.ReactNode;
}

export interface ITimeFrame {
timeframe:string;
handleTimeframe:(timeframe:string)=>void;
chosenTimeframe?:string;
tracking:ITracking[] | null;
}

export interface ITimeframeStyled {
    stressed:string;
}

export interface ITracking {
    id:number;
    user_name:string;
    activity:string;
    timeframe:string;
    current_hours: string;
    previous_hours: string;
}

export interface TrackItemsProps {
  tracking?: ITracking[] | null;
}

export interface IColorsHandler {
    activity:string;
    trackItemHandler:(activity:string)=>string;
    trackIconHandler:(activity:string)=>string;
    bgImage:string;
}