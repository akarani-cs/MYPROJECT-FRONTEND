import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // lightweight icon package

const movies = [
  {
    id: 1,
    title: "Troop Number Eight",
    rating: "6/10",
    image:
      "https://images.pexels.com/photos/15824963/pexels-photo-15824963.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Next Man UP",
    rating: "8.5/10",
    image:
      "https://images.pexels.com/photos/1767016/pexels-photo-1767016.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  // more movies later...
];

export default function RatingsSection() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Scroll handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-black text-white px-6 py-8 relative">
      <h2 className="text-sm font-bold mb-4 border-b border-gray-700 pb-2">
        CREEKER RATINGS
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scrollable movie cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[300px] h-[200px] md:min-w-[500px] md:h-[300px] rounded-lg overflow-hidden relative cursor-pointer flex-shrink-0"
            onClick={() => navigate(`/reviews/${movie.id}`)}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
              <h3 className="text-lg md:text-2xl font-bold">{movie.title}</h3>
              <p className="text-sm md:text-base text-gray-200">
                On My Screen Rate: {movie.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
