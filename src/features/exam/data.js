import { LayoutOne, LayoutTwo, LayoutThree, LayoutFour } from './ExamTaking/Main/Layouts';

export const examList = [
  {
    id: 1,
    name: 'ETS 2022 - TEST 1',
    isExplain: true,
    isTakingExam: true,
    totalPart: 7,
    totalQuestion: 200,
    duration: 120,
    totalComment: 3499,
    numsJoin: 15999,
    hashtags: ['Toeic', 'Reading', 'Listening'],
  },
  {
    id: 2,
    name: 'ETS 2022 - TEST 2',
    isExplain: false,
    totalPart: 7,
    totalQuestion: 200,
    duration: 120,
    totalComment: 3499,
    numsJoin: 15999,
    hashtags: ['Toeic', 'Reading', 'Listening'],
  },
  {
    id: 3,
    name: 'ETS 2022 - TEST 3',
    isExplain: false,
    totalPart: 7,
    totalQuestion: 200,
    duration: 120,
    totalComment: 3499,
    numsJoin: 15999,
    hashtags: ['Toeic', 'Reading', 'Listening'],
  },
  {
    id: 4,
    name: 'ETS 2022 - TEST 4',
    isExplain: false,
    totalPart: 7,
    totalQuestion: 200,
    duration: 120,
    totalComment: 3499,
    numsJoin: 15999,
    hashtags: ['Toeic', 'Reading', 'Listening'],
  },
  {
    id: 5,
    name: 'ETS 2022 - TEST 5',
    isExplain: true,
    totalPart: 7,
    totalQuestion: 200,
    duration: 120,
    totalComment: 3499,
    numsJoin: 15999,
    hashtags: ['Toeic', 'Reading', 'Listening'],
  },
];

export const durationList = {
  type: 'menu',
  actionsList: [
    {
      title: '5 phút',
      action: () => {
        console.log('5 phút');
      },
    },
    {
      title: '10 phút',
      action: () => {
        console.log('10 phút');
      },
    },
    {
      title: '15 phút',
      action: () => {
        console.log('5 phút');
      },
    },
    {
      title: '20 phút',
      action: () => {
        console.log('10 phút');
      },
    },
    {
      title: '25 phút',
      action: () => {
        console.log('5 phút');
      },
    },
    {
      title: '30 phút',
      action: () => {
        console.log('10 phút');
      },
    },
    {
      title: '35 phút',
      action: () => {
        console.log('5 phút');
      },
    },
    {
      title: '40 phút',
      action: () => {
        console.log('10 phút');
      },
    },
    {
      title: '45 phút',
      action: () => {
        console.log('5 phút');
      },
    },
    {
      title: '50 phút',
      action: () => {
        console.log('10 phút');
      },
    },
    {
      title: '55 phút',
      action: () => {
        console.log('5 phút');
      },
    },
    {
      title: '60 phút',
      action: () => {
        console.log('10 phút');
      },
    },
  ],
};

export const groupButtons = [
  {
    title: 'Part 5',
    partAnswerList: [
      {
        name: '[Part 5] Câu hỏi ngữ pháp',
        correct: 10,
        wrong: 2,
        skip: 0,
        numberQnList: [
          {
            orderQn: 104,
            status: true,
          },
          {
            orderQn: 105,
            status: true,
          },
          {
            orderQn: 107,
            status: true,
          },
          {
            orderQn: 108,
            status: true,
          },
          {
            orderQn: 111,
            status: true,
          },
          {
            orderQn: 112,
            status: true,
          },
          {
            orderQn: 114,
            status: true,
          },
          {
            orderQn: 116,
            status: true,
          },
          {
            orderQn: 121,
            status: true,
          },
          {
            orderQn: 123,
            status: true,
          },
          {
            orderQn: 127,
            status: false,
          },
          {
            orderQn: 130,
            status: false,
          },
        ],
      },
      {
        name: '[Part 5] Câu hỏi từ loại',
        correct: 5,
        wrong: 1,
        skip: 0,
        numberQnList: [
          {
            orderQn: 101,
            status: true,
          },
          {
            orderQn: 103,
            status: true,
          },
          {
            orderQn: 108,
            status: false,
          },
          {
            orderQn: 109,
            status: true,
          },
          {
            orderQn: 113,
            status: true,
          },
          {
            orderQn: 115,
            status: true,
          },
          {
            orderQn: 117,
            status: true,
          },

          {
            orderQn: 125,
            status: true,
          },
          {
            orderQn: 129,
            status: true,
          },
        ],
      },
      {
        name: '[Part 5] Câu hỏi từ vựng',
        correct: 3,
        wrong: 6,
        skip: 0,
        numberQnList: [
          {
            orderQn: 102,
            status: true,
          },
          {
            orderQn: 106,
            status: false,
          },
          {
            orderQn: 110,
            status: false,
          },
          {
            orderQn: 118,
            status: false,
          },
          {
            orderQn: 120,
            status: true,
          },
          {
            orderQn: 122,
            status: false,
          },
          {
            orderQn: 124,
            status: true,
          },

          {
            orderQn: 126,
            status: false,
          },
          {
            orderQn: 128,
            status: false,
          },
        ],
      },
    ],
  },
  {
    title: 'Part 6',
    partAnswerList: [
      {
        name: '[Part 6] Câu hỏi ngữ pháp',
        correct: 10,
        wrong: 2,
        skip: 0,
        numberQnList: [
          {
            orderQn: 104,
            status: true,
          },
          {
            orderQn: 105,
            status: true,
          },
          {
            orderQn: 107,
            status: true,
          },
          {
            orderQn: 108,
            status: true,
          },
          {
            orderQn: 111,
            status: true,
          },
          {
            orderQn: 112,
            status: true,
          },
          {
            orderQn: 114,
            status: true,
          },
          {
            orderQn: 116,
            status: true,
          },
          {
            orderQn: 121,
            status: true,
          },
          {
            orderQn: 123,
            status: true,
          },
          {
            orderQn: 127,
            status: false,
          },
          {
            orderQn: 130,
            status: false,
          },
        ],
      },
      {
        name: '[Part 6] Câu hỏi từ loại',
        correct: 5,
        wrong: 1,
        skip: 0,
        numberQnList: [
          {
            orderQn: 101,
            status: true,
          },
          {
            orderQn: 103,
            status: true,
          },
          {
            orderQn: 108,
            status: false,
          },
          {
            orderQn: 109,
            status: true,
          },
          {
            orderQn: 113,
            status: true,
          },
          {
            orderQn: 115,
            status: true,
          },
          {
            orderQn: 117,
            status: true,
          },

          {
            orderQn: 125,
            status: true,
          },
          {
            orderQn: 129,
            status: true,
          },
        ],
      },
      {
        name: '[Part 6] Câu hỏi từ vựng',
        correct: 3,
        wrong: 6,
        skip: 0,
        numberQnList: [
          {
            orderQn: 102,
            status: true,
          },
          {
            orderQn: 106,
            status: false,
          },
          {
            orderQn: 110,
            status: false,
          },
          {
            orderQn: 118,
            status: false,
          },
          {
            orderQn: 120,
            status: true,
          },
          {
            orderQn: 122,
            status: false,
          },
          {
            orderQn: 124,
            status: true,
          },

          {
            orderQn: 126,
            status: false,
          },
          {
            orderQn: 128,
            status: false,
          },
        ],
      },
    ],
  },
  {
    title: 'Part 7',
    partAnswerList: [
      {
        name: '[Part 7] Câu hỏi ngữ pháp',
        correct: 10,
        wrong: 2,
        skip: 0,
        numberQnList: [
          {
            orderQn: 104,
            status: true,
          },
          {
            orderQn: 105,
            status: true,
          },
          {
            orderQn: 107,
            status: true,
          },
          {
            orderQn: 108,
            status: true,
          },
          {
            orderQn: 111,
            status: true,
          },
          {
            orderQn: 112,
            status: true,
          },
          {
            orderQn: 114,
            status: true,
          },
          {
            orderQn: 116,
            status: true,
          },
          {
            orderQn: 121,
            status: true,
          },
          {
            orderQn: 123,
            status: true,
          },
          {
            orderQn: 127,
            status: false,
          },
          {
            orderQn: 130,
            status: false,
          },
        ],
      },
      {
        name: '[Part 7] Câu hỏi từ loại',
        correct: 5,
        wrong: 1,
        skip: 0,
        numberQnList: [
          {
            orderQn: 101,
            status: true,
          },
          {
            orderQn: 103,
            status: true,
          },
          {
            orderQn: 108,
            status: false,
          },
          {
            orderQn: 109,
            status: true,
          },
          {
            orderQn: 113,
            status: true,
          },
          {
            orderQn: 115,
            status: true,
          },
          {
            orderQn: 117,
            status: true,
          },

          {
            orderQn: 125,
            status: true,
          },
          {
            orderQn: 129,
            status: true,
          },
        ],
      },
      {
        name: '[Part 7] Câu hỏi từ vựng',
        correct: 3,
        wrong: 6,
        skip: 0,
        numberQnList: [
          {
            orderQn: 102,
            status: true,
          },
          {
            orderQn: 106,
            status: false,
          },
          {
            orderQn: 110,
            status: false,
          },
          {
            orderQn: 118,
            status: false,
          },
          {
            orderQn: 120,
            status: true,
          },
          {
            orderQn: 122,
            status: false,
          },
          {
            orderQn: 124,
            status: true,
          },

          {
            orderQn: 126,
            status: false,
          },
          {
            orderQn: 128,
            status: false,
          },
        ],
      },
    ],
  },
];

export const dataListing = [
  {
    orderQn: 101,
    userChoice: 'A',
    status: 'correct',
  },
  {
    orderQn: 102,
    userChoice: 'B',
    status: 'correct',
  },
  {
    orderQn: 103,
    userChoice: 'C',
    status: 'correct',
  },
  {
    orderQn: 104,
    userChoice: 'D',
    status: 'correct',
  },
  {
    orderQn: 105,
    userChoice: 'A',
    status: 'wrong',
  },
  {
    orderQn: 106,
    userChoice: 'B',
    status: 'correct',
  },
  {
    orderQn: 107,
    userChoice: 'C',
    status: 'correct',
  },
  {
    orderQn: 108,
    userChoice: 'D',
    status: 'correct',
  },
  {
    orderQn: 109,
    userChoice: 'A',
    status: 'correct',
  },
  {
    orderQn: 110,
    userChoice: 'D',
    status: 'wrong',
  },
  {
    orderQn: 111,
    userChoice: 'B',
    status: 'correct',
  },
  {
    orderQn: 112,
    userChoice: 'C',
    status: 'correct',
  },
  {
    orderQn: 113,
    userChoice: 'D',
    status: 'correct',
  },
  {
    orderQn: 114,
    userChoice: 'A',
    status: 'correct',
  },
  {
    orderQn: 115,
    userChoice: 'D',
    status: 'correct',
  },
  {
    orderQn: 116,
    userChoice: 'A',
    status: 'correct',
  },
  {
    orderQn: 117,
    userChoice: 'B',
    status: 'correct',
  },
  {
    orderQn: 118,
    userChoice: 'C',
    status: 'correct',
  },
  {
    orderQn: 119,
    userChoice: 'D',
    status: 'correct',
  },
  {
    orderQn: 120,
    userChoice: 'A',
    status: 'wrong',
  },
  {
    orderQn: 121,
    userChoice: 'B',
    status: 'correct',
  },
  {
    orderQn: 122,
    userChoice: 'C',
    status: 'correct',
  },
  {
    orderQn: 123,
    userChoice: 'D',
    status: 'correct',
  },
  {
    orderQn: 124,
    userChoice: 'A',
    status: 'correct',
  },
  {
    orderQn: 125,
    userChoice: 'D',
    status: 'correct',
  },
  {
    orderQn: 126,
    userChoice: 'B',
    status: 'correct',
  },
  {
    orderQn: 127,
    userChoice: 'C',
    status: 'correct',
  },
  {
    orderQn: 128,
    userChoice: 'D',
    status: 'correct',
  },
  {
    orderQn: 129,
    userChoice: 'A',
    status: 'correct',
  },
  {
    orderQn: 130,
    userChoice: 'D',
    status: 'correct',
  },
];

