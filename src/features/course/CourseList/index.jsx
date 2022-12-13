import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Tip } from '../../../components/ui';
import SubNav from '../../../components/ui/SubNav';
import CourseListItem from './CourseListItem';
import Container from '../../../layouts/components/Container';
import { Filter } from '../../../components/ui';
import bannerImg from '../../../assets/images/courseBanner.png';
import { getAllCourses } from '../courseSlice';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { getAllCoursesService } from '../services/course';

const NAV_LIST = [
  {
    name: 'Khám phá',
    path: '/courses',
  },
  {
    name: 'Khoá học của tôi',
    path: '/my-courses',
  },
];

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [grid, setGrid] = useState(false);
  const [chargeCourse, setChargeCourse] = useState([]);
  const [basicCourse, setBasicCourse] = useState([]);
  const [generalCourse, setGeneralCourse] = useState([]);
  const [advanceCourse, setAdvanceCourse] = useState([]);
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const currentUser = useSelector((store) => store.auth.user);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getAllCoursesService(axiosPrivate);
        setCourses(response.data.data);
      } catch (error) {
        console.log('🚀 ~ file: index.jsx:27 ~ fetchCourses ~ error', error);
      }
    };
    fetchCourses();

    setGrid(localStorage.getItem('course-grid') === 'true' || false);
  }, [axiosPrivate]);

  useEffect(() => {
    async function fetchData() {
      let courseList;
      if (
        // Check user login
        currentUser &&
        Object.keys(currentUser).length === 0 &&
        Object.getPrototypeOf(currentUser) === Object.prototype
      ) {
        courseList = (await dispatch(getAllCourses())).payload.data;
      } else {
        courseList = (await dispatch(getAllCourses(axiosPrivate))).payload.data;
      }

      const chargeCourseList = [];
      const basicCourseList = [];
      const generalCourseList = [];
      const advanceCourseList = [];

      courseList.forEach((item) => {
        if (item.charges === true) {
          chargeCourseList.push(item);
        }
        if (item.level === 'basic') {
          basicCourseList.push(item);
        }
        if (item.level === 'general') {
          generalCourseList.push(item);
        }
        if (item.level === 'advance') {
          advanceCourseList.push(item);
        }
      });

      setChargeCourse(chargeCourseList);
      setBasicCourse(basicCourseList);
      setGeneralCourse(generalCourseList);
      setAdvanceCourse(advanceCourseList);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleGrid = () => {
    console.log(grid);
    localStorage.setItem('course-grid', !grid);
    setGrid((grid) => !grid);
  };

  return (
    <div className="mb-10">
      {/* Banner */}
      <Container className="py-5">
        <img className="w-full object-cover" src={bannerImg} alt="examify" />
      </Container>

      {/* Sub Navigation component*/}
      <SubNav navList={NAV_LIST} />

      <Container className="mt-4">
        <Filter grid={grid} toggleGrid={toggleGrid} />
      </Container>

      {/* Main content CourseList Page */}
      <Container>
        {/* Course Description */}
        <h3 className="text-body-lg font-semibold mt-10">Tham gia Khóa học tại Examify</h3>
        <p className="mt-4 text-body-md text-t_dark">
          Những khoá học tiếng Anh online chất lượng cao của Examify được thiết kế theo chương trình tiếng Anh chuẩn
          CEFR (A1-C2) của đại học Cambridge và Oxford (Anh) với hệ thống bài giảng, bài tập phong phú đa dạng. Bạn có
          thể học tham khảo trước khi đăng ký.
        </p>
        <div className="hidden my-8 lg:block">
          <Tip color="green">Chú ý: Tích lũy cho mình thật nhiều điểm số để mở khóa các khóa học .</Tip>
        </div>

        {/* List Pro Course */}
        {chargeCourse?.length > 0 && (
          <CourseListItem grid={grid} listName="Khóa học Pro:" listCourse={chargeCourse} isNew={true} />
        )}

        {/* List Basic Course */}
        {basicCourse?.length > 0 && <CourseListItem grid={grid} listName="Khóa học cơ bản:" listCourse={basicCourse} />}

        {/* List General Course */}
        {generalCourse?.length > 0 && (
          <CourseListItem grid={grid} listName="Khóa học phổ thông:" listCourse={generalCourse} />
        )}

        {/* List Advance Course */}
        {advanceCourse?.length > 0 && (
          <CourseListItem grid={grid} listName="Khóa học nâng cao:" listCourse={advanceCourse} />
        )}
      </Container>
    </div>
  );
}

export default CourseList;
