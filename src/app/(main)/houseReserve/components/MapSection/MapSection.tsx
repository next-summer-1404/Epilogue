import React, { useState } from 'react';

const MapSection = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="w-full h-[400px] lg:h-full rounded-2xl overflow-hidden s relative cursor-pointer">
      {!showMap ? (
        // بک‌گراند قبل از کلیک
        <div
          onClick={() => setShowMap(true)}
          className="w-full h-full bg-[#262626] flex items-center justify-center text-white text-2xl "
        >
          Map
        </div>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.234254958116!2d51.404343015259356!3d35.71529898018548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe4f8a7dcd31%3A0x8c92c9c3f35a1c2f!2sTehran!5e0!3m2!1sen!2s!4v1678888888888!5m2!1sen!2s"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="border-0"
        ></iframe>
      )}
    </div>
  );
};

export default MapSection;
