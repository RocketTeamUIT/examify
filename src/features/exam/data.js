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

export const durationList = [
  {
    name: '5 phút',
    func: () => {
      console.log('5 phút');
    },
  },
  {
    name: '10 phút',
    func: () => {
      console.log('10 phút');
    },
  },
  {
    name: '15 phút',
    func: () => {
      console.log('5 phút');
    },
  },
  {
    name: '20 phút',
    func: () => {
      console.log('10 phút');
    },
  },
  {
    name: '25 phút',
    func: () => {
      console.log('5 phút');
    },
  },
  {
    name: '30 phút',
    func: () => {
      console.log('10 phút');
    },
  },
  {
    name: '35 phút',
    func: () => {
      console.log('5 phút');
    },
  },
  {
    name: '40 phút',
    func: () => {
      console.log('10 phút');
    },
  },
  {
    name: '45 phút',
    func: () => {
      console.log('5 phút');
    },
  },
  {
    name: '50 phút',
    func: () => {
      console.log('10 phút');
    },
  },
  {
    name: '55 phút',
    func: () => {
      console.log('5 phút');
    },
  },
  {
    name: '60 phút',
    func: () => {
      console.log('10 phút');
    },
  },
];

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

export const part5 = [
  {
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
    element: <LayoutThree />,
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
    element: <LayoutThree />,
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
    element: <LayoutFour />,
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
    element: <LayoutFour />,
  },
];
