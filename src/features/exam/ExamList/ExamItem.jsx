import { Button, Tag } from '../../../components/ui';
import {
  HiOutlineClipboardDocumentList,
  HiOutlineQuestionMarkCircle,
  HiOutlineClock,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineUsers,
  HiOutlineBeaker,
  HiShieldCheck,
} from 'react-icons/hi2';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ExamItem = ({ exam }) => {
  return (
    <div className="p-5 rounded-lg border-t_light_gray_3 border ">
      {/* Top */}
      <div className="flex items-center mb-5 gap-x-3">
        {exam.isExplain && (
          <Tippy content="Đề thi này đã được đội ngũ giáo viên giải thích đầy đủ">
            <span>
              <HiShieldCheck color="#389e0d" fontSize={24} />
            </span>
          </Tippy>
        )}
        <h5 className="text-h5 font-bold">ETS 2022 - Test 1</h5>
        {exam.isTakingExam && (
          <Tippy content="Bài thi này đã từng thực hiện">
            <span>
              <HiOutlineBeaker color="#2860E1" fontSize={24} />
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

        {/* <div className="h-4 w-[0.5px] ml-3 mr-4 mb-[1px] bg-bg_black inline-block"></div> */}

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineQuestionMarkCircle fontSize={18} />
            <span className="text-h6">{exam.totalQuestion} câu hỏi</span>
          </span>
        </div>

        <div>
          <span className="flex items-center gap-x-2">
            <HiOutlineClock fontSize={18} />
            <span className="text-h6">{exam.duration} phút</span>
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

        <div className="mt-2">
          {exam.hashtags.map((hashtagItem) => (
            <div className="inline-block mr-4">
              <Tag color="blue">{hashtagItem}</Tag>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <Button height="40px" width="100%" type="outline" unbold={true}>
          Chi tiết
        </Button>
      </div>
    </div>
  );
};

export default ExamItem;
