import { Breadcrumb, Button, Tip } from 'components/ui';
import Container from 'layouts/components/Container';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TbRotateClockwise2 } from 'react-icons/tb';
import FlashcardSinglePractice from './FlashcardSinglePractice';

const FlashcardPractice = () => {
  const { flashcardSetId } = useParams();

  const hierarchy = [
    <Link to="/flashcards">Flashcard</Link>,
    <Link to={`/flashcards/${flashcardSetId}`}>600 TOEIC w...</Link>,
    'Hiện tại',
  ];

  return (
    <Container>
      <div className="flex justify-center">
        <div className="max-w-[820px] w-full my-8">
          <Breadcrumb hierarchy={hierarchy} />

          <h3 className="font-extrabold text-h3 mt-4">Luyện tập - 600 TOEIC words: Entertainment</h3>

          <div className="mt-4 mb-8">
            <Tip>Tips: Mỗi ngày bạn chỉ nên học 20 từ mới. Đây là số lượng từ phù hợp để bạn có thể học hiệu quả.</Tip>
          </div>

          {/* Practice Area */}
          <FlashcardSinglePractice newWord />

          <div className="flex mt-6">
            <Button type="danger">Báo lỗi</Button>
            <Button className="ml-auto" type="default">
              Đánh dấu đã ôn từ này
            </Button>
            <Button className="ml-6" rightIcon={<TbRotateClockwise2 size="24px" />}>
              Từ tiếp theo
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FlashcardPractice;
