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
  courseLearn: '/courses/:courseId/detail/list-chapter/learn', // Để tạm
  courseText: '/courses/:courseId/detail/list-chapter/text', // Để tạm
  courseVideo: '/courses/:courseId/detail/list-chapter/video', // Để tạm

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
