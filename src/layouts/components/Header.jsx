import { Button } from '../../components/ui';
import { BiUser } from 'react-icons/bi';

function Header() {
  return (
    <div className="h-screen flex justify-center items-center" onClick={() => alert('Hello')}>
      <Button size="normal" type="default" rightIcon={<BiUser />}>
        Button Text
      </Button>
    </div>
  );
}

export default Header;
