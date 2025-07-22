import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ import Autoplay
import { motion } from "framer-motion";
import "swiper/css";
import DestinationCard from "../Components/DestinationCard";

const DestinationPageSec = () => {
  const destinations = [
    {
      id: 1,
      name: "Paris",
      image:
        "https://media.istockphoto.com/id/532396646/photo/eiffel-tower-in-paris-france.jpg?s=612x612&w=0&k=20&c=c0QT8TZOHSIbiNvCIp6UUekKFGHhuBZSzDngV7UJDfw=",
    },
    {
      id: 2,
      name: "Bali",
      image: "https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg",
    },
    {
      id: 3,
      name: "Manali",
      image: "https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg",
    },
    {
      id: 4,
      name: "Goa",
      image:
        "https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg",
    },
    {
      id: 5,
      name: "London",
      image:
        "https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg",
    },
    {
      id: 6,
      name: "Maldives",
      image:
        "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg",
    },
  ];

  return (
    <>
      <section className=" py-20 px-4 sm:px-35">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            🌟 Popular Destinations
          </h2>
          <p className="mt-2 text-gray-500">Explore your next adventure</p>
        </motion.div>

        <Swiper
          spaceBetween={20}
          loop={true} // ✅ enable loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]} // ✅ pass module
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {destinations.map((dest, index) => (
            <SwiperSlide key={index}>
              <DestinationCard
                id={dest.id}
                name={dest.name}
                image={dest.image}
                rating={dest.rating || 4}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default DestinationPageSec;
