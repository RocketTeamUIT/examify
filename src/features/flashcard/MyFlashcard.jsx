import { Button, Tip } from 'components/ui';
import { RequireLoginLayout } from 'layouts';
import React from 'react';
import { Link } from 'react-router-dom';
import FlashcardSetList from './FlashcardSetList';
import useFetchMyFlashcards from './hooks/useFetchMyFlashcards';

const MyFlashcard = () => {
  const { flashcardSets, addSet } = useFetchMyFlashcards();

  return (
    <RequireLoginLayout>
      <div className="my-[60px]">
        {(flashcardSets.recent || []).length > 0 && (
          <>
            <h4 className="text-h4 font-bold mb-4">Đã học gần đây</h4>
            <FlashcardSetList hideType={false} flashcardSets={flashcardSets.recent || []} hideCreate />
          </>
        )}

        <h4 className="text-h4 font-bold mt-10 mb-4">Các bộ của bạn</h4>
        <FlashcardSetList flashcardSets={flashcardSets?.sets || []} addSet={addSet} />

        <div className="mt-11">
          <Tip>
            Tips: Bạn có thể thêm một Flashcard mới bằng cách bôi đen (highlight) các từ trong trong trang web này.
          </Tip>
        </div>

        <div className="mt-11">
          <p className="font-semibold text-lg mb-4">Muốn tìm thêm những bộ Flashcard khác?</p>
          <Link to="/flashcards/explore">
            <Button>Khám phá ngay</Button>
          </Link>
        </div>
      </div>
    </RequireLoginLayout>
  );
};

export default MyFlashcard;
