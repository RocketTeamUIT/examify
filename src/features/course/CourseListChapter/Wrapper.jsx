import { Tag } from '../../../components/ui';

const STATUS = ['inCompleted', 'inProgress', 'completed'];

function Wrapper({ children, status }) {
  const checkStatus = STATUS.includes(status) ? status : STATUS[0];

  return (
    <div className="relative">
      {/* Tag component */}
      <div className="absolute top-0 -translate-y-1/2 bg-white left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0">
        {checkStatus === 'inCompleted' && <Tag color="gray">Chưa tham gia</Tag>}
        {checkStatus === 'inProgress' && <Tag color="blue">Chưa hoàn thành</Tag>}
        {checkStatus === 'completed' && <Tag color="green">Đã hoàn thành</Tag>}
      </div>
      <div className="border-2 border-br_light_gray rounded-xl overflow-hidden">{children}</div>
    </div>
  );
}

export default Wrapper;
