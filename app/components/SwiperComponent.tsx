'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import Link from 'next/link';

// Enable modules
SwiperCore.use([Navigation, Pagination]);

export default function SwiperComponent() {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-serif text-secondary mb-8 text-center">
        Shop by Category
      </h3>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="!px-4"
      >
        {[
          {
            title: "LevelUp Whey Series",
            description: "Premium whey protein supplements for muscle growth",
            image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&auto=format&fit=crop&q=60",
            categories: ["Whey Concentrate", "Whey Isolate", "Whey Blends"],
            goal: "Muscle Gain"
          },
          {
            title: "LevelUp Daily Series",
            description: "Essential daily supplements for overall wellness",
            image: "https://images.unsplash.com/photo-1616196334218-dd7c6d2d1c6b?w=800&auto=format&fit=crop&q=60",
            categories: ["MultiVits", "Omega-3", "Collagen", "VitD3"],
            goal: "Wellness"
          },
          {
            title: "LevelUp Performance Series",
            description: "Enhance your workout performance and endurance",
            image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&auto=format&fit=crop&q=60",
            categories: ["Pre-workout", "Beta-Alanine", "Creatine Monohydrate", "Energy Gels", "L-Glutamine"],
            goal: "Performance"
          },
          {
            title: "LevelUp Hydration Series",
            description: "Stay hydrated and replenish electrolytes",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
            categories: ["Sippers", "Electrolytes"],
            goal: "Hydration"
          },
          {
            title: "LevelUp Recovery Series",
            description: "Optimize recovery and reduce muscle soreness",
            image: "https://images.unsplash.com/photo-1567601218977-888b58c1e7c3?w=800&auto=format&fit=crop&q=60",
            categories: ["Caesin", "Cherry Tart Juice", "Magnesium Glycinate", "Curcumin"],
            goal: "Recovery"
          }
        ].map((category, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`/shop?series=${category.title}&subcategory=${category.categories[0]}`}
              className="relative group cursor-pointer overflow-hidden rounded-custom block"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/80 transition-colors z-10" />
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 p-6">
                  <h4 className="text-2xl font-serif font-bold mb-2">{category.title}</h4>
                  <p className="text-center text-sm bg-background/20 backdrop-blur-sm px-4 py-2 rounded-custom">{category.description}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 