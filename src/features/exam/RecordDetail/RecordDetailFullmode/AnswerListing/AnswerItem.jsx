import { QuestionCircle } from '../../../components/QuestionCircle';
import classNames from 'classnames';
import { HiCheck, HiXMark } from 'react-icons/hi2';
import { useRef } from 'react';

function AnswerItem({ id, answerUser, type = 'wrong', children: orderNumber }) {
  const questionRef = useRef();

  return (
    <div className="flex items-center">
      <QuestionCircle id={id} ref={questionRef}>
        {orderNumber}
      </QuestionCircle>
      <span
        className={classNames('text-h6 ml-2', {
          'line-through': type === 'wrong',
        })}
      >
        {answerUser}
      </span>
      <span className="ml-3">
        {type === 'correct' ? <HiCheck fontSize={16} color="#1FCF9B" /> : <HiXMark fontSize={16} color="#EF3737" />}
      </span>
      <span
        className="ml-6 text-h6 text-primary hover:underline cursor-pointer"
        onClick={() => questionRef.current.click()}
      >
        [chi tiết]
      </span>
    </div>
  );
}

export default AnswerItem;
