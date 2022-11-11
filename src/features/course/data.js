import courseProImg from '../../assets/images/coursePro.png';
import courseBasicImg from '../../assets/images/courseBasic.png';

// Current user
export const currentUser = {
  id: '1',
  name: 'Phuc',
  email: 'abc@gmail.com',
};

// Course charges == "true"
export const coursesPro = [
  {
    id: 1,
    name: 'Combo khoá học IELTS Intensive [Tặng khoá TED Talks]',
    img: courseProImg,
    level: 'basic',
    charges: true,
    price: '1.340.000',
    pointUnlock: '',
    pointComplete: '1.534',
    qntRating: '895',
    avgRating: 4,
    participants: '1094',
  },
  {
    id: 2,
    name: 'Combo khoá học IELTS Intensive [Tặng khoá TED Talks]',
    img: courseProImg,
    level: 'advance',
    charges: true,
    price: '1.340.000',
    pointUnlock: '',
    pointComplete: '1.534',
    qntRating: '895',
    avgRating: 2,
    participants: '1094',
  },
  {
    id: 3,
    name: 'Combo khoá học IELTS Intensive [Tặng khoá TED Talks]',
    img: courseProImg,
    level: 'advance',
    charges: true,
    price: '1.340.000',
    pointUnlock: '',
    pointComplete: '1.534',
    qntRating: '895',
    avgRating: 3,
    participants: '1094',
  },
  {
    id: 4,
    name: 'Combo khoá học IELTS Intensive [Tặng khoá TED Talks]',
    img: courseProImg,
    level: 'basic',
    charges: true,
    price: '1.340.000',
    pointUnlock: '',
    pointComplete: '1.534',
    qntRating: '895',
    avgRating: 1,
    participants: '1094',
  },
];

// Course charges == "false" && level == "basic"
export const coursesBasic = [
  {
    id: 5,
    name: 'Combo khoá học IELTS Intensive [Tặng khoá TED Talks]',
    img: courseBasicImg,
    level: 'basic',
    charges: false,
    price: '',
    pointUnlock: '3.044',
    pointComplete: '1.534',
    qntRating: '895',
    avgRating: 3,
    participants: '1094',
  },
  {
    id: 6,
    name: 'Combo khoá học IELTS Intensive [Tặng khoá TED Talks]',
    img: courseBasicImg,
    level: 'basic',
    charges: false,
    price: '',
    pointUnlock: '6.044',
    pointComplete: '1.534',
    qntRating: '895',
    avgRating: 4,
    participants: '1094',
  },
];

// Course charges == "false" && level == "general"
export const courseGeneral = [];

// Course charges == "false" && level == "advance"
export const courseAdvance = [];

// Join Course
export const joinCourse = [
  {
    id: 1,
    userId: '1',
    courseId: '2',
  },
  {
    id: 2,
    userId: '1',
    courseId: '3',
  },
  {
    id: 3,
    userId: '1',
    courseId: '6',
  },
];

// Fake data for Course Detail Page:
export const courseDetail = {
  id: 1,
  name: 'Trọn bộ 3 khoá học thực hành tiếng Anh online - Practical English [Tặng khoá TED Talks]',
  img: courseBasicImg,
  charges: true,
  level: 'basic',
  participants: '1094',
  pointComplete: '1534',
  pointUnlock: '3.044',
  price: '1350000',
  qntRating: '895',
  avgRating: 4,
  //
  totalChapter: 26,
  totalLesson: 98,
  totalVideoTime: {
    hour: '34',
    minutes: '56',
  },

  // achieves field in courseDetail:
  achieves: [
    {
      id: 1,
      content: 'Nẵm vững các chủ điểm ngữ pháp cơ bản',
    },
    {
      id: 2,
      content: 'Nẵm vững các chủ điểm ngữ pháp cơ bản',
    },
    {
      id: 3,
      content: 'Nẵm vững các chủ điểm ngữ pháp cơ bản',
    },
    {
      id: 4,
      content: 'Nẵm vững các chủ điểm ngữ pháp cơ bản',
    },
    {
      id: 5,
      content: 'Nẵm vững các chủ điểm ngữ pháp cơ bản',
    },
    {
      id: 6,
      content: 'Nẵm vững các chủ điểm ngữ pháp cơ bản',
    },
  ],

  // authors field in courseDetail:
  authors: [
    {
      id: 1,
      content:
        'Ths.Trương Nguyễn Kiều Dung,  Macalester College, USA. TOEFL 114, IELTS 8.0, SAT 2280, GRE Verbal 165/170 ',
    },
    {
      id: 2,
      content: 'Ts.Mạc Quang Huy,  FTU. IELTS 8.0 (Listening 8.5, Reading 8.5)',
    },
    {
      id: 3,
      content: 'Nhóm sinh viên Trường Đại Học Công Nghệ Thông Tin - ĐH.Quốc Gia tp.HCM',
    },
  ],

  // targetUser field in courseDetail:
  targetUsers: [
    {
      id: 1,
      content: 'Dành cho các bạn từ band 4.0 trở lên target 7.0+ IELTS Reading',
    },
    {
      id: 2,
      content: 'Sinh viên có nhu cầu ôn luyện ILETS với base 5.0 ILETS',
    },
    {
      id: 3,
      content: 'Muốn ôn luyện ILETS cấp tốc trong 3 tháng',
    },
  ],

  // Skill field in courseDetail:
  skills: [
    {
      id: 1,
      content: 'LISTENING',
    },
    {
      id: 2,
      content: 'READING',
    },
  ],

  // other field in courseDetail:
  other: [
    {
      id: 1,
      content: '8 giờ học video bài giảng và 60 clip chữa đề chi tiết bộ Cam 7-17',
    },
    {
      id: 2,
      content:
        'Nắm trọn 4000 từ vựng có xác suất 99% sẽ xuất hiện trong phần thi IELTS Reading và Listening, tổng hợp từ bộ Cam 7-17',
    },
  ],
};

// chapter of the course
export const chapters = [
  {
    id: 1,
    name: 'Properties and descriptions of people',
    totalUnit: 12,
    units: [
      {
        id: 1,
        name: 'and descriptions of people',
        totalLesson: 3,
        lessons: [
          {
            id: 1,
            name: 'descriptions of people',
            type: 'video',
            time: '20:12',
          },
          {
            id: 2,
            name: 'descriptions of people',
            type: 'text',
            time: '20:12',
          },
          {
            id: 3,
            name: 'descriptions of people',
            type: 'flashcard',
            time: '20:12',
          },
        ],
      },
      {
        id: 2,
        name: 'and descriptions of people',
        totalLesson: 3,
        lessons: [],
      },
    ],
  },
  {
    id: 2,
    name: 'Properties and descriptions of people',
    totalUnit: 7,
    units: [],
  },
  {
    id: 3,
    name: 'Properties and descriptions of people',
    totalUnit: 17,
    units: [],
  },
  {
    id: 4,
    name: 'Properties and descriptions of people',
    totalUnit: 4,
    units: [],
  },
];
