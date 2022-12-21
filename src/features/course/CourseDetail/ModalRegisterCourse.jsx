import { useState } from 'react';
import { memo } from 'react';
import { AiOutlineTeam, AiOutlineLaptop } from 'react-icons/ai';
import { BiBookOpen } from 'react-icons/bi';
import { MdSlowMotionVideo } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../../components/ui/Button';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { printPrice, convertTimeHours, convertTimeMinutes } from '../../../utils/formatCurrency';
import Rating, { RatingModal } from '../../rating';
import { getCourseDetail } from '../courseSlice';
import { enrollCourseService } from '../services/course';
import { NOT_ENOUGH_POINTS } from '../services/messages';

function ModalRegisterCourse({ course }) {
  const [loading, setLoading] = useState(false);
  const [hover, setHover] = useState(false);
  const { courseId } = useParams();
  const { initialRating, isEdit } = useSelector((store) => store.rating);
  const [showingRating, setShowingRating] = useState(false);
  const axiosPrivate = useAxiosPrivate(true);
  const { accessToken } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  const showRating = () => {
    setShowingRating((prev) => true);
  };

  const hideRating = () => {
    setShowingRating((prev) => false);
  };

  if (!course) return null;

  const handleEnrollCourse = async () => {
    if (accessToken) {
      console.log('🚀 ~ file: ModalRegisterCourse.jsx:25 ~ handleEnrollCourse ~ accessToken', accessToken);
      try {
        setLoading(true);
        const response = await enrollCourseService(axiosPrivate, course.id);
        if (response.data.data?.enroll === false) {
          let toastMessage = '';
          if (response.data.message === NOT_ENOUGH_POINTS) toastMessage = 'Bạn không đủ điểm';
          else toastMessage = 'Đăng ký khoá học thất bại';
          toast.error(toastMessage);
        } else {
          toast.success('Đăng ký thành công');
          dispatch(getCourseDetail({ accessToken, courseId }));
        }
      } catch (error) {
        toast.error('Lỗi gì đó đã xảy ra');
        console.log('🚀 ~ file: ModalRegisterCourse.jsx:22 ~ handleEnrollCourse ~ error', error);
      } finally {
        setLoading(false);
      }
    } else {
      navigate('/signin', {
        state: {
          from: location,
        },
      });
    }
  };

  const RatingButton = () => {
    if (isEdit && !hover) return <Rating rating={initialRating} width="w-6" height="h-6" />;
    return !isEdit ? 'Đánh giá khoá học' : 'Chỉnh sửa đánh giá';
  };

  return (
    <div className="bg-white border-br_gray border-2 rounded-md lg:border-none lg:shadow-xl overflow-hidden">
      {/* Course image */}
      <img className="w-full object-cover aspect-[3/2]" src={course.image} alt={course.name} />
      <div className="px-5 py-4">
        {/* course price */}
        <div className="flex justify-between items-center mt-3">
          {course.charges ? (
            <>
              <p className="font-semibold text-lg xl:text-body-lg text-ac_red">{printPrice(course.price)}đ</p>
              <p className="text-body-sm text-ac_green font-medium">giảm 73%</p>
              <p className="text-body-sm line-through text-t_gray">660.000đ</p>
            </>
          ) : (
            <p className="font-semibold text-body-lg text-ac_blue">{course.pointToUnlock} điểm</p>
          )}
        </div>

        {/* Button Register*/}
        <div className="mt-4">
          {course.isJoin ? (
            <Link to="list-chapter">
              <Button width="100%">Tiếp tục học</Button>
            </Link>
          ) : (
            <Button disabled={loading} width="100%" onClick={handleEnrollCourse}>
              Đăng ký ngay
            </Button>
          )}
        </div>

        {/* Button Contact*/}
        <div className="mb-4 mt-2">
          {course.isJoin ? (
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Button type="default" width="100%" onClick={showRating}>
                <RatingButton />
              </Button>
            </div>
          ) : (
            <a target="_blank" rel="noreferrer" href="https://facebook.com/hdatdragon2849">
              <Button type="default" width="100%">
                Nhận tư vấn miễn phí
              </Button>
            </a>
          )}
        </div>

        {/* Divider */}
        <div className="border-t-2 border-solid border-br_light_gray"></div>

        {/* Other info of course */}
        <div className="flex flex-col gap-2 my-3">
          <div className="flex items-center gap-2">
            <BiBookOpen className="text-[20px] text-primary" />
            <p className="text-body-sm">
              <b>{course.totalChapter}</b> chương, <b>{course.totalLesson}</b> bài học
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

      <RatingModal isShowing={showingRating} hide={hideRating} />
    </div>
  );
}

export default memo(ModalRegisterCourse);
