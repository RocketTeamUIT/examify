import { Breadcrumb, Button, Input, Tag } from 'components/ui';
import Container from 'layouts/components/Container';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import FlashcardSingle from './FlashcardSingle';

const FLASHCARD_LIST = [{}, { learned: true }];

const FlashcardSetDetail = () => {
  return (
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-span-8 my-8">
          <Breadcrumb hierarchy={[<Link to="/flashcards">Flashcard</Link>, 'Hiện tại']} />

          <div className="mt-2 flex items-center">
            <h3 className="font-extrabold text-h3">600 TOEIC words: Entertainment</h3>
            <Button width="48px" height="48px" type="default" className="ml-auto">
              <BsThreeDots className="text-h4" />
            </Button>
            <Button size="large" type="default" className="ml-3">
              Chỉnh sửa
            </Button>
            <Button className="from-[#FC4A1A] to-[#F7B733] bg-gradient-to-r ml-3" width="130px" size="large">
              Luyện tập
            </Button>
          </div>

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

          <div className="mt-3 leading-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis, turpis nec gravida pulvinar, lectus
            dui pulvinar risus, quis molestie augue quam a lorem. Morbi maximus pretium elit, et maximus velit varius
            pulvinar. Maecenas molestie, odio maximus congue aliquet, ex nisi aliquam tortor, sit amet blandit nisi nunc
            at urna. Proin venenatis purus nec sagittis sagittis
          </div>

          <div className="mt-[18px] flex gap-5">
            <Button size="large" type="default">
              Thêm từ
            </Button>
            <Button size="large" type="default">
              Thêm hàng loạt
            </Button>
            <div className="flex-1">
              <Input size="large" placeholder="Tìm Flashcard..." leftIcon={<CiSearch className="h-6 w-6" />} />
            </div>
          </div>

          <div className="border-t w-full border-br_gray my-6" />

          <ul className="space-y-8">
            {FLASHCARD_LIST.map((flashcard, index) => (
              <FlashcardSingle {...flashcard} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default FlashcardSetDetail;
