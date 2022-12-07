import { React, useState } from 'react';
import { Input, Dropdown, Button } from './';
import classNames from 'classnames';
import { BiSearch } from 'react-icons/bi';
import { BsList } from 'react-icons/bs';
import { CiGrid42 } from 'react-icons/ci';

const Filter = () => {
  const [grid, setGrid] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full">
        <Input placeholder="Tìm theo đầu sách, bộ đề thi, tên đề thi, dạng câu hỏi ..." leftIcon={<BiSearch />} />
      </div>
      <div className="w-full hidden lg:flex mt-6 h-8">
        {/* Filter */}
        <div className="flex-1 flex gap-x-6">
          <Dropdown>Đầu sách</Dropdown>
          <Dropdown type="primary">ETS 2020</Dropdown>
          <Button type="danger" height="100%">
            Xóa bộ lọc
          </Button>
        </div>
        {/* Arrange and Toggle */}
        <div className="flex-1 flex gap-x-6 justify-end">
          <Dropdown context="Sắp xếp">Số người đã thực hiện</Dropdown>
          <button
            className="h-full w-[104px] bg-bg_light_gray_2 rounded-full relative flex py-1"
            onClick={() => setGrid(!grid)}
          >
            <div
              className={classNames(
                'h-6 w-12 rounded-full bg-white absolute transition top-1 left-1',
                grid && 'translate-x-12',
              )}
            />
            <BsList className={classNames('absolute transition h-6 w-6 left-4', !grid && 'fill-primary')} />
            <CiGrid42 className={classNames('absolute transition h-6 w-6 right-4', grid && 'fill-primary')} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
