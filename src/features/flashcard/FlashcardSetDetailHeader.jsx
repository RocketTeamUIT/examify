import { Breadcrumb, Button, Confirmation, Input, PureDropdown, Tag } from 'components/ui';
import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { HiTrash } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link, useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddFlashcardSetModel from './AddFlashcardSetModel';
import { deleteFlashcardSetService } from './services/flashcard';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { toast } from 'react-toastify';

const FlashcardSetDetailHeader = (props) => {
  const [isShowing, setShowing] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { detail, setDetail, showShareModal, showAddModal, showAddMultipleModal, onSearch, isOwner } = props;
  const ACTION_LIST = [
    {
      title: 'Chia sẻ bộ flashcard',
      func: showShareModal,
      icon: <RiShareForwardFill />,
    },
    {
      title: 'Xoá bộ flashcard này',
      func: toggleShowConfirm,
      danger: true,
      icon: <HiTrash />,
    },
  ];
  const [showDropdown, setShowDropdown] = useState(false);
  const { flashcardSetId } = useParams();
  const axios = useAxiosPrivate();
  const navigate = useNavigate();

  const show = () => {
    setShowDropdown(true);
  };

  const hide = () => {
    setShowDropdown(false);
  };

  function toggle() {
    setShowing((prev) => !prev);
  }

  function toggleShowConfirm() {
    setShowConfirm(true);
  }

  function toggleHideConfirm() {
    setShowConfirm(false);
  }

  async function onConfirm() {
    try {
      await deleteFlashcardSetService({
        axios,
        flashcardSetId,
      });
      toast.success('Xoá bộ flashcard thành công');
      navigate('/flashcards');
    } catch (error) {
      console.log(error);
      toast.error('Xoá thất bại');
    }
  }

  return (
    <>
      <Breadcrumb hierarchy={[<Link to="/flashcards">Flashcard</Link>, 'Hiện tại']} />

      {/* Title and Buttons */}
      <div className="mt-2 lg:flex items-center justify-between">
        <h3 className="font-extrabold text-h3">{detail.name}</h3>
        <div className="lg:my-0 flex mt-2 mb-4 gap-4 relative">
          {isOwner && (
            <>
              <PureDropdown actionList={ACTION_LIST} visible={showDropdown} hide={hide}>
                <Button width="48px" height="48px" type="default" onClick={show}>
                  <BsThreeDots className="text-h4" />
                </Button>
              </PureDropdown>
              <Button size="large" type="default" onClick={toggle}>
                Chỉnh sửa
              </Button>
            </>
          )}
          <Confirmation top="top-14" left="left-0" onConfirm={onConfirm} showing={showConfirm} hide={toggleHideConfirm}>
            Xác nhận xoá bộ flashcard này
          </Confirmation>
          <Link to={`/flashcards/${flashcardSetId}/practice`}>
            <Button className="from-[#FC4A1A] to-[#F7B733] bg-gradient-to-r" width="130px" size="large">
              Luyện tập
            </Button>
          </Link>
        </div>
      </div>

      {/* Type */}
      <div className="flex gap-4 items-center">
        <span className="font-bold">{detail.fc_type?.type}</span>
        {detail.system_belong && (
          <>
            <p className="border-r border-black h-[22px]" />
            <Tag color="blue">
              <span className="text-md px-2">Hệ thống</span>
            </Tag>
          </>
        )}
      </div>

      {/* Learnt count */}
      <div className="mt-3 text-md">
        Bạn đã học được{' '}
        <span className="font-bold">
          {detail.learnt_count} / {detail.words_count}
        </span>{' '}
        từ
      </div>

      {/* Description */}
      <div className="mt-3 leading-[17px]">{detail.description}</div>

      {/* Buttons and Search */}
      <div className="mt-[18px] lg:flex gap-4">
        {isOwner && (
          <div className="flex gap-4">
            <Button size="large" type="default" onClick={showAddModal}>
              Thêm từ
            </Button>
            <Button size="large" type="default" onClick={showAddMultipleModal}>
              Thêm hàng loạt
            </Button>
          </div>
        )}
        <div className="flex-1 lg:mt-0 mt-4">
          <Input
            onChange={onSearch}
            size="large"
            placeholder="Tìm Flashcard..."
            leftIcon={<CiSearch className="h-6 w-6" />}
          />
        </div>
      </div>

      <AddFlashcardSetModel setDetail={setDetail} isShowing={isShowing} hide={toggle} isUpdate initialData={detail} />
    </>
  );
};

FlashcardSetDetailHeader.propTypes = {
  detail: PropTypes.object.isRequired,
  showShareModal: PropTypes.func.isRequired,
  showAddModal: PropTypes.func.isRequired,
  showAddMultipleModal: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  isOwner: PropTypes.bool,
  setDetail: PropTypes.func,
};

FlashcardSetDetailHeader.defaultProps = {
  isOwner: false,
  setDetail: undefined,
};

export default FlashcardSetDetailHeader;
