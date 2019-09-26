import React from 'react';
import {Props} from "./types";

const NumberInput: React.FunctionComponent<Props> = ({...props}) => {
  return (<input type="number" {...props}/>);
};

export default NumberInput;
