import {
  HiOutlineClipboardDocumentList,
  HiOutlineQuestionMarkCircle,
  HiOutlineClock,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { Tag } from '../../../../components/ui';
import { formatDuration, isEmptyObject } from 'utils';

function Info() {
  const { detail } = useSelector((store) => store.exam);

  if (!detail || isEmptyObject(detail)) return null;

  return (
    <div>
      <h4 className="text-h4 font-semibold mt-8">{detail.name}</h4>
      <div className="flex flex-wrap mt-5 mb-3 gap-x-5 gap-y-2">
        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineClipboardDocumentList fontSize={18} />
            <span className="text-h6">{detail.totalPart} phần thi</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineQuestionMarkCircle fontSize={18} />
            <span className="text-h6">{detail.totalQuestion} câu hỏi</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineClock fontSize={18} />
            <span className="text-h6">{formatDuration(detail.duration, 3)} phút</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineChatBubbleLeftEllipsis fontSize={18} />
            <span className="text-h6">{detail.totalComment}</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineUsers fontSize={18} />
            <span className="text-h6">{detail.numsJoin}</span>
          </span>
        </div>
      </div>
      <p className="text-h6 text-secondary">
        Chú ý: Để được quy đổi sang scaled score (trên thang điểm 9.0 cho IELTS), vui lòng chọn chế độ làm FULL TEST.
      </p>
      <div className="flex flex-wrap gap-x-4 mt-5">
        {(detail.hashtag || []).map((hashtagItem, index) => (
          <Tag key={index} color="blue">
            {hashtagItem}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default Info;
