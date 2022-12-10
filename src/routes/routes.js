import config from '../config';

// Layouts
import { AuthLayout, FocusLayout, NoRecommendLayout } from '../layouts';

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
import { Exam } from '../features/exam/components';
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
  { path: config.routes.exam, component: Exam },

  // Test
  { path: config.routes.tuanBig, component: TuanBigTest },

  { path: 'test', component: Test },
];

// Private routes
const privateRouters = [];

export { publicRouters, privateRouters };
