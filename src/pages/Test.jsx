import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/ui';
import { changeAvatar, signIn } from '../features/auth/authSlice';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Test = () => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { isLoading } = useSelector((store) => store.auth);

  const handleClick = () => {
    dispatch(signIn({ email: 'tuannt01@gmail.com', password: 'tuan2002' }));
  };

  const handleClick2 = async () => {
    dispatch(
      changeAvatar({
        axiosPrivate,
        newImageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
      }),
    );
  };

  if (isLoading) {
    return <div>IS LOADING...</div>;
  }

  return (
    <div className="h-screen flex">
      <div className="m-auto">
        <Button onClick={handleClick}>Login</Button>
        <Button onClick={handleClick2} className="mt-2">
          Do sth
        </Button>
      </div>
    </div>
  );
};

export default Test;
