export interface ProgressInterface {
    active : boolean
}
export interface CounterInterface{
    active: boolean;
}

export interface ProgressListData{
    name: string;
    maxRange: Number;
    minRange: Number;
}

export interface ProgressListInterface{
data:ProgressListData[];
}