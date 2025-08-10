export interface IChild {
    children:React.ReactNode;
}

export interface ITimeFrame {
timeframe:string;
handleTimeframe:(timeframe:string)=>void;
chosenTimeframe?:string;
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