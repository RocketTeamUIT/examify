import { Breadcrumb, Dropdown } from '../components/ui';

// Data sample
const hierarchy = ['IELTS Fundamentals', 'Past tenses 1...', 'Hiện tại'];

const data = {
  type: 'menu',
  actionsList: [
    {
      title: 'Tăng dần',
      action: () => {},
      type: 'active',
      initial: 0,
      actionsList: [
        {
          title: 'TD1',
          action: () => {
            console.log('TD1');
          },
        },
        {
          title: 'TD2',
          action: () => {
            console.log('TD2');
          },
        },
      ],
    },
    {
      title: 'Giảm dần',
      action: () => {},
    },
  ],
};

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
          {/* <Dropdown data={data}>
            Loại khóa học
          </Dropdown>
          <Dropdown type="primary" actionsList={data}>
            Mức độ
          </Dropdown>
          <Dropdown context="Xếp theo" actionsList={data}>
            A-Z
          </Dropdown> */}
        </div>
        <div className="flex gap-4 h-72 p-4 ">
          <Dropdown context="Xếp theo" initialState={0} data={data}>
            Loại khóa học
          </Dropdown>
          {/* <Dropdown type="primary" data={data}>
            Mức độ
          </Dropdown>
          <Dropdown context="Xếp theo" data={data}>
            A-Z
          </Dropdown> */}
        </div>
      </div>
    </div>
  );
}

export default TuanBigTest;