export const part1 = [
  {
    id: 1,
    seq: 1,
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
      {
        seq: 4,
        content: '',
      },
    ],
  },
  {
    id: 2,
    seq: 2,
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
      {
        seq: 4,
        content: '',
      },
    ],
  },
  {
    id: 3,
    seq: 3,
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
      {
        seq: 4,
        content: '',
      },
    ],
  },
  {
    id: 4,
    seq: 4,
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
      {
        seq: 4,
        content: '',
      },
    ],
  },
  {
    id: 5,
    seq: 5,
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
      {
        seq: 4,
        content: '',
      },
    ],
  },
  {
    id: 6,
    seq: 6,
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
      {
        seq: 4,
        content: '',
      },
    ],
  },
];

export const part2 = [
  {
    id: 7,
    seq: 7,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 8,
    seq: 8,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 9,
    seq: 9,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 10,
    seq: 10,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 11,
    seq: 11,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 12,
    seq: 12,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 13,
    seq: 13,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 14,
    seq: 14,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 15,
    seq: 15,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 16,
    seq: 16,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 17,
    seq: 17,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 18,
    seq: 18,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 19,
    seq: 19,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 20,
    seq: 20,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 21,
    seq: 21,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 22,
    seq: 22,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 23,
    seq: 23,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 24,
    seq: 24,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 25,
    seq: 25,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 26,
    seq: 26,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 27,
    seq: 27,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 28,
    seq: 28,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 29,
    seq: 29,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 30,
    seq: 30,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
  {
    id: 31,
    seq: 31,
    name: '',
    choiceList: [
      {
        seq: 1,
        content: '',
      },
      {
        seq: 2,
        content: '',
      },
      {
        seq: 3,
        content: '',
      },
    ],
  },
];

export const part3 = [
  {
    img: '',
    setQuestion: [
      {
        id: 32,
        seq: 32,
        name: 'What is the woman preparing for?',
        choiceList: [
          {
            seq: 1,
            content: 'A move to a new a city',
          },
          {
            seq: 2,
            content: 'A business trip',
          },
          {
            seq: 3,
            content: 'A building tour',
          },
          {
            seq: 4,
            content: 'A meeting with visiting colleagues',
          },
        ],
      },
      {
        id: 33,
        seq: 33,
        name: 'Who most likely is the man?',
        choiceList: [
          {
            seq: 1,
            content: 'An accountant',
          },
          {
            seq: 2,
            content: 'An administrative assistant',
          },
          {
            seq: 3,
            content: 'A marketing director',
          },
          {
            seq: 4,
            content: 'A company president',
          },
        ],
      },
      {
        id: 34,
        seq: 34,
        name: 'What does the woman want to pick up on Friday morning?',
        choiceList: [
          {
            seq: 1,
            content: 'A building map',
          },
          {
            seq: 2,
            content: 'A room key',
          },
          {
            seq: 3,
            content: 'An ID card',
          },
          {
            seq: 4,
            content: 'A parking pass',
          },
        ],
      },
    ],
  },
  {
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png',
    setQuestion: [
      {
        id: 35,
        seq: 35,
        name: "Look at the graphic. How much did the man's company charge for its service?",
        choiceList: [
          {
            seq: 1,
            content: '$4,456',
          },
          {
            seq: 2,
            content: '$1,300',
          },
          {
            seq: 3,
            content: '$10,200',
          },
          {
            seq: 4,
            content: '$400',
          },
        ],
      },
      {
        id: 36,
        seq: 36,
        name: 'Why does the man apologize?',
        choiceList: [
          {
            seq: 1,
            content: 'Business hours have changed.',
          },
          {
            seq: 2,
            content: 'A price was wrong.',
          },
          {
            seq: 3,
            content: 'Some staff arrived late.',
          },
          {
            seq: 4,
            content: 'A request could not be fulfilled.',
          },
        ],
      },
      {
        id: 37,
        seq: 37,
        name: 'What does the woman like about a venue?',
        choiceList: [
          {
            seq: 1,
            content: 'It has a nice view.',
          },
          {
            seq: 2,
            content: 'It is conveniently located.',
          },
          {
            seq: 3,
            content: 'It is tastefully decorated.',
          },
          {
            seq: 4,
            content: 'It can host large events.',
          },
        ],
      },
    ],
  },
  {
    img: '',
    setQuestion: [
      {
        id: 38,
        seq: 38,
        name: 'What is the woman preparing for?',
        choiceList: [
          {
            seq: 1,
            content: 'A move to a new a city',
          },
          {
            seq: 2,
            content: 'A business trip',
          },
          {
            seq: 3,
            content: 'A building tour',
          },
          {
            seq: 4,
            content: 'A meeting with visiting colleagues',
          },
        ],
      },
      {
        id: 39,
        seq: 39,
        name: 'Who most likely is the man?',
        choiceList: [
          {
            seq: 1,
            content: 'An accountant',
          },
          {
            seq: 2,
            content: 'An administrative assistant',
          },
          {
            seq: 3,
            content: 'A marketing director',
          },
          {
            seq: 4,
            content: 'A company president',
          },
        ],
      },
      {
        id: 40,
        seq: 40,
        name: 'What does the woman want to pick up on Friday morning?',
        choiceList: [
          {
            seq: 1,
            content: 'A building map',
          },
          {
            seq: 2,
            content: 'A room key',
          },
          {
            seq: 3,
            content: 'An ID card',
          },
          {
            seq: 4,
            content: 'A parking pass',
          },
        ],
      },
    ],
  },
  {
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png',
    setQuestion: [
      {
        id: 41,
        seq: 41,
        name: "Look at the graphic. How much did the man's company charge for its service?",
        choiceList: [
          {
            seq: 1,
            content: '$4,456',
          },
          {
            seq: 2,
            content: '$1,300',
          },
          {
            seq: 3,
            content: '$10,200',
          },
          {
            seq: 4,
            content: '$400',
          },
        ],
      },
      {
        id: 42,
        seq: 42,
        name: 'Why does the man apologize?',
        choiceList: [
          {
            seq: 1,
            content: 'Business hours have changed.',
          },
          {
            seq: 2,
            content: 'A price was wrong.',
          },
          {
            seq: 3,
            content: 'Some staff arrived late.',
          },
          {
            seq: 4,
            content: 'A request could not be fulfilled.',
          },
        ],
      },
      {
        id: 43,
        seq: 43,
        name: 'What does the woman like about a venue?',
        choiceList: [
          {
            seq: 1,
            content: 'It has a nice view.',
          },
          {
            seq: 2,
            content: 'It is conveniently located.',
          },
          {
            seq: 3,
            content: 'It is tastefully decorated.',
          },
          {
            seq: 4,
            content: 'It can host large events.',
          },
        ],
      },
    ],
  },
  {
    img: '',
    setQuestion: [
      {
        id: 44,
        seq: 44,
        name: 'What is the woman preparing for?',
        choiceList: [
          {
            seq: 1,
            content: 'A move to a new a city',
          },
          {
            seq: 2,
            content: 'A business trip',
          },
          {
            seq: 3,
            content: 'A building tour',
          },
          {
            seq: 4,
            content: 'A meeting with visiting colleagues',
          },
        ],
      },
      {
        id: 45,
        seq: 45,
        name: 'Who most likely is the man?',
        choiceList: [
          {
            seq: 1,
            content: 'An accountant',
          },
          {
            seq: 2,
            content: 'An administrative assistant',
          },
          {
            seq: 3,
            content: 'A marketing director',
          },
          {
            seq: 4,
            content: 'A company president',
          },
        ],
      },
      {
        id: 46,
        seq: 46,
        name: 'What does the woman want to pick up on Friday morning?',
        choiceList: [
          {
            seq: 1,
            content: 'A building map',
          },
          {
            seq: 2,
            content: 'A room key',
          },
          {
            seq: 3,
            content: 'An ID card',
          },
          {
            seq: 4,
            content: 'A parking pass',
          },
        ],
      },
    ],
  },
  {
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png',
    setQuestion: [
      {
        id: 47,
        seq: 47,
        name: "Look at the graphic. How much did the man's company charge for its service?",
        choiceList: [
          {
            seq: 1,
            content: '$4,456',
          },
          {
            seq: 2,
            content: '$1,300',
          },
          {
            seq: 3,
            content: '$10,200',
          },
          {
            seq: 4,
            content: '$400',
          },
        ],
      },
      {
        id: 48,
        seq: 48,
        name: 'Why does the man apologize?',
        choiceList: [
          {
            seq: 1,
            content: 'Business hours have changed.',
          },
          {
            seq: 2,
            content: 'A price was wrong.',
          },
          {
            seq: 3,
            content: 'Some staff arrived late.',
          },
          {
            seq: 4,
            content: 'A request could not be fulfilled.',
          },
        ],
      },
      {
        id: 49,
        seq: 49,
        name: 'What does the woman like about a venue?',
        choiceList: [
          {
            seq: 1,
            content: 'It has a nice view.',
          },
          {
            seq: 2,
            content: 'It is conveniently located.',
          },
          {
            seq: 3,
            content: 'It is tastefully decorated.',
          },
          {
            seq: 4,
            content: 'It can host large events.',
          },
        ],
      },
    ],
  },
  {
    img: '',
    setQuestion: [
      {
        id: 50,
        seq: 50,
        name: 'What is the woman preparing for?',
        choiceList: [
          {
            seq: 1,
            content: 'A move to a new a city',
          },
          {
            seq: 2,
            content: 'A business trip',
          },
          {
            seq: 3,
            content: 'A building tour',
          },
          {
            seq: 4,
            content: 'A meeting with visiting colleagues',
          },
        ],
      },
      {
        id: 51,
        seq: 51,
        name: 'Who most likely is the man?',
        choiceList: [
          {
            seq: 1,
            content: 'An accountant',
          },
          {
            seq: 2,
            content: 'An administrative assistant',
          },
          {
            seq: 3,
            content: 'A marketing director',
          },
          {
            seq: 4,
            content: 'A company president',
          },
        ],
      },
      {
        id: 52,
        seq: 52,
        name: 'What does the woman want to pick up on Friday morning?',
        choiceList: [
          {
            seq: 1,
            content: 'A building map',
          },
          {
            seq: 2,
            content: 'A room key',
          },
          {
            seq: 3,
            content: 'An ID card',
          },
          {
            seq: 4,
            content: 'A parking pass',
          },
        ],
      },
    ],
  },
  {
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png',
    setQuestion: [
      {
        id: 53,
        seq: 53,
        name: "Look at the graphic. How much did the man's company charge for its service?",
        choiceList: [
          {
            seq: 1,
            content: '$4,456',
          },
          {
            seq: 2,
            content: '$1,300',
          },
          {
            seq: 3,
            content: '$10,200',
          },
          {
            seq: 4,
            content: '$400',
          },
        ],
      },
      {
        id: 54,
        seq: 54,
        name: 'Why does the man apologize?',
        choiceList: [
          {
            seq: 1,
            content: 'Business hours have changed.',
          },
          {
            seq: 2,
            content: 'A price was wrong.',
          },
          {
            seq: 3,
            content: 'Some staff arrived late.',
          },
          {
            seq: 4,
            content: 'A request could not be fulfilled.',
          },
        ],
      },
      {
        id: 55,
        seq: 55,
        name: 'What does the woman like about a venue?',
        choiceList: [
          {
            seq: 1,
            content: 'It has a nice view.',
          },
          {
            seq: 2,
            content: 'It is conveniently located.',
          },
          {
            seq: 3,
            content: 'It is tastefully decorated.',
          },
          {
            seq: 4,
            content: 'It can host large events.',
          },
        ],
      },
    ],
  },
  {
    img: '',
    setQuestion: [
      {
        id: 56,
        seq: 56,
        name: 'What is the woman preparing for?',
        choiceList: [
          {
            seq: 1,
            content: 'A move to a new a city',
          },
          {
            seq: 2,
            content: 'A business trip',
          },
          {
            seq: 3,
            content: 'A building tour',
          },
          {
            seq: 4,
            content: 'A meeting with visiting colleagues',
          },
        ],
      },
      {
        id: 57,
        seq: 57,
        name: 'Who most likely is the man?',
        choiceList: [
          {
            seq: 1,
            content: 'An accountant',
          },
          {
            seq: 2,
            content: 'An administrative assistant',
          },
          {
            seq: 3,
            content: 'A marketing director',
          },
          {
            seq: 4,
            content: 'A company president',
          },
        ],
      },
      {
        id: 58,
        seq: 58,
        name: 'What does the woman want to pick up on Friday morning?',
        choiceList: [
          {
            seq: 1,
            content: 'A building map',
          },
          {
            seq: 2,
            content: 'A room key',
          },
          {
            seq: 3,
            content: 'An ID card',
          },
          {
            seq: 4,
            content: 'A parking pass',
          },
        ],
      },
    ],
  },
  {
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png',
    setQuestion: [
      {
        id: 59,
        seq: 59,
        name: "Look at the graphic. How much did the man's company charge for its service?",
        choiceList: [
          {
            seq: 1,
            content: '$4,456',
          },
          {
            seq: 2,
            content: '$1,300',
          },
          {
            seq: 3,
            content: '$10,200',
          },
          {
            seq: 4,
            content: '$400',
          },
        ],
      },
      {
        id: 60,
        seq: 60,
        name: 'Why does the man apologize?',
        choiceList: [
          {
            seq: 1,
            content: 'Business hours have changed.',
          },
          {
            seq: 2,
            content: 'A price was wrong.',
          },
          {
            seq: 3,
            content: 'Some staff arrived late.',
          },
          {
            seq: 4,
            content: 'A request could not be fulfilled.',
          },
        ],
      },
      {
        id: 61,
        seq: 61,
        name: 'What does the woman like about a venue?',
        choiceList: [
          {
            seq: 1,
            content: 'It has a nice view.',
          },
          {
            seq: 2,
            content: 'It is conveniently located.',
          },
          {
            seq: 3,
            content: 'It is tastefully decorated.',
          },
          {
            seq: 4,
            content: 'It can host large events.',
          },
        ],
      },
    ],
  },
  {
    img: '',
    setQuestion: [
      {
        id: 62,
        seq: 62,
        name: 'What is the woman preparing for?',
        choiceList: [
          {
            seq: 1,
            content: 'A move to a new a city',
          },
          {
            seq: 2,
            content: 'A business trip',
          },
          {
            seq: 3,
            content: 'A building tour',
          },
          {
            seq: 4,
            content: 'A meeting with visiting colleagues',
          },
        ],
      },
      {
        id: 63,
        seq: 63,
        name: 'Who most likely is the man?',
        choiceList: [
          {
            seq: 1,
            content: 'An accountant',
          },
          {
            seq: 2,
            content: 'An administrative assistant',
          },
          {
            seq: 3,
            content: 'A marketing director',
          },
          {
            seq: 4,
            content: 'A company president',
          },
        ],
      },
      {
        id: 64,
        seq: 64,
        name: 'What does the woman want to pick up on Friday morning?',
        choiceList: [
          {
            seq: 1,
            content: 'A building map',
          },
          {
            seq: 2,
            content: 'A room key',
          },
          {
            seq: 3,
            content: 'An ID card',
          },
          {
            seq: 4,
            content: 'A parking pass',
          },
        ],
      },
    ],
  },
  {
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png',
    setQuestion: [
      {
        id: 65,
        seq: 65,
        name: "Look at the graphic. How much did the man's company charge for its service?",
        choiceList: [
          {
            seq: 1,
            content: '$4,456',
          },
          {
            seq: 2,
            content: '$1,300',
          },
          {
            seq: 3,
            content: '$10,200',
          },
          {
            seq: 4,
            content: '$400',
          },
        ],
      },
      {
        id: 66,
        seq: 66,
        name: 'Why does the man apologize?',
        choiceList: [
          {
            seq: 1,
            content: 'Business hours have changed.',
          },
          {
            seq: 2,
            content: 'A price was wrong.',
          },
          {
            seq: 3,
            content: 'Some staff arrived late.',
          },
          {
            seq: 4,
            content: 'A request could not be fulfilled.',
          },
        ],
      },
      {
        id: 67,
        seq: 67,
        name: 'What does the woman like about a venue?',
        choiceList: [
          {
            seq: 1,
            content: 'It has a nice view.',
          },
          {
            seq: 2,
            content: 'It is conveniently located.',
          },
          {
            seq: 3,
            content: 'It is tastefully decorated.',
          },
          {
            seq: 4,
            content: 'It can host large events.',
          },
        ],
      },
    ],
  },
  {
    img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png',
    setQuestion: [
      {
        id: 68,
        seq: 68,
        name: "Look at the graphic. How much did the man's company charge for its service?",
        choiceList: [
          {
            seq: 1,
            content: '$4,456',
          },
          {
            seq: 2,
            content: '$1,300',
          },
          {
            seq: 3,
            content: '$10,200',
          },
          {
            seq: 4,
            content: '$400',
          },
        ],
      },
      {
        id: 69,
        seq: 69,
        name: 'Why does the man apologize?',
        choiceList: [
          {
            seq: 1,
            content: 'Business hours have changed.',
          },
          {
            seq: 2,
            content: 'A price was wrong.',
          },
          {
            seq: 3,
            content: 'Some staff arrived late.',
          },
          {
            seq: 4,
            content: 'A request could not be fulfilled.',
          },
        ],
      },
      {
        id: 70,
        seq: 70,
        name: 'What does the woman like about a venue?',
        choiceList: [
          {
            seq: 1,
            content: 'It has a nice view.',
          },
          {
            seq: 2,
            content: 'It is conveniently located.',
          },
          {
            seq: 3,
            content: 'It is tastefully decorated.',
          },
          {
            seq: 4,
            content: 'It can host large events.',
          },
        ],
      },
    ],
  },
];

export const part5 = [
  {
    id: 101,
    seq: 101,
    name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
    choiceList: [
      {
        seq: 1,
        content: 'regional',
      },
      {
        seq: 2,
        content: 'regionally',
      },
      {
        seq: 3,
        content: 'region',
      },
      {
        seq: 4,
        content: 'regions',
      },
    ],
  },
  {
    id: 102,
    seq: 102,
    name: 'Income levels are rising in the _____ and surrounding areas.',
    choiceList: [
      {
        seq: 1,
        content: 'family',
      },
      {
        seq: 2,
        content: 'world',
      },
      {
        seq: 3,
        content: 'company',
      },
      {
        seq: 4,
        content: 'city',
      },
    ],
  },
  {
    id: 103,
    seq: 103,
    name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
    choiceList: [
      {
        seq: 1,
        content: 'you',
      },
      {
        seq: 2,
        content: 'yours',
      },
      {
        seq: 3,
        content: 'yourself',
      },
      {
        seq: 4,
        content: 'your',
      },
    ],
  },
  {
    id: 104,
    seq: 104,
    name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
    choiceList: [
      {
        seq: 1,
        content: 'up',
      },
      {
        seq: 2,
        content: 'except',
      },
      {
        seq: 3,
        content: 'onto',
      },
      {
        seq: 4,
        content: 'through',
      },
    ],
  },
  {
    id: 105,
    seq: 105,
    name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
    choiceList: [
      {
        seq: 1,
        content: 'to arrange',
      },
      {
        seq: 2,
        content: 'arranging',
      },
      {
        seq: 3,
        content: 'having arranged',
      },
      {
        seq: 4,
        content: 'arrangement',
      },
    ],
  },
  {
    id: 106,
    seq: 106,
    name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
    choiceList: [
      {
        seq: 1,
        content: 'regional',
      },
      {
        seq: 2,
        content: 'regionally',
      },
      {
        seq: 3,
        content: 'region',
      },
      {
        seq: 4,
        content: 'regions',
      },
    ],
  },
  {
    id: 107,
    seq: 107,
    name: 'Income levels are rising in the _____ and surrounding areas.',
    choiceList: [
      {
        seq: 1,
        content: 'family',
      },
      {
        seq: 2,
        content: 'world',
      },
      {
        seq: 3,
        content: 'company',
      },
      {
        seq: 4,
        content: 'city',
      },
    ],
  },
  {
    id: 108,
    seq: 108,
    name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
    choiceList: [
      {
        seq: 1,
        content: 'you',
      },
      {
        seq: 2,
        content: 'yours',
      },
      {
        seq: 3,
        content: 'yourself',
      },
      {
        seq: 4,
        content: 'your',
      },
    ],
  },
  {
    id: 109,
    seq: 109,
    name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
    choiceList: [
      {
        seq: 1,
        content: 'up',
      },
      {
        seq: 2,
        content: 'except',
      },
      {
        seq: 3,
        content: 'onto',
      },
      {
        seq: 4,
        content: 'through',
      },
    ],
  },
  {
    id: 111,
    seq: 110,
    name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
    choiceList: [
      {
        seq: 1,
        content: 'to arrange',
      },
      {
        seq: 2,
        content: 'arranging',
      },
      {
        seq: 3,
        content: 'having arranged',
      },
      {
        seq: 4,
        content: 'arrangement',
      },
    ],
  },
  {
    id: 111,
    seq: 111,
    name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
    choiceList: [
      {
        seq: 1,
        content: 'regional',
      },
      {
        seq: 2,
        content: 'regionally',
      },
      {
        seq: 3,
        content: 'region',
      },
      {
        seq: 4,
        content: 'regions',
      },
    ],
  },
  {
    id: 112,
    seq: 112,
    name: 'Income levels are rising in the _____ and surrounding areas.',
    choiceList: [
      {
        seq: 1,
        content: 'family',
      },
      {
        seq: 2,
        content: 'world',
      },
      {
        seq: 3,
        content: 'company',
      },
      {
        seq: 4,
        content: 'city',
      },
    ],
  },
  {
    id: 113,
    seq: 113,
    name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
    choiceList: [
      {
        seq: 1,
        content: 'you',
      },
      {
        seq: 2,
        content: 'yours',
      },
      {
        seq: 3,
        content: 'yourself',
      },
      {
        seq: 4,
        content: 'your',
      },
    ],
  },
  {
    id: 114,
    seq: 114,
    name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
    choiceList: [
      {
        seq: 1,
        content: 'up',
      },
      {
        seq: 2,
        content: 'except',
      },
      {
        seq: 3,
        content: 'onto',
      },
      {
        seq: 4,
        content: 'through',
      },
    ],
  },
  {
    id: 115,
    seq: 115,
    name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
    choiceList: [
      {
        seq: 1,
        content: 'to arrange',
      },
      {
        seq: 2,
        content: 'arranging',
      },
      {
        seq: 3,
        content: 'having arranged',
      },
      {
        seq: 4,
        content: 'arrangement',
      },
    ],
  },
  {
    id: 116,
    seq: 116,
    name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
    choiceList: [
      {
        seq: 1,
        content: 'regional',
      },
      {
        seq: 2,
        content: 'regionally',
      },
      {
        seq: 3,
        content: 'region',
      },
      {
        seq: 4,
        content: 'regions',
      },
    ],
  },
  {
    id: 117,
    seq: 117,
    name: 'Income levels are rising in the _____ and surrounding areas.',
    choiceList: [
      {
        seq: 1,
        content: 'family',
      },
      {
        seq: 2,
        content: 'world',
      },
      {
        seq: 3,
        content: 'company',
      },
      {
        seq: 4,
        content: 'city',
      },
    ],
  },
  {
    id: 118,
    seq: 118,
    name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
    choiceList: [
      {
        seq: 1,
        content: 'you',
      },
      {
        seq: 2,
        content: 'yours',
      },
      {
        seq: 3,
        content: 'yourself',
      },
      {
        seq: 4,
        content: 'your',
      },
    ],
  },
  {
    id: 119,
    seq: 119,
    name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
    choiceList: [
      {
        seq: 1,
        content: 'up',
      },
      {
        seq: 2,
        content: 'except',
      },
      {
        seq: 3,
        content: 'onto',
      },
      {
        seq: 4,
        content: 'through',
      },
    ],
  },
  {
    id: 120,
    seq: 120,
    name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
    choiceList: [
      {
        seq: 1,
        content: 'to arrange',
      },
      {
        seq: 2,
        content: 'arranging',
      },
      {
        seq: 3,
        content: 'having arranged',
      },
      {
        seq: 4,
        content: 'arrangement',
      },
    ],
  },
  {
    id: 121,
    seq: 121,
    name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
    choiceList: [
      {
        seq: 1,
        content: 'regional',
      },
      {
        seq: 2,
        content: 'regionally',
      },
      {
        seq: 3,
        content: 'region',
      },
      {
        seq: 4,
        content: 'regions',
      },
    ],
  },
  {
    id: 122,
    seq: 122,
    name: 'Income levels are rising in the _____ and surrounding areas.',
    choiceList: [
      {
        seq: 1,
        content: 'family',
      },
      {
        seq: 2,
        content: 'world',
      },
      {
        seq: 3,
        content: 'company',
      },
      {
        seq: 4,
        content: 'city',
      },
    ],
  },
  {
    id: 123,
    seq: 123,
    name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
    choiceList: [
      {
        seq: 1,
        content: 'you',
      },
      {
        seq: 2,
        content: 'yours',
      },
      {
        seq: 3,
        content: 'yourself',
      },
      {
        seq: 4,
        content: 'your',
      },
    ],
  },
  {
    id: 124,
    seq: 124,
    name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
    choiceList: [
      {
        seq: 1,
        content: 'up',
      },
      {
        seq: 2,
        content: 'except',
      },
      {
        seq: 3,
        content: 'onto',
      },
      {
        seq: 4,
        content: 'through',
      },
    ],
  },
  {
    id: 125,
    seq: 125,
    name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
    choiceList: [
      {
        seq: 1,
        content: 'to arrange',
      },
      {
        seq: 2,
        content: 'arranging',
      },
      {
        seq: 3,
        content: 'having arranged',
      },
      {
        seq: 4,
        content: 'arrangement',
      },
    ],
  },
  {
    id: 126,
    seq: 126,
    name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
    choiceList: [
      {
        seq: 1,
        content: 'regional',
      },
      {
        seq: 2,
        content: 'regionally',
      },
      {
        seq: 3,
        content: 'region',
      },
      {
        seq: 4,
        content: 'regions',
      },
    ],
  },
  {
    id: 127,
    seq: 127,
    name: 'Income levels are rising in the _____ and surrounding areas.',
    choiceList: [
      {
        seq: 1,
        content: 'family',
      },
      {
        seq: 2,
        content: 'world',
      },
      {
        seq: 3,
        content: 'company',
      },
      {
        seq: 4,
        content: 'city',
      },
    ],
  },
  {
    id: 128,
    seq: 128,
    name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
    choiceList: [
      {
        seq: 1,
        content: 'you',
      },
      {
        seq: 2,
        content: 'yours',
      },
      {
        seq: 3,
        content: 'yourself',
      },
      {
        seq: 4,
        content: 'your',
      },
    ],
  },
  {
    id: 129,
    seq: 129,
    name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
    choiceList: [
      {
        seq: 1,
        content: 'up',
      },
      {
        seq: 2,
        content: 'except',
      },
      {
        seq: 3,
        content: 'onto',
      },
      {
        seq: 4,
        content: 'through',
      },
    ],
  },
  {
    id: 130,
    seq: 130,
    name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
    choiceList: [
      {
        seq: 1,
        content: 'to arrange',
      },
      {
        seq: 2,
        content: 'arranging',
      },
      {
        seq: 3,
        content: 'having arranged',
      },
      {
        seq: 4,
        content: 'arrangement',
      },
    ],
  },
];

export const part6 = [
  {
    title: 'refer to following notice',
    side: [
      {
        content:
          '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
      },
    ],
    setQuestion: [
      {
        id: 131,
        seq: 131,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'serve',
          },
          {
            seq: 2,
            content: 'served',
          },
          {
            seq: 3,
            content: 'server',
          },
          {
            seq: 4,
            content: 'service',
          },
        ],
      },
      {
        id: 132,
        seq: 132,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'Along',
          },
          {
            seq: 2,
            content: 'During',
          },
          {
            seq: 3,
            content: 'Without',
          },
          {
            seq: 4,
            content: 'Between',
          },
        ],
      },
      {
        id: 133,
        seq: 133,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'apologize',
          },
          {
            seq: 2,
            content: 'organize',
          },
          {
            seq: 3,
            content: 'realize',
          },
          {
            seq: 4,
            content: 'recognize',
          },
        ],
      },
      {
        id: 134,
        seq: 134,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'If you would like to join our property management team, call us today.',
          },
          {
            seq: 2,
            content: 'Thank you for your patience while the main lobby is being painted.',
          },
          {
            seq: 3,
            content: 'Please do not attempt to access the north lobby on these days.',
          },
          {
            seq: 4,
            content: 'Questions or comments may be directed to the Management office.',
          },
        ],
      },
    ],
  },
  {
    title: 'refer to following notice',
    side: [
      {
        content:
          '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
      },
    ],
    setQuestion: [
      {
        id: 135,
        seq: 135,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'serve',
          },
          {
            seq: 2,
            content: 'served',
          },
          {
            seq: 3,
            content: 'server',
          },
          {
            seq: 4,
            content: 'service',
          },
        ],
      },
      {
        id: 136,
        seq: 136,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'Along',
          },
          {
            seq: 2,
            content: 'During',
          },
          {
            seq: 3,
            content: 'Without',
          },
          {
            seq: 4,
            content: 'Between',
          },
        ],
      },
      {
        id: 137,
        seq: 137,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'apologize',
          },
          {
            seq: 2,
            content: 'organize',
          },
          {
            seq: 3,
            content: 'realize',
          },
          {
            seq: 4,
            content: 'recognize',
          },
        ],
      },
      {
        id: 138,
        seq: 138,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'If you would like to join our property management team, call us today.',
          },
          {
            seq: 2,
            content: 'Thank you for your patience while the main lobby is being painted.',
          },
          {
            seq: 3,
            content: 'Please do not attempt to access the north lobby on these days.',
          },
          {
            seq: 4,
            content: 'Questions or comments may be directed to the Management office.',
          },
        ],
      },
    ],
  },
  {
    title: 'refer to following notice',
    side: [
      {
        content:
          '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
      },
    ],
    setQuestion: [
      {
        id: 139,
        seq: 139,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'serve',
          },
          {
            seq: 2,
            content: 'served',
          },
          {
            seq: 3,
            content: 'server',
          },
          {
            seq: 4,
            content: 'service',
          },
        ],
      },
      {
        id: 140,
        seq: 140,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'Along',
          },
          {
            seq: 2,
            content: 'During',
          },
          {
            seq: 3,
            content: 'Without',
          },
          {
            seq: 4,
            content: 'Between',
          },
        ],
      },
      {
        id: 141,
        seq: 141,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'apologize',
          },
          {
            seq: 2,
            content: 'organize',
          },
          {
            seq: 3,
            content: 'realize',
          },
          {
            seq: 4,
            content: 'recognize',
          },
        ],
      },
      {
        id: 142,
        seq: 142,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'If you would like to join our property management team, call us today.',
          },
          {
            seq: 2,
            content: 'Thank you for your patience while the main lobby is being painted.',
          },
          {
            seq: 3,
            content: 'Please do not attempt to access the north lobby on these days.',
          },
          {
            seq: 4,
            content: 'Questions or comments may be directed to the Management office.',
          },
        ],
      },
    ],
  },
  {
    title: 'refer to following notice',
    side: [
      {
        content:
          '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
      },
    ],
    setQuestion: [
      {
        id: 143,
        seq: 143,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'serve',
          },
          {
            seq: 2,
            content: 'served',
          },
          {
            seq: 3,
            content: 'server',
          },
          {
            seq: 4,
            content: 'service',
          },
        ],
      },
      {
        id: 144,
        seq: 144,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'Along',
          },
          {
            seq: 2,
            content: 'During',
          },
          {
            seq: 3,
            content: 'Without',
          },
          {
            seq: 4,
            content: 'Between',
          },
        ],
      },
      {
        id: 145,
        seq: 145,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'apologize',
          },
          {
            seq: 2,
            content: 'organize',
          },
          {
            seq: 3,
            content: 'realize',
          },
          {
            seq: 4,
            content: 'recognize',
          },
        ],
      },
      {
        id: 146,
        seq: 146,
        name: '',
        choiceList: [
          {
            seq: 1,
            content: 'If you would like to join our property management team, call us today.',
          },
          {
            seq: 2,
            content: 'Thank you for your patience while the main lobby is being painted.',
          },
          {
            seq: 3,
            content: 'Please do not attempt to access the north lobby on these days.',
          },
          {
            seq: 4,
            content: 'Questions or comments may be directed to the Management office.',
          },
        ],
      },
    ],
  },
];

