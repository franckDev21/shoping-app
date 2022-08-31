import React from "react";
import MyIcon from "../../Atoms/MyIcon/MyIcon";

const HeartIcon = () => {
  return (
    <MyIcon className="mr-3 lg:mr-0">
      {/* <AiOutlineHeart className='h-6 w-6' /> */}
      <svg className="w-6 h-6" viewBox="0 0 129 129" id="heart">
        <path
          fill="currentColor"
          d="m121.6,40.1c-3.3-16.6-15.1-27.3-30.3-27.3-8.5,0-17.7,3.5-26.7,10.1-9.1-6.8-18.3-10.3-26.9-10.3-15.2,0-27.1,10.8-30.3,27.6-4.8,24.9 10.6,58 55.7,76 0.5,0.2 1,0.3 1.5,0.3 0.5,0 1-0.1 1.5-0.3 45-18.4 60.3-51.4 55.5-76.1zm-57,67.9c-39.6-16.4-53.3-45-49.2-66.3 2.4-12.7 11.2-21 22.3-21 7.5,0 15.9,3.6 24.3,10.5 1.5,1.2 3.6,1.2 5.1,0 8.4-6.7 16.7-10.2 24.2-10.2 11.1,0 19.8,8.1 22.3,20.7 4.1,21.1-9.5,49.6-49,66.3z"
        ></path>
      </svg>
    </MyIcon>
  );
};

export default HeartIcon;
