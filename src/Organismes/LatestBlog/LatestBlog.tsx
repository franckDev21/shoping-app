import React, { FC } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import MyIcon from "../../Atoms/MyIcon/MyIcon";
import Text from "../../Atoms/Text/Text";
import Card from "../../Melecules/Card/Card";
import CardBlog from "../../Melecules/CardBlog/CardBlog";
import BlogOne from "../../image/blog1.jpg";
import BlogTwo from "../../image/blog2.jpg";
import BlogThree from "../../image/blog3.jpg";

type LatestBlogType = {
  className?: string;
};

const blogs = [
  {
    url: BlogOne,
    title: "Pellentesque non efficitur mi Aliquam conv...",
    content: `metus nunc gravida mauris, sed aliquam leo eros a ex. Duis orci sapien,
    consequat ac mau...`,
  },
  {
    url: BlogTwo,
    title: "Pellentesque non efficitur mi Aliquam conv...",
    content: `metus nunc gravida mauris, sed aliquam leo eros a ex. Duis orci sapien,
    consequat ac mau...`,
  },
  {
    url: BlogThree,
    title: "Pellentesque non efficitur mi Aliquam conv...",
    content: `metus nunc gravida mauris, sed aliquam leo eros a ex. Duis orci sapien,
    consequat ac mau...`,
  },
];

const LatestBlog: FC<LatestBlogType> = ({ className = "" }) => {
  return (
    <Card
      style={{ boxShadow: `0px 0px 6px 0px rgb(4 0 0 / 10%)` }}
      name="Latest Blog"
      line
      className={`${className}`}
      header={
        <Text>
          <MyIcon
            children={<BiChevronLeft />}
            className="mr-2 hover:bg-red-500 hover:text-white transition ease-in-out duration-300"
            width={27}
            height={27}
          />
          <MyIcon
            children={<BiChevronRight />}
            className="hover:bg-red-500 hover:text-white transition ease-in-out duration-300"
            width={27}
            height={27}
          />
        </Text>
      }
    >
      <div className="flex -mx-3 pt-3">
        {blogs.map((blog, i) => (
          <div className="w-1/3 px-3" key={i}>
            <CardBlog
              imgUrl={blog.url}
              className="text-center"
              title={blog.title}
              content={blog.content}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default LatestBlog;