export const fullPart = [
  {
    title: 'Part 1',
    questionList: [
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
    ],
    element: <LayoutOne data={part1} />,
  },
  {
    title: 'Part 2',
    questionList: [
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
    ],
    element: <LayoutTwo data={part2} />,
  },
  {
    title: 'Part 3',
    questionList: [
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
    ],
    element: <LayoutThree data={part3} />,
  },
  {
    title: 'Part 4',
    questionList: [
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
    ],
    element: <LayoutThree data={part3} />,
  },
  {
    title: 'Part 5',
    questionList: [
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
    ],
    element: <LayoutTwo data={part5} />,
  },
  {
    title: 'Part 6',
    questionList: [
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
    ],
    element: <LayoutFour data={part6} />,
  },
  {
    title: 'Part 7',
    questionList: [
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
      {
        img: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
        name: '',
        mcq: [
          {
            name: 'A',
            content: '',
          },
          {
            name: 'B',
            content: '',
          },
          {
            name: 'C',
            content: '',
          },
          {
            name: 'D',
            content: '',
          },
        ],
      },
    ],
    element: <LayoutFour data={part6} />,
  },
];

export const partList = [
  {
    name: 'Part 1',
    questionList: [
      {
        seq: 1,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 2,
        type: 'fill',
        flag: true,
      },
      {
        seq: 3,
        type: 'correct',
        flag: false,
      },
      {
        seq: 4,
        type: 'wrong',
        flag: false,
      },
      {
        seq: 5,
        type: 'unfill',
        flag: false,
      },
      {
        seq: 6,
        type: 'fill',
        flag: false,
      },
    ],
  },
  {
    name: 'Part 2',
    questionList: [
      {
        seq: 7,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 8,
        type: 'fill',
        flag: true,
      },
      {
        seq: 9,
        type: 'fill',
        flag: false,
      },
      {
        seq: 10,
        type: 'fill',
        flag: false,
      },
      {
        seq: 11,
        type: 'fill',
        flag: false,
      },
      {
        seq: 12,
        type: 'fill',
        flag: false,
      },
      {
        seq: 13,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 14,
        type: 'fill',
        flag: true,
      },
      {
        seq: 15,
        type: 'fill',
        flag: false,
      },
      {
        seq: 16,
        type: 'fill',
        flag: false,
      },
      {
        seq: 17,
        type: 'fill',
        flag: false,
      },
      {
        seq: 18,
        type: 'fill',
        flag: false,
      },
      {
        seq: 19,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 20,
        type: 'fill',
        flag: true,
      },
      {
        seq: 21,
        type: 'fill',
        flag: false,
      },
      {
        seq: 22,
        type: 'fill',
        flag: false,
      },
      {
        seq: 23,
        type: 'fill',
        flag: false,
      },
      {
        seq: 24,
        type: 'fill',
        flag: false,
      },
      {
        seq: 25,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 26,
        type: 'fill',
        flag: true,
      },
      {
        seq: 27,
        type: 'fill',
        flag: false,
      },
      {
        seq: 28,
        type: 'fill',
        flag: false,
      },
      {
        seq: 29,
        type: 'fill',
        flag: false,
      },
      {
        seq: 30,
        type: 'fill',
        flag: false,
      },
      {
        seq: 31,
        type: 'fill',
        flag: false,
      },
    ],
  },
  {
    name: 'Part 3',
    questionList: [
      {
        seq: 32,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 33,
        type: 'fill',
        flag: true,
      },
      {
        seq: 34,
        type: 'fill',
        flag: false,
      },
      {
        seq: 35,
        type: 'fill',
        flag: false,
      },
      {
        seq: 36,
        type: 'fill',
        flag: false,
      },
      {
        seq: 37,
        type: 'fill',
        flag: false,
      },
      {
        seq: 38,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 39,
        type: 'fill',
        flag: true,
      },
      {
        seq: 40,
        type: 'fill',
        flag: false,
      },
      {
        seq: 41,
        type: 'fill',
        flag: false,
      },
      {
        seq: 42,
        type: 'fill',
        flag: false,
      },
      {
        seq: 43,
        type: 'fill',
        flag: false,
      },
      {
        seq: 44,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 45,
        type: 'fill',
        flag: true,
      },
      {
        seq: 46,
        type: 'fill',
        flag: false,
      },
      {
        seq: 47,
        type: 'fill',
        flag: false,
      },
      {
        seq: 48,
        type: 'fill',
        flag: false,
      },
      {
        seq: 49,
        type: 'fill',
        flag: false,
      },
      {
        seq: 50,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 51,
        type: 'fill',
        flag: true,
      },
      {
        seq: 52,
        type: 'fill',
        flag: false,
      },
      {
        seq: 53,
        type: 'fill',
        flag: false,
      },
      {
        seq: 54,
        type: 'fill',
        flag: false,
      },
      {
        seq: 55,
        type: 'fill',
        flag: false,
      },
      {
        seq: 56,
        type: 'fill',
        flag: false,
      },
      {
        seq: 57,
        type: 'fill',
        flag: false,
      },
      {
        seq: 58,
        type: 'fill',
        flag: false,
      },
      {
        seq: 59,
        type: 'fill',
        flag: false,
      },
      {
        seq: 60,
        type: 'fill',
        flag: false,
      },
      {
        seq: 61,
        type: 'fill',
        flag: true,
      },
      {
        seq: 62,
        type: 'fill',
        flag: false,
      },
      {
        seq: 63,
        type: 'fill',
        flag: false,
      },
      {
        seq: 64,
        type: 'fill',
        flag: false,
      },
      {
        seq: 65,
        type: 'fill',
        flag: false,
      },
      {
        seq: 66,
        type: 'fill',
        flag: false,
      },
      {
        seq: 67,
        type: 'fill',
        flag: false,
      },
      {
        seq: 68,
        type: 'fill',
        flag: false,
      },
      {
        seq: 69,
        type: 'fill',
        flag: false,
      },
      {
        seq: 70,
        type: 'fill',
        flag: false,
      },
    ],
  },
  {
    name: 'Part 4',
    questionList: [
      {
        seq: 71,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 72,
        type: 'fill',
        flag: true,
      },
      {
        seq: 73,
        type: 'fill',
        flag: false,
      },
      {
        seq: 74,
        type: 'fill',
        flag: false,
      },
      {
        seq: 75,
        type: 'fill',
        flag: false,
      },
      {
        seq: 76,
        type: 'fill',
        flag: false,
      },
      {
        seq: 77,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 78,
        type: 'fill',
        flag: true,
      },
      {
        seq: 79,
        type: 'fill',
        flag: false,
      },
      {
        seq: 80,
        type: 'fill',
        flag: false,
      },
      {
        seq: 81,
        type: 'fill',
        flag: false,
      },
      {
        seq: 82,
        type: 'fill',
        flag: false,
      },
      {
        seq: 83,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 84,
        type: 'fill',
        flag: true,
      },
      {
        seq: 85,
        type: 'fill',
        flag: false,
      },
      {
        seq: 86,
        type: 'fill',
        flag: false,
      },
      {
        seq: 87,
        type: 'fill',
        flag: false,
      },
      {
        seq: 88,
        type: 'fill',
        flag: false,
      },
      {
        seq: 89,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 90,
        type: 'fill',
        flag: true,
      },
      {
        seq: 91,
        type: 'fill',
        flag: false,
      },
      {
        seq: 92,
        type: 'fill',
        flag: false,
      },
      {
        seq: 93,
        type: 'fill',
        flag: false,
      },
      {
        seq: 94,
        type: 'fill',
        flag: false,
      },
      {
        seq: 95,
        type: 'fill',
        flag: false,
      },
      {
        seq: 96,
        type: 'fill',
        flag: false,
      },
      {
        seq: 97,
        type: 'fill',
        flag: false,
      },
      {
        seq: 98,
        type: 'fill',
        flag: false,
      },
      {
        seq: 99,
        type: 'fill',
        flag: false,
      },
      {
        seq: 100,
        type: 'fill',
        flag: true,
      },
    ],
  },
  {
    name: 'Part 5',
    questionList: [
      {
        seq: 101,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 102,
        type: 'fill',
        flag: true,
      },
      {
        seq: 103,
        type: 'fill',
        flag: false,
      },
      {
        seq: 104,
        type: 'fill',
        flag: false,
      },
      {
        seq: 105,
        type: 'fill',
        flag: false,
      },
      {
        seq: 106,
        type: 'fill',
        flag: false,
      },
      {
        seq: 107,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 108,
        type: 'fill',
        flag: true,
      },
      {
        seq: 109,
        type: 'fill',
        flag: false,
      },
      {
        seq: 110,
        type: 'fill',
        flag: false,
      },
      {
        seq: 111,
        type: 'fill',
        flag: false,
      },
      {
        seq: 112,
        type: 'fill',
        flag: false,
      },
      {
        seq: 113,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 114,
        type: 'fill',
        flag: true,
      },
      {
        seq: 115,
        type: 'fill',
        flag: false,
      },
      {
        seq: 116,
        type: 'fill',
        flag: false,
      },
      {
        seq: 117,
        type: 'fill',
        flag: false,
      },
      {
        seq: 118,
        type: 'fill',
        flag: false,
      },
      {
        seq: 119,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 120,
        type: 'fill',
        flag: true,
      },
      {
        seq: 121,
        type: 'fill',
        flag: false,
      },
      {
        seq: 122,
        type: 'fill',
        flag: false,
      },
      {
        seq: 123,
        type: 'fill',
        flag: false,
      },
      {
        seq: 124,
        type: 'fill',
        flag: false,
      },
      {
        seq: 125,
        type: 'fill',
        flag: false,
      },
      {
        seq: 126,
        type: 'fill',
        flag: false,
      },
      {
        seq: 127,
        type: 'fill',
        flag: false,
      },
      {
        seq: 128,
        type: 'fill',
        flag: false,
      },
      {
        seq: 129,
        type: 'fill',
        flag: false,
      },
      {
        seq: 130,
        type: 'fill',
        flag: true,
      },
    ],
  },
  {
    name: 'Part 6',
    questionList: [
      {
        seq: 131,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 132,
        type: 'fill',
        flag: true,
      },
      {
        seq: 133,
        type: 'fill',
        flag: false,
      },
      {
        seq: 134,
        type: 'fill',
        flag: false,
      },
      {
        seq: 135,
        type: 'fill',
        flag: false,
      },
      {
        seq: 136,
        type: 'fill',
        flag: false,
      },
      {
        seq: 137,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 138,
        type: 'fill',
        flag: true,
      },
      {
        seq: 139,
        type: 'fill',
        flag: false,
      },
      {
        seq: 140,
        type: 'fill',
        flag: false,
      },
      {
        seq: 141,
        type: 'fill',
        flag: false,
      },
      {
        seq: 142,
        type: 'fill',
        flag: false,
      },
      {
        seq: 143,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 144,
        type: 'fill',
        flag: true,
      },
      {
        seq: 145,
        type: 'fill',
        flag: false,
      },
      {
        seq: 146,
        type: 'fill',
        flag: false,
      },
    ],
  },
  {
    name: 'Part 7',
    questionList: [
      {
        seq: 147,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 148,
        type: 'fill',
        flag: true,
      },
      {
        seq: 149,
        type: 'fill',
        flag: false,
      },
      {
        seq: 150,
        type: 'fill',
        flag: false,
      },
      {
        seq: 151,
        type: 'fill',
        flag: false,
      },
      {
        seq: 152,
        type: 'fill',
        flag: false,
      },
      {
        seq: 153,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 154,
        type: 'fill',
        flag: true,
      },
      {
        seq: 155,
        type: 'fill',
        flag: false,
      },
      {
        seq: 156,
        type: 'fill',
        flag: false,
      },
      {
        seq: 157,
        type: 'fill',
        flag: false,
      },
      {
        seq: 158,
        type: 'fill',
        flag: false,
      },
      {
        seq: 159,
        type: 'unfill',
        flag: true,
      },
      {
        seq: 160,
        type: 'fill',
        flag: true,
      },
      {
        seq: 161,
        type: 'fill',
        flag: false,
      },
      {
        seq: 162,
        type: 'fill',
        flag: false,
      },
      {
        seq: 163,
        type: 'fill',
        flag: false,
      },
      {
        seq: 164,
        type: 'fill',
        flag: false,
      },
      {
        seq: 165,
        type: 'fill',
        flag: false,
      },
      {
        seq: 166,
        type: 'fill',
        flag: false,
      },
      {
        seq: 167,
        type: 'fill',
        flag: false,
      },
      {
        seq: 168,
        type: 'fill',
        flag: false,
      },
      {
        seq: 169,
        type: 'fill',
        flag: false,
      },
      {
        seq: 170,
        type: 'fill',
        flag: true,
      },
      {
        seq: 171,
        type: 'fill',
        flag: false,
      },
      {
        seq: 172,
        type: 'fill',
        flag: false,
      },
      {
        seq: 173,
        type: 'fill',
        flag: false,
      },
      {
        seq: 174,
        type: 'fill',
        flag: false,
      },
      {
        seq: 175,
        type: 'fill',
        flag: false,
      },
      {
        seq: 176,
        type: 'fill',
        flag: false,
      },
      {
        seq: 177,
        type: 'fill',
        flag: false,
      },
      {
        seq: 178,
        type: 'fill',
        flag: false,
      },
      {
        seq: 179,
        type: 'fill',
        flag: false,
      },
      {
        seq: 180,
        type: 'fill',
        flag: true,
      },
      {
        seq: 181,
        type: 'fill',
        flag: false,
      },
      {
        seq: 182,
        type: 'fill',
        flag: false,
      },
      {
        seq: 183,
        type: 'fill',
        flag: false,
      },
      {
        seq: 184,
        type: 'fill',
        flag: false,
      },
      {
        seq: 185,
        type: 'fill',
        flag: false,
      },
      {
        seq: 186,
        type: 'fill',
        flag: false,
      },
      {
        seq: 187,
        type: 'fill',
        flag: false,
      },
      {
        seq: 188,
        type: 'fill',
        flag: false,
      },
      {
        seq: 189,
        type: 'fill',
        flag: false,
      },
      {
        seq: 190,
        type: 'fill',
        flag: true,
      },
      {
        seq: 191,
        type: 'fill',
        flag: false,
      },
      {
        seq: 192,
        type: 'fill',
        flag: false,
      },
      {
        seq: 193,
        type: 'fill',
        flag: false,
      },
      {
        seq: 194,
        type: 'fill',
        flag: false,
      },
      {
        seq: 195,
        type: 'fill',
        flag: false,
      },
      {
        seq: 196,
        type: 'fill',
        flag: false,
      },
      {
        seq: 197,
        type: 'fill',
        flag: false,
      },
      {
        seq: 198,
        type: 'fill',
        flag: false,
      },
      {
        seq: 199,
        type: 'fill',
        flag: false,
      },
      {
        seq: 200,
        type: 'fill',
        flag: true,
      },
    ],
  },
];

