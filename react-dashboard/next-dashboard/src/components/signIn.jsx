import React from 'react';

const SignIn = ({ onSignIn }) => {
  return (
    <div className="relative w-[198px] h-[33px] bg-white rounded-[10px]">
      <div
        className="w-[130px] left-[47px] absolute h-[16px] top-[9px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-secondary-text text-[12px] text-center tracking-[0] leading-[normal]"
        onClick={onSignIn}
      >
        Sign in with Google
      </div>
      <img
        className="absolute w-[15px] h-[15px] top-[9px] left-[21px]"
        alt="Google icon"
        src="google-icon-1.svg"
      />
    </div>
  );
};

export default SignIn;
