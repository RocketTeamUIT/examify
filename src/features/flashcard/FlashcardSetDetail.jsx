import { Pagination } from 'components/ui';
import Container from 'layouts/components/Container';
import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import AddFlashcardModal from './AddFlashcardModal';
import AddMultipleFlashcardsModal from './AddMultipleFlashcardsModal';
import FlashcardSetDetailHeader from './FlashcardSetDetailHeader';
import FlashcardSingle from './FlashcardSingle';
import useFetchFlashcardSetDetail from './hooks/useFetchFlashcardSetDetail';
import useFetchFlashcardsInSet from './hooks/useFetchFlashcardsInSet';
import ShareFlashcardModal from './ShareFlashcardModal';
import EmptyState from 'assets/images/empty-state.jpg';
import { FaRegSadCry } from 'react-icons/fa';
import classNames from 'classnames';

const initialUpdate = {
  isUpdate: false,
  initialData: {},
};

const FlashcardSetDetail = ({ pure = false, flashcardSetId: outerFlashcardSetId }) => {
  const [showShare, setShowShare] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showAddMultiple, setShowAddMultiple] = useState(false);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [update, setUpdate] = useState(initialUpdate);
  const page = searchParams.get('p');
  const { flashcardSetId } = useParams();
  const {
    detail,
    fetchData: fetchFlashcardSet,
    setDetail,
  } = useFetchFlashcardSetDetail(outerFlashcardSetId || flashcardSetId);
  const { flashcards, fetchData } = useFetchFlashcardsInSet(outerFlashcardSetId || flashcardSetId, page, search);

  const toggleShareModal = () => {
    setShowShare((prev) => !prev);
  };

  const toggleAddModal = () => {
    if (showAdd) {
      setUpdate(initialUpdate);
    }
    setShowAdd((prev) => !prev);
  };

  const toggleAddMultipleModal = () => {
    setShowAddMultiple((prev) => !prev);
  };

  function onSearch(e) {
    setSearch(e.target.value);
  }

  async function handleCreate() {
    await Promise.all([fetchData(), fetchFlashcardSet()]);
  }

  function paginate(page) {
    console.log('🚀 ~ file: FlashcardSetDetail.jsx:47 ~ paginate ~ page', page);
    if (page === 0) {
      searchParams.delete('p');
      setSearchParams(searchParams);
    } else {
      setSearchParams({
        p: page + 1,
      });
    }
  }

  const Outer = pure ? React.Fragment : Container;

  function toggleUpdateModal(index) {
    toggleAddModal();
    setUpdate({
      isUpdate: true,
      initialData: flashcards[index],
    });
  }

  return (
    <Outer>
      <div className="flex justify-center">
        <div className={classNames('w-full min-h-[600px]', !pure && 'max-w-[820px] my-8')}>
          {detail.name ? (
            <>
              {!pure && (
                <>
                  <FlashcardSetDetailHeader
                    hideBreadcrumb={pure}
                    detail={detail}
                    setDetail={setDetail}
                    isOwner={detail.isOwner}
                    showShareModal={toggleShareModal}
                    showAddModal={toggleAddModal}
                    showAddMultipleModal={toggleAddMultipleModal}
                    onSearch={onSearch}
                  />
                  <div className="border-t w-full border-br_gray my-6" />
                </>
              )}

              {search && <h4 className="text-h4 font-bold mb-6 text-center">Hiển thị kết quả cho '{search}'</h4>}

              <ul className="space-y-8">
                {flashcards?.map((flashcard, index) => (
                  <FlashcardSingle
                    {...flashcard}
                    toggleAddModal={() => toggleUpdateModal(index)}
                    onDelete={fetchData}
                    isOwner={detail.isOwner}
                    key={index}
                    onMark={fetchFlashcardSet}
                  />
                ))}
              </ul>

              <div className="flex justify-center mt-7">
                <Pagination
                  length={Math.ceil((detail.words_count || 0) / 10)}
                  selected={(page || 1) - 1}
                  setSelected={paginate}
                />
              </div>
            </>
          ) : (
            <>
              <img className="m-auto max-w-[500px]" src={EmptyState} alt="You don't have permission to access this" />
              <h3 className="text-h3 font-semibold justify-center my-5 flex items-center gap-2 text-t_dark">
                Bạn không có quyền truy cập <FaRegSadCry />
              </h3>
            </>
          )}
        </div>

        <AddFlashcardModal
          isUpdate={update.isUpdate}
          initialData={update.initialData}
          onUpdate={fetchData}
          onSubmit={handleCreate}
          isShowing={showAdd}
          hide={toggleAddModal}
        />
        <AddMultipleFlashcardsModal onCreate={handleCreate} isShowing={showAddMultiple} hide={toggleAddMultipleModal} />
        <ShareFlashcardModal isShowing={showShare} hide={toggleShareModal} />
      </div>
    </Outer>
  );
};

export default FlashcardSetDetail;
