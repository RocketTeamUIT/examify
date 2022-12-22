import { React, useState, useEffect, useRef } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { MuiTabs, Button } from '../components/ui';
import Profile from './Profile';
import ChangePassword from './ChangePasswordPanel';
import { useSelector, useDispatch } from 'react-redux';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { changeAvatar, changeBanner } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { uploadImageService } from '../lib/image';

function UserProfile() {
  const { user } = useSelector((store) => store.auth);
  const [avt, setAvt] = useState(user.avt);
  const [banner, setBanner] = useState(user.banner);
  const [imageType, setImageType] = useState('');
  const inputFile = useRef(null);
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (user) {
      setAvt(user.avt);
      setBanner(user.banner);
    }
  }, [user]);

  const handleImageChange = async (e) => {
    const image = e.target.files[0];
    const response = await uploadImageService(image, 'examify');
    const url = response.data.url;
    if (imageType === 'avatar') {
      setAvt(URL.createObjectURL(image));
      dispatch(
        changeAvatar({
          axiosPrivate,
          newImageUrl: url,
        }),
      );
      toast.success('Đổi ảnh đại diện thành công!');
    } else {
      setBanner(URL.createObjectURL(image));
      dispatch(
        changeBanner({
          axiosPrivate,
          newImageUrl: url,
        }),
      );
      toast.success('Đổi ảnh bìa thành công!');
    }
  };

  const handleAvtClick = (e) => {
    inputFile.current.click();
    setImageType('avatar');
  };

  const handleBannerClick = (e) => {
    inputFile.current.click();
    setImageType('banner');
  };

  return (
    <div className="h-fit lg:mx-[50px] xl:mx-[100px] xxl:mx-[150px]">
      <input type="file" accept="image/*" style={{ display: 'none' }} ref={inputFile} onChange={handleImageChange} />
      {/* Banner */}
      <div className="h-[200px] overflow-hidden lg:rounded-b-3xl relative">
        <Button
          className="absolute top-[26px] right-[26px] bg-black"
          rounded={[10, 10, 10, 10]}
          dark
          type="default"
          leftIcon={<AiFillCamera />}
          onClick={handleBannerClick}
        >
          Đổi banner
        </Button>
        <img className="object-cover w-full h-full" src={banner} alt="User banner" />
      </div>
      {/* Container */}
      <div className="relative h-fit md:h-[644px] -top-16 md:-top-20 md:mx-[20px] lg:mx-[50px] xl:mx-[100px] xxl:mx-[150px] flex flex-col md:flex-row md:gap-5 px-1 sm:px-10 md:px-0">
        {/* Profile 1*/}
        <div className="w-2/5 h-full bg-white overflow-hidden border border-br_gray rounded-3xl hidden md:flex flex-col items-center py-12">
          {/* header */}
          <div className="flex flex-col items-center mb-9">
            <div
              className="w-20 h-20 relative overflow-hidden border border-br_gray rounded-full"
              onClick={handleAvtClick}
            >
              <Button
                className="absolute bottom-0 w-full h-[30%] bg-black flex items-center justify-center"
                dark
                type="default"
                onClick={handleAvtClick}
              >
                <AiFillCamera fill="#ffff" />
              </Button>
              <img className="w-20 h-20 object-cover" src={avt} alt="User avt" />
            </div>
            <p className="my-3 text-h3 text-t_dark font-bold">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-h6 text-t_light_gray_2 font-medium">{user.rank?.rankName}</p>
          </div>
          {/* body */}
          <div className="flex flex-col items-center w-full">
            <span className="w-full border-t-[0.5px] border-br_gray" />
            {/* Num of enrolled course */}
            <div className="flex w-full justify-between px-10 py-5">
              <h1 className="text-h5 font-medium text-t_dark">Số khóa học đã đăng ký</h1>
              <h1 className="text-h5 font-medium text-ac_orange">{user.joinedCourses}</h1>
            </div>
            {/* Num of your flashcard */}
            <span className="w-full border-t-[0.5px] border-br_gray" />
            <div className="flex w-full justify-between px-10 py-5">
              <h1 className="text-h5 font-medium text-t_dark">Số flashcard của bạn</h1>
              <h1 className="text-h5 font-medium text-ac_green">15</h1>
            </div>
            {/* Accumulated point */}
            <span className="w-full border-t-[0.5px] border-br_gray" />
            <div className="flex flex-col w-full items-center px-10 py-5">
              <h1 className="text-h5 font-medium text-t_dark">Điểm tích lũy</h1>
              <h1 className="text-h2 font-bold text-t_light_gray_2 mt-4">{user.accumulatedPoint}</h1>
            </div>
          </div>
        </div>
        {/* Profile 2*/}
        <div className="md:hidden">
          {/* Avt and info */}
          <div className="flex">
            <div
              className="w-32 h-32 relative overflow-hidden rounded-full border-8 border-white"
              onClick={handleAvtClick}
            >
              <Button
                className="absolute bottom-0 w-full h-[40%] bg-black flex items-center justify-center"
                dark
                type="default"
                rounded={[0, 0, 0, 0]}
                onClick={handleAvtClick}
              >
                <AiFillCamera fill="#ffff" />
              </Button>
              <img className="w-32 h-32 object-cover " src={avt} alt="User avt" />
            </div>
            {/* Info */}
            <div>
              <div className="h-1/2" />
              <div className="h-1/2 flex flex-col pb-2 justify-around">
                <p className="mt-1 text-h4 text-t_dark font-bold">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-h6 text-t_light_gray_2 font-medium">{user.rank?.rankName}</p>
              </div>
            </div>
          </div>
          {/* body */}
          <div className="flex flex-col items-center w-full my-7 px-5 md:hidden">
            {/* Num of enrolled course */}
            <div className="flex w-full justify-between py-1">
              <h1 className="text-sm font-medium text-t_dark">Số khóa học đã đăng ký</h1>
              <h1 className="text-sm font-medium text-ac_orange">{user.joinedCourses}</h1>
            </div>
            {/* Num of your flashcard */}
            <div className="flex w-full justify-between py-1">
              <h1 className="text-sm font-medium text-t_dark">Số flashcard của bạn</h1>
              <h1 className="text-sm font-medium text-ac_green">15</h1>
            </div>
            {/* Accumulated point */}
            <div className="flex w-full justify-between py-1">
              <h1 className="text-sm font-medium text-t_dark">Điểm tích lũy</h1>
              <h1 className="text-sm font-bold text-t_light_gray_2">{user.accumulatedPoint}</h1>
            </div>
          </div>
        </div>
        {/* Account setting */}
        <div className="md:w-3/5 h-full bg-white overflow-hidden border md:border-br_gray md:rounded-3xl justify-self-center mx-5 md:mx-0">
          <MuiTabs
            componentList={[
              {
                label: 'Cài đặt tài khoản',
                data: <Profile />,
              },
              {
                label: 'Đổi mật khẩu',
                data: <ChangePassword />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
