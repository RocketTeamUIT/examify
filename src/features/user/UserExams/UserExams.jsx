import { React, useState } from 'react';
import { Filter } from 'components/ui';
import useFetchData from './useFetchData.js';
import { useSelector } from 'react-redux';
import isEmptyObject from 'utils/isEmptyObject.js';
import Table from './Table';

const UserExams = () => {
  const [searchValue, setSearchValue] = useState('');

  useFetchData();
  const { data: dataRes } = useSelector((store) => store.history);

  const handleFilterChange = (e) => {
    setSearchValue(e.target.value);
  };

  if (!dataRes || isEmptyObject(dataRes)) return null;

  return (
    <div>
      <div className="mt-4">
        <Filter value={searchValue} handleChange={handleFilterChange} placeholder="Tìm khoá học theo tên" hideGrid />
      </div>

      <Table data={dataRes} valueFilterChange={searchValue} />
    </div>
  );
};

export default UserExams;
