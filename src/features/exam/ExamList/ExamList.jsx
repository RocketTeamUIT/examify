import SubNav from '../../../components/ui/SubNav';
import Container from '../../../layouts/components/Container';
import bannerImg from '../../../assets/images/courseBanner.png';
import ExamItem from './ExamItem';
import { examList } from '../data';
import { Filter } from '../../../components/ui';
import useGrid from './hooks/useGrid';

const NAV_LIST = [
  {
    name: 'Tất cả',
    path: '/exams',
  },
];

const ExamList = () => {
  const { list, toggleList } = useGrid();

  return (
    <div className="mb-10">
      {/* Banner */}
      <Container className="py-5">
        <img className="w-full object-cover" src={bannerImg} alt="examify" />
      </Container>

      {/* Sub Navigation component*/}
      <SubNav navList={NAV_LIST} initialValue={0} />

      <Container className="mt-4">
        <Filter placeholder="Tìm đề thi theo tên" list={list} toggleList={toggleList} />
      </Container>

      <Container className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
          {examList.map((examItem) => (
            <ExamItem grid={list} exam={examItem} key={examItem.id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ExamList;
