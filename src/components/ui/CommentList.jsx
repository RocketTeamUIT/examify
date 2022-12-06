import React from 'react';
import Pagination from './Pagination';
import Comment from './Comment';
import Tag from './Tag';
import CommentEditor from './CommentEditor';

// comments: comment list
// reloadComments: function to call getCommentsService again after sent comment successfully
// colSpan: number of columns to span. Eg: colSpan='span 5 / span 5'
const CommentList = ({ comments, reloadComments, colSpan }) => {
  const Divider = () => <div className="border-t br_light_gray w-full mt-[6px] mb-[14px]" />;

  return (
    <div className="grid grid-cols-12">
      <div
        style={{
          gridColumn: colSpan || 'span 12 / span 12',
        }}
      >
        {/* Header */}
        <h2 className="font-semibold text-h3 relative w-fit mb-8">
          Bình luận
          <div className="absolute left-[calc(100%+4px)] -top-1">
            <Tag color="red">215</Tag>
          </div>
        </h2>

        <CommentEditor reloadComments={reloadComments} />

        <Divider />

        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <Comment reloadComments={reloadComments} comment={comment} />
              {index !== comments.length - 1 && <Divider />}
            </div>
          );
        })}

        <div className="flex justify-center mt-8">
          <Pagination length={9} />
        </div>
      </div>
    </div>
  );
};

export default CommentList;
