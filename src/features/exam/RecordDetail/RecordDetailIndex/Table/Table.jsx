import { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import classNames from 'classnames';

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
        <col span={1} className="w-1/5]" />
        <col span={1} className="w-[10%]" />
        <col span={1} className="w-[5%]" />
        <col span={1} className="w-[10%]" />
        <col span={1} className="w-[55%]" />
      </colgroup>

      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="text-md border-solid border-b border-t_light_gray align-top p-3 font-semibold text-left text-t_dark"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={classNames('text-md border-solid border-t_light_gray align-top p-3', {
                      'border-b': dataProps.length - 1 !== index,
                    })}
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
