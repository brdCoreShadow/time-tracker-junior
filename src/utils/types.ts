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