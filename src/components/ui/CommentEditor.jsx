import React from 'react';
import { useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import Button from './Button';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { sendCommentService } from '../../features/course/services/course';
import { useSelector } from 'react-redux';
import isEmptyObject from '../../utils/isEmptyObject';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

/*
  hide: function to hide this comment editor
  respondId: specify respondId (if has)
  reloadComments: function to call getCommentsService again after sent comment successfully
*/
const CommentEditor = ({ hide, respondId, reloadComments }) => {
  const [content, setContent] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const axiosPrivate = useAxiosPrivate();
  const { courseId } = useParams();

  const handleSubmit = async () => {
    if (isEmptyObject(user)) {
      return;
    }

    setLoading(true);
    try {
      await sendCommentService(axiosPrivate, courseId, content, respondId);
      await reloadComments();
      toast.success('Gửi bình luận thành công');
      setContent('');
      if (hide) hide();
    } catch (error) {
      toast.error('Gửi bình luận thất bại');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-4 pb-[10px]">
      <img src={user.avt} className="h-8 w-8 rounded-full" alt="owner's avatar" />
      <div className="p-3 flex flex-col items-center rounded-md border border-ac_blue flex-1 shadow-primary shadow-sd_xs">
        <ReactTextareaAutosize
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full text-md outline-0 resize-none"
          minRows={2}
        />
        <div className="border-t border-[#909090] my-3 w-full opacity-20"></div>
        <div className="flex items-center gap-4 justify-end w-full">
          {hide && (
            <button className="text-md text-t_gray hover:text-t_dark" onClick={hide}>
              Đóng
            </button>
          )}
          <Button className="h-8" onClick={handleSubmit} disabled={!content || isLoading}>
            Gửi đi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentEditor;