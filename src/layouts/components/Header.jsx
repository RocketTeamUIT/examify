import { Tag } from '../../components/ui';
import { BiUser } from 'react-icons/bi';

function Header() {
  return (
    <div className="h-screen flex justify-center items-center">
      <p className="font-bold">Hoàng Đình Anh Tuấn</p>
      <Tag color="gold">Admin</Tag>
    </div>
  );
}

export default Header;
