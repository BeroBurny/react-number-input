import {DetailedHTMLProps, InputHTMLAttributes} from 'react';

type Callback = (value: number) => void;

export type SeparatorType = 'eu' | 'us';

interface OwnProps {
  value: number,
  onChange?: Callback,
  separatorType?: SeparatorType,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number,
}

export type Props = OwnProps & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | keyof OwnProps>;
