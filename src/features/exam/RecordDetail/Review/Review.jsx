import ReviewItem from './ReviewItem';

function Review({ data }) {
  return (
    <div className="mt-16">
      <h2 className="text-h4 font-medium">Đánh giá kết quả</h2>
      <div className="flex gap-4 mt-5">
        {data?.map((item, index) => (
          <ReviewItem data={item} key={index} />
        ))}
        ;
      </div>
    </div>
  );
}

export default Review;
