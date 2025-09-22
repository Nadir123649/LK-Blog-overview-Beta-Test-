import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";
import Link from "next/link";
import { DummyUser } from "@/utils";

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white  overflow-hidden h-full flex flex-col">
            <div>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={370}
                    height={246}
                    className="w-full h-auto object-cover rounded-lg border-greys"
                />
            </div>

            {/* Blog Content */}
            <div className="px-0 py-3 flex flex-col justify-between flex-1">
                {/* Author and Date */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Image
                        src={DummyUser}
                        alt="author"
                        width={32}
                        height={32}
                        className="rounded-full object-cover w-[32px] h-[32px]"
                    />
                    <span className="font-dmsans font-[400] text-[14px] leading-[20px] text-[#212121]">{blog.author}</span>
                    <span className="ml-1 pl-[14px] font-dmsans text-[#9C9C9C] leading-[16px] text-[14px] font-[400] border-solid border-l-[1.5px] border-[#000000]">{blog.date}</span>
                </div>

                <h2 className="text-[20px] font-figtree font-[600] text-gray-900 mb-[12px] leading-[134%]">
                    {blog.title}
                </h2>

                <Link
                    href={blog.link}
                    className="inline-flex font-figtree text-[16px] items-center gap-1 text-[#0752D8] font-[500] leading-[100%] uppercase "
                >
                    Mehr lesen 
                    <span className="bg-[#0752D8] rounded-full w-[25px] h-[25px] flex items-center justify-center ml-1">
                        <RiArrowRightUpLine className="text-white" size={16}/>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
