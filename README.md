# React Number Input  
Best component library to provide great developer and user experience for number inputs.
  
### Still in development

![npm peer dependency version](https://img.shields.io/npm/dependency-version/@beroburny/react-number-input/peer/react)  

[![Build Status](https://travis-ci.org/BeroBurny/react-number-input.svg?branch=master)](https://travis-ci.org/BeroBurny/react-number-input) 
![npm](https://img.shields.io/npm/v/@beroburny/react-number-input) 
![npm](https://img.shields.io/npm/dm/@beroburny/react-number-input) 
[![GitHub license](https://img.shields.io/github/license/BeroBurny/react-number-input)](https://github.com/BeroBurny/react-number-input/blob/master/LICENSE.md)

# Component's

## `FormattedNumberInput` (alias `CurrencyInput`)  
Provide formatted values to provide better visual representation of imputed number.  
(format number 10000000.3 to be like 10,000,000.30)
#### Props
Props | Required | Type
----- |:--------:|------
value | ✓ | number
separatorType | | 'eu' or 'us'
digits | | number
onChange | | (value: number) => void
onBlur | | (value: number) => void

**and standard props from input field**

#### Basic usage
```JSX
import React from 'react';
import ReactDOM from 'react-dom';
import {CurrencyInput} from '@beroburny/react-number-input';

const App = () => {
  const [value, setValue] = React.useState(0);

  return (<CurrencyInput value={value} onChange={setValue} />);
};

ReactDOM.render(<App />, document.getElementById('root'));
```

# Changelog (latest)
* Refactor code
  * now `NumberInput` need to be imported as named import `FormattedNumberInput`
  * add alias for `FormattedNumberInput`  to be `CurrencyInput`
* added unit test's
* fix bug with changed value
####[entire changelog](CHANGELOG.md)
