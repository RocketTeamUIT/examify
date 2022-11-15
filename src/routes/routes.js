import config from '../config';

// Layouts
import { AuthLayout } from '../layouts';

// Page
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import ForgetPassword from '../pages/ForgetPassword';
import ChangePassword from '../pages/ChangePassword';
import TuanBigTest from '../pages/TuanBigTest';

// Course
import { Course, CourseDetail, CourseLearn, CourseListChapter, CourseText } from '../features/course/components';

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

  // Course
  { path: config.routes.course, component: Course },
  { path: config.routes.courseDetail, component: CourseDetail },
  { path: config.routes.courseListChapter, component: CourseLearn },
  { path: config.routes.courseLearn, component: CourseListChapter },
  { path: config.routes.courseText, component: CourseText },

  // Exam
  { path: config.routes.exam, component: Exam },

  // Test
  { path: config.routes.tuanBig, component: TuanBigTest },
];

// Private routes
const privateRouters = [];

export { publicRouters, privateRouters };
