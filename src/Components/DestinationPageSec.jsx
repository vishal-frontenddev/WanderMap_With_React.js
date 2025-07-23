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
    name: "Goa",
    image: "https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg",
  },
  {
    id: 2,
    name: "Manali",
    image: "https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg",
  },
  {
    id: 3,
    name: "Ladakh",
    image: "https://images.pexels.com/photos/12238321/pexels-photo-12238321.jpeg",
  },
  {
    id: 4,
    name: "Jaipur",
    image: "https://images.pexels.com/photos/19149591/pexels-photo-19149591.jpeg",
  },
  {
    id: 5,
    name: "Udaipur",
    image: "https://images.pexels.com/photos/1586030/pexels-photo-1586030.jpeg",
  },
  {
    id: 6,
    name: "Rishikesh",
    image: "https://images.pexels.com/photos/32513198/pexels-photo-32513198.jpeg",
  },
  {
    id: 7,
    name: "Varanasi",
    image: "https://images.pexels.com/photos/8112552/pexels-photo-8112552.jpeg",
  },
  {
    id: 8,
    name: "Kerala",
    image: "https://images.pexels.com/photos/1643797/pexels-photo-1643797.jpeg",
  },
  {
    id: 9,
    name: "Kodaikanal",
    image: "https://images.pexels.com/photos/2310646/pexels-photo-2310646.jpeg",
  },
  {
    id: 10,
    name: "Ooty",
    image: "https://images.pexels.com/photos/1028636/pexels-photo-1028636.jpeg",
  },
  {
    id: 11,
    name: "Darjeeling",
    image: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg",
  },
  {
    id: 12,
    name: "Shillong",
    image: "https://media.istockphoto.com/id/2152437259/photo/elephant-falls-a-waterfall-in-shilong-meghalaya.jpg?b=1&s=612x612&w=0&k=20&c=bfNjCSXobMF6ClzClSdT5XqoQVBYi2eF32Odq0OG3Nw=",
  },
  {
    id: 13,
    name: "Andaman",
    image: "https://images.pexels.com/photos/2531230/pexels-photo-2531230.jpeg",
  },
  {
    id: 14,
    name: "Coorg",
    image: "https://media.istockphoto.com/id/480589576/photo/rajas-seat-view-of-coorg.jpg?b=1&s=612x612&w=0&k=20&c=_Ccc-uNeINpe4Bu2gHJaBqu_9puMyGIzKg1Zyu4EGSU=",
  },
  {
    id: 15,
    name: "Alleppey",
    image: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg",
  },
  {
    id: 16,
    name: "Agra",
    image: "https://images.pexels.com/photos/2284173/pexels-photo-2284173.jpeg",
  },
  {
    id: 17,
    name: "Delhi",
    image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg",
  },
  {
    id: 18,
    name: "Mumbai",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
  },
  {
    id: 19,
    name: "Kolkata",
    image: "https://images.pexels.com/photos/2087392/pexels-photo-2087392.jpeg",
  },
  {
    id: 20,
    name: "Chennai",
    image: "https://images.pexels.com/photos/2747443/pexels-photo-2747443.jpeg",
  },
  {
    id: 21,
    name: "Hyderabad",
    image: "https://images.pexels.com/photos/1410112/pexels-photo-1410112.jpeg",
  },
  {
    id: 22,
    name: "Amritsar",
    image: "https://images.pexels.com/photos/209307/pexels-photo-209307.jpeg",
  },
  {
    id: 23,
    name: "Bangalore",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
  },
  {
    id: 24,
    name: "Pondicherry",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
  },
  {
    id: 25,
    name: "Khajuraho",
    image: "https://images.pexels.com/photos/161432/palace-india-temple-travel-161432.jpeg",
  },
  {
    id: 26,
    name: "Hampi",
    image: "https://images.pexels.com/photos/1083798/pexels-photo-1083798.jpeg",
  },
  {
    id: 27,
    name: "Ranthambore",
    image: "https://images.pexels.com/photos/53164/tiger-india-animal-53164.jpeg",
  },
  {
    id: 28,
    name: "Jaisalmer",
    image: "https://images.pexels.com/photos/958214/pexels-photo-958214.jpeg",
  },
  {
    id: 29,
    name: "Spiti Valley",
    image: "https://images.pexels.com/photos/6818735/pexels-photo-6818735.jpeg",
  },
  {
    id: 30,
    name: "Mount Abu",
    image: "https://images.pexels.com/photos/3014011/pexels-photo-3014011.jpeg",
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
