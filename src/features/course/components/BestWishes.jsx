import React from 'react';
import { Link } from 'react-router-dom';

// Some encourage sentences
const BestWishes = () => {
  return (
    <div className="text-md text-t_dark mt-20">
      <p>
        Tham gia nhiều khóa học chất lượng tại{' '}
        <Link to="/" className="font-semibold text-primary underline">
          Examify
        </Link>{' '}
        để bổ sung và nâng cao kiến thức cho bản thân!
      </p>
      <p className="mt-5">
        Đội ngũ Examify luôn bên cạnh để hỗ trợ bạn, liên hệ{' '}
        <a href="https://www.fb.com/hdatdragon2849" className="underline text-primary font-semibold">
          Examify contact
        </a>{' '}
        để được hỗ trợ mọi lúc.
      </p>
    </div>
  );
};

export default BestWishes;
