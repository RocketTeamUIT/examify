import { useState, useEffect, memo } from 'react';

import Chapter from './Chapter';
import { convertTimeHours, convertTimeMinutes } from '../../../utils/formatCurrency';
import { getCourseDetail } from '../services/course';

function CourseContent({ course }) {
  const [openAll, setOpenAll] = useState(false);
  const [chapterList, setChapterList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const chapters = (await getCourseDetail(course.id)).data.data.chapterList;
      console.log(chapters);
      setChapterList(chapters);
    }
    fetchData();
  }, [course.id]);

  return (
    <>
      <h3 className="text-body-lg text-center font-medium mb-4 md:mb-8 lg:text-left">Nội dung khóa học</h3>
      <div className="md:flex md:justify-between mb-2 md:mb-4">
        <p className="text-body-sm">
          <b>{course.totalChapter}</b> chương |{' '}
          <span className="hidden md:inline-block">
            <b>{course.totalLesson}</b> bài học |{' '}
          </span>{' '}
          Thời lượng{' '}
          <b>
            {convertTimeHours(course.totalVideoTime)} giờ {convertTimeMinutes(course.totalVideoTime)} phút
          </b>
        </p>

        {/* Button expand course content */}
        <span className="text-primary text-body-sm font-semibold cursor-pointer" onClick={() => setOpenAll(!openAll)}>
          {openAll ? 'Thu gọn' : 'Mở rộng tất cả'}
        </span>
      </div>

      {/* List chapter of the course */}
      <div className="grid gap-2">
        {chapterList.map((chapter) => (
          <Chapter key={chapter.id} chapter={chapter} openAll={openAll} />
        ))}
      </div>
    </>
  );
}

export default memo(CourseContent);
