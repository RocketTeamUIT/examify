import { memo } from 'react';
import { AiOutlineTeam, AiOutlineLaptop } from 'react-icons/ai';
import { BiBookOpen } from 'react-icons/bi';
import { MdSlowMotionVideo } from 'react-icons/md';

import Button from '../../../components/ui/Button';
import { printPrice, convertTimeHours, convertTimeMinutes } from '../../../utils/formatCurrency';

function ModalRegisterCourse({ course }) {
  return (
    <div className="bg-white border-br_gray border-2 rounded-md lg:border-none lg:shadow-xl overflow-hidden">
      {/* Course image */}
      <img className="w-full object-cover" src={course.image} alt={course.name} />
      <div className="px-5 py-4">
        {/* course voucher */}
        <h3 className="font-medium text-body-sm pt-4 md:text-body-md xl:text-body-lg">
          Ưu đãi cho bạn trong tháng 10/2022
        </h3>

        {/* course price */}
        <div className="flex justify-between items-center mt-3">
          {course.charges ? (
            <p className="font-semibold text-lg xl:text-body-lg text-ac_red">{printPrice(course.price)}đ</p>
          ) : (
            <p className="font-semibold text-body-lg text-ac_blue">{course.pointToUnlock} điểm</p>
          )}

          <p className="text-body-sm text-ac_green font-medium">giảm 73%</p>
          <p className="text-body-sm line-through text-t_gray">660.000đ</p>
        </div>

        {/* Button Register*/}
        <div className="mt-4">
          {course.isJoin ? <Button width="100%">Tiếp tục học</Button> : <Button width="100%">Đăng ký ngay</Button>}
        </div>

        {/* Button Contact*/}
        <div className="mb-4 mt-2">
          <Button type="default" width="100%">
            Nhận tư vấn miễn phí
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-solid border-br_light_gray"></div>

        {/* Other info of course */}
        <div className="flex flex-col gap-2 my-3">
          <div className="flex items-center gap-2">
            <BiBookOpen className="text-[20px] text-primary" />
            <p className="text-body-sm">
              <b>{course.totalChapter}</b> chủ đề, <b>{course.totalLesson}</b> bài học
            </p>
          </div>

          <div className="flex items-center gap-2">
            <AiOutlineTeam className="text-[20px] text-primary" />
            <p className="text-body-sm">
              <b>{course.participants}</b> người tham gia
            </p>
          </div>

          <div className="flex items-center gap-2">
            <MdSlowMotionVideo className="text-[20px] text-primary" />
            <p className="text-body-sm">
              Tổng thời lượng <b>{convertTimeHours(course.totalVideoTime)}</b> giờ{' '}
              <b>{convertTimeMinutes(course.totalVideoTime)}</b> phút
            </p>
          </div>

          <div className="flex items-center gap-2">
            <AiOutlineLaptop className="text-[20px] text-primary" />
            <p className="text-body-sm">Tùy chọn học trên điện thoại và máy tính</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ModalRegisterCourse);
