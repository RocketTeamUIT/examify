import QuestionCircle from '../../../components/QuestionCircle';
import classNames from 'classnames';
import { HiCheck, HiXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function AnswerItem({ answerUser, type = 'wrong', children: orderNumber }) {
  return (
    <div className="flex items-center">
      <QuestionCircle>{orderNumber}</QuestionCircle>
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
      <Link className="ml-6">
        <span className="text-h6 text-primary hover:underline">[chi tiết]</span>
      </Link>
    </div>
  );
}

export default AnswerItem;
