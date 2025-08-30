import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TrailersGrid = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const apiKey = "c2bb0823";
  const movieIds = [
    "tt3896198", // Guardians of the Galaxy Vol. 2
    "tt1375666", // Inception
    "tt0133093", // The Matrix
    "tt0114369", // Se7en
    "tt0109830", // Forrest Gump
    "tt0110912", // Pulp Fiction
    "tt0120737", // LOTR: Fellowship
    "tt0816692", // Interstellar
    "tt0468569", // The Dark Knight
    "tt0137523", // Fight Club
    "tt0076759", // Star Wars: A New Hope
    "tt0080684", // The Empire Strikes Back
    "tt0099685", // Back to the Future
    "tt1825683", // Mad Max: Fury Road
    "tt0113228", // Trainspotting
    "tt0218121", // The Godfather
    "tt1375666", // Inception
    "tt0109830", // Forrest Gump
    "tt0133093", // The Matrix
  ];

  // Fetch movie data
  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await Promise.all(
        movieIds.map(async (id) => {
          const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
          const data = await response.json();
          return data;
        })
      );
      setMovies(movieData);
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <h1 className="text-[5rem] font-extrabold px-12 pt-16">Trailers</h1>

      {/* Movie posters grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {movies.map((movie) => (
          <motion.div
            key={movie.imdbID}
            className="relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
              <h3 className="font-bold">{movie.Title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for trailer */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full h-full max-w-4xl">
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center justify-center h-full">
              <div className="w-1/2">
                <img
                  src={selectedMovie.Poster}
                  alt={selectedMovie.Title}
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
              <div className="w-1/2 px-6 py-4 text-white">
                <h2 className="text-3xl font-bebas mb-4">{selectedMovie.Title}</h2>

                {/* Movie Details */}
                <p className="mb-2"><strong>Released:</strong> {selectedMovie.Released}</p>
                <p className="mb-2"><strong>Genre:</strong> {selectedMovie.Genre}</p>
                <p className="mb-2"><strong>Cast:</strong> {selectedMovie.Actors}</p>
                <p className="mb-2"><strong>Director:</strong> {selectedMovie.Director}</p>
                <p className="mb-4"><strong>IMDB Rating:</strong> {selectedMovie.imdbRating}/10</p>
                <p className="mb-6"><strong>Plot:</strong> {selectedMovie.Plot}</p>

                {/* Trailer embed */}
                {selectedMovie.Trailer ? (
                  <iframe
                    src={selectedMovie.Trailer}  // Use the trailer URL provided by OMDB
                    title="Trailer"
                    width="100%"
                    height="315"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p className="text-lg">Trailer not available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrailersGrid;
