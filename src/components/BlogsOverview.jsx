"use client";

import React from "react";
import CategoryTabs from "./CategoryTabs";
import { blogsData } from "@/constants";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

const BlogsOverview = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                {/* Tabs */}
                <CategoryTabs />

                {/* Blog grid */}
                <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogsData.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {/* Pagination */}
                <Pagination />
            </div>
        </section>
    );
};

export default BlogsOverview;
