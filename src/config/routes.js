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
  courseDetail: '/courses/:courseId/detail',
  courseListChapter: '/courses/:courseId/detail/list-chapter',
  courseLesson: '/courses/:courseId/detail/list-chapter/:chapterId/lesson/:lessonId', // Để tạm

  // User
  me: '/me',

  // Exam
  examList: '/exams',
  examDetail: '/exams/:examId',
  recordDetail: '/exams/record-detail',
  examTaking: '/exams/tackle',
  answerDetail: '/exams/:answerId/answer/',

  // Flashcard
  flashcard: '/flashcards',
  // Contest
  contest: '/contest',

  //test
  tuanBig: '/tuan-big-test',
};

export default routes;
