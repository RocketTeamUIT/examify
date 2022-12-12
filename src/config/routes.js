const routes = {
  // General
  home: '/',
  signin: '/signin',
  signup: '/signup',
  forgetPassword: '/forget-password',
  changePassword: '/change-password',
  userProfile: '/user-profile',

  // Course
  courseList: '/courses',
  courseDetail: '/courses/:courseId',
  courseListChapter: '/courses/:courseId/list-chapter',
  courseLearn: '/courses/:courseId/list-chapter/learn', // Để tạm
  courseText: '/courses/:courseId/list-chapter/text', // Để tạm
  courseVideo: '/courses/:courseId/list-chapter/video', // Để tạm

  // Exam
  exam: '/exams',
  examDetail: '/exams/:examId',
  examAnswer: '/exams/:examId/answer',
  examAnswerDetail: '/exams/:examId/detail',
  examTake: '/exams/:examId/take',
  examHistory: '/exams/history',
  examResult: '/exams/:examId/result',

  // Flashcard
  flashcard: '/flashcards',
  // Contest
  contest: '/contest',

  //test
  tuanBig: '/tuan-big-test',
};

export default routes;
