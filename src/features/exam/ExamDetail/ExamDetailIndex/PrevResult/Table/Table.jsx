import { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';

function Table({ data: dataProps }) {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => dataProps, [dataProps]);

  const tableInstance = useTable({
    columns,
    data,
  });

  // Get some API
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table {...getTableProps()} className="border-separate border-spacing-0 w-full">
      <colgroup>
        <col span={1} className="w-1/3" />
        <col span={1} className="w-1/5" />
        <col span={1} className="w-1/4" />
      </colgroup>

      <thead className="sticky top-0 z-10">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="group">
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="sticky top-0 z-10 group-first:first:rounded-tl-lg group-first:last:rounded-tr-lg text-md border-solid border-[1px] border-t_light_gray align-top p-3 font-semibold text-left bg-[#f7f7f7] text-t_dark"
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
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="text-md border-solid border-[1px] border-t_light_gray align-top p-3"
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
