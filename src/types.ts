import {DetailedHTMLProps, InputHTMLAttributes} from "react";

type Callback = (value: number) => void;

interface OwnProps {
  value: number,
  onChange?: Callback,
}

export type Props = OwnProps & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type' | keyof OwnProps>;