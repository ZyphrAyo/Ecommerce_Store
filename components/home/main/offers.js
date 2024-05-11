import styles from "./styles.module.scss"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {offersAarray} from "../../../data/home"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Offers() {
  return (
    <div className={styles.offers}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="offers_swiper"
      >
        {
            offersAarray.map((offer)=>(
                <SwiperSlide> 
                    <Link  href="">
                        <img src={offer.image}/>
                    </Link>
                    <span>{offer.price}</span>
                    <span>-{offer.discount}%</span>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}
