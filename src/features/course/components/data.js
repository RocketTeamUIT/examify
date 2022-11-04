import courseProImg from '../../../assets/images/coursePro.png';
import courseBasicImg from '../../../assets/images/courseBasic.png';

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
