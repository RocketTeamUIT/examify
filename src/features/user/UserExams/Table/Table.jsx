import { useMemo, useEffect } from 'react';
import { useTable, useFilters } from 'react-table';
import { COLUMNS } from './columns';

function Table({ data: dataProps, valueFilterChange }) {
  const data = useMemo(() => dataProps, [dataProps]);
  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setAllFilters } = tableInstance;

  useEffect(() => {
    setAllFilters([{ id: 'examName', value: valueFilterChange }]);
  }, [valueFilterChange, setAllFilters]);

  return (
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
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="first:rounded-l-lg last:rounded-r-lg text-md font-bold border-solid border-[1px] border-t_light_gray align-middle p-6 text-center"
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
