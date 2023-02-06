import { React, useState, useMemo } from 'react';
import { useTable, useFilters } from 'react-table';
import { Filter } from 'components/ui';
import useFetchData from './useFetchData.js';
import { useSelector } from 'react-redux';
import OptionButton from './Table/OptionButton';
import { COLUMNS } from './Table/columns';
import MOCK_DATA from './Table/MOCK_DATA.json';

const UserExams = () => {
  useFetchData();
  const { data } = useSelector((store) => store.history);

  const dataReal = useMemo(() => data, [data]);
  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable(
    {
      columns,
      data: dataReal,
    },
    useFilters,
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setAllFilters } = tableInstance;

  const [searchValue, setSearchValue] = useState('');

  const handleFilterChange = (e) => {
    setSearchValue(e.target.value);
    setAllFilters([
      { id: 'name', value: e.target.value },
      // { id: 'correct', value: e.target.value },
      // { id: 'date_take', value: e.target.value },
    ]);
  };

  return (
    <div>
      <div className="mt-4">
        <Filter value={searchValue} handleChange={handleFilterChange} placeholder="Tìm khoá học theo tên" hideGrid />
      </div>

      {/* Exam list */}
      {/* <Table data={filterExams(data, searchValue)} /> */}
      <table {...getTableProps()} className="border-separate border-spacing-y-3 w-full">
        <colgroup>
          <col span={1} className="w-1/6" />
          <col span={1} className="w-1/3" />
          <col span={1} className="w-1/6" />
          <col span={1} className="w-1/6" />
          <col span={1} className="w-1/6" />
        </colgroup>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="group">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="group-first:first:rounded-tl-lg group-first:last:rounded-tr-lg text-md border-solid border-[1px] border-t_light_gray align-top p-3 font-semibold text-center bg-[#f7f7f7] text-t_dark"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              // destructure
              <tr {...row.getRowProps()} className="group">
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="first:rounded-l-lg last:rounded-r-lg text-md font-bold border-solid border-[1px] border-t_light_gray align-middle p-6 text-center"
                    >
                      {index + 1 === row.cells.length ? <OptionButton examId={cell.value} /> : cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserExams;
