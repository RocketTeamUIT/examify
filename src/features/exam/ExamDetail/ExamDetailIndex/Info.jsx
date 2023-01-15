import {
  HiOutlineClipboardDocumentList,
  HiOutlineQuestionMarkCircle,
  HiOutlineClock,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { Tag } from '../../../../components/ui';

const hashtags = ['Toeic', 'Reading', 'Listening'];

function Info({ exam }) {
  return (
    <div>
      <h4 className="text-h4 font-semibold mt-8">Bộ đề thi: ETS 2022</h4>
      <div className="flex flex-wrap mt-5 mb-3 gap-x-5 gap-y-2">
        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineClipboardDocumentList fontSize={18} />
            <span className="text-h6">7 phần thi</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineQuestionMarkCircle fontSize={18} />
            <span className="text-h6">200 câu hỏi</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineClock fontSize={18} />
            <span className="text-h6">120 phút</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineChatBubbleLeftEllipsis fontSize={18} />
            <span className="text-h6">3499</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineUsers fontSize={18} />
            <span className="text-h6">15999</span>
          </span>
        </div>
      </div>
      <p className="text-h6 text-secondary">
        Chú ý: Để được quy đổi sang scaled score (trên thang điểm 9.0 cho IELTS), vui lòng chọn chế độ làm FULL TEST.
      </p>
      <div className="flex flex-wrap gap-x-4 mt-5">
        {hashtags.map((hashtagItem, index) => (
          <Tag key={index} color="blue">
            {hashtagItem}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default Info;
