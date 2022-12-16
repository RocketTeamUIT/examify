import { Tag } from '../../../components/ui';

const STATUS = [null, 1, 2];

function Wrapper({ children, status }) {
  const checkStatus = STATUS.includes(status) ? status : STATUS[0];

  return (
    <div className="relative">
      {/* Tag component */}
      <div className="absolute top-0 -translate-y-1/2 rounded-full bg-white left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0">
        {!checkStatus && <Tag color="blue">Chưa tham gia</Tag>}
        {checkStatus === 1 && <Tag color="volcano">Chưa hoàn thành</Tag>}
        {checkStatus === 2 && <Tag color="green">Đã hoàn thành</Tag>}
      </div>
      <div className="border-2 border-br_light_gray rounded-xl overflow-hidden">{children}</div>
    </div>
  );
}

export default Wrapper;
