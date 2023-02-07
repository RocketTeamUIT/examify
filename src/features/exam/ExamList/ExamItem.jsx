import { Button, Tag } from '../../../components/ui';
import {
  HiOutlineClipboardDocumentList,
  HiOutlineQuestionMarkCircle,
  HiOutlineClock,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineUsers,
  HiOutlineBeaker,
  HiOutlineShieldCheck,
} from 'react-icons/hi2';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { formatDuration } from 'utils';

const ExamItem = ({ exam, list }) => {
  return (
    <div className="p-5 rounded-lg border-t_light_gray_3 border ">
      {/* Top */}
      <div className="flex flex-wrap items-center mb-5 gap-x-3">
        <h5 className="text-h5 font-bold">{exam.name}</h5>
        {exam.isFullExplanation && (
          <Tippy content="Đề thi này đã được đội ngũ giáo viên giải thích đầy đủ">
            <span>
              <HiOutlineShieldCheck color="#0E46C7" fontSize={24} />
            </span>
          </Tippy>
        )}
        {exam.isJoin && (
          <Tippy content="Bài thi này đã từng thực hiện">
            <span>
              <HiOutlineBeaker color="#0E46C7" fontSize={24} />
            </span>
          </Tippy>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineClipboardDocumentList fontSize={18} />
            <span className="text-h6">{exam.totalPart} phần thi</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineQuestionMarkCircle fontSize={18} />
            <span className="text-h6">{exam.totalQuestion} câu hỏi</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineClock fontSize={18} />
            <span className="text-h6">{formatDuration(exam.duration, 3)} phút</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineChatBubbleLeftEllipsis fontSize={18} />
            <span className="text-h6">{exam.totalComment}</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineUsers fontSize={18} />
            <span className="text-h6">{exam.numsJoin}</span>
          </span>
        </div>

        <div className={classNames(list && 'flex w-full')}>
          <div className="mt-2">
            {exam.hashtag.map((hashtagItem, index) => (
              <div key={index} className="inline-block mr-4">
                <Tag color="blue">{hashtagItem}</Tag>
              </div>
            ))}
          </div>

          {list && (
            <Link to={`${exam.id}`} className="ml-auto">
              <Button height="40px" width="100%" type="outline" unbold={true}>
                Chi tiết
              </Button>
            </Link>
          )}
        </div>
      </div>

      {!list && (
        <Link to={`${exam.id}`} className="mt-5 block">
          <Button height="40px" width="100%" type="outline" unbold={true}>
            Chi tiết
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ExamItem;
