import Table from './Table';

function PrevResult({ data }) {
  return (
    <div className="mt-9">
      <h4 className="mb-5 text-h4 font-semibold">Kết quả làm bài trước</h4>
      <div className="overflow-y-scroll max-h-96 shadow-sd_bt">
        <Table data={data} />
      </div>
    </div>
  );
}

export default PrevResult;
