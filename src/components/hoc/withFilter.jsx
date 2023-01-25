import { Filter } from 'components/ui';
import useGrid from 'features/course/CourseList/hooks/useGrid';
import Container from 'layouts/components/Container';
import React, { useState } from 'react';

const withFilter = (WrappedComponent) => {
  function WithFilter() {
    const { list, toggleList } = useGrid();
    const [search, setSearch] = useState('');

    function handleChange(e) {
      setSearch(e.target.value);
    }

    return (
      <>
        <Container className="mt-10">
          <Filter
            handleChange={handleChange}
            value={search}
            placeholder="Tìm theo tên"
            list={list}
            toggleList={toggleList}
          />
        </Container>

        <WrappedComponent search={search} list={list} />
      </>
    );
  }

  WithFilter.displayName = `WithFilter(${getDisplayName(WrappedComponent)})`;
  return WithFilter;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withFilter;
