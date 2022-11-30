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
  courseDetail: '/courses/detail', // Để tạm
  courseListChapter: '/courses/detail/list-chapter', // Để tạm
  courseLearn: '/courses/detail/list-chapter/learn', // Để tạm
  courseText: '/courses/detail/list-chapter/text', // Để tạm
  courseVideo: '/courses/detail/list-chapter/video', // Để tạm

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
