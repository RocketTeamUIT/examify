import { Button, Dropdown, Input } from '../../../../components/ui';
import { durationList } from '../../data';

function ChooseDuration() {
  return (
    <div className="mt-9">
      <h4 className="text-h4 font-semibold">Chọn thời gian thi (Để trống nếu bạn không muốn giới hạn)</h4>

      <div className="flex justify-between mt-5">
        <div className="basis-4/12">
          <Dropdown color="#777777" type="default" actionsList={durationList}>
            -- Chọn thời gian --
          </Dropdown>
          <div className="mt-6">
            <p className="mb-1 text-h5 font-normal">Hoặc tùy chỉnh</p>
            <Input
              height={32}
              type="number"
              fancyOutlined
              rightIcon={<span className="text-h6 text-t_gray">phút</span>}
            />
          </div>
        </div>
        <div className="flex flex-col-reverse">
          <Button type="outline">Thực hiện</Button>
        </div>
      </div>
    </div>
  );
}

export default ChooseDuration;
