import React from 'react';


export interface ButtonInterface{
    text?: string;
    background?: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    width?: string;
    height?: string;
}