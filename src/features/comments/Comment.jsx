import React from 'react';
import { useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Tag } from '../../components/ui';
import CommentEditor from './CommentEditor';
import isEmptyObject from '../../utils/isEmptyObject';
import { toast } from 'react-toastify';
import HeadlessTippy from '@tippyjs/react/headless';
import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import CommentLike from './CommentLike';
import useAxiosPrivate from '../../hooks/useAxiosPrivate.js';
import { editCommentService, likeCommentService, unlikeCommentService } from '../comments/services/comment.js';
// comment: comment object
// isReply: specify if this comment is a reply of other comment
// reloadComments: function to call getCommentsService again after sent comment successfully
const Comment = ({ comment, isReply, reloadComments }) => {
  const {
    user: {
      avt,
      firstName,
      lastName,
      rank: { rankName },
    },
    createdAt,
    userId,
    hasLiked,
    totalLike,
    content: initialContent,
    childComment: replies,
    commentId,
  } = comment;
  const {
    user: { id: currUserId },
  } = useSelector((store) => store.auth);
  const name = firstName + ' ' + lastName;
  const [showEditor, setShowEditor] = useState(false);
  const [liked, setLiked] = useState(hasLiked);
  const [content, setContent] = useState(initialContent ?? '');
  const [total, setTotal] = useState(totalLike);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [editing, setEditing] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const axiosPrivate = useAxiosPrivate();
  const ref = useRef();
  const triggerRef = useRef();
  const replyEditorRef = useRef();

  useClickOutside(ref, triggerRef, () => {
    setVisible(false);
  });

  const onReply = () => {
    if (isEmptyObject(user)) {
      toast.warning('Vui lòng đăng nhập để viết bình luận');
      return;
    }
    setShowEditor(true);

    if (replyEditorRef.current) {
      window.scrollTo({
        top: replyEditorRef.current.offsetTop - 300,
      });
    }
  };

  const handleLike = async () => {
    setLoading(true);
    if (!liked) {
      try {
        await likeCommentService(axiosPrivate, commentId);
        setLiked(true);
        setTotal((prev) => prev + 1);
      } catch (err) {
        console.log('🚀 ~ file: Comment.jsx:61 ~ handleLike ~ err', err);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        await unlikeCommentService(axiosPrivate, commentId);
        setLiked(false);
        setTotal((prev) => prev - 1);
      } catch (err) {
        console.log('🚀 ~ file: Comment.jsx:73 ~ handleLike ~ err', err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEditComment = () => {
    setEditing(true);
  };

  const handleEditCommentSubmit = async (content) => {
    try {
      await editCommentService(axiosPrivate, commentId, content);
      toast.success('Cập nhật bình luận thành công');
      setEditing(false);
      setContent(content);
    } catch (error) {
      toast.error('Cập nhật bình luận thất bại');
      console.log('🚀 ~ file: Comment.jsx:91 ~ handleEditCommentSubmit ~ error', error);
    }
  };

  return (
    <>
      <div className="py-[10px]">
        {editing ? (
          // Editing comment
          <>
            <CommentEditor
              defaultContent={content}
              reloadComments={() => {}}
              handleSubmitParent={handleEditCommentSubmit}
              hide={() => setEditing(false)}
              isEdit
            />
          </>
        ) : (
          <>
            {/* Current comment */}
            {/* Header */}
            <div className="flex items-center">
              <img src={avt} alt={name + ' avatar'} className="rounded-full h-8 w-8" />
              <p className="font-semibold text-md ml-2">{name}</p>
              <div className="ml-3">
                <Tag color="orange">{rankName}</Tag>
              </div>
              <p className="text-sm font-medium text-[#777] ml-4">{createdAt.slice(0, 10)}</p>
              <HeadlessTippy
                visible={visible}
                interactive
                onClickOutside={() => {
                  setVisible(false);
                }}
                render={(attrs) => (
                  <div {...attrs} className="w-fit p-2 bg-white rounded-[10px] shadow-sd_primary text-md" ref={ref}>
                    {currUserId === userId && (
                      <button className="hover:bg-bg_light_gray p-2 rounded-lg transition" onClick={handleEditComment}>
                        Sửa bình luận
                      </button>
                    )}
                  </div>
                )}
              >
                <div
                  className="ml-auto p-2 rounded-full hover:bg-bg_light_gray_2 transition cursor-pointer"
                  onClick={() => setVisible(true)}
                >
                  <HiDotsHorizontal className="text-[#777]" />
                </div>
              </HeadlessTippy>
            </div>

            {/* Content */}
            <p className="text-md text-t_dark mt-[10px]">{content}</p>

            <div className="flex items-center mt-[10px] gap-3">
              <CommentLike liked={liked} total={total} handleClick={handleLike} disabled={loading} />
              <div className="border-l h-4 border-t_gray"></div>
              {!isReply && (
                <button className="font-medium hover:underline text-md" onClick={onReply}>
                  Trả lời
                </button>
              )}
            </div>
          </>
        )}
      </div>

      <div className="ml-12">
        {(replies || []).map((reply, index) => (
          <Comment key={index} comment={reply} isReply />
        ))}
      </div>

      {/* Reply other comment */}
      {showEditor && (
        <div className="mt-2" ref={replyEditorRef}>
          <CommentEditor reloadComments={reloadComments} respondId={commentId} hide={() => setShowEditor(false)} />
        </div>
      )}
    </>
  );
};

export default Comment;
