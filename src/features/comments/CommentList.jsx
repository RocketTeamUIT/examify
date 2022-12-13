import React from 'react';
import { Dropdown, Pagination, Tag } from '../../components/ui';
import Comment from './Comment';
import CommentEditor from './CommentEditor';
import classNames from 'classnames';

// comments: comment list
// reloadComments: function to call getCommentsService again after sent comment successfully
// colSpan: number of columns to span. Eg: colSpan='span 5 / span 5'
const CommentList = ({ comments, totalPages, setType, reloadComments, colSpan, selected, setSelected, loading }) => {
  const Divider = () => <div className="border-t br_light_gray w-full mt-[6px] mb-[14px]" />;
  const getColSpan = (span) => {
    return `lg:col-span-${span} col-span-full`;
  };

  return (
    <div className="grid grid-cols-12">
      <div
        className={classNames(getColSpan(colSpan))}
        // style={{
        //   gridColumn: colSpan || 'span 1 / span -1',
        // }}
      >
        {/* Header */}
        <div className="flex">
          <h2 className="font-semibold text-h3 relative w-fit mb-8">
            Bình luận
            <div className="absolute left-[calc(100%+4px)] -top-1">
              <Tag color="red">215</Tag>
            </div>
          </h2>
          <div className="ml-auto">
            <Dropdown
              actionsList={[
                {
                  name: 'Mới nhất',
                  func: () => {
                    setType('latest');
                  },
                },
                {
                  name: 'Phổ biến',
                  func: () => {
                    setType('popular');
                  },
                },
              ]}
            >
              Sắp xếp theo
            </Dropdown>
          </div>
        </div>
        {/* Create new comment */}
        <CommentEditor reloadComments={reloadComments} />
        <Divider />

        {!loading && (
          <>
            {comments.map((comment, index) => {
              return (
                <div key={index}>
                  <Comment reloadComments={reloadComments} comment={comment} />
                  {index !== comments.length - 1 && <Divider />}
                </div>
              );
            })}

            <div className="flex justify-center mt-8">
              <Pagination length={totalPages} selected={selected} setSelected={setSelected} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentList;
