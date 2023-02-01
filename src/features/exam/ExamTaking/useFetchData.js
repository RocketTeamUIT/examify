import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getExamTaking } from '../tackleSlice';
import base from 'lib/base';

function useFetchData(config) {
  const dispatch = useDispatch();

  // Call api get data depend on `config`
  useEffect(() => {
    dispatch(
      getExamTaking({
        base,
        id: config.id,
        queryString: {
          examId: config.id,
          partIds: config.partIdList,
        },
      }),
    );
  }, [config, dispatch]);
}

export default useFetchData;
