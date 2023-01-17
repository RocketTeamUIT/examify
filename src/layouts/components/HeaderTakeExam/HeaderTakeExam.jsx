import { Button } from 'components/ui';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';
import Avatar from '../Avatar';

function HeaderTakeExam() {
  const user = {
    email: '20522122@gm.uit.edu.vn',
    firstName: 'Tuấn',
    lastName: 'Nguyễn',
    avt: 'http://res.cloudinary.com/dt68ufvrr/image/upload/v1673599864/swkvdaj6wioqvfhiqupy.jpg',
  };

  return (
    <div className="h-[60px] border bg-white shadow-sd_primary px-6 flex items-center justify-end sm:justify-between sticky top-0 z-20">
      {/* Logo */}
      <Link to="/" className="hidden sm:block">
        <img src={Logo} alt="Examify Logo - Learn and Practice English" className="h-10" />
      </Link>

      <div className="flex gap-7 ">
        <div className="flex gap-4">
          <div className="border rounded-md text-h5 px-4 py-[11px]">
            <span>67:11</span>
          </div>

          <Button>Nộp bài</Button>
        </div>

        <div data-testid="user-avatar" className="gap-4 flex">
          {user?.firstName && (
            <Avatar avt={user.avt} lastName={user.lastName} firstName={user.firstName} email={user.email} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderTakeExam;
