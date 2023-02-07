import { Button, Input, Modal } from 'components/ui';
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import SharePerson from './SharePerson';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { addShareFlashcardSetService, searchSharePersonService } from './services/flashcard';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import asyncDebounce from 'utils/asyncDebounce';
import useFetchFlashcardShare from './hooks/useFetchFlashcardShare';

const ShareFlashcardModal = (props) => {
  const [value, setValue] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const { isShowing, hide } = props;
  const axios = useAxiosPrivate();
  const { flashcardSetId } = useParams();
  const { shareList, setShareList } = useFetchFlashcardShare(flashcardSetId);

  const fetchSearch = useMemo(
    () =>
      asyncDebounce(async (value, fn) => {
        try {
          if (!value) {
            setUsers([]);
            return;
          }
          const response = await searchSharePersonService({ axios, value, flashcardSetId });
          setUsers(response.data.data);
          fn && fn();
        } catch (error) {
          console.log(error);
        }
      }, 1000),
    [axios, flashcardSetId],
  );

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Sao chép thành công');
  };

  function handleChange(e) {
    setValue(e.target.value);
    fetchSearch(e.target.value);
  }

  function handleClick(user) {
    if (isSelected(user, selectedUser)) {
      setSelectedUser({});
    } else {
      setSelectedUser(user);
    }
  }

  function isSelected(u1, u2) {
    return JSON.stringify(u1) === JSON.stringify(u2);
  }

  async function addPerson() {
    try {
      setLoading(true);
      await addShareFlashcardSetService({ axios, flashcardSetId, userId: selectedUser.id });
      setShareList((prev) => [...prev, selectedUser]);
      setUsers((prev) => prev.filter((user) => user.id !== selectedUser.id));
      setSelectedUser({});
      fetchSearch(value, () => toast.success('Thêm thành công'));
    } catch (error) {
      toast.error('Thêm thất bại');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function handleDelete(id) {
    setShareList((prev) => prev.filter((item) => item.id !== id));
    fetchSearch(value);
  }

  return (
    <Modal
      isShowing={isShowing}
      hide={hide}
      header="Chia sẻ bộ Flashcard: 600 TOEIC words: Entertainment"
      maxWidth="max-w-[552px]"
    >
      <div>
        <Input placeholder="Tìm theo email, họ và tên" value={value} onChange={handleChange} />

        {users.length > 0 && (
          <>
            <ul className="rounded-lg bg-bg_light_gray my-4 overflow-hidden">
              {users.map((user) => (
                <li
                  className={classNames(
                    'p-3 hover:bg-ac_blue hover:bg-opacity-20 transition',
                    isSelected(selectedUser, user) && 'bg-opacity-20 bg-gray-800',
                  )}
                  onClick={() => handleClick(user)}
                  key={user.id}
                >
                  <SharePerson person={user} small />
                </li>
              ))}
            </ul>
            <Button width="100%" type="default" disabled={!selectedUser.email || loading} onClick={addPerson}>
              Thêm người đã chọn vào danh sách
            </Button>
          </>
        )}

        <h5 className="font-semibold text-h5 text-t_dark mt-4">Những người được truy cập</h5>
        <div className="space-y-4 mt-4">
          <SharePerson person={user} isOwner />
          {shareList.map((user) => (
            <SharePerson key={user.id} onDelete={handleDelete} deletable person={user} />
          ))}
        </div>

        <Button className="mt-[30px]" width="100%" onClick={copyLink}>
          Sao chép đường dẫn chia sẻ
        </Button>
      </div>
    </Modal>
  );
};

ShareFlashcardModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default ShareFlashcardModal;
