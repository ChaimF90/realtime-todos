import * as React from "react";
import { InputType } from '../../Types/interfaces';

export default function Input(props: InputType) {
    return (
        <input 
        name={props.name} 
        value={props.value} 
        placeholder={props.placeholder} 
        onChange={props.onChange}
        type={props.type} />
    )
}