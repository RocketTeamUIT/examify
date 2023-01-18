import { Pagination } from 'components/ui';
import Container from 'layouts/components/Container';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddFlashcardModal from './AddFlashcardModal';
import AddMultipleFlashcardsModal from './AddMultipleFlashcardsModal';
import FlashcardSetDetailHeader from './FlashcardSetDetailHeader';
import FlashcardSingle from './FlashcardSingle';
import useFetchFlashcardSetDetail from './hooks/useFetchFlashcardSetDetail';
import useFetchFlashcardsInSet from './hooks/useFetchFlashcardsInSet';
import ShareFlashcardModal from './ShareFlashcardModal';

const FlashcardSetDetail = () => {
  const [selected, setSelected] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showAddMultiple, setShowAddMultiple] = useState(false);
  const [search, setSearch] = useState('');
  const { flashcardSetId } = useParams();
  const { detail, fetchData: fetchFlashcardSet, setDetail } = useFetchFlashcardSetDetail(flashcardSetId);
  const { flashcards, fetchData } = useFetchFlashcardsInSet(flashcardSetId, selected + 1, search);

  const toggleShareModal = () => {
    setShowShare((prev) => !prev);
  };

  const toggleAddModal = () => {
    setShowAdd((prev) => !prev);
  };

  const toggleAddMultipleModal = () => {
    setShowAddMultiple((prev) => !prev);
  };

  function onSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <Container>
      <div className="flex justify-center">
        <div className="max-w-[820px] w-full my-8">
          <FlashcardSetDetailHeader
            detail={detail}
            setDetail={setDetail}
            isOwner={detail.isOwner}
            showShareModal={toggleShareModal}
            showAddModal={toggleAddModal}
            showAddMultipleModal={toggleAddMultipleModal}
            onSearch={onSearch}
          />

          <div className="border-t w-full border-br_gray my-6" />

          {search && <h4 className="text-h4 font-bold mb-6 text-center">Hiển thị kết quả cho '{search}'</h4>}

          <ul className="space-y-8">
            {flashcards?.map((flashcard, index) => (
              <FlashcardSingle {...flashcard} isOwner={detail.isOwner} key={index} onMark={fetchFlashcardSet} />
            ))}
          </ul>

          <div className="flex justify-center mt-7">
            <Pagination
              length={Math.ceil((detail.words_count || 0) / 10)}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>

        <AddFlashcardModal onSubmit={fetchData} isShowing={showAdd} hide={toggleAddModal} />
        <AddMultipleFlashcardsModal isShowing={showAddMultiple} hide={toggleAddMultipleModal} />
        <ShareFlashcardModal isShowing={showShare} hide={toggleShareModal} />
      </div>
    </Container>
  );
};

export default FlashcardSetDetail;
