import React from 'react';
import { useState } from 'react';
import { Input, Button } from '../components/ui';
import { MdAlternateEmail } from 'react-icons/md';
import { userProfileScheme } from '../validations/userProfile';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function Profile() {
  const [email, setEmail] = useState('tudepzai@gmail.com');
  const [stickyLabel, setStickyLabel] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userProfileScheme) });

  const { name: fnLabel, onChange: fnOnChange, onBlur: fnOnBlur, ref: fnRef } = register('firstname');
  const { name: lnLabel, onChange: lnOnChange, onBlur: lnOnBlur, ref: lnRef } = register('lastname');
  const { name: dobLabel, onChange: dobOnChange, onBlur: dobOnBlur, ref: dobRef } = register('dateOfBirth');
  const { name: pnName, onChange: pnOnChange, onBlur: pnOnBlur, ref: pnRef } = register('phoneNumber');

  const handleDataForm = (data) => {
    console.log(data);
  };

  const handleChange = (e) => {
    if (e.target.value && !stickyLabel) {
      setStickyLabel(true);
    }

    if (!e.target.value && stickyLabel) {
      setStickyLabel(false);
    }
  };
  return (
    <div className="flex flex-col justify-between">
      <form className="flex flex-col md:px-5 lg:px-10 py-8" onSubmit={handleSubmit(handleDataForm)}>
        {/* Email */}
        <div>
          <Input
            disabled
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            rightIcon={<MdAlternateEmail />}
            fancyOutlined
          />
        </div>
        {/* Full name */}
        <div className="mt-8 hidden md:flex gap-5">
          <div className="w-[60%] min-w-0">
            <Input
              label="Họ và tên đệm"
              ref={fnRef}
              name={fnLabel}
              onChange={fnOnChange}
              onBlur={fnOnBlur}
              fancyOutlined
              status={errors.firstname?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.firstname?.message}</p>
          </div>

          <div className="w-[40%] min-w-0">
            <Input
              label="Tên"
              ref={lnRef}
              name={lnLabel}
              onChange={lnOnChange}
              onBlur={lnOnBlur}
              fancyOutlined
              status={errors.lastname?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.lastname?.message}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:hidden gap-y-8">
          <div>
            <Input
              label="Họ và tên đệm"
              ref={fnRef}
              name={fnLabel}
              onChange={fnOnChange}
              onBlur={fnOnBlur}
              fancyOutlined
              status={errors.firstname?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.firstname?.message}</p>
          </div>
          <div>
            <Input
              label="Tên"
              ref={lnRef}
              name={lnLabel}
              onChange={lnOnChange}
              onBlur={lnOnBlur}
              fancyOutlined
              status={errors.lastname?.message ? 'error' : ''}
            />
            <p className="text-ac_red text-sm mt-1">{errors.lastname?.message}</p>
          </div>
        </div>
        {/* Date of birth */}
        <div className="mt-8 hidden md:flex gap-5">
          <div className="w-1/2">
            <Input
              label="Ngày sinh"
              type="date"
              name={dobLabel}
              onChange={dobOnChange}
              onBlur={dobOnBlur}
              ref={dobRef}
              fancyOutlined
            />
            <p className="text-ac_red text-sm mt-1">{errors.dateOfBirth?.message}</p>
          </div>

          <div className="w-1/2">
            <Input
              label="Số điện thoại"
              name={pnName}
              onChange={pnOnChange}
              onBlur={pnOnBlur}
              ref={pnRef}
              fancyOutlined
            />
            <p className="text-ac_red text-sm mt-1">{errors.phoneNumber?.message}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:hidden gap-y-8">
          <div>
            <Input
              label="Ngày sinh"
              type="date"
              name={dobLabel}
              onChange={dobOnChange}
              onBlur={dobOnBlur}
              ref={dobRef}
              fancyOutlined
            />
            <p className="text-ac_red text-sm mt-1">{errors.dateOfBirth?.message}</p>
          </div>

          <div>
            <Input
              label="Số điện thoại"
              name={pnName}
              onChange={pnOnChange}
              onBlur={pnOnBlur}
              ref={pnRef}
              fancyOutlined
            />
            <p className="text-ac_red text-sm mt-1">{errors.phoneNumber?.message}</p>
          </div>
        </div>
        {/* Description */}
        <div className="flex items-center w-full text-md relative mt-8 border rounded-lg border-br_light_gray focus-within:outline focus-within:outline-2 outline-ac_blue">
          <textarea
            className="w-full px-4 pt-4 text-t_dark outline-none rounded-lg mb-1 mr-1 peer"
            onChange={handleChange}
          />

          {/* Label */}
          <label
            className="absolute px-1 mx-3 peer-focus:top-0 peer-focus:text-sm top-1/2 -translate-y-1/2 transition-all"
            style={{
              backgroundColor: '#fff',
              top: stickyLabel && '0',
              fontSize: stickyLabel && '12px',
            }}
          >
            Mô tả
          </label>
        </div>
        <span className="w-full border-t-[0.5px] border-br_gray my-10" />
        <Button width="fit-content">Cập nhật</Button>
      </form>
    </div>
  );
}

export default Profile;
