import config from '../config';

// Layouts
import { AuthLayout, ExamDetailLayout, FocusLayout, NoRecommendLayout } from '../layouts';

// Page
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Test from '../pages/Test';
import ForgetPassword from '../pages/ForgetPassword';
import ChangePassword from '../pages/ChangePassword';
import TuanBigTest from '../pages/TuanBigTest';
import UserProfile from '../pages/UserProfile';

// Course
import {
  CourseList,
  CourseDetail,
  CourseLearn,
  CourseListChapter,
  CourseDetailLessonVideo,
  CourseDetailLessonText,
} from '../features/course';

// Exam
import { Exam } from '../features/exam/';
// Public routes
//  Default is DefaultLayout if `layout` is not given
const publicRouters = [
  { path: config.routes.home, component: Home },
  { path: config.routes.signin, component: Signin, layout: AuthLayout },
  { path: config.routes.signup, component: Signup, layout: AuthLayout },
  { path: config.routes.forgetPassword, component: ForgetPassword, layout: AuthLayout },
  { path: config.routes.changePassword, component: ChangePassword, layout: AuthLayout },
  { path: config.routes.userProfile, component: UserProfile },

  // Course
  { path: config.routes.courseList, component: CourseList, layout: NoRecommendLayout },
  { path: config.routes.courseDetail, component: CourseDetail, layout: NoRecommendLayout },
  { path: config.routes.courseLearn, component: CourseLearn, layout: NoRecommendLayout },
  { path: config.routes.courseListChapter, component: CourseListChapter, layout: NoRecommendLayout },
  { path: config.routes.courseText, component: CourseDetailLessonText, layout: FocusLayout },
  { path: config.routes.courseVideo, component: CourseDetailLessonVideo, layout: FocusLayout },

  // Exam
  { path: config.routes.exam, component: Exam, layout: NoRecommendLayout },
  [
    { path: config.routes.examDetail, component: Exam },
    { path: config.routes.examAnswer, component: Exam },
  ],
  { path: config.routes.examAnswerDetail, component: Exam, layout: NoRecommendLayout },
  { path: config.routes.examTake, component: Exam, layout: NoRecommendLayout },
  { path: config.routes.examHistory, component: Exam, layout: NoRecommendLayout },
  { path: config.routes.examResult, component: Exam, layout: NoRecommendLayout },

  // Test
  { path: config.routes.tuanBig, component: TuanBigTest },

  { path: 'test', component: Test },
];

// Private routes
const privateRouters = [];

export { publicRouters, privateRouters };
