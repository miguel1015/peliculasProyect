import "./TVShows.css";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import NoImg from "../images/noImage.jpg";
import { AiFillPlayCircle, AiOutlineClose,} from "react-icons/ai";
import {FcSearch} from "react-icons/fc"
import TvTrailer from "./TvTrailer";

export default function News() {
  const [showData, setShowData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [searchShowsKey, setSearchShowKey] = useState("");
  const [title, setTitle] = useState();
  const [mostrarBoton, seMostrarBoton] = useState(false);
  const shown = searchShowsKey ? `search` : `discover`;

  // const [playing, setPlaying] = useState(false);

  const Api = `https://api.themoviedb.org/3/${shown}/tv`;
  const Images = `https://image.tmdb.org/t/p/w500/`;

  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "c5196ad9b75fcf9bec311d948f2cb623",
        query: searchShowsKey,
      },
    });
    const results = data.data.results;
    setShowData(results);
  };

  //console.log(showData);

  const tvShowTitle = (shows) => {
    setTitle(shows.name);
    setTrailer(!trailer);
  };

  useEffect(() => {
    setTimeout(() => {
      TvShows();
    }, 1000);
  }, [searchShowsKey]);

  const searchShows = (e) => {
    e.preventDefault();
    TvShows(searchShowsKey);
  };

  const boton = () => {
    if (trailer) {
      seMostrarBoton(false);
    } else {
      seMostrarBoton(true);
    }
  };

  return (
    <div>
      <header>
        <h1> 📺 Tv Shows</h1>
      </header>

      <form className="buscadorTV" onSubmit={searchShows}>
        <div className="search-box">
          <button className="btn-search">
            <FcSearch />
          </button>
          <input
            className="input-search"
            type="text"
            placeholder="search"
            onChange={(e) => setSearchShowKey(e.target.value)}
          />
        </div>
      </form>
    
      <div className="trailershows">
        {trailer ? (
          console.log
        ) : (
          <TvTrailer TvShowTitle={title} className="trailershows" />
        )}
      </div>

      <Fragment>
        <div className="containerMovie">
          <div className="posters">
            {showData.map((shows) => {
              return (
                <Fragment key={shows.id}>
                  <div id={trailer ? "container-tv" : `NoContainer`}>
                    <AiFillPlayCircle
                      id={trailer ? `playIcon` : `hide`}
                      onClick={() => tvShowTitle(shows)}
                      className="botonAi"
                    />
                    <img
                      src={
                        shows.poster_path
                          ? `${Images}${shows.poster_path}`
                          : NoImg
                      }
                      alt="..."
                      onClick={() => tvShowTitle(shows)}
                      className="imageHome"
                    />
                    <h3
                      className="tituloMovie"
                      id={shows.name.length > 28 ? `sameller-Text` : ""}
                    >
                      {shows.name}
                    </h3>
                  </div>
                </Fragment>
              );
            })}

            {mostrarBoton ? (
              <AiOutlineClose
                id={trailer ? `Nothing` : `Exit1`}
                cursor={"pointer"}
                onClick={() => setTrailer(true)}
                className="botonCerrar"
              />
            ) : null}
          </div>
        </div>
      </Fragment>

      <div>
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
