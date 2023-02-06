import { Button } from 'components/ui';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';
import Avatar from '../Avatar';
import { ModalConfirm } from 'components/ui/Modal';
import { useState } from 'react';
import useCount from 'features/exam/hooks/useCount';
import { useSelector, useDispatch } from 'react-redux';
import { submitExam } from 'features/exam/tackleSlice';
import { isEmptyObject } from 'utils';
import useAxiosPrivate from 'hooks/useAxiosPrivate';

function HeaderTakeExam() {
  const countdown = useCount();
  const axiosPrivate = useAxiosPrivate();
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitExam = () => {
    // Call API at here
    dispatch(submitExam({ axiosPrivate, navigate }));
  };

  if (!user && isEmptyObject(user)) return null;

  return (
    <>
      <div className="h-[60px] border bg-white shadow-sd_primary px-6 flex items-center justify-end sm:justify-between sticky top-0 z-20">
        {/* Logo */}
        <Link to="/" className="hidden sm:block">
          <img src={Logo} alt="Examify Logo - Learn and Practice English" className="h-10" />
        </Link>

        <div className="flex gap-7 ">
          <div className="flex gap-4">
            <div className="border rounded-md text-h5 px-4 py-[11px] min-w-[100px] text-center">
              <span>{countdown}</span>
            </div>

            <Button onClick={modalVisible ? hideModal : showModal}>Nộp bài</Button>
          </div>

          <div data-testid="user-avatar" className="gap-4 flex">
            {user?.firstName && (
              <Avatar avt={user.avt} lastName={user.lastName} firstName={user.firstName} email={user.email} />
            )}
          </div>
        </div>
      </div>
      <ModalConfirm
        header="Xác nhận"
        message="Thời gian vẫn còn nhiều. Bạn có chắc chắn muốn nộp bài?"
        isShowing={modalVisible}
        onHide={hideModal}
        onResolve={handleSubmitExam}
        titleResolve="Nộp bài"
        titleReject="Hủy"
      />
    </>
  );
}

export default HeaderTakeExam;
