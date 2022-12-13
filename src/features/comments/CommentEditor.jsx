import React from 'react';
import { useState } from 'react';
import ReactTextareaAutosize from 'react-textarea-autosize';
import { Button } from '../../components/ui';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { sendCommentService } from './services/comment';
import { useSelector } from 'react-redux';
import isEmptyObject from '../../utils/isEmptyObject';
import { Link, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import classNames from 'classnames';

/*
  hide: function to hide this comment editor
  respondId: specify respondId (if has)
  reloadComments: function to call getCommentsService again after sent comment successfully
*/
const CommentEditor = ({ hide, respondId, reloadComments, defaultContent, handleSubmitParent, isEdit }) => {
  const [content, setContent] = useState(defaultContent ?? '');
  const [isLoading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const axiosPrivate = useAxiosPrivate(true);
  const { courseId } = useParams();
  const location = useLocation();

  const handleSubmit = async () => {
    if (isEmptyObject(user)) {
      return;
    }

    setLoading(true);
    if (isEdit && handleSubmitParent) {
      handleSubmitParent(content.trim());
      setLoading(false);
      return;
    }

    try {
      await sendCommentService(axiosPrivate, courseId, content.trim(), respondId);
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

  if (isEmptyObject(user))
    return (
      <div className="text-center italic text-md">
        Bạn cần{' '}
        <Link
          to="/signin"
          state={{
            from: location,
          }}
          replace={true}
          className="underline text-ac_blue"
        >
          đăng nhập
        </Link>{' '}
        để bình luận{' '}
      </div>
    );

  return (
    <div className={classNames('flex gap-4 pb-[10px]', respondId && 'ml-12')}>
      <img src={user.avt} className="h-8 w-8 rounded-full" alt="owner's avatar" />
      <div className="p-3 flex flex-col items-center rounded-md border border-br_gray transition focus-within:shadow-primary focus-within:border-ac_blue flex-1 shadow-sd_xs">
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
          <Button className="h-8" onClick={handleSubmit} disabled={!content.trim() || isLoading}>
            Gửi đi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentEditor;
