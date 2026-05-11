import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Filter, Camera, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery images with categories
  const galleryItems = [
    { id: 1, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800", category: "events", title: "Annual Day Celebration" },
    { id: 2, src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800", category: "students", title: "Classroom Learning" },
    { id: 3, src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800", category: "campus", title: "School Campus" },
    { id: 4, src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800", category: "events", title: "Science Exhibition" },
    { id: 5, src: "https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=800", category: "campus", title: "Library Session" },
    { id: 6, src: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800", category: "students", title: "Group Activity" },
    { id: 7, src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=800", category: "events", title: "Sports Day" },
    { id: 8, src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800", category: "students", title: "Art Workshop" },
    { id: 9, src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800", category: "events", title: "Cultural Fest" },
    { id: 10, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800", category: "campus", title: "School Building" },
    { id: 11, src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800", category: "students", title: "Robotics Lab" },
    { id: 12, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", category: "campus", title: "Playground" },
  ];

  const categories = [
    { value: "all", label: "All Photos" },
    { value: "campus", label: "Campus" },
    { value: "students", label: "Students" },
    { value: "events", label: "Events" },
  ];

  const filteredImages = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(filteredImages[index]);
  };

  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=2070"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl"
        >
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
            <span className="text-xs sm:text-sm font-medium">📸 Moments of Joy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Capturing memories, learning, and celebrations at Bright Future School.
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md shadow-md py-3 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  filter === cat.value
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-gray-500 text-sm sm:text-base">
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
          </p>
        </div>

        {filteredImages.length === 0 ? (
          <div className="text-center py-16">
            <Camera className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-white"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold text-sm sm:text-base">{item.title}</p>
                    <p className="text-xs capitalize">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 sm:right-2 text-white hover:text-gray-300 transition z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
                <p className="text-white font-semibold text-lg">{selectedImage.title}</p>
                <p className="text-gray-300 text-sm capitalize">{selectedImage.category}</p>
              </div>

              {/* Navigation Arrows - only if more than one image */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050853063-bd8012fbb20a?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3">Want to See More?</h2>
          <p className="text-sm sm:text-lg text-blue-100 mb-6">Visit our campus or follow us on social media for daily updates.</p>
          <button
            onClick={() => window.open("https://instagram.com", "_blank")}
            className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition shadow-lg"
          >
            Follow on Instagram
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;