import "./Movies.css";
import React, { useEffect, useState } from "react";
import {FcSearch} from "react-icons/fc"
import axios from "axios";
import YouTube from "react-youtube";

export default function Movies() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "c5196ad9b75fcf9bec311d948f2cb623";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  //variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading movies" });
  const [playing, setPlaying] = useState(false);

  //funcion para realizar la peticion por get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
    setMovie(results[0]);

    if (results) {
      await fecthMovie(results[0].id);
    }
  };

  //funcion para la peticion de un solo objeto y mostrar en reproductor de video
  const fecthMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        append_to_response: "videos",
      },
    });
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    fecthMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  //funcion para buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    const fetchMovies1 = async (searchKey) => {
      const type = searchKey ? "search" : "discover";
      const {
        data: { results },
      } = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      });
  
      setMovies(results);
      setMovie(results[0]);
  
      if (results) {
        await fecthMovie(results[0].id);
      }
    };
      fetchMovies1();
  },[]);

  return (
    <div>
      <header>
        <h1 className="h1-movies"> 🎬 Movies</h1>
      </header>{" "}
      {/* buscador */}


      <form className="buscador" onSubmit={searchMovies}>
      <div className="search-box">
      <button className="btn-search">
            <FcSearch />
          </button>
        <input
          className="input-search"
          type="text"
          placeholder="search"
          onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
      </form>

      
      {/* contenedor del banner y el reproductor de video */}
      <div>
        <main>
          {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
                backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 120%"
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button
                    onClick={() => setPlaying(false)}
                    className="boton-playClose"
                  >
                    Close
                  </button>
                </>
              ) : (
                <div className="container">
                  <div className="trailers">
                    {trailer ? (
                      <button
                        className="boton-play"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1 className="textTitle">{movie.title}</h1>
                    <p className="textParraf">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>

      
      <div id="parallax-world-of-ugg">        
        {/* contenedor de posters de peliculas actuales */}
        <div className="containerMovie">
          <div className="posters">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="llaveMOVIE"
                onClick={() => selectMovie(movie)}
              >
                <img
                  src={`${URL_IMAGE + movie.poster_path}`}
                  alt=""
                  className="imageHome"
                />
                <h5 className="tituloMovie">{movie.title}</h5>
              </div>
            ))}
          </div>
        </div>

        <section>
          <div className="parallax-one"></div>
        </section>

        <section>
          <div className="block"></div>
        </section>

        <section>
          <div className="parallax-two"></div>
        </section>
      </div>
    </div>
  );
}
