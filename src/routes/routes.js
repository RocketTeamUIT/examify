import config from '../config';

// Layouts
import { AuthLayout, FocusLayout } from '../layouts';

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
  CourseText,
  CourseDetailLessonVideo,
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
  { path: config.routes.courseList, component: CourseList },
  { path: config.routes.courseDetail, component: CourseDetail },
  { path: config.routes.courseLearn, component: CourseLearn },
  { path: config.routes.courseListChapter, component: CourseListChapter },
  { path: config.routes.courseText, component: CourseText },
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
