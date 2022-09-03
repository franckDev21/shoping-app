import React, { FC } from "react";
import Text from "../../Atoms/Text/Text";
import CopyRigth from "../../Melecules/CopyRigth/CopyRigth";
import Logo from "../../Melecules/Logo/Logo";

import AppStoreImg from "../../image/app-store.png";
import PlayStoreImg from "../../image/windows.png";

import { AiOutlineHome } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Newsletter from "../Newsletter/Newsletter";
import FollowUs from "../../Melecules/FollowUs/FollowUs";
import { Link } from "react-router-dom";
import DropdownFooter from "../../Melecules/DropdownFooter/DropdownFooter";

type FooterType = {
  className?: string;
};

const Footer: FC<FooterType> = ({ className = "" }) => {
  return (
    <footer className={`${className} pt-10`}>
      <div className="container">
        {/* mobile */}
        <div className="flex flex-col items-start justify-start lg:hidden">
          <DropdownFooter title="contact us">
            <Logo width={131} height={50} classBox="mb-3" />

            <Text className="py-2 text-gray-500">
              Quisque nec nulla ut odio dictum molestie. Nulla sed eleifend
              enim. Vestibulum viverra finibus laoreet
            </Text>

            <ul className="mb-6 mt-1 text-sm">
              <li className="mb-2 flex items-center text-gray-400">
                <AiOutlineHome className="mr-3 text-2xl text-primary" />{" "}
                <span>Furniture Store</span>
              </li>
              <li className="mb-2 flex items-center text-gray-400">
                <MdPhoneInTalk className="mr-3 text-2xl text-primary" />{" "}
                <span>123-456-789</span>
              </li>
              <li className="mb-2 flex items-center text-gray-400">
                <HiOutlineMail className="mr-3 text-2xl text-primary" />{" "}
                <span>demo@demo.com</span>
              </li>
            </ul>
          </DropdownFooter>
          <div className="flex">
            <img
              width={112}
              className="mr-2 cursor-pointer"
              height={36}
              src={AppStoreImg}
              alt="app-atore"
            />
            <img
              width={130}
              className="cursor-pointer"
              height={36}
              src={PlayStoreImg}
              alt="google-atore"
            />
          </div>

          <Newsletter className="w-full" />
          <FollowUs className="w-full my-4" />

          <DropdownFooter title="INFORMATION">
            <ul>
              <li className="mb-3 text-gray-500">
                <Link to="/">About Us</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Delivery Information</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Terms & Conditions</Link>
              </li>
            </ul>
          </DropdownFooter>

          <DropdownFooter title="MY ACCOUNT">
            <ul>
              <li className="mb-3 text-gray-500">
                <Link to="/">My Account</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Order History</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Wish List</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Newsletter</Link>
              </li>
            </ul>
          </DropdownFooter>

          <DropdownFooter title="EXTRAS">
            <ul>
              <li className="mb-3 text-gray-500">
                <Link to="/">Affiliate</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Special product</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Manufacture</Link>
              </li>
            </ul>
          </DropdownFooter>

          <DropdownFooter title="CUSTOMER SERVICE">
            <ul>
              <li className="mb-3 text-gray-500">
                <Link to="/">Contact Us</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Returns</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Site Map</Link>
              </li>
              <li className="mb-3 text-gray-500">
                <Link to="/">Gift Certificates</Link>
              </li>
            </ul>
          </DropdownFooter>
        </div>
        {/* laptop menu */}
        <div className="hidden md:flex">
          <div className="w-1/4 pb-10">
            <Logo width={131} height={50} classBox="mb-3" />

            <Text className="py-2 text-gray-500">
              Quisque nec nulla ut odio dictum molestie. Nulla sed eleifend
              enim. Vestibulum viverra finibus laoreet
            </Text>

            <ul className="mb-6 mt-1 text-sm">
              <li className="mb-2 flex items-center text-gray-400">
                <AiOutlineHome className="mr-3 text-2xl text-primary" />{" "}
                <span>Furniture Store</span>
              </li>
              <li className="mb-2 flex items-center text-gray-400">
                <MdPhoneInTalk className="mr-3 text-2xl text-primary" />{" "}
                <span>123-456-789</span>
              </li>
              <li className="mb-2 flex items-center text-gray-400">
                <HiOutlineMail className="mr-3 text-2xl text-primary" />{" "}
                <span>demo@demo.com</span>
              </li>
            </ul>

            <div className="flex flex-col lg:flex-row">
              <img
                width={112}
                className="mr-2 cursor-pointer mb-2 lg:mb-0"
                height={36}
                src={AppStoreImg}
                alt="app-atore"
              />
              <img
                width={130}
                className="cursor-pointer"
                height={36}
                src={PlayStoreImg}
                alt="google-atore"
              />
            </div>
          </div>

          <div className="w-3/4 border-l px-4">
            <div className="flex border-b pb-6">
              <Newsletter className="w-[65%]" />
              <FollowUs className="w-[35%] pl-3 lg:pl-8" />
            </div>
            <div className="pt-3 flex flex-wrap -mx-2 pb-10">
              <div className="w-1/4 px-2">
                <div>
                  <h2 className="uppercase mb-4 font-semibold">INFORMATION</h2>

                  <ul>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">About Us</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Delivery Information</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Privacy Policy</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/4 px-2">
                <div>
                  <h2 className="uppercase mb-4 font-semibold">MY ACCOUNT</h2>

                  <ul>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">My Account</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Order History</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Wish List</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Newsletter</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/4 px-2">
                <div>
                  <h2 className="uppercase mb-4 font-semibold">EXTRAS</h2>

                  <ul>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Affiliate</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Special product</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Manufacture</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/4 px-2">
                <div>
                  <h2 className="uppercase mb-4 font-semibold">
                    CUSTOMER SERVICE
                  </h2>

                  <ul>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Returns</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Site Map</Link>
                    </li>
                    <li className="mb-3 text-gray-500">
                      <Link to="/">Gift Certificates</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyRigth />
    </footer>
  );
};

export default Footer;
