import QuestionNumber from './QuestionNumber';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalVisible, setCurId } from 'features/exam/recordSlice';

function QuestionCircle({ id, children: numberOrder, type = 'solid' }, ref) {
  const dispatch = useDispatch();

  return (
    <>
      <QuestionNumber
        type={type}
        onClick={() => {
          dispatch(toggleModalVisible());
          dispatch(setCurId(id));
        }}
        ref={ref}
      >
        {numberOrder}
      </QuestionNumber>
    </>
  );
}

export default forwardRef(QuestionCircle);
