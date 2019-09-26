import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

interface OwnProps {}

type Props = OwnProps & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'>;

const NumberInput: React.FunctionComponent<Props> = ({...props}) => {
  return (<input type="number" {...props}/>);
};

export default NumberInput;
