import { Button } from '../../../../../components/ui';
import Part from './Part';
import { MOCK_DATA } from './MOCK_DATA';
import { Checkbox } from '../../../../../components/form';
import { Link, useParams } from 'react-router-dom';

function ChoosePart({ choosePart }) {
  const { examId } = useParams();

  const fullTestConfig = {
    id: examId,
    parts: Array(7).map((_, index) => index + 1 + 'p'),
    duration: 7200,
    isFullmode: true,
  };

  return (
    <div className="mt-9">
      <div className="flex justify-between">
        <h4 className="text-h4 font-semibold">Chọn phần thi muốn làm</h4>
        <Link to="#" state={{ config: fullTestConfig }}></Link>
        <Button height={40} type="danger">
          Làm fulltest
        </Button>
      </div>
      <div className="mt-4">
        {MOCK_DATA.map((partItem, index) => (
          <Checkbox
            key={index}
            onClick={() => choosePart(index)}
            label={<Part key={index} part={partItem} />}
            leftDockLabel={'28px'}
            mb="20px"
          />
        ))}
      </div>
    </div>
  );
}

export default ChoosePart;
