import React, { FC } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

type FollowUsType = {
  className ?: string,
}

const FollowUs:FC<FollowUsType> = ({ className='' }) => {
  return (
    <div className={`${className}`}>
      <h1 className="mb-4 text-gray-700 w-full text-2xl font-semibold pb-3">Follow Us</h1>
      <div className="flex">
        <button
          style={{ boxShadow: "0px 0px 6px 0px rgb(4 0 0 / 10%)" }}
          type="button"
          className="mr-2 rounded p-3 hover:text-white hover:bg-gradient-to-r from-primary to-gradiantEnd"
        >
          <FaFacebookF fill="currentColor" />
        </button>
        <button
          style={{ boxShadow: "0px 0px 6px 0px rgb(4 0 0 / 10%)" }}
          type="button"
          className="mr-2 rounded p-3 hover:text-white hover:bg-gradient-to-r from-primary to-gradiantEnd"
        >
          <FaTwitter fill="currentColor" />
        </button>
        <button
          style={{ boxShadow: "0px 0px 6px 0px rgb(4 0 0 / 10%)" }}
          type="button"
          className="mr-2 rounded p-3 hover:text-white hover:bg-gradient-to-r from-primary to-gradiantEnd"
        >
          <FaInstagram fill="currentColor" />
        </button>
        <button
          style={{ boxShadow: "0px 0px 6px 0px rgb(4 0 0 / 10%)" }}
          type="button"
          className="mr-2 rounded p-3 hover:text-white hover:bg-gradient-to-r from-primary to-gradiantEnd"
        >
          <FaPinterestP fill="currentColor" />
        </button>
        <button
          style={{ boxShadow: "0px 0px 6px 0px rgb(4 0 0 / 10%)" }}
          type="button"
          className="mr-2 rounded p-3 hover:text-white hover:bg-gradient-to-r from-primary to-gradiantEnd"
        >
          <FaSkype fill="currentColor" />
        </button>
      </div>
    </div>
  );
};

export default FollowUs;
