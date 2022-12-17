import React from 'react';
import { Tag } from '../../components/ui';
import { MdEdit, MdDelete } from 'react-icons/md';

const NoteItem = ({ note, seq }) => {
  return (
    <div>
      {/* HEADER */}
      <header className="flex items-center gap-4">
        <Tag color="cyan">#{seq}</Tag>
        <span className="text-md font-semibold text-t_gray">{note.createdAt.slice(0, 10)}</span>
        <MdEdit className="text-t_gray ml-auto text-h4 cursor-pointer" />
        <MdDelete className="text-t_gray text-h4 cursor-pointer" />
      </header>

      {/* NOTE CONTENT */}
      <div className="px-4 py-6 bg-bg_light_gray rounded-xl text-t_dark mt-4">{note.note}</div>
    </div>
  );
};

export default NoteItem;
