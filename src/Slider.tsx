import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import 'swiper/css';
import './App.css';
import img1 from './assets/img(1).jpg'
import img2 from './assets/img (2).jpg'
import img3 from './assets/img (3).jpg'
import img4 from './assets/img (4).jpg'
import img5 from './assets/img (5).jpg'
import img6 from './assets/img (6).jpg'
import img7 from './assets/img (7).jpg'
import img8 from './assets/img (8).jpg'
import img9 from './assets/img (9).jpg'


export default function Slider() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Mousewheel, FreeMode]}
            watchSlidesProgress={true}
            slidesPerView={5.2}
            spaceBetween={20}
            loop={false}
            direction={'horizontal'}
            mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
                releaseOnEdges: true,
            }}


            speed={800}
            allowTouchMove={true}
            className="mySwiper"

        >
            <SwiperSlide><img src={img1} alt="image" className="img" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="image" className="img" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="image" className="img" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="image" className="img" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="image" className="img" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="image" className="img" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="image" className="img" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="image" className="img" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="image" className="img" /></SwiperSlide>

        </Swiper>
    );
}