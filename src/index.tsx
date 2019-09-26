import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';

interface OwnProps {
  value: number,
}

type Props = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | keyof OwnProps>;

const NumberInput: React.FunctionComponent<Props> = ({...props}) => {
  return (<input type="number" {...props}/>);
};

export default NumberInput;
