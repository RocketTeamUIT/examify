import { Modal, TextArea, Button } from 'components/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { reportModalScheme } from './reportModalValidation';

function ReportModal({ isShowing, hide }) {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({ resolver: yupResolver(reportModalScheme) });

  // Handle data that get from form
  const handleDataForm = async (data) => {
    const textReport = data.textReport;

    // Call API here
    console.log(textReport);

    // Close form
    setValue('textReport', '');
    hide();
  };

  const handleClear = (e) => {
    e.preventDefault();
    setValue('textReport', '');
    setError('textReport', '');
    setFocus('textReport', { shouldSelect: true });
  };

  return (
    <Modal header="Báo cáo câu hỏi" isShowing={isShowing} hide={hide} zIndex="z-50">
      <form onSubmit={handleSubmit(handleDataForm)}>
        <TextArea {...register('textReport')} label="Mô tả sai xót / góp ý" fancyOutlined />
        <p className="text-ac_red text-sm mt-1">{errors.textReport?.message}</p>
        <div className="flex gap-4 justify-end mt-6">
          <Button type="danger" onClick={handleClear} height={36}>
            Xóa
          </Button>
          <Button type="primary" height={36}>
            Gửi
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default ReportModal;
