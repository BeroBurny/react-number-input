import {SeparatorType} from "../types";

const getNumberAndDecimalSeparators = (separatorType: SeparatorType = 'eu') => [
  separatorType === 'eu' ? '.' : ',',
  separatorType === 'eu' ? ',' : '.',
];

export default getNumberAndDecimalSeparators;