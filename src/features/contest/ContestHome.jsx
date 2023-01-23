import React from 'react';
import Logo from '../../assets/White_Logo.svg';
import { Button } from '../../components/ui';

const ContestHome = () => {
  return (
    <div className="h-screen bg-primary flex flex-col items-center justify-center">
      <div className="w-80 flex flex-col items-center gap-y-10">
        <img src={Logo} alt="Examify-logo" className="fill-white" />
        <Button size="large" width="100%">
          Ghép trận
        </Button>
        <div className="flex flex-row">
          <input type="number" placeholder="Game PIN" className="rounded-l-lg bg-bg_light_gray_2 pl-5 w-3/5"></input>
          <button className="bg-ac_blue h-12 text-t_white rounded-r-lg w-2/5 font-bold hover:bg-opacity-90">
            Tìm phòng
          </button>
        </div>
        <Button size="large" width="100%">
          Luyện tập
        </Button>
      </div>
    </div>
  );
};

export default ContestHome;
