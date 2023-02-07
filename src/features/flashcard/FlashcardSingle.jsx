import { Confirmation, PureDropdown, Tag } from 'components/ui';
import React, { useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsVolumeDown } from 'react-icons/bs';
import { HiOutlineDotsHorizontal, HiTrash } from 'react-icons/hi';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { deleteFlashcardService, markAsLearntService, markAsUnlearntService } from './services/flashcard';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import classNames from 'classnames';

const TYPES = {
  noun: 'n',
  pronoun: 'pron',
  verb: 'v',
  adjective: 'adj',
  adverb: 'adv',
  preposition: 'prep',
  conjunction: 'conj',
  interjection: 'interj',
};

const initialState = {
  flashcardId: -1,
  learnt: false,
  word: '',
  meaning: '',
  typeOfWord: 'noun',
  pronounce: '',
  example: '',
  note: '',
  image: '',
};

const FlashcardSingle = (props) => {
  const {
    learnt,
    word,
    meaning,
    type_of_word,
    pronounce,
    example,
    note,
    image,
    fc_id,
    onMark,
    isOwner,
    onDelete,
    audio,
    toggleAddModal,
  } = props;
  const [data, setData] = useState(initialState);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const axios = useAxiosPrivate();

  useEffect(() => {
    setData({
      learnt,
      word,
      meaning,
      typeOfWord: type_of_word,
      pronounce,
      example,
      note,
      image,
      flashcardId: fc_id,
    });
  }, [learnt, word, meaning, type_of_word, pronounce, example, note, image, fc_id]);

  const typeOfWord = TYPES[data.typeOfWord];

  const ACTION_LIST = [
    {
      title: data.learnt ? 'Chưa học xong từ này' : 'Đánh dấu là đã học',
      func: async () => {
        try {
          if (!data.learnt) {
            await markAsLearntService({ flashcardId: data.flashcardId, axios });
          } else {
            await markAsUnlearntService({ flashcardId: data.flashcardId, axios });
          }
          setData((prev) => ({
            ...prev,
            learnt: !prev.learnt,
          }));
          onMark();
        } catch (error) {
          console.log(error);
        }
      },
      icon: data.learnt ? <AiOutlineCloseCircle /> : <AiOutlineCheckCircle />,
    },
  ];

  if (isOwner) {
    ACTION_LIST.push(
      {
        title: 'Chỉnh sửa',
        func: toggleAddModal,
        icon: <MdOutlineModeEditOutline />,
      },
      {
        title: 'Xoá flashcard này',
        func: toggleShowConfirm,
        danger: true,
        icon: <HiTrash />,
      },
    );
  }

  const show = () => {
    setShowDropdown(true);
  };

  const hide = () => {
    setShowDropdown(false);
  };

  async function deleteFlashcard() {
    try {
      await deleteFlashcardService({ flashcardId: fc_id, axios });
      await onDelete();
      toast.success('Xoá thành công');
    } catch (error) {
      toast.error('Xoá thất bại');
      console.log(error);
    }
  }

  function toggleShowConfirm() {
    setShowConfirm(true);
  }

  function toggleHideConfirm() {
    setShowConfirm(false);
  }

  function play() {
    new Audio(audio).play();
  }

  return (
    <>
      <li className="bg-white rounded-lg shadow-sd_large p-5 grid grid-cols-12 gap-x-5 relative">
        <header className="col-span-full flex items-center justify-between relative">
          <h4 className="text-h4 font-bold uppercase">
            {data.word} <span className="font-normal lowercase">({typeOfWord})</span>
          </h4>
          <PureDropdown visible={showDropdown} hide={hide} actionList={ACTION_LIST}>
            <button className="p-2 rounded-full -mr-2 hover:bg-bg_light_gray_5 transition" onClick={show}>
              <HiOutlineDotsHorizontal className="h-5 w-5" />
            </button>
          </PureDropdown>
          <Confirmation
            onConfirm={deleteFlashcard}
            right="right-0"
            top="top-12"
            showing={showConfirm}
            hide={toggleHideConfirm}
          >
            Xác nhận xoá flashcard này?
          </Confirmation>
        </header>

        {/* Description */}
        <div className={classNames(data.image ? 'col-span-8' : 'col-span-full')}>
          <div className="flex items-center gap-4 mb-2 mt-0.5">
            {data.pronounce && <p className="font-medium text-md text-t_dark">{data.pronounce}</p>}
            {audio && (
              <button
                className="w-7 h-7 rounded-full bg-ac_orange flex items-center justify-center bg-opacity-20 flex-shrink-0"
                onClick={play}
              >
                <BsVolumeDown className="w-6 h-6 text-ac_dark_blue" />
              </button>
            )}
          </div>

          <p className="text-lg">{data.meaning}</p>

          {data.example && (
            <div className="mt-[14px]">
              <b className="italic font-semibold text-md mb-1">Ví dụ</b>
              <p className="text-md">{data.example}</p>
            </div>
          )}

          {data.note && (
            <div className="mt-2">
              <b className="italic font-semibold text-md mb-1">Ghi chú</b>
              <p className="text-md">{data.note}</p>
            </div>
          )}
        </div>

        {data.image && (
          <aside className="col-span-4 rounded-lg border border-br_gray overflow-hidden aspect-[5/4]">
            <img src={data.image} alt="Bocchi the rock" className="w-full h-full object-cover" />
          </aside>
        )}

        {data.learnt && (
          <div className="absolute left-5 -translate-y-1/2 rounded-full bg-white">
            <Tag color="green" width="w-[91px]">
              <span className="text-md">Đã học</span>
            </Tag>
          </div>
        )}
      </li>
    </>
  );
};

export default FlashcardSingle;
