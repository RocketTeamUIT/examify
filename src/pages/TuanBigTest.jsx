import { Breadcrumb, Dropdown } from '../components/ui';

// Data sample
const hierarchy = ['IELTS Fundamentals', 'Past tenses 1...', 'Hiện tại'];
const actionsList = [
  {
    name: 'Tăng dần',
    func: () => {
      console.log('Tăng dần');
    },
  },
  {
    name: 'Giảm dần',
    func: () => {
      console.log('Giảm dần');
    },
  },
  {
    name: 'Theo chữ cái A - Z',
    func: () => {
      console.log('Theo chữ cái A - Z');
    },
  },
];

function TuanBigTest() {
  return (
    <div>
      <div>
        <span className="text-h2 m-4">Breadcrumb</span>
        <div className="h-20 p-4 bg-bg_black">
          <Breadcrumb hierarchy={hierarchy} />
        </div>
        <div className="h-20 p-4 ">
          <Breadcrumb hierarchy={hierarchy} />
        </div>
      </div>
      <div>
        <span className="text-h2 m-4">Dropdown</span>
        <div className="flex gap-4 h-72 p-4 bg-bg_black">
          <Dropdown dark={true} actionsList={actionsList}>
            Loại khóa học
          </Dropdown>
          <Dropdown type="primary" dark={true} actionsList={actionsList}>
            Mức độ
          </Dropdown>
          <Dropdown dark={true} context="Xếp theo" actionsList={actionsList}>
            A-Z
          </Dropdown>
        </div>
        <div className="flex gap-4 h-72 p-4 ">
          <Dropdown dark={false} actionsList={actionsList}>
            Loại khóa học
          </Dropdown>
          <Dropdown type="primary" dark={false} actionsList={actionsList}>
            Mức độ
          </Dropdown>
          <Dropdown dark={false} context="Xếp theo" actionsList={actionsList}>
            A-Z
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default TuanBigTest;
