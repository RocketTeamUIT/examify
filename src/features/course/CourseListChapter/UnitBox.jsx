function UnitBox() {
  return (
    <a href="#/" className="">
      <div className="flex items-center justify-between h-[60px] bg-bg_light_gray shadow-md rounded-md px-4">
        <p className="">
          <span>1. </span>
          <span>Giới thiệu về bảng kí hiệu ngữ âm quốc tế (IPA)</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="text-t_gray">2 bài giảng</span>
          <div className="w-[20px] h-[20px] rounded-full bg-green-300"></div>
        </div>
      </div>
    </a>
  );
}

export default UnitBox;
