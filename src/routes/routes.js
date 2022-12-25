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
import NoRecommendLayout from '../layouts/NoRecommendLayout';
import { CourseListMe, CourseListSystem } from '../features/course/CourseList';
import User from '../features/user/User';
import { UserCourses } from '../features/user';
// Public routes
//  Default is DefaultLayout if `layout` is not given
const publicRouters = [
  { path: config.routes.home, component: Home },
  { path: config.routes.signin, component: Signin, layout: AuthLayout },
  { path: config.routes.signup, component: Signup, layout: AuthLayout },
  { path: config.routes.forgetPassword, component: ForgetPassword, layout: AuthLayout },
  { path: config.routes.changePassword, component: ChangePassword, layout: AuthLayout },
  { path: config.routes.userProfile, component: UserProfile, privateRoute: true },

  // Course
  {
    path: config.routes.courseList,
    component: CourseList,
    layout: NoRecommendLayout,
    children: [
      {
        path: '',
        component: CourseListSystem,
      },
      {
        path: 'my-courses',
        component: CourseListMe,
        privateRoute: true,
      },
    ],
  },
  { path: config.routes.courseDetail, component: CourseDetail, layout: NoRecommendLayout },
  { path: config.routes.courseListChapter, component: CourseListChapter, layout: FocusLayout, privateRoute: true },
  {
    path: config.routes.courseLesson,
    component: CourseDetailLesson,
    layout: FocusLayout,
    privateRoute: true,
  },

  // User
  {
    path: config.routes.me,
    component: User,
    layout: NoRecommendLayout,
    privateRoute: true,
    children: [
      {
        path: '',
        component: UserCourses,
      },
      {
        path: 'exams',
        component: UserCourses,
      },
    ],
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
