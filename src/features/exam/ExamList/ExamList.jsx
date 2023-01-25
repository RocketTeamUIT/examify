// import SubNav from '../../../components/ui/SubNav';
import Container from '../../../layouts/components/Container';
// import bannerImg from '../../../assets/images/courseBanner.png';
import ExamItem from './ExamItem';
// import { examList } from '../data';
import { Pagination } from '../../../components/ui';
import { getAllExamsService } from '../services/exam';
import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import classNames from 'classnames';
import withFilter from 'components/hoc/withFilter';
import withHeader from 'components/hoc/withHeader';

// const NAV_LIST = [
//   {
//     name: 'Tất cả',
//     path: '/exams',
//   },
// ];

const ExamList = ({ search, list }) => {
  const [examList, setExamList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(0);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const fetchExams = async () => {
      const examListRespond = (await getAllExamsService(axiosPrivate)).data;
      // console.log(examListRespond);
      setExamList(examListRespond);
    };

    fetchExams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (examList.length) {
      setFiltered(examList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())));
    }
  }, [examList, search]);

  return (
    <div className="mb-10">
      {/* Banner */}
      {/* <Container className="py-5">
        <img className="w-full object-cover" src={bannerImg} alt="examify" />
      </Container> */}

      {/* Sub Navigation component*/}
      {/* <SubNav navList={NAV_LIST} initialValue={0} /> */}

      <Container>
        <div
          className={classNames(
            'mt-8',
            list ? 'space-y-5' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5',
          )}
        >
          {filtered && filtered.map((examItem) => <ExamItem list={list} exam={examItem} key={examItem.id} />)}
        </div>

        <footer className="mt-10 flex justify-center">
          <Pagination length={10} selected={selected} setSelected={setSelected} />
        </footer>
      </Container>
    </div>
  );
};

const ExamListWithFilter = withHeader('Đề thi')(withFilter(ExamList));

export default ExamListWithFilter;
