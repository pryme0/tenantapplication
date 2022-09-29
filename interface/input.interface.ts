
export interface ErrorInterface{
    field:string;
    value: string;
}

export interface FormInputInterface{
    placeholder?: string;
    background?: string;
    label?: string;
    required?: boolean;
    margin?: string;
    width?: string;
    height?: string;
    bordered?: boolean;
    marginLeft?: string;
    marginRight?: string;
    type?: string;
    showDate?: boolean;
    name?: string;
    value?: string;
    error?:ErrorInterface;
    handleChange?: (event:any)=>void;
}