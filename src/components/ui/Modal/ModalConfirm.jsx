import Modal from './Modal';
import { Button } from 'components/ui';

/*
  type = 'confirm' || 'notify'
*/

function ModalConfirm({
  type = 'confirm',
  header = '',
  message = 'Bạn có chắc chắn muốn thực hiện tác vụ này?',
  isShowing = false,
  onHide = () => {},
  onResolve = () => {},
  titleResolve = '',
  onReject = () => {},
  titleReject = '',
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
    <Modal header={header} isShowing={isShowing} hide={onHide} closeBtn={false}>
      <p>{message}</p>
      <div className="flex gap-4 justify-end mt-6">
        {type === 'confirm' && (
          <Button type="outline" height={36} onClick={handleReject}>
            {titleReject}
          </Button>
        )}
        <Button height={36} onClick={handleResolve}>
          {titleResolve}
        </Button>
      </div>
    </Modal>
  );
}

export default ModalConfirm;
