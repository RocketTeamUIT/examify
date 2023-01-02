import { Tip } from '../../../../components/ui';
import Table from './Table';

function ExamDetailAnswer() {
  return (
    <div>
      <div className="mt-8">
        <Tip color="green">
          Tips: Nếu bạn phát hiện đáp án có sai xót, hãy báo cáo với chúng tôi. Đội ngũ giáo viên sẽ phản hồi nhanh nhất
          có thể.
        </Tip>
      </div>

      <div className="mt-6">
        <h4 className="mb-5 text-h4 font-semibold">Bảng đáp án:</h4>
        <Table />
      </div>
    </div>
  );
}

export default ExamDetailAnswer;
