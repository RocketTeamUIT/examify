import React from 'react';

const BloodBar = () => {
  return (
    <div className="h-20 w-full flex flex-row justify-start items-center relative">
      <div className="w-full h-8 bg-bg_light_gray border border-br_gray rounded-tr-lg rounded-br-[32px] absolute left-16"></div>
      <div className="w-1/3 h-8 bg-ac_orange border border-br_gray rounded-tr-lg rounded-br-[32px] absolute left-16"></div>
      <div className="h-20 w-20 rounded-full border border-br_gray overflow-hidden absolute">
        <img
          src="https://img.freepik.com/free-vector/cute-turtle-super-hero-cartoon-vector-icon-illustration-animal-holiday-icon-concept-isolated-flat_138676-4623.jpg"
          alt="user avatar"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default BloodBar;
