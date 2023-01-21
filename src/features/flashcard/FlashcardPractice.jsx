import { Breadcrumb, Button, Tip } from 'components/ui';
import Container from 'layouts/components/Container';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TbRotateClockwise2 } from 'react-icons/tb';
import FlashcardSinglePractice from './FlashcardSinglePractice';
import useFetchPracticeFlashcard from './hooks/useFetchPracticeFlashcard';
import useFetchFlashcardSetDetail from './hooks/useFetchFlashcardSetDetail';
import { markAsLearntService } from './services/flashcard';
import useAxiosWithToken from 'hooks/useAxiosWithToken';
import { toast } from 'react-toastify';

const FlashcardPractice = () => {
  const { flashcardSetId } = useParams();
  const { detail } = useFetchFlashcardSetDetail(flashcardSetId);
  const { flashcard, fetchData } = useFetchPracticeFlashcard(flashcardSetId);
  const [flip, setFlip] = useState(false);
  const axios = useAxiosWithToken();

  const hierarchy = [
    <Link to="/flashcards">Flashcard</Link>,
    <Link to={`/flashcards/${flashcardSetId}`}>{detail.name}</Link>,
    'Hiện tại',
  ];

  async function mark() {
    try {
      setFlip(false);
      await markAsLearntService({ axios, flashcardId: flashcard.fc_id });
      await fetchData();
      toast.success('Đánh dấu thành công');
    } catch (error) {
      toast.error('Đánh dấu thất bại');
      console.log(error);
    }
  }

  return (
    <Container>
      <div className="flex justify-center">
        <div className="max-w-[820px] w-full my-8">
          <Breadcrumb hierarchy={hierarchy} />

          <h3 className="font-extrabold text-h3 mt-4">{detail.name}</h3>

          <div className="mt-4 mb-8">
            <Tip>Tips: Mỗi ngày bạn chỉ nên học 20 từ mới. Đây là số lượng từ phù hợp để bạn có thể học hiệu quả.</Tip>
          </div>

          {/* Practice Area */}
          <FlashcardSinglePractice flip={flip} setFlip={setFlip} flashcard={flashcard} />

          <div className="flex mt-6">
            <Button type="danger">Báo lỗi</Button>
            <Button className="ml-auto" type="default" onClick={mark}>
              Đánh dấu đã ôn từ này
            </Button>
            <Button onClick={fetchData} className="ml-6" rightIcon={<TbRotateClockwise2 size="24px" />}>
              Từ tiếp theo
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FlashcardPractice;
