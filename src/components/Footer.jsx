"use client";
import React from 'react'
import Footerbg from "./../../public/footer-bg.svg";
import Link from 'next/link';
import { FooterLogo } from '@/utils';
import { FaLinkedinIn } from "react-icons/fa6";
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import { FaXTwitter } from "react-icons/fa6";
import { RiArrowRightUpLine } from 'react-icons/ri';
import { VscGithubAlt } from "react-icons/vsc";


const Footer = () => {
    return (
        <footer
            className="bg-no-repeat bg-cover bg-center  pt-[40px] mt-[60px] rounded-tl-[32px] rounded-tr-[32px]"
            style={{ backgroundImage: `url(${Footerbg.src})` }}
        >
            <div className="container mx-auto px-4 pt-[70px] pb-[40px]">
                <Row>
                    <Col lg={4} md={6} sm={12} className="mb-[20px]">
                        <h3 className='text-[#FFFFFF] text-[24px] leading-[41px] font-figtree font-[600] mb-[22px]'>
                            Starten Sie jetzt Ihr nächstes digitales Projekt mit uns
                        </h3>
                        <button className='max-w-[244px] w-[244px] h-[44px] bg-[#FFFFFF] rounded-[60px] leading-[100%] text-[#212121] font-figtree font-[500] text-[16px] flex items-center justify-center gap-[6px]'>
                            <span>
                                Kostenlose Beratung
                            </span>
                            <span className='bg-[#0752D8] max-w-[25px] min-w-[25px] w-[25px] h-[25px] rounded-full flex items-center justify-center'>
                                <RiArrowRightUpLine className="text-[#FFFFFF]" size={15} />
                            </span>
                        </button>
                    </Col>
                    <Col lg={8} md={6} sm={12} className="mb-[20px]">
                        <Row>
                            <Col lg={5} md={4} sm={12} className="mb-[20px]">
                                <h4 className='text-[#FFFFFF] text-[16px] uppercase font-dmsans leading-[27px] font-figtree font-[600] mb-[14px]'>
                                    Drupal
                                </h4>
                                <ul className='flex flex-col gap-1'>
                                    <li className='text-[#F1F1F1] text-[16px] leading-[179%] font-dmsans font-[400] cursor-pointer'>
                                        Theme and Module Development
                                    </li>
                                    <li className='text-[#F1F1F1] text-[16px] leading-[179%] font-dmsans font-[400] cursor-pointer'>
                                        Training
                                    </li>
                                    <li className='text-[#F1F1F1] text-[16px] leading-[179%] font-dmsans font-[400] cursor-pointer'>
                                        Agency
                                    </li>
                                    <li className='text-[#F1F1F1] text-[16px] leading-[179%] font-dmsans font-[400] cursor-pointer'>
                                        Maintenance
                                    </li>
                                    <li className='text-[#F1F1F1] text-[16px] leading-[179%] font-dmsans font-[400] cursor-pointer'>
                                        Drupal developer
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={4} md={4} sm={12} className="mb-[20px]">
                                <h4 className='text-[#FFFFFF] text-[16px] uppercase font-dmsans leading-[27px] font-figtree font-[600] mb-[14px]'>
                                    Services
                                </h4>
                                <ul className='flex flex-col gap-1'>
                                    <li className='text-[#F1F1F1] text-[16px] leading-[179%] font-dmsans font-[400] cursor-pointer'>
                                        Web development
                                    </li>
                                    <li className='text-[#F1F1F1] text-[16px] leading-[179%] font-dmsans font-[400] cursor-pointer'>
                                        E-Learning
                                    </li>
                                    <li className='text-[#F1F1F1] text-[16px] leading-[179%] font-dmsans font-[400] cursor-pointer'>
                                        Accesibility
                                    </li>
                                    <li className='text-[#F1F1F1] text-[16px] leading-[179%] font-dmsans font-[400] cursor-pointer'>
                                        SEO
                                    </li>
                                    <li className='text-[#F1F1F1] text-[16px] leading-[179%] font-dmsans font-[400] cursor-pointer'>
                                        E-Commerce
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={3} md={4} sm={12} className="mb-[20px]">
                                <h4 className='text-[#FFFFFF] text-[18px] leading-[27px] font-figtree font-[600] mb-[22px]'>
                                    Folgen Sie uns
                                </h4>
                                <ul className='flex flex-row gap-3'>
                                    <li className='w-[32px] h-[32px] bg-[#F1F1F1] rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaXTwitter size={18} className='text-[#212121]' />
                                    </li>
                                    <li className='w-[32px] h-[32px] bg-[#F1F1F1] rounded-full flex items-center justify-center cursor-pointer'>
                                        <VscGithubAlt size={18} className='text-[#212121]' />
                                    </li>
                                    <li className='w-[32px] h-[32px] bg-[#F1F1F1] rounded-full flex items-center justify-center cursor-pointer'>
                                        <FaLinkedinIn size={18} className='text-[#212121]' />
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className='container mx-auto px-4 footer-bottom mt-[40px] pb-[18px]'>
                <Image
                    src={FooterLogo}
                    alt="Footer"
                    width={654}
                    height={65}
                    className="max-w-[654px] w-full h-[65px] mx-auto mb-[30px] "
                />

                <div className='flex justify-between items-center pt-[18px] border-t-[1px] border-[#868686] border-solid'>
                    <p className='text-[#F1F1F1] text-[14px] leading-[179%] font-[400] font-dmsans pb-0'>
                        Copyright 2025. L&Kdevelopment, All Right Reserved
                    </p>

                    <Link href="#" className='text-[#F1F1F1] text-[14px] leading-[21px] font-dmsans font-[400] '>
                        Privacy Policy | Terms & Conditions
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer