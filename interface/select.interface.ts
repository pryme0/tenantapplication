
export interface OptionsInterface {
    name: string;
    value: string;
}

export interface ContainerInterface {
    width?: string;
}

export interface SelectInterface {
    label?: string;
    options?: OptionsInterface[] | any[];
    hidden?: boolean;
    width?: string;
    height?: string;
    marginLeft?: string;
    marginRight?: string;
    default?: string;
    name?: string;
    onChange?: (data:any)=>void;
  }
