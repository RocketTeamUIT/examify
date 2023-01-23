import React from 'react';
import { Dropdown, Pagination, Tag } from '../../components/ui';
import Comment from './Comment';
import CommentEditor from './CommentEditor';
import { useMemo } from 'react';

// comments: comment list
// reloadComments: function to call getCommentsService again after sent comment successfully
// colSpan: number of columns to span. Eg: colSpan='span 5 / span 5'
const CommentList = ({
  comments,
  totalRootComments,
  totalComments,
  setType,
  reloadComments,
  selected,
  setSelected,
  loading,
}) => {
  const Divider = () => <div className="border-t br_light_gray w-full mt-[6px] mb-[14px]" />;

  const totalPages = useMemo(() => {
    if (!totalRootComments) return 0;
    return Math.ceil(totalRootComments / 10);
  }, [totalRootComments]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-full xl:col-span-8">
        {/* Header */}
        <div className="flex">
          <h2 className="font-semibold text-h3 relative w-fit mb-8">
            Bình luận
            <div className="absolute left-[calc(100%+4px)] -top-1">
              <Tag color="red">{totalComments}</Tag>
            </div>
          </h2>
          <div className="ml-auto">
            <Dropdown
              initialState={0}
              data={{
                type: 'active',
                actionsList: [
                  {
                    title: 'Mới nhất',
                    action: () => {
                      setType('latest');
                    },
                  },
                  {
                    title: 'Phổ biến',
                    action: () => {
                      setType('popular');
                    },
                  },
                ],
              }}
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
