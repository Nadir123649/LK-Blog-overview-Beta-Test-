"use client";

import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import BlogsOverview from "@/components/BlogsOverview";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";


const Home = () => {
    return (
        <>
            <Head>
                <title>LK - Blogs Overview</title>
                <meta name="description" content="Explore a variety of blogs on different topics" />
                <meta name="keywords" content="blogs, articles, news" />
            </Head>

            <div>
                <Header />
                <Banner />
                <main>
                    <BlogsOverview />
                    <ProjectSection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Home;
