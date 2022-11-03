import { Tag, Input } from '../../components/ui';
import { BiUser } from 'react-icons/bi';
import { useState } from 'react';
import { useEffect } from 'react';

function Header() {
  const [temp, setTemp] = useState('abcd');

  return (
    <div className="h-screen flex justify-center items-center">
      <Input rightIcon={<BiUser />} type="text" />
    </div>
  );
}

export default Header;
