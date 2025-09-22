import React from 'react'
import Projectsbg from "./../../public/projects-bg.png";
import { RiArrowRightUpLine } from 'react-icons/ri';


const ProjectSection = () => {
    return (
        <section>
            <div className='container mx-auto px-4 pb-8'>
                <div className='relative bg-cover max-w-[1108px] min-h-[395px] mx-auto flex flex-col justify-center items-center text-center px-4 py-2 rounded-lg pt-[60px]'
                    style={{ backgroundImage: `url(${Projectsbg.src})` }}>
                    <h2 className='text-[#212121] text-[36px] leading-[48px] font-[600] font-figtree mb-[14px] mt-[100px]'>
                        Bereit für Ihr nächstes Projekt?
                    </h2>

                    <p className='text-[#484848] text-[18px] leading-[27px] font-[300] max-w-[588px]'>
                        Wir erwecken Ihre Ideen zum Leben - Lassen Sie uns Ihre nächste Website, App oder digitale Lösung besprechen.
                    </p>

                    <div className='mt-[32px] flex gap-4'>
                        <button className="h-[45px] max-w-[176px] w-full rounded-[60px] bg-gradient-to-b from-[#0752D8] to-[#0DF4C7] px-[29px] py-[13px] font-figtree text-base font-[500] leading-[100%] text-white flex items-center justify-center gap-[6px]">
                            <span>
                                info@lakdev.de
                            </span>
                            <span className='bg-[#FFF9F9] max-w-[25px] min-w-[25px] w-[25px] h-[25px] rounded-full flex items-center justify-center'>
                                <RiArrowRightUpLine className="text-[#212121]" size={15} />
                            </span>
                        </button>

                        <button className='max-w-[160px] w-[160px] h-[45px] bg-[#FFFFFF] rounded-[60px] leading-[100%] text-[#212121] font-figtree font-[500] text-[16px]'>
                            Mehr erfahren
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection