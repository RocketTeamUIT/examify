import React from 'react';
import Input from './Input';

const AutoComplete = ({ value, onChange }) => {
  return <Input value={value} onChange={onChange} />;
};

export default AutoComplete;
