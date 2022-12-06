import { Link } from 'react-router-dom';
import { Button } from '../../components/ui';

function Recommend() {
  return (
    <div className="bg-bg_light_gray h-[240px] flex">
      <div className="m-auto text-center">
        <h2 className="font-bold text-h3">Khám phá các khoá học</h2>
        <p className="text-lg mt-[14px]">Bắt đầu ngay để được nhận các ưu đãi và cập nhật</p>
        <div className="flex justify-center">
          <Link to="/courses">
            <Button className="mt-[18px] px-8">Tham gia</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recommend;
