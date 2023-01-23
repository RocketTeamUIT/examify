import { Tag } from 'components/ui';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FlashcardSet = (props) => {
  const { set, hideType } = props;

  return (
    <Link
      className="h-[216px] border border-br_light_gray rounded-lg p-5 flex flex-col hover:bg-bg_light_gray_5 transition cursor-pointer"
      to={`/flashcards/${set.fc_set_id}`}
    >
      <header className="flex justify-between items-center">
        <h3 className="font-bold">{set.name}</h3>
      </header>

      <p className="text-md mt-[9px] text-t_dark">
        {set.learnt_count && (
          <>
            <span className="text-ac_green">{set.learnt_count}</span> /
          </>
        )}{' '}
        {set.words_count} từ
      </p>
      <p className="text-md mt-[9px] text-t_gray">{set.description}</p>

      <div className="flex items-center mt-auto">
        {set.system_belong && <Tag color="blue">Hệ thống</Tag>}
        {!hideType && <p className="text-sm font-medium ml-auto">{set.type}</p>}
      </div>
    </Link>
  );
};

FlashcardSet.propTypes = {
  set: PropTypes.object.isRequired,
  hideType: PropTypes.bool,
};

FlashcardSet.defaultProps = {
  hideType: false,
};

export default FlashcardSet;
