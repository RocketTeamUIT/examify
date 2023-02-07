import Container from '../../../layouts/components/Container';
import ExamItem from './ExamItem';
import { Dropdown, Pagination } from '../../../components/ui';
import { getAllExamsService } from '../services/exam';
import { useEffect, useState } from 'react';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import classNames from 'classnames';
import withFilter from 'components/hoc/withFilter';
import withHeader from 'components/hoc/withHeader';

const SERIES = {
  type: 'series',
  actionsList: ['Không chọn', 'ETS 2021', 'ETS 2022', 'ETS 2023'].map((item, index) => ({
    title: item,
    id: index,
  })),
};

const ExamList = ({ search, list }) => {
  const [examList, setExamList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(0);
  const [series, setSeries] = useState(0);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const fetchExams = async () => {
      const response = await getAllExamsService(axiosPrivate);
      setExamList(response.data);
    };

    fetchExams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seriesDropdown = {
    ...SERIES,
    actionsList: SERIES.actionsList.map((series) => ({
      ...series,
      action: () => setSeries(series.id),
    })),
  };

  useEffect(() => {
    if (examList.length) {
      setFiltered(
        examList.filter((item) => {
          return (
            item.name.toLowerCase().includes(search.toLowerCase()) && (series === 0 || item.examSeriesId === series)
          );
        }),
      );
    }
  }, [examList, search, series]);

  return (
    <div className="mb-10">
      <Container className="relative">
        <div className="flex gap-4 absolute -top-8">
          <Dropdown data={seriesDropdown}>
            {seriesDropdown.type[0].toUpperCase() + seriesDropdown.type.toLowerCase().slice(1)}
          </Dropdown>
        </div>

        <div
          className={classNames(
            'mt-8',
            list ? 'space-y-5' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5',
          )}
        >
          {filtered && filtered.map((examItem) => <ExamItem list={list} exam={examItem} key={examItem.id} />)}
        </div>
      </Container>
    </div>
  );
};

const ExamListWithFilter = withHeader('Đề thi')(withFilter(ExamList));

export default ExamListWithFilter;
