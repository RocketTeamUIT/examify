import { Button } from '../../../../../components/ui';
import Part from './Part';
import { MOCK_DATA } from './MOCK_DATA';
import { Checkbox } from '../../../../../components/form';

function ChoosePart() {
  return (
    <div className="mt-9">
      <div className="flex justify-between">
        <h4 className="text-h4 font-semibold">Chọn phần thi muốn làm</h4>
        <Button height={40} type="danger">
          Làm fulltest
        </Button>
      </div>
      <div className="mt-4">
        {MOCK_DATA.map((partItem, index) => (
          <Checkbox key={index} label={<Part key={index} part={partItem} />} leftDockLabel={'28px'} mb="20px" />
        ))}
      </div>
    </div>
  );
}

export default ChoosePart;
