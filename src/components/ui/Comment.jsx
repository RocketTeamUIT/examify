import React from 'react';
import { useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Tag } from '../ui';
import CommentEditor from './CommentEditor';
import isEmptyObject from '../../utils/isEmptyObject';
import { toast } from 'react-toastify';
import HeadlessTippy from '@tippyjs/react/headless';
import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';

// comment: comment object
// isReply: specify if this comment is a reply of other comment
// reloadComments: function to call getCommentsService again after sent comment successfully
const Comment = ({ comment, isReply, reloadComments }) => {
  const { avt, name, rank, createdAt, content, replies, id: respondId } = comment;
  const [showEditor, setShowEditor] = useState(false);
  const [visible, setVisile] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const ref = useRef();
  const triggerRef = useRef();

  useClickOutside(ref, triggerRef, () => {
    setVisile(false);
  });

  const onReply = () => {
    if (isEmptyObject(user)) {
      toast.warning('Vui lòng đăng nhập để viết bình luận');
      return;
    }
    setShowEditor(true);
  };

  return (
    <>
      <div className="py-[10px]">
        {/* Header */}
        <div className="flex items-center">
          <img src={avt} alt={name + ' avatar'} className="rounded-full h-8 w-8" />
          <p className="font-semibold text-md ml-2">{name}</p>
          <div className="ml-3">
            <Tag color="orange">{rank}</Tag>
          </div>
          <p className="text-sm font-medium text-[#777] ml-4">{createdAt}</p>
          <HeadlessTippy
            visible={visible}
            interactive
            onClickOutside={() => {
              setVisile(false);
            }}
            render={(attrs) => (
              <div
                {...attrs}
                className="w-fit p-2 bg-white rounded-[10px] shadow-sd_primary text-md text-ac_red"
                ref={ref}
              >
                <button className="hover:bg-bg_light_gray p-2 rounded-lg transition">Báo cáo bình luận này</button>
              </div>
            )}
          >
            <div
              className="ml-auto p-2 rounded-full hover:bg-bg_light_gray_2 transition cursor-pointer"
              onClick={() => setVisile(true)}
            >
              <HiDotsHorizontal className="text-[#777]" />
            </div>
          </HeadlessTippy>
        </div>

        {/* Content */}
        <p className="text-md text-t_dark mt-[10px]">{content}</p>

        {!isReply && (
          <button
            className="mt-[10px] font-medium hover:underline text-md"
            onClick={() => {
              onReply();
            }}
          >
            Trả lời
          </button>
        )}
      </div>

      <div className="ml-12">
        {(replies || []).map((reply, index) => (
          <Comment key={index} comment={reply} isReply />
        ))}
      </div>

      {showEditor && (
        <CommentEditor reloadComments={reloadComments} respondId={respondId} hide={() => setShowEditor(false)} />
      )}
    </>
  );
};

export default Comment;
