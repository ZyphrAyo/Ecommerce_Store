import { useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/effect-cards"; 
import SwiperCore, { EffectCards, Navigation } from "swiper/core"; 
import { userSwiperArray } from "../../../data/home";
import {Autoplay} from 'swiper/modules';
SwiperCore.use([EffectCards, Navigation]);

export default function User() {
  const { data: session } = useSession();

  return (
    <div className={styles.user}>
      <img
        src="../../../images/userHeader.jpg"
        alt=""
        className={styles.user_header}
      />
      <div className={styles.user_container}>
        {session ? (
          <div className={styles.user_infos}>
            <img src={session.user?.image} alt="" />
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.user_infos}>
            <img
              src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"
              alt=""
            />
            <div className={styles.user_infos_btns}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )}
        <ul className={styles.user_links}>
          <li>
            <Link href="/profile">
              <IoSettingsOutline />
            </Link>
          </li>
          <li>
            <Link href="">
              <HiOutlineClipboardList />
            </Link>
          </li>
          <li>
            <Link href="">
              <AiOutlineMessage />
            </Link>
          </li>
          <li>
            <Link href="">
              <BsHeart />
            </Link>
          </li>
        </ul>
        <div className={styles.user_swiper}>
          
         <Swiper
         autoplay={{
            delay:1500,
            disableOnInteraction:false,
          }}
          effect={"cards"}
          grabCursor={true}
          navigation={false}
          loop={true}
          
          
          modules={[Autoplay]}
          className="user_swiper"
          style={{
            maxWidth: "180px",
            height: "240px",
            marginTop: "1rem",
            borderRadius: "5px",
          }}
        >
          {userSwiperArray.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href="">
                <img src={item.image} alt={`Slide ${item.id}`} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
      <img
        src="../../../images/userHeader.jpg"
        alt=""
        className={styles.user_footer}
      />
    </div>
  );
}
