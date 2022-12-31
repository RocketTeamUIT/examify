import { Tip } from '../../../../components/ui';

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
        <h4 className="text-h4 font-semibold">Bảng đáp án:</h4>
      </div>
    </div>
  );
}

export default ExamDetailAnswer;
