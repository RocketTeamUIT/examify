import Modal from './Modal';
import { Button } from 'components/ui';

function ModalConfirm({
  message = 'Bạn có chắc chắn muốn thực hiện tác vụ này?',
  isShowing = false,
  onHide = () => {},
  onResolve = () => {},
  onReject = () => {},
}) {
  const handleResolve = () => {
    onResolve();
    onHide();
  };
  const handleReject = () => {
    onReject();
    onHide();
  };

  return (
    <Modal header="Xác nhận" isShowing={isShowing} hide={onHide} closeBtn={false}>
      <p>{message}</p>
      <div className="flex gap-4 justify-end mt-6">
        <Button type="outline" height={36} onClick={handleReject}>
          Hủy
        </Button>
        <Button height={36} onClick={handleResolve}>
          Xác nhận
        </Button>
      </div>
    </Modal>
  );
}

export default ModalConfirm;
