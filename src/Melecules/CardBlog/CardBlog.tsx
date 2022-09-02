import React, { FC } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaSearch,FaLink } from "react-icons/fa";
import Button from "../../Atoms/Button/Button";
import Text from "../../Atoms/Text/Text";
import Title from "../../Atoms/Title/Title";

import './style.scss';

type CardBlogType = {
  className ?: string,
  imgUrl ?: string,
  content  ?: string,
  title ?: string
};

const CardBlog: FC<CardBlogType> = ({ className = "", imgUrl, content='', title='' }) => {
  return (
    <div className={`${className} card-blog`}>
      {imgUrl && (
        <div className={`card-blog__img relative w-full h-[15.125rem] bg-green-600`}>
          <img
            className="absolute w-full object-cover left-0 top-0 bottom-0 right-0 h-full"
            src={imgUrl}
            alt="blogimg"
          />
          <div className="overlay absolute flex justify-center items-center top-4 right-4 bottom-4 left-4 bg-white bg-opacity-30 z-50">
            <div className="flex">
              <button className="p-2 mr-1 text-white rounded bg-primary hover:bg-gray-800"><FaSearch /></button>
              <button className="p-2 text-white rounded bg-primary hover:bg-gray-800"><FaLink /></button>
            </div>
          </div>
        </div>
      )}

      <Title className="text-gray-800 text-lg my-3 font-normal hover:text-primary transition cursor-pointer">{title}</Title>

      <Text className="mb-3 text-gray-500">
        {content}
      </Text>

      <Button bg={false} className='text-gray-800 hover:text-primary transition font-semibold inline-flex items-center'>
        <span>Read More</span>
        <BsArrowRight className="text-lg ml-2 translate-y-0.5" />
      </Button>
    </div>
  );
};

export default CardBlog;
