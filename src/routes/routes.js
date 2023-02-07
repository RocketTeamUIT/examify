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
import { ExamList } from '../features/exam';
import CourseDetailLesson from '../features/course/CourseDetailLesson';
import NoRecommendLayout from '../layouts/NoRecommendLayout';
import { CourseListMe, CourseListSystem } from '../features/course/CourseList';
import User from '../features/user/User';
import { UserCourses, UserExams, UserFlashcards, UserContests } from '../features/user';
import ExamDetail from '../features/exam/ExamDetail/ExamDetailIndex';
import ExamDetailBase from '../features/exam/ExamDetail/ExamDetailBase';
import ExamDetailAnswer from '../features/exam/ExamDetail/ExamDetailAnswer/ExamDetailAnswer';
import { RecordDetailBase, RecordDetailIndex, RecordDetailFullmode } from '../features/exam/RecordDetail';
import Flashcard, { ExploreFlashcard, FlashcardPractice, FlashcardSetDetail, MyFlashcard } from '../features/flashcard';
import ExamTaking from 'features/exam/ExamTaking';
import ExamTakingLayout from 'layouts/ExamTakingLayout';
import AnswerDetail from 'features/exam/AnswerDetail';

//Contest
import { ContestHome, ContestMain } from '../features/contest';

// Public routes
//  Default is DefaultLayout if `layout` is not given
const publicRouters = [
  // Auth
  { path: config.routes.home, component: Home },
  { path: config.routes.signin, component: Signin, layout: AuthLayout },
  { path: config.routes.signup, component: Signup, layout: AuthLayout },
  { path: config.routes.forgetPassword, component: ForgetPassword, layout: AuthLayout },
  { path: config.routes.changePassword, component: ChangePassword, layout: AuthLayout },
  { path: config.routes.userProfile, component: UserProfile, privateRoute: true },
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
        component: UserExams,
      },
      {
        path: 'flashcards',
        component: MyFlashcard,
      },
      {
        path: 'contests',
        component: UserContests,
      },
    ],
  },

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

  // Exam
  {
    path: config.routes.examList,
    component: ExamList,
    layout: NoRecommendLayout,
  },
  {
    path: config.routes.examDetail,
    component: ExamDetailBase,
    layout: NoRecommendLayout,
    children: [
      {
        path: '',
        component: ExamDetail,
      },
      {
        path: 'answer',
        component: ExamDetailAnswer,
      },
    ],
  },
  {
    path: config.routes.recordDetail,
    component: RecordDetailBase,
    layout: NoRecommendLayout,
    children: [
      {
        path: '',
        component: RecordDetailIndex,
      },
      {
        path: 'fullmode',
        component: RecordDetailFullmode,
      },
    ],
  },
  {
    path: config.routes.examTaking,
    component: ExamTaking,
    layout: ExamTakingLayout,
  },
  // {
  //   path: config.routes.answerDetail,
  //   component: AnswerDetail,
  //   layout: ExamTakingLayout,
  // },

  // Flashcard
  {
    path: '/flashcards',
    component: Flashcard,
    children: [
      {
        path: '',
        component: MyFlashcard,
      },
      {
        path: 'explore',
        component: ExploreFlashcard,
      },
    ],
  },
  { path: '/flashcards/:flashcardSetId', component: FlashcardSetDetail, layout: NoRecommendLayout },
  { path: '/flashcards/:flashcardSetId/practice', component: FlashcardPractice, layout: NoRecommendLayout },

  // Test
  { path: config.routes.tuanBig, component: TuanBigTest },

  { path: 'test', component: Test },
];

// Private routes
const privateRouters = [];

export { publicRouters, privateRouters };
