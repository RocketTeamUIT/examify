import { Breadcrumb } from '../components/ui';
const hierarchy = ['IELTS Fundamentals', 'Past tenses 1...', 'Hiện tại'];

function TuanBigTest() {
  return (
    <div>
      <div>
        <span className="text-h2 m-4">Breadcrumb</span>
        <div className="h-20 p-4 bg-bg_black">
          <Breadcrumb hierarchy={hierarchy} dark={true} />
        </div>
        <div className="h-20 p-4 ">
          <Breadcrumb hierarchy={hierarchy} dark={false} />
        </div>
      </div>
    </div>
  );
}

export default TuanBigTest;
