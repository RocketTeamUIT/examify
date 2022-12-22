import { React, useState } from 'react';
import { Input, Dropdown, Button } from './';
import classNames from 'classnames';
import { BiSearch } from 'react-icons/bi';
import { BsList } from 'react-icons/bs';
import { CiGrid42 } from 'react-icons/ci';

const Filter = ({ list, toggleList, placeholder = '', value, handleChange }) => {
  return (
    <div className="w-full">
      <div className="w-full py-1">
        <Input value={value} onChange={handleChange} placeholder={placeholder} leftIcon={<BiSearch />} />
      </div>
      <div className="w-full hidden lg:flex mt-5 h-8">
        {/* Filter */}
        <div className="flex-1 flex gap-x-6">
          {/* <Dropdown>Đầu sách</Dropdown>
          <Dropdown type="primary">ETS 2020</Dropdown> */}
          {/* <Button type="danger" height="100%">
            Xóa bộ lọc
          </Button> */}
        </div>
        {/* Arrange and Toggle */}
        {/* <div className="ml-auto mr-6">
          <Dropdown context="Sắp xếp">Số người đã thực hiện</Dropdown>
        </div> */}
        <button
          className="h-full w-[104px] bg-bg_light_gray_2 rounded-full relative flex py-1 ml-auto"
          onClick={toggleList}
        >
          <div
            className={classNames(
              'h-6 w-12 rounded-full bg-white absolute transition top-1 left-1',
              list && 'translate-x-12',
            )}
          />
          <CiGrid42 className={classNames('absolute transition h-6 w-6 left-4', !list && 'fill-primary')} />
          <BsList className={classNames('absolute transition h-6 w-6 right-4', list && 'fill-primary')} />
        </button>
      </div>
    </div>
  );
};

export default Filter;
