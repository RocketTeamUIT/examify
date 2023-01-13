import { Breadcrumb, Button, Input, PureDropdown, Tag } from 'components/ui';
import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { HiTrash } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const FlashcardSetDetailHeader = (props) => {
  const { showShareModal, showAddModal } = props;
  const ACTION_LIST = [
    {
      title: 'Chia sẻ bộ flashcard',
      func: showShareModal,
      icon: <RiShareForwardFill />,
    },
    {
      title: 'Xoá bộ flashcard này',
      func: () => console.log(2),
      danger: true,
      icon: <HiTrash />,
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const { flashcardSetId } = useParams();

  const show = () => {
    setShowDropdown(true);
  };

  const hide = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <Breadcrumb hierarchy={[<Link to="/flashcards">Flashcard</Link>, 'Hiện tại']} />

      {/* Title and Buttons */}
      <div className="mt-2 lg:flex items-center justify-between">
        <h3 className="font-extrabold text-h3">600 TOEIC words: Entertainment</h3>
        <div className="lg:my-0 flex mt-2 mb-4 gap-4">
          <PureDropdown actionList={ACTION_LIST} visible={showDropdown} hide={hide}>
            <Button width="48px" height="48px" type="default" onClick={show}>
              <BsThreeDots className="text-h4" />
            </Button>
          </PureDropdown>
          <Button size="large" type="default">
            Chỉnh sửa
          </Button>
          <Link to={`/flashcards/${flashcardSetId}/practice`}>
            <Button className="from-[#FC4A1A] to-[#F7B733] bg-gradient-to-r" width="130px" size="large">
              Luyện tập
            </Button>
          </Link>
        </div>
      </div>

      {/* Type */}
      <div className="flex gap-4 items-center">
        <span className="font-bold">TOEIC</span>
        <p className="border-r border-black  h-[22px]" />
        <Tag color="blue">
          <span className="text-md px-2">Hệ thống</span>
        </Tag>
      </div>

      {/* Learnt count */}
      <div className="mt-3 text-md">
        Bạn đã học được <span className="font-bold">0 / 600</span> từ
      </div>

      {/* Description */}
      <div className="mt-3 leading-[17px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis, turpis nec gravida pulvinar, lectus dui
        pulvinar risus, quis molestie augue quam a lorem. Morbi maximus pretium elit, et maximus velit varius pulvinar.
        Maecenas molestie, odio maximus congue aliquet, ex nisi aliquam tortor, sit amet blandit nisi nunc at urna.
        Proin venenatis purus nec sagittis sagittis
      </div>

      {/* Buttons and Search */}
      <div className="mt-[18px] lg:flex gap-4">
        <div className="flex gap-4">
          <Button size="large" type="default" onClick={showAddModal}>
            Thêm từ
          </Button>
          <Button size="large" type="default">
            Thêm hàng loạt
          </Button>
        </div>
        <div className="flex-1 lg:mt-0 mt-4">
          <Input size="large" placeholder="Tìm Flashcard..." leftIcon={<CiSearch className="h-6 w-6" />} />
        </div>
      </div>
    </>
  );
};

FlashcardSetDetailHeader.propTypes = {
  showShareModal: PropTypes.func.isRequired,
  showAddModal: PropTypes.func.isRequired,
};

export default FlashcardSetDetailHeader;
