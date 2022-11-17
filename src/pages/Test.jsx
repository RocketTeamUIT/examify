import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Input } from '../components/ui';

const Test = () => {
  return (
    <div className="h-screen flex">
      <div className="m-auto">
        <Input rightIcon={<AiOutlineArrowDown />} width="100px" />
      </div>
    </div>
  );
};

export default Test;
