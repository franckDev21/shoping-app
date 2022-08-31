import React, { FC } from "react";
import Text from "../../Atoms/Text/Text";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleValue } from "../../Store/features/notification/notificationSlice";

import './style.scss';

interface MobileScreenMenuProps {
  className?: string;
  isVisible?: boolean;
}

const MobileScreenMenu: FC<MobileScreenMenuProps> = ({
  className = "",
  isVisible = true,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`mobile-screen-menu ${className} transition  ease-in-out  ${
        isVisible
          ? ""
          : "visible"
      }`}
    >
      <div
        className={`menu-screen w-[75%] bg-white min-h-screen`}
      >
        <Text className="px-4 bg-gray-800 py-2 text-white flex items-center justify-between">
          <span style={{ color: '#fff' }}>Categories</span>
          <FaTimes
            style={{ fill: '#fff' }}
            className="w-6 h-6 cursor-pointer"
            onClick={() => dispatch(toggleValue())}
          />
        </Text>

        <Text className="px-4  py-2 text-gray-700 border-y">Desktops</Text>
        <Text className="px-4  py-2 text-gray-700 border-y">
          Laptops & Notebooks
        </Text>
        <Text className="px-4  py-2 text-gray-700 border-y">Phones & PDAs</Text>
        <Text className="px-4  py-2 text-gray-700 border-y">Cameras</Text>
        <Text className="px-4  py-2 text-gray-700 border-y">MP3 Players</Text>
        <Text className="px-4  py-2 text-gray-700 border-y">Tablets</Text>
        <Text className="px-4  py-2 text-gray-700 border-y">Software</Text>
      </div>
    </div>
  );
};

export default MobileScreenMenu;
