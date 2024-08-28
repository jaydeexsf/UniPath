import React from 'react'
import { ModeContext } from '@/components/ModeContext';
import { useContext } from 'react';
import { Input } from "@/components/ui/input"
import { FaGripfire } from "react-icons/fa";
import { Button } from '@/components/ui/button';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import { Carousel, CarouselContent, CarouselItem, CarouselNext } from '../components/ui/carousel'
// import { Route } from 'lucide-react';
// import { BrowserRouter as Router, Routes ,Route  } from 'react-router-dom';


const Home = () => {

    const {mode} = useContext(ModeContext);


  return (
    <div className={`${mode === 'dark' ? 'light' : 'dark ' }hom dar py-6 flex flex-col gap-8`}>
        <div className="top flex gap-4">
            <form action="">
               <Input className="text-white bg-slate-800 border rounded-full focus:border-transparent w-[60vw] min-w-4 max-w-[350px]" type="search" placeholder="search..." />
            </form>
            <div className='bg-slate-800 text-white rounded-full nowrap flex justify-center hover:cursor-pointer items-center px-4'>Get Help</div>
        </div>

        <div className="col bg-gray-700 w-[100%] flex items-end rounded-2xl px-3 py-3 h-[130px]">
            <div className="top-upgrade w-[100%]">
                <h1 className='text-lg font-bold'>Upgrade to Pro</h1>
                <div className='w-[45%] font-semibold'>Get 1 month free and unlock all pro features</div>
                <Button className='flex items-center w-fit px-2 text-[10px] rounded-sm py-[0px] font-semibold mt-3'>4.9 out of 5 <FaGripfire className='text-orange-300 ml-[2px]'/></Button>
            </div>

            <div>
                <Button className="rounded-full text-[10px]">Upgrade now</Button>
            </div>
        </div>

        {/* <div className="belo flex gap-2">
            <div className="left-belo border flex flex-col p-4 border-gray-400 w-[48%] rounded-2xl h-44">
                <div className="top">
                    <h1 className='font-semibold text-[15px]'>Lessons Took</h1>
                    <span className='text-red-600 font-bold'>7%</span>
                </div>

                <div className="belo text-4xl font-semibold mt-12">
                    <span>
                        46
                    </span>

                    <div>

                    </div>
                </div>

                <div className='mt-[2px] text-gray-400'>
                    Lessons completed
                </div>
            </div>

            <div className="right-below border  border-gray-400  w-[48%] rounded-2xl h-44">

            </div>
        </div> */}
        <div className="showLive">

            <div className="latestnews bg-gray-400 h-44 rounded-2xl">
                <h1 className="text-center font-bold text-xl">Floating News</h1>
                <div className="swiper-container bg-gray-400 h-44 rounded-2xl">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                        }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: false }}
                        breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        className=""
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                    <div className="swiper-button-prev text-white"></div>
                    <div className="swiper-button-next text-white"></div>
                </div>
            </div>

            <div className="live">
                <div className="lessons">
                    <div className="leftlessons">

                    </div>
                    <div className="rightrecording">

                    </div>
                </div>
            </div>

        </div>
    </div>

  )
}

export default Home

