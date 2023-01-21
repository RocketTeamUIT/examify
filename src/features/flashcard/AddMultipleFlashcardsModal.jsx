import { Button, Modal } from 'components/ui';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import jspreadsheet from 'jspreadsheet-ce';
import { uploadImageService } from 'lib/image';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createBulkFlashcardService } from './services/flashcard';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { getWordAudioService } from 'lib/dictionary';

const OPTIONS = {
  data: [[]],
  defaultColAlign: 'left',
  minDimensions: [0, 2],
  columns: [
    {
      title: 'Từ',
      type: 'text',
      width: 150,
    },
    {
      title: 'Loại từ',
      type: 'dropdown',
      source: ['Danh từ', 'Đại từ', 'Động từ', 'Tính từ', 'Trạng từ', 'Giới từ', 'Liên từ', 'Thán từ'],
      width: 150,
    },
    {
      title: 'Nghĩa',
      type: 'text',
      width: 200,
    },
    {
      title: 'Phiên âm',
      type: 'text',
      width: 150,
    },
    {
      title: 'Ảnh',
      type: 'image',
      width: 100,
    },
    {
      title: 'Ví dụ',
      type: 'textarea',
      width: 244,
    },
    {
      title: 'Ghi chú',
      type: 'text',
      width: 200,
    },
  ],
};

const AddMultipleFlashcardsModal = (props) => {
  const { isShowing, hide, onCreate } = props;
  const [loading, setLoading] = useState(false);
  const { flashcardSetId } = useParams();
  const axios = useAxiosPrivate();
  const jRef = useRef(null);

  useEffect(() => {
    if (!jRef.current.jspreadsheet) {
      jspreadsheet(jRef.current, OPTIONS);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const data = await formatData(jRef.current.jspreadsheet.getData());
      await createBulkFlashcardService({ axios, data });
      await onCreate();
      toast.success('Các flashcard đã được thêm thành công');
      hide();
    } catch (error) {
      toast.error('Thêm thất bại');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  async function formatData(data) {
    const promises = [];
    const audioPromises = [];
    let URLs = [];
    let audios = [];

    try {
      data.forEach((item) => {
        if (item[4]) {
          promises.push(uploadImageService(item[4], 'examify'));
        } else {
          promises.push(Promise.resolve());
        }

        audioPromises.push(getWordAudioService(item[0]));
      });
      const response = await Promise.all(promises);
      const audioResponse = await Promise.allSettled(audioPromises);
      URLs = response.map((item) => (item ? item.data.url : ''));
      audios = audioResponse.map((item) => getAudioObj(item));
    } catch (error) {
      console.log(error);
    }

    return data.map((item, index) => {
      let [word, typeOfWord, meaning, pronounce, , example, note] = item;
      switch (typeOfWord) {
        case 'Danh từ':
          typeOfWord = 'noun';
          break;
        case 'Đại từ':
          typeOfWord = 'pronoun';
          break;
        case 'Động từ':
          typeOfWord = 'verb';
          break;
        case 'Tính từ':
          typeOfWord = 'adjective';
          break;
        case 'Trạng từ':
          typeOfWord = 'adverb';
          break;
        case 'Giới từ':
          typeOfWord = 'preposition';
          break;
        case 'Liên từ':
          typeOfWord = 'conjunction';
          break;
        case 'Thán từ':
          typeOfWord = 'interjection';
          break;
        default:
          break;
      }
      return {
        word,
        typeOfWord,
        meaning,
        pronounce: pronounce || audios[index].pronounce,
        audio: audios[index].audio,
        image: URLs[index],
        example,
        note,
        flashcardSetId,
      };
    });
  }

  function getAudioObj(data) {
    const result = {
      pronounce: '',
      audio: '',
    };

    if (data.status === 'fulfilled') {
      if (data.value.data.length > 0) {
        const audioRes = data.value.data[0].phonetics.find((item) => item.audio);
        const textRes = data.value.data[0].phonetics.find((item) => item.text);
        if (audioRes) {
          result.audio = audioRes.audio;
        }

        if (textRes && !data.pronounce) {
          result.pronounce = textRes.text;
        }
      }
    }

    return result;
  }

  return (
    <Modal header="Thêm hàng loạt" isShowing={isShowing} hide={hide} maxWidth="max-w-[85vw]">
      <div ref={jRef} />
      <br />
      <p className="text-sm text-t_dark italic">* Phiên âm sẽ tự động thêm nếu có thể</p>

      <Button className="mt-4 ml-auto" width="120px" onClick={handleSubmit} disabled={loading}>
        Lưu
      </Button>
    </Modal>
  );
};

AddMultipleFlashcardsModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default AddMultipleFlashcardsModal;
