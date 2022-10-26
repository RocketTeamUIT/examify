import { Button } from '../../components/ui';
import { BiUser } from 'react-icons/bi';

function Header() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Button size="normal" type="default" leftIcon={<BiUser />} shape="rectangle" rounded={['0', '6px', '6px', '0']}>
        Button Text
      </Button>
    </div>
  );
}

export default Header;
