import { Tag } from '../../../../../components/ui';

function Part({ part }) {
  const hashtagList = [...new Set(part.listHashtag)];
  return (
    <div className="flex flex-col">
      <span className="text-h5">{part.name}</span>
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2">
        {hashtagList.map((partItem, index) => (
          <Tag key={index} color="blue" bgColor="#F5F7F9">
            {partItem}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default Part;
