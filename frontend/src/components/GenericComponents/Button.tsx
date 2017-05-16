import * as React from 'react';
import { ButtonTypeProps } from '../../Types/interfaces';

export default function Button(props: ButtonTypeProps) {
    return (
        <button>{props.text}</button>
    )
}