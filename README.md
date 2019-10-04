# React Number Imput  
### Still in development use at own risk!

Basic idea is to create generic input component to suppot formated number while typing with great UX.  
(to feel like classic input but have format eg 10000000.3 to be 10,000,000.30)

#### Basic usage
```JSX
import React from 'react';
import ReactDOM from 'react-dom';
import NumberInput from '@beroburny/react-number-input';

const App = () => {
  const [value, setValue] = React.useState(0);

  return (<NumberInput value={value} onChange={setValue} />);
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Props

Props | Required | Type
----- |:--------:|------
value | X | number
separatorType | | 'eu' or 'us'
digits | | number
onChange | | (value: number) => void
onBlur | | (value: number) => void

**and standard props from input field**
