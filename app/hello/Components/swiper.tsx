import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs , SiReactquery, SiFlutter, SiDocker, SiRedux, SiJira} from 'react-icons/si';
import { TbBrandCpp , TbBrandThreejs} from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import { BiLogoTypescript } from 'react-icons/bi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const SwiperComponent = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            // autoplay={true}
            autoplay={{
                delay: 500,
                disableOnInteraction: false,
            }}
            // centeredSlides={true}
            spaceBetween={20}
            slidesPerView={6}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><FaReact /></SwiperSlide>
            <SwiperSlide><SiNextdotjs /></SwiperSlide>
            <SwiperSlide><SiReactquery /></SwiperSlide>
            <SwiperSlide><SiFlutter /></SwiperSlide>
            <SwiperSlide><TbBrandCpp /></SwiperSlide>
            <SwiperSlide><SiDocker /></SwiperSlide>
            <SwiperSlide><SiRedux /></SwiperSlide>
            <SwiperSlide><TbBrandThreejs /></SwiperSlide>
            <SwiperSlide><IoLogoJavascript /></SwiperSlide>
            <SwiperSlide><BiLogoTypescript /></SwiperSlide>
            <SwiperSlide><FaGitAlt /></SwiperSlide>
            <SwiperSlide><SiJira /></SwiperSlide>
        </Swiper>
    );
};
export default SwiperComponent