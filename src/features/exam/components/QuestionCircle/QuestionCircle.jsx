import QuestionNumber from './QuestionNumber';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalVisible } from 'features/exam/recordSlice';

function QuestionCircle({ children: numberOrder, type = 'solid' }, ref) {
  const dispatch = useDispatch();

  return (
    <>
      <QuestionNumber
        type={type}
        onClick={() => {
          dispatch(toggleModalVisible());
        }}
        ref={ref}
      >
        {numberOrder}
      </QuestionNumber>
    </>
  );
}

export default forwardRef(QuestionCircle);
