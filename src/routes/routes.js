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
import { CourseList, CourseDetail, CourseListChapter } from '../features/course';

// Exam
import { Exam } from '../features/exam/components';
import CourseDetailLesson from '../features/course/CourseDetailLesson';
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
  { path: config.routes.courseList, component: CourseList, layout: FocusLayout },
  { path: config.routes.courseDetail, component: CourseDetail, layout: FocusLayout },
  { path: config.routes.courseListChapter, component: CourseListChapter, layout: FocusLayout, requireLogin: true },
  {
    path: config.routes.courseLesson,
    component: CourseDetailLesson,
    layout: FocusLayout,
    excludeFooter: true,
    requireLogin: true,
  },

  // Exam
  { path: config.routes.exam, component: Exam },

  // Test
  { path: config.routes.tuanBig, component: TuanBigTest },

  { path: 'test', component: Test },
];

// Private routes
const privateRouters = [];

export { publicRouters, privateRouters };
