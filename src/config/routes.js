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
  exam: '/exams',
  // Flashcard
  flashcard: '/flashcards',
  // Contest
  contest: '/contest',

  //test
  tuanBig: '/tuan-big-test',
};

export default routes;