export const dataExamTaking = {
  examSeriesName: 'Bộ đề thi: ETS 2022',
  examName: 'ETS 2022 - Test 1',
  audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
  data: [
    {
      part: 'Part 1',
      title: '',
      setQuestionList: [
        {
          title: '',
          side: [
            {
              seq: 1,
              content:
                'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
            },
          ],
          setQuestion: [
            {
              id: 1,
              seq: 1,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
                {
                  seq: 4,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [
            {
              seq: 1,
              content:
                'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
            },
          ],
          setQuestion: [
            {
              id: 2,
              seq: 2,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
                {
                  seq: 4,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [
            {
              seq: 1,
              content:
                'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
            },
          ],
          setQuestion: [
            {
              id: 3,
              seq: 3,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
                {
                  seq: 4,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [
            {
              seq: 1,
              content:
                'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
            },
          ],
          setQuestion: [
            {
              id: 4,
              seq: 4,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
                {
                  seq: 4,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [
            {
              seq: 1,
              content:
                'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
            },
          ],
          setQuestion: [
            {
              id: 5,
              seq: 5,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
                {
                  seq: 4,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [
            {
              seq: 1,
              content:
                'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674007263/ets_toeic_2022_test_1_1_1_fwzpbm.png',
            },
          ],
          setQuestion: [
            {
              id: 6,
              seq: 6,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
                {
                  seq: 4,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
      ],
    },
    {
      part: 'Part 2',
      title: '',
      setQuestionList: [
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 7,
              seq: 7,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 8,
              seq: 8,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 9,
              seq: 9,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 10,
              seq: 10,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 11,
              seq: 11,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 12,
              seq: 12,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 13,
              seq: 13,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 14,
              seq: 14,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 15,
              seq: 15,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 16,
              seq: 16,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 17,
              seq: 17,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 18,
              seq: 18,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 19,
              seq: 19,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 20,
              seq: 20,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 21,
              seq: 21,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 22,
              seq: 22,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 23,
              seq: 23,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 24,
              seq: 24,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 25,
              seq: 25,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 26,
              seq: 26,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 27,
              seq: 27,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 28,
              seq: 28,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 29,
              seq: 29,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 30,
              seq: 30,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 31,
              seq: 31,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: '',
                },
                {
                  seq: 2,
                  content: '',
                },
                {
                  seq: 3,
                  content: '',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
      ],
    },
    {
      part: 'Part 3',
      title: '',
      setQuestionList: [
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 32,
              seq: 32,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 33,
              seq: 33,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 34,
              seq: 34,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [{ seq: 1, content: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png' }],
          setQuestion: [
            {
              id: 35,
              seq: 35,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 36,
              seq: 36,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 37,
              seq: 37,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 38,
              seq: 38,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 39,
              seq: 39,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 40,
              seq: 40,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [{ seq: 1, content: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png' }],
          setQuestion: [
            {
              id: 41,
              seq: 41,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 42,
              seq: 42,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 43,
              seq: 43,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 44,
              seq: 44,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 45,
              seq: 45,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 46,
              seq: 46,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 47,
              seq: 47,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 48,
              seq: 48,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 49,
              seq: 49,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 50,
              seq: 50,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 51,
              seq: 51,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 52,
              seq: 52,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [{ seq: 1, content: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png' }],
          setQuestion: [
            {
              id: 53,
              seq: 53,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 54,
              seq: 54,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 55,
              seq: 55,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 56,
              seq: 56,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 57,
              seq: 57,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 58,
              seq: 58,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [{ seq: 1, content: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png' }],
          setQuestion: [
            {
              id: 59,
              seq: 59,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 60,
              seq: 60,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 61,
              seq: 61,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 62,
              seq: 62,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 63,
              seq: 63,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 64,
              seq: 64,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [{ seq: 1, content: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png' }],
          setQuestion: [
            {
              id: 65,
              seq: 65,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 66,
              seq: 66,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 67,
              seq: 67,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 68,
              seq: 68,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 69,
              seq: 69,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 70,
              seq: 70,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
      ],
    },
    {
      part: 'Part 4',
      title: '',
      setQuestionList: [
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 32,
              seq: 32,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 33,
              seq: 33,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 34,
              seq: 34,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [{ seq: 1, content: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png' }],
          setQuestion: [
            {
              id: 35,
              seq: 35,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 36,
              seq: 36,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 37,
              seq: 37,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 38,
              seq: 38,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 39,
              seq: 39,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 40,
              seq: 40,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [{ seq: 1, content: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png' }],
          setQuestion: [
            {
              id: 41,
              seq: 41,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 42,
              seq: 42,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 43,
              seq: 43,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 44,
              seq: 44,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 45,
              seq: 45,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 46,
              seq: 46,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 47,
              seq: 47,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 48,
              seq: 48,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 49,
              seq: 49,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 50,
              seq: 50,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 51,
              seq: 51,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 52,
              seq: 52,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [{ seq: 1, content: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png' }],
          setQuestion: [
            {
              id: 53,
              seq: 53,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 54,
              seq: 54,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 55,
              seq: 55,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 56,
              seq: 56,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 57,
              seq: 57,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 58,
              seq: 58,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [{ seq: 1, content: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png' }],
          setQuestion: [
            {
              id: 59,
              seq: 59,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 60,
              seq: 60,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 61,
              seq: 61,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 62,
              seq: 62,
              name: 'What is the woman preparing for?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A move to a new a city',
                },
                {
                  seq: 2,
                  content: 'A business trip',
                },
                {
                  seq: 3,
                  content: 'A building tour',
                },
                {
                  seq: 4,
                  content: 'A meeting with visiting colleagues',
                },
              ],
            },
            {
              id: 63,
              seq: 63,
              name: 'Who most likely is the man?',
              choiceList: [
                {
                  seq: 1,
                  content: 'An accountant',
                },
                {
                  seq: 2,
                  content: 'An administrative assistant',
                },
                {
                  seq: 3,
                  content: 'A marketing director',
                },
                {
                  seq: 4,
                  content: 'A company president',
                },
              ],
            },
            {
              id: 64,
              seq: 64,
              name: 'What does the woman want to pick up on Friday morning?',
              choiceList: [
                {
                  seq: 1,
                  content: 'A building map',
                },
                {
                  seq: 2,
                  content: 'A room key',
                },
                {
                  seq: 3,
                  content: 'An ID card',
                },
                {
                  seq: 4,
                  content: 'A parking pass',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [{ seq: 1, content: 'https://res.cloudinary.com/dt68ufvrr/image/upload/v1674054820/img_q9zucb.png' }],
          setQuestion: [
            {
              id: 65,
              seq: 65,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 66,
              seq: 66,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 67,
              seq: 67,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 68,
              seq: 68,
              name: "Look at the graphic. How much did the man's company charge for its service?",
              choiceList: [
                {
                  seq: 1,
                  content: '$4,456',
                },
                {
                  seq: 2,
                  content: '$1,300',
                },
                {
                  seq: 3,
                  content: '$10,200',
                },
                {
                  seq: 4,
                  content: '$400',
                },
              ],
            },
            {
              id: 69,
              seq: 69,
              name: 'Why does the man apologize?',
              choiceList: [
                {
                  seq: 1,
                  content: 'Business hours have changed.',
                },
                {
                  seq: 2,
                  content: 'A price was wrong.',
                },
                {
                  seq: 3,
                  content: 'Some staff arrived late.',
                },
                {
                  seq: 4,
                  content: 'A request could not be fulfilled.',
                },
              ],
            },
            {
              id: 70,
              seq: 70,
              name: 'What does the woman like about a venue?',
              choiceList: [
                {
                  seq: 1,
                  content: 'It has a nice view.',
                },
                {
                  seq: 2,
                  content: 'It is conveniently located.',
                },
                {
                  seq: 3,
                  content: 'It is tastefully decorated.',
                },
                {
                  seq: 4,
                  content: 'It can host large events.',
                },
              ],
            },
          ],
          audio: 'https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3',
        },
      ],
    },
    {
      part: 'Part 5',
      title: '',
      setQuestionList: [
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 101,
              seq: 101,
              name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
              choiceList: [
                {
                  seq: 1,
                  content: 'regional',
                },
                {
                  seq: 2,
                  content: 'regionally',
                },
                {
                  seq: 3,
                  content: 'region',
                },
                {
                  seq: 4,
                  content: 'regions',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 102,
              seq: 102,
              name: 'Income levels are rising in the _____ and surrounding areas.',
              choiceList: [
                {
                  seq: 1,
                  content: 'family',
                },
                {
                  seq: 2,
                  content: 'world',
                },
                {
                  seq: 3,
                  content: 'company',
                },
                {
                  seq: 4,
                  content: 'city',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 103,
              seq: 103,
              name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
              choiceList: [
                {
                  seq: 1,
                  content: 'you',
                },
                {
                  seq: 2,
                  content: 'yours',
                },
                {
                  seq: 3,
                  content: 'yourself',
                },
                {
                  seq: 4,
                  content: 'your',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 104,
              seq: 104,
              name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
              choiceList: [
                {
                  seq: 1,
                  content: 'up',
                },
                {
                  seq: 2,
                  content: 'except',
                },
                {
                  seq: 3,
                  content: 'onto',
                },
                {
                  seq: 4,
                  content: 'through',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 105,
              seq: 105,
              name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
              choiceList: [
                {
                  seq: 1,
                  content: 'to arrange',
                },
                {
                  seq: 2,
                  content: 'arranging',
                },
                {
                  seq: 3,
                  content: 'having arranged',
                },
                {
                  seq: 4,
                  content: 'arrangement',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 106,
              seq: 106,
              name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
              choiceList: [
                {
                  seq: 1,
                  content: 'regional',
                },
                {
                  seq: 2,
                  content: 'regionally',
                },
                {
                  seq: 3,
                  content: 'region',
                },
                {
                  seq: 4,
                  content: 'regions',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 107,
              seq: 107,
              name: 'Income levels are rising in the _____ and surrounding areas.',
              choiceList: [
                {
                  seq: 1,
                  content: 'family',
                },
                {
                  seq: 2,
                  content: 'world',
                },
                {
                  seq: 3,
                  content: 'company',
                },
                {
                  seq: 4,
                  content: 'city',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 108,
              seq: 108,
              name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
              choiceList: [
                {
                  seq: 1,
                  content: 'you',
                },
                {
                  seq: 2,
                  content: 'yours',
                },
                {
                  seq: 3,
                  content: 'yourself',
                },
                {
                  seq: 4,
                  content: 'your',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 109,
              seq: 109,
              name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
              choiceList: [
                {
                  seq: 1,
                  content: 'up',
                },
                {
                  seq: 2,
                  content: 'except',
                },
                {
                  seq: 3,
                  content: 'onto',
                },
                {
                  seq: 4,
                  content: 'through',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 111,
              seq: 110,
              name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
              choiceList: [
                {
                  seq: 1,
                  content: 'to arrange',
                },
                {
                  seq: 2,
                  content: 'arranging',
                },
                {
                  seq: 3,
                  content: 'having arranged',
                },
                {
                  seq: 4,
                  content: 'arrangement',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 111,
              seq: 111,
              name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
              choiceList: [
                {
                  seq: 1,
                  content: 'regional',
                },
                {
                  seq: 2,
                  content: 'regionally',
                },
                {
                  seq: 3,
                  content: 'region',
                },
                {
                  seq: 4,
                  content: 'regions',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 112,
              seq: 112,
              name: 'Income levels are rising in the _____ and surrounding areas.',
              choiceList: [
                {
                  seq: 1,
                  content: 'family',
                },
                {
                  seq: 2,
                  content: 'world',
                },
                {
                  seq: 3,
                  content: 'company',
                },
                {
                  seq: 4,
                  content: 'city',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 113,
              seq: 113,
              name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
              choiceList: [
                {
                  seq: 1,
                  content: 'you',
                },
                {
                  seq: 2,
                  content: 'yours',
                },
                {
                  seq: 3,
                  content: 'yourself',
                },
                {
                  seq: 4,
                  content: 'your',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 114,
              seq: 114,
              name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
              choiceList: [
                {
                  seq: 1,
                  content: 'up',
                },
                {
                  seq: 2,
                  content: 'except',
                },
                {
                  seq: 3,
                  content: 'onto',
                },
                {
                  seq: 4,
                  content: 'through',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 115,
              seq: 115,
              name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
              choiceList: [
                {
                  seq: 1,
                  content: 'to arrange',
                },
                {
                  seq: 2,
                  content: 'arranging',
                },
                {
                  seq: 3,
                  content: 'having arranged',
                },
                {
                  seq: 4,
                  content: 'arrangement',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 116,
              seq: 116,
              name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
              choiceList: [
                {
                  seq: 1,
                  content: 'regional',
                },
                {
                  seq: 2,
                  content: 'regionally',
                },
                {
                  seq: 3,
                  content: 'region',
                },
                {
                  seq: 4,
                  content: 'regions',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 117,
              seq: 117,
              name: 'Income levels are rising in the _____ and surrounding areas.',
              choiceList: [
                {
                  seq: 1,
                  content: 'family',
                },
                {
                  seq: 2,
                  content: 'world',
                },
                {
                  seq: 3,
                  content: 'company',
                },
                {
                  seq: 4,
                  content: 'city',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 118,
              seq: 118,
              name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
              choiceList: [
                {
                  seq: 1,
                  content: 'you',
                },
                {
                  seq: 2,
                  content: 'yours',
                },
                {
                  seq: 3,
                  content: 'yourself',
                },
                {
                  seq: 4,
                  content: 'your',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 119,
              seq: 119,
              name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
              choiceList: [
                {
                  seq: 1,
                  content: 'up',
                },
                {
                  seq: 2,
                  content: 'except',
                },
                {
                  seq: 3,
                  content: 'onto',
                },
                {
                  seq: 4,
                  content: 'through',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 120,
              seq: 120,
              name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
              choiceList: [
                {
                  seq: 1,
                  content: 'to arrange',
                },
                {
                  seq: 2,
                  content: 'arranging',
                },
                {
                  seq: 3,
                  content: 'having arranged',
                },
                {
                  seq: 4,
                  content: 'arrangement',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 121,
              seq: 121,
              name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
              choiceList: [
                {
                  seq: 1,
                  content: 'regional',
                },
                {
                  seq: 2,
                  content: 'regionally',
                },
                {
                  seq: 3,
                  content: 'region',
                },
                {
                  seq: 4,
                  content: 'regions',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 122,
              seq: 122,
              name: 'Income levels are rising in the _____ and surrounding areas.',
              choiceList: [
                {
                  seq: 1,
                  content: 'family',
                },
                {
                  seq: 2,
                  content: 'world',
                },
                {
                  seq: 3,
                  content: 'company',
                },
                {
                  seq: 4,
                  content: 'city',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 123,
              seq: 123,
              name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
              choiceList: [
                {
                  seq: 1,
                  content: 'you',
                },
                {
                  seq: 2,
                  content: 'yours',
                },
                {
                  seq: 3,
                  content: 'yourself',
                },
                {
                  seq: 4,
                  content: 'your',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 124,
              seq: 124,
              name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
              choiceList: [
                {
                  seq: 1,
                  content: 'up',
                },
                {
                  seq: 2,
                  content: 'except',
                },
                {
                  seq: 3,
                  content: 'onto',
                },
                {
                  seq: 4,
                  content: 'through',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 125,
              seq: 125,
              name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
              choiceList: [
                {
                  seq: 1,
                  content: 'to arrange',
                },
                {
                  seq: 2,
                  content: 'arranging',
                },
                {
                  seq: 3,
                  content: 'having arranged',
                },
                {
                  seq: 4,
                  content: 'arrangement',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 126,
              seq: 126,
              name: 'Mougey Fine Gifts is known for its large range of _____ goods.',
              choiceList: [
                {
                  seq: 1,
                  content: 'regional',
                },
                {
                  seq: 2,
                  content: 'regionally',
                },
                {
                  seq: 3,
                  content: 'region',
                },
                {
                  seq: 4,
                  content: 'regions',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 127,
              seq: 127,
              name: 'Income levels are rising in the _____ and surrounding areas.',
              choiceList: [
                {
                  seq: 1,
                  content: 'family',
                },
                {
                  seq: 2,
                  content: 'world',
                },
                {
                  seq: 3,
                  content: 'company',
                },
                {
                  seq: 4,
                  content: 'city',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 128,
              seq: 128,
              name: 'Since we had a recent rate change, expect _____ next electricity bill to be slightly lower.',
              choiceList: [
                {
                  seq: 1,
                  content: 'you',
                },
                {
                  seq: 2,
                  content: 'yours',
                },
                {
                  seq: 3,
                  content: 'yourself',
                },
                {
                  seq: 4,
                  content: 'your',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 129,
              seq: 129,
              name: 'Hotel guests have a lovely view of the ocean _____ the south-facing windows.',
              choiceList: [
                {
                  seq: 1,
                  content: 'up',
                },
                {
                  seq: 2,
                  content: 'except',
                },
                {
                  seq: 3,
                  content: 'onto',
                },
                {
                  seq: 4,
                  content: 'through',
                },
              ],
            },
          ],
          audio: '',
        },
        {
          title: '',
          side: [],
          setQuestion: [
            {
              id: 130,
              seq: 130,
              name: 'Mr. Kim would like _____ a meeting about the Jasper account as soon as possible.',
              choiceList: [
                {
                  seq: 1,
                  content: 'to arrange',
                },
                {
                  seq: 2,
                  content: 'arranging',
                },
                {
                  seq: 3,
                  content: 'having arranged',
                },
                {
                  seq: 4,
                  content: 'arrangement',
                },
              ],
            },
          ],
          audio: '',
        },
      ],
    },
    {
      part: 'Part 6',
      title: '',
      setQuestionList: [
        {
          title: 'refer to following notice',
          side: [
            {
              content:
                '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
            },
          ],
          setQuestion: [
            {
              id: 131,
              seq: 131,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'serve',
                },
                {
                  seq: 2,
                  content: 'served',
                },
                {
                  seq: 3,
                  content: 'server',
                },
                {
                  seq: 4,
                  content: 'service',
                },
              ],
            },
            {
              id: 132,
              seq: 132,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'Along',
                },
                {
                  seq: 2,
                  content: 'During',
                },
                {
                  seq: 3,
                  content: 'Without',
                },
                {
                  seq: 4,
                  content: 'Between',
                },
              ],
            },
            {
              id: 133,
              seq: 133,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'apologize',
                },
                {
                  seq: 2,
                  content: 'organize',
                },
                {
                  seq: 3,
                  content: 'realize',
                },
                {
                  seq: 4,
                  content: 'recognize',
                },
              ],
            },
            {
              id: 134,
              seq: 134,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'If you would like to join our property management team, call us today.',
                },
                {
                  seq: 2,
                  content: 'Thank you for your patience while the main lobby is being painted.',
                },
                {
                  seq: 3,
                  content: 'Please do not attempt to access the north lobby on these days.',
                },
                {
                  seq: 4,
                  content: 'Questions or comments may be directed to the Management office.',
                },
              ],
            },
          ],
        },
        {
          title: 'refer to following notice',
          side: [
            {
              content:
                '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
            },
          ],
          setQuestion: [
            {
              id: 135,
              seq: 135,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'serve',
                },
                {
                  seq: 2,
                  content: 'served',
                },
                {
                  seq: 3,
                  content: 'server',
                },
                {
                  seq: 4,
                  content: 'service',
                },
              ],
            },
            {
              id: 136,
              seq: 136,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'Along',
                },
                {
                  seq: 2,
                  content: 'During',
                },
                {
                  seq: 3,
                  content: 'Without',
                },
                {
                  seq: 4,
                  content: 'Between',
                },
              ],
            },
            {
              id: 137,
              seq: 137,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'apologize',
                },
                {
                  seq: 2,
                  content: 'organize',
                },
                {
                  seq: 3,
                  content: 'realize',
                },
                {
                  seq: 4,
                  content: 'recognize',
                },
              ],
            },
            {
              id: 138,
              seq: 138,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'If you would like to join our property management team, call us today.',
                },
                {
                  seq: 2,
                  content: 'Thank you for your patience while the main lobby is being painted.',
                },
                {
                  seq: 3,
                  content: 'Please do not attempt to access the north lobby on these days.',
                },
                {
                  seq: 4,
                  content: 'Questions or comments may be directed to the Management office.',
                },
              ],
            },
          ],
        },
        {
          title: 'refer to following notice',
          side: [
            {
              content:
                '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
            },
          ],
          setQuestion: [
            {
              id: 139,
              seq: 139,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'serve',
                },
                {
                  seq: 2,
                  content: 'served',
                },
                {
                  seq: 3,
                  content: 'server',
                },
                {
                  seq: 4,
                  content: 'service',
                },
              ],
            },
            {
              id: 140,
              seq: 140,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'Along',
                },
                {
                  seq: 2,
                  content: 'During',
                },
                {
                  seq: 3,
                  content: 'Without',
                },
                {
                  seq: 4,
                  content: 'Between',
                },
              ],
            },
            {
              id: 141,
              seq: 141,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'apologize',
                },
                {
                  seq: 2,
                  content: 'organize',
                },
                {
                  seq: 3,
                  content: 'realize',
                },
                {
                  seq: 4,
                  content: 'recognize',
                },
              ],
            },
            {
              id: 142,
              seq: 142,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'If you would like to join our property management team, call us today.',
                },
                {
                  seq: 2,
                  content: 'Thank you for your patience while the main lobby is being painted.',
                },
                {
                  seq: 3,
                  content: 'Please do not attempt to access the north lobby on these days.',
                },
                {
                  seq: 4,
                  content: 'Questions or comments may be directed to the Management office.',
                },
              ],
            },
          ],
        },
        {
          title: 'refer to following notice',
          side: [
            {
              content:
                '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
            },
          ],
          setQuestion: [
            {
              id: 143,
              seq: 143,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'serve',
                },
                {
                  seq: 2,
                  content: 'served',
                },
                {
                  seq: 3,
                  content: 'server',
                },
                {
                  seq: 4,
                  content: 'service',
                },
              ],
            },
            {
              id: 144,
              seq: 144,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'Along',
                },
                {
                  seq: 2,
                  content: 'During',
                },
                {
                  seq: 3,
                  content: 'Without',
                },
                {
                  seq: 4,
                  content: 'Between',
                },
              ],
            },
            {
              id: 145,
              seq: 145,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'apologize',
                },
                {
                  seq: 2,
                  content: 'organize',
                },
                {
                  seq: 3,
                  content: 'realize',
                },
                {
                  seq: 4,
                  content: 'recognize',
                },
              ],
            },
            {
              id: 146,
              seq: 146,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'If you would like to join our property management team, call us today.',
                },
                {
                  seq: 2,
                  content: 'Thank you for your patience while the main lobby is being painted.',
                },
                {
                  seq: 3,
                  content: 'Please do not attempt to access the north lobby on these days.',
                },
                {
                  seq: 4,
                  content: 'Questions or comments may be directed to the Management office.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      part: 'Part 7',
      title: '',
      setQuestionList: [
        {
          title: 'refer to following notice',
          side: [
            {
              content:
                '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
            },
          ],
          setQuestion: [
            {
              id: 131,
              seq: 131,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'serve',
                },
                {
                  seq: 2,
                  content: 'served',
                },
                {
                  seq: 3,
                  content: 'server',
                },
                {
                  seq: 4,
                  content: 'service',
                },
              ],
            },
            {
              id: 132,
              seq: 132,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'Along',
                },
                {
                  seq: 2,
                  content: 'During',
                },
                {
                  seq: 3,
                  content: 'Without',
                },
                {
                  seq: 4,
                  content: 'Between',
                },
              ],
            },
            {
              id: 133,
              seq: 133,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'apologize',
                },
                {
                  seq: 2,
                  content: 'organize',
                },
                {
                  seq: 3,
                  content: 'realize',
                },
                {
                  seq: 4,
                  content: 'recognize',
                },
              ],
            },
            {
              id: 134,
              seq: 134,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'If you would like to join our property management team, call us today.',
                },
                {
                  seq: 2,
                  content: 'Thank you for your patience while the main lobby is being painted.',
                },
                {
                  seq: 3,
                  content: 'Please do not attempt to access the north lobby on these days.',
                },
                {
                  seq: 4,
                  content: 'Questions or comments may be directed to the Management office.',
                },
              ],
            },
          ],
        },
        {
          title: 'refer to following notice',
          side: [
            {
              content:
                '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
            },
          ],
          setQuestion: [
            {
              id: 135,
              seq: 135,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'serve',
                },
                {
                  seq: 2,
                  content: 'served',
                },
                {
                  seq: 3,
                  content: 'server',
                },
                {
                  seq: 4,
                  content: 'service',
                },
              ],
            },
            {
              id: 136,
              seq: 136,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'Along',
                },
                {
                  seq: 2,
                  content: 'During',
                },
                {
                  seq: 3,
                  content: 'Without',
                },
                {
                  seq: 4,
                  content: 'Between',
                },
              ],
            },
            {
              id: 137,
              seq: 137,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'apologize',
                },
                {
                  seq: 2,
                  content: 'organize',
                },
                {
                  seq: 3,
                  content: 'realize',
                },
                {
                  seq: 4,
                  content: 'recognize',
                },
              ],
            },
            {
              id: 138,
              seq: 138,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'If you would like to join our property management team, call us today.',
                },
                {
                  seq: 2,
                  content: 'Thank you for your patience while the main lobby is being painted.',
                },
                {
                  seq: 3,
                  content: 'Please do not attempt to access the north lobby on these days.',
                },
                {
                  seq: 4,
                  content: 'Questions or comments may be directed to the Management office.',
                },
              ],
            },
          ],
        },
        {
          title: 'refer to following notice',
          side: [
            {
              content:
                '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
            },
          ],
          setQuestion: [
            {
              id: 139,
              seq: 139,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'serve',
                },
                {
                  seq: 2,
                  content: 'served',
                },
                {
                  seq: 3,
                  content: 'server',
                },
                {
                  seq: 4,
                  content: 'service',
                },
              ],
            },
            {
              id: 140,
              seq: 140,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'Along',
                },
                {
                  seq: 2,
                  content: 'During',
                },
                {
                  seq: 3,
                  content: 'Without',
                },
                {
                  seq: 4,
                  content: 'Between',
                },
              ],
            },
            {
              id: 141,
              seq: 141,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'apologize',
                },
                {
                  seq: 2,
                  content: 'organize',
                },
                {
                  seq: 3,
                  content: 'realize',
                },
                {
                  seq: 4,
                  content: 'recognize',
                },
              ],
            },
            {
              id: 142,
              seq: 142,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'If you would like to join our property management team, call us today.',
                },
                {
                  seq: 2,
                  content: 'Thank you for your patience while the main lobby is being painted.',
                },
                {
                  seq: 3,
                  content: 'Please do not attempt to access the north lobby on these days.',
                },
                {
                  seq: 4,
                  content: 'Questions or comments may be directed to the Management office.',
                },
              ],
            },
          ],
        },
        {
          title: 'refer to following notice',
          side: [
            {
              content:
                '<h3><strong>NOTICE</strong></h3><p>To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132) this time, the restrooms will be out of order, so tenants and their guests should instead use the facilities in the north lobby.</p><p>We ----- (133) for any inconvenience this might cause. -----(134).</p><p>Denville Property Management Partners</p>',
            },
          ],
          setQuestion: [
            {
              id: 143,
              seq: 143,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'serve',
                },
                {
                  seq: 2,
                  content: 'served',
                },
                {
                  seq: 3,
                  content: 'server',
                },
                {
                  seq: 4,
                  content: 'service',
                },
              ],
            },
            {
              id: 144,
              seq: 144,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'Along',
                },
                {
                  seq: 2,
                  content: 'During',
                },
                {
                  seq: 3,
                  content: 'Without',
                },
                {
                  seq: 4,
                  content: 'Between',
                },
              ],
            },
            {
              id: 145,
              seq: 145,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'apologize',
                },
                {
                  seq: 2,
                  content: 'organize',
                },
                {
                  seq: 3,
                  content: 'realize',
                },
                {
                  seq: 4,
                  content: 'recognize',
                },
              ],
            },
            {
              id: 146,
              seq: 146,
              name: '',
              choiceList: [
                {
                  seq: 1,
                  content: 'If you would like to join our property management team, call us today.',
                },
                {
                  seq: 2,
                  content: 'Thank you for your patience while the main lobby is being painted.',
                },
                {
                  seq: 3,
                  content: 'Please do not attempt to access the north lobby on these days.',
                },
                {
                  seq: 4,
                  content: 'Questions or comments may be directed to the Management office.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
