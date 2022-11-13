import React from 'react';
import { Button } from '../../../components/ui';
import DetailContainer from '../components/DetailContainer';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const CourseDetailLessonVideo = () => {
  return (
    <DetailContainer>
      {/* Video */}
      <div className="px-6 md:px-8 lg:px-[100px] bg-black">
        <iframe
          title="Lesson's Video"
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/wJQ9ig_d8yY"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Text */}
      <div className="px-6 md:px-8 lg:px-[100px] mt-8 pb-16">
        {/* Header */}
        <div className="md:flex items-center justify-between">
          {/* Title & time*/}
          <div className="mb-6 md:mb-0">
            <h4 className="font-semibold text-h4 text-t_dark">Lý thuyết về bất động từ</h4>
            <p className="text-light text-sm mt-2 text-t_dark">Cập nhật tháng 10 năm 2022</p>
          </div>

          {/* Note */}
          <Button type="default" unbold leftIcon={<BiMessageSquareAdd className="w-6 h-6" />}>
            Thêm ghi chú: <span className="text-primary font-semibold">00:13</span>
          </Button>
        </div>

        {/* Best wishes */}
        <div className="text-md text-t_dark mt-20">
          <p>
            Tham gia nhiều khóa học chất lượng tại{' '}
            <Link to="/" className="font-semibold text-primary underline">
              Examify
            </Link>{' '}
            để bổ sung và nâng cao kiến thức cho bản thân!
          </p>
          <p className="mt-5">
            Đội ngũ Examify luôn bên cạnh để hỗ trợ bạn, liên hệ{' '}
            <Link to="/contact" className="underline text-primary font-semibold">
              Examify contact
            </Link>{' '}
            để được hỗ trợ mọi lúc.
          </p>
        </div>
      </div>
    </DetailContainer>
  );
};

export default CourseDetailLessonVideo;
