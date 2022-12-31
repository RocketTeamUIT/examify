import { Tip } from '../../../../components/ui';

function TipGroup() {
  return (
    <div className="mt-9">
      <div>
        <Tip>
          Tips: Trong quá trình làm bài thi, nếu có từ vựng nào chưa biết, bạn có thể bôi đen từ vựng đó và thêm nó vào
          flashcard.
        </Tip>
      </div>
      <div className="mt-4">
        <Tip>
          Tips: Hình thức luyện tập từng phần và chọn mức thời gian phù hợp sẽ giúp bạn tập trung vào giải đúng các câu
          hỏi thay vì phải chịu áp lực hoàn thành bài thi.
        </Tip>
      </div>
    </div>
  );
}

export default TipGroup;
