'use client';

import { useState } from "react";
import Image from "next/image";

export default function MarketContent() {
  const [songs] = useState([
    {
      id: 1,
      title: "SOLO POR TI",
      artist: "Atlas Music",
      genre: "House",
      bpm: 128,
      price: "€49.99",
      exclusive: false,
      image: "/assets/images/og.png",
    },
    {
      id: 2,
      title: "ME MATA",
      artist: "Atlas Music",
      genre: "Lo-Fi",
      bpm: 85,
      price: "€39.99",
      exclusive: true,
      image: "/assets/images/og.png",
    },
    {
      id: 3,
      title: "PICTURE",
      artist: "Gabho Sanchez",
      genre: "Hip-Hop",
      bpm: 95,
      price: "€59.99",
      exclusive: false,
      image: "/assets/images/og.png",
    },
    {
      id: 4,
      title: "PORTADA - BYRDS",
      artist: "Gabho Sanchez",
      genre: "EDM",
      bpm: 140,
      price: "€69.99",
      exclusive: true,
      image: "/assets/images/og.png",
    },
    {
      id: 5,
      title: "PORTADA",
      artist: "Gabho Sanchez",
      genre: "Deep House",
      bpm: 122,
      price: "€44.99",
      exclusive: false,
      image: "/assets/images/og.png",
    },
    {
      id: 6,
      title: "MIENTRAS PASA NUESTRO INVIERNO",
      artist: "Gabriel Ordanis Magdaleno Aular",
      genre: "World",
      bpm: 110,
      price: "€54.99",
      exclusive: true,
      image: "/assets/images/og.png",
    }
  ]);

  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [selectedPrice, setSelectedPrice] = useState("Todos");
  const [onlyExclusive, setOnlyExclusive] = useState(false);

  const genres = ["Todos", "House", "Lo-Fi", "Hip-Hop", "EDM", "Deep House", "World", "Techno", "Pop"];
  const prices = ["Todos", "€0-€30", "€31-€50", "€51-€70", "€70+"];

  const handleUploadMusic = () => {
    window.open("https://dist.musicdibs.com/", "_blank");
  };

  const handleBuySong = (song) => {
    console.log("Comprando canción:", song);
    // Lógica para comprar canción
  };

  const handlePreviewSong = (song) => {
    console.log("Previsualizando canción:", song);
    // Lógica para previsualizar canción
  };

  const handleApplyFilters = () => {
    console.log({ selectedGenre, selectedPrice, onlyExclusive });
    // Lógica para aplicar filtros
  };

  return (
    <div className="min-h-screen py-2">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-purple-200">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-4">
              <select 
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-4 py-2 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
              
              <select 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="px-4 py-2 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {prices.map(price => (
                  <option key={price} value={price}>{price}</option>
                ))}
              </select>

              <select className="px-4 py-2 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Popularidad</option>
                <option>Más recientes</option>
                <option>Mejor valorados</option>
                <option>Más reproducciones</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-gray-700">
                <input 
                  type="checkbox" 
                  checked={onlyExclusive}
                  onChange={(e) => setOnlyExclusive(e.target.checked)}
                  className="rounded text-purple-600 focus:ring-purple-500" 
                />
                Solo exclusivos
              </label>
              <button 
                onClick={handleApplyFilters}
                className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition duration-200"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>

        {/* Songs Grid - IMÁGENES CAMBIADAS A og.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {songs.map(song => (
            <div key={song.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-200 hover:shadow-xl transition duration-300">
              <div className="relative">
                {/* Imagen cambiada a la ruta local */}
                <div className="relative h-48 w-full">
                  <Image 
                    src={song.image} 
                    alt={`Portada de la canción "${song.title}" por ${song.artist} - ${song.genre}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R"
                  />
                </div>
                {song.exclusive && (
                  <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Exclusivo
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm">
                  {song.bpm} BPM
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{song.title}</h3>
                  <span className="text-2xl font-bold text-purple-600">{song.price}</span>
                </div>
                
                <p className="text-gray-600 mb-3">por {song.artist}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {song.genre}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => handleBuySong(song)}
                    className="flex-1 bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition duration-200 font-semibold"
                  >
                    Comprar Ahora
                  </button>
                  <button 
                    onClick={() => handlePreviewSong(song)}
                    className="px-4 py-3 border border-purple-600 text-purple-600 rounded-xl hover:bg-purple-50 transition duration-200"
                  >
                    🎵
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Eres un productor?</h2>
          <p className="text-xl mb-6 opacity-90">
            Vende tus pistas en Musicdibs Market y llega a miles de DJs y artistas
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={handleUploadMusic}
              className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-200"
            >
              Subir Mi Música
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}