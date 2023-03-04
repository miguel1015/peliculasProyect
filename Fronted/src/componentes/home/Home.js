import "./Home.css";
// import Carrucel from "./carrucel/Carrucel";
// import Vite from "./img/vite.mp4"
import ReactPlayer from "react-player";

export default function Home() {


  //direccionamiento a las peliculas
  const botonWatch = () => {
    window.location.href = "https://www4.cuevana3.ch/309/la-mascara"
  }
  
 
  return (
    <div className="containerHome">
      
      <div className="mediaCarruzel" >
        <div className="cabeceraHome">
          <h1>WELCOME!</h1> <br></br>        
            {/* <Carrucel className="carrucel" /> */}
        </div> <br></br><br></br>
{/* carousel-------------------------------------------------------------------------------- */}
        <div className="pic-ctn">
          <img src="https://www.gamerfocus.co/wp-content/uploads/2022/06/avatar_leyenda_aang_peliculas.webp" alt="" className="pic"/>
          <img src="https://w0.peakpx.com/wallpaper/279/683/HD-wallpaper-movie-everything-everywhere-all-at-once.jpg" alt="" className="pic"/>
          <img src="https://images4.alphacoders.com/909/thumb-1920-909185.jpg" alt="" className="pic"/>
          <img src="https://images8.alphacoders.com/485/485340.jpg" alt="" className="pic"/>
          <img src="https://i.pinimg.com/originals/12/40/64/124064eaccc5555b86d4e1eb44de437a.jpg" alt="" className="pic"/>
        </div>
          
{/* sobre nosotrs--------------------------------------------------------------------------- */}

        <h2 className='about'>Let's talk about The 7th art</h2>
        <p className='headerParraf'>Somos una pagina altamente certificada, 
        que busca proporcionar todo sobre conociminetos acerca del cine. Como el septimo arte es el cine, queremos mostrar la perspectiva del cine a través del arte y la importancia de cada una.</p>  <br></br><br></br>     

        <div className="videoHome">  
          <ReactPlayer url="https://www.youtube.com/watch?v=FvG96I0OyG4&ab_channel=Doosakidd" playing muted  />
        </div>
      </div>

{/* Las aclamadas---------------------------------------------------------------------------- */}
    
        <h2 className="aclamadasPorLa" >Aclamadas por la critica</h2> <br></br>
          <div className="top">
      <div className="columns">
        <div className="column is-full featured_wrapper p-0">
          <img src="https://images6.alphacoders.com/112/1120879.jpg" className="imageGrande" alt=""/>
          <div className="title_wrapper">
            <button className="botonWatch"  onClick={botonWatch}>Watch</button>
          </div>
        </div>
      </div>
    </div>
    

    <div className="containeres">
      <div className="columns is-multiline p-0 pt-6 last">
        <div className="column is-full">
        </div>
        <div className="column is-one-quarter">
          <a className="botonLink" href="https://www.disneyplus.com/es-419/movies/thor-love-and-thunder/3htR8mRAZMoT?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-ThorLoveAndThunder-EN-ShowPageMasthead-Marvel_ShowPageMasthead_ThorLoveAndThunder-NA" ><img src="https://elcapitalino.mx/wp-content/uploads/2022/05/thor-love-and-thunder-nuevo-poster-pelicula-marvel-studios-poster-cover-e1653426664205.jpg" className="featured" alt="" /> </a>
          <p>Thor love and thunder</p>
        </div>
        <div className="column is-one-quarter">
          <a href="https://www.sonypictures.com/tv/breakingbad" ><img src="https://www.seriemaniac.com/wp-content/uploads/2013/10/que-significa-Breaking-Bad.jpg" className="featured" alt=""/></a>
          <p>Breaking bad</p>
        </div>
        <div className="column is-one-quarter">
          <a href="https://play.hbomax.com/page/urn:hbo:page:GYGOrjQfhvKCWowEAAAAE:type:feature?source=googleHBOMAX&action=play"><img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2021/05/busto-joker-infinity-studios-2346557.jpg?itok=4cFeeHQ0" className="featured" alt=""/></a>
          <p>Joker</p>
        </div>
        <div className="column is-one-quarter">
         <a href="https://www.netflix.com/co/title/70136120" > <img src="https://cdn.shopify.com/s/files/1/0250/1217/4900/products/91fwokhilul._sl1500_620x.jpg?v=1572164358"className="featured" alt="" /><p>TThe office</p></a>
        </div>
      </div>
      <div className="columns last">
        <div className="column is-one-quarter">
          <a href="https://www.dreamworks.com/movies/kung-fu-panda" ><img src="https://theomg.tv/wp-content/uploads/2022/08/Kung-Fu-Panda-600x400.jpg"className="featured" alt=""/></a>
          <p>Kung fu Panda</p>
        </div>
        <div className="column is-one-quarter">
         <a href="https://www.disneyplus.com/es-419/movies/aladdin/2SngByljXESE" > <img src="https://sm.ign.com/ign_es/news/g/guy-ritchi/guy-ritchie-en-negociaciones-para-dirigir-aladdin_zqy8.jpg"className="featured" alt="" /></a>
          <p>Aladdin</p>
        </div>
        <div className="column is-one-quarter">
        <a href="https://www.blackadammovie.net/"><img src="https://wizboots.com/wp-content/uploads/2022/10/albbfis9okmn7v6cvx6b-600x400.webp" className="featured" alt=""/></a>
        <p>Black adam</p>  
        </div>
        <div className="column is-one-quarter">
        <a href="https://www.disneyplus.com/es-419/movies/10-cosas-que-odio-de-ti/10OzquDiTIJB"><img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E38EE291368170F120E42EA3E0B0D0BB0371907067C8DDDD49D3E12F22A638C7/scale?width=506&aspectRatio=2.00&format=jpeg" className="featured" alt=""/>
          <p>10 Things i hate about you</p></a>
        </div>
      </div>
    </div><br></br>

{/* tendencias------------------------------------------------------------------ */}


{/* contenedor de tendencias 1------------------------------------------------------------------ */}

          <div className="tendenciasHome" >
            <h1 className="h1Tendencias" >Tendencias</h1>
          </div>
        <div className="contenedorGrandeTendencias">
            <div className="containerTendencias">
              <input type="radio" name="slider" id="item-1" />
              <input type="radio" name="slider" id="item-2"/>
              <input type="radio" name="slider" id="item-3"/>
            <div className="cardsTendencias">
              <label className="cardTendencia" htmlFor="item-1" id="song-1">
                <img src="https://amc-theatres-res.cloudinary.com/v1672403850/amc-cdn/production/2/movies/66200/66246/Poster/Primary_BoxCover_HD_800_1200.jpg" alt="song" className="imageTendencia" />
              </label>
              <label className="cardTendencia" htmlFor="item-2" id="song-2">
                <img src="https://i.pinimg.com/originals/c8/0f/35/c80f35ad4c46a48f9fcf7618e47e8399.png" alt="song" className="imageTendencia" />
              </label>
              <label className="cardTendencia" htmlFor="item-3" id="song-3">
                <img src="https://www.universomarvel.com/wp-content/uploads/2023/01/04_DUSTBUN_1Sht_IllusPayoff_SPA.jpg" alt="song" className="imageTendencia" />
              </label>
            </div>


        <div className="player">
          <div className="upper-part">
            <div className="play-icon">
              <svg width="20" height="20" fill="#2992dc" strokeLinecap="#2992dc" strokeLinejoin="round" strokelinecap-linejoin="round" strokelinecap-width="2" className="feather feather-play" viewBox="0 0 24 24">
                <defs/>
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
            </div>
            <div className="info-area" id="test">
              <label className="song-info" id="song-info-1">
                <div className="title">Puss in Bots</div>
                <div className="sub-line">
                  <div className="subtitle">El gato con botas</div>
                  <div className="time">1:40 HR</div>
                </div>
              </label>
              <label className="song-info" id="song-info-2">
                <div className="title">John Wick</div>
                <div className="sub-line">
                  <div className="subtitle">John Wick</div>
                  <div className="time">4.05 2:10 HR</div>
                </div>
              </label>
              <label className="song-info" id="song-info-3">
                <div className="title">Ant Man</div>
                <div className="sub-line">
                  <div className="subtitle">El hombre hormiga</div>
                  <div className="time">2:30 HR</div>
                </div>
              </label>
            </div>
          </div>
          <div className="progress-bar">
            <span className="progress"></span>
          </div>
        </div>
      </div>

{/* contenedor de las tendencias 2 ------------------------------------------------------------- */}

      <div className="containerTendencias2">
              <input type="radio" name="slider" id="item-11" />
              <input type="radio" name="slider" id="item-22"/>
              <input type="radio" name="slider" id="item-33"/>
            <div className="cardsTendencias2">
              <label className="cardTendencia2" htmlFor="item-11" id="song-11">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ILPHUU4CWBCNDNPG4EVLMFBW3Y.jfif" alt="song" className="imageTendencia2" />
              </label>
              <label className="cardTendencia2" htmlFor="item-22" id="song-22">
                <img src="https://es.web.img3.acsta.net/pictures/22/05/14/13/26/5638861.jpg" alt="song" className="imageTendencia2" />
              </label>
              <label className="cardTendencia2" htmlFor="item-33" id="song-33">
                <img src="https://culturageek.com.ar/wp-content/uploads/2022/04/Better-Call-Saul-poster-www.culturageek.com_.ar_.jpeg" alt="song" className="imageTendencia2" />
              </label>
            </div>


        <div className="player2">
          <div className="upper-part2">
            <div className="play-icon2">
              <svg width="20" height="20" fill="#2992dc" strokeLinecap="#2992dc" strokeLinejoin="round" strokelinecap-linejoin="round" strokelinecap-width="2" className="feather feather-play" viewBox="0 0 24 24">
                <defs/>
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
            </div>
            <div className="info-area2" id="test">
              <label className="song-info2" id="song-info-1">
                <div className="title2">The last uf us</div>
                <div className="sub-line2">
                  <div className="subtitle2">Despues de nosotros</div>
                  <div className="time2">54:02 Min</div>
                </div>
              </label>
              <label className="song-info2" id="song-info-2">
                <div className="title2">Stranger Things</div>
                <div className="sub-line2">
                  <div className="subtitle2">Stranger</div>
                  <div className="time2">44:10 Min</div>
                </div>
              </label>
              <label className="song-info2" id="song-info-3">
                <div className="title2">Better call saul</div>
                <div className="sub-line2">
                  <div className="subtitle2">Siempre llama a saul</div>
                  <div className="time2">55:05 Min</div>
                </div>
              </label>
            </div>
          </div>
          <div className="progress-bar2">
            <span className="progress2"></span>
          </div>
        </div>
      </div>
    </div>
    <br></br>

{/* populares-------------------------------------------------------------------------------- */}
  
     <h1 className="h1Populares" >POPULARES</h1>
     <div className="contenedorPopularGeneral" >
     <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src ="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/27dad4f1f79ea44b96fc726ddef21d04294c1b1654e06d6126c256f4db76054c._RI_V_TTW_.jpg" alt="" />
      </div>
      <div className="content">
        <h3>The bing bang theory</h3>
        <p className="parrafoPopular">Todo comienza con la llegada de Penny al apartamento vecino del que comparten Sheldon y Leonard. Leonard se enamora desde el primer momento de Penny.</p>
        <a href="https://the-big-bang-theory.com/"> Watch </a>
      </div>
    </div>    
  </div>

  <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src =" https://moviemarker.co.uk/wp-content/uploads/2012/04/TITANIC-poster-movie.jpg" alt="" />
      </div>
      <div className="content">
        <h3>Titanic</h3>
        <p className="parrafoPopular">En un barco donde se conocen jack y rose viviran un gran romance pero todo se desmorona cuando el barco es golpeado por un iceberg y todo va cueta abajo.</p>
        <a href="https://pelisflix2.biz/pelicula/titanic-zdpo/"> Watch </a>
      </div>
    </div>    
  </div>

  <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src =" https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/12/kimetsu-po%CC%81ster.jpeg?resize=1735%2C1228&quality=80&ssl=1" alt="" />
      </div>
      <div className="content">
        <h3>Kimetsu no yaiba</h3>
        <p className="parrafoPopular">La historia se basa en Tanjiro un chico con una vida comun hasta que su familia le ocurre un gran incidente y la unica que sobrevive es su hermana pero con algo extra.</p>
        <a href="https://demonslayer-hinokami.sega.com/index.html?region=es"> Watch </a>
      </div>
    </div>    
  </div>

  <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src =" http://3.bp.blogspot.com/-oYoRc9vVqPY/UhD5kP8KgWI/AAAAAAAAAco/caVHxgQ88bc/s1600/Mordecai-and-Rigby-regular-show-30642146-1280-1024.jpg" alt="" />
      </div>
      <div className="content">
        <h3>Regular Show</h3>
        <p className="parrafoPopular">Mordecai y rigby con chicos normales, con vidas normales, en un parque normal pero con situaciones anormales.</p>
        <a href="https://regularshow.fandom.com/es/wiki/Un_Show_M%C3%A1s_Wiki"> Watch </a>
      </div>
    </div>    
  </div>
  </div>

{/* segundo contenedor de popular-------------------------------------------------------------- */}

  <div className="contenedorPopularGeneral2" >
     <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src =" https://unagiproductions.com/wp-content/uploads/2020/09/personajes-de-friends-redes-sociales.jpg" alt="" />
      </div>
      <div className="content">
        <h3>Friends</h3>
        <p className="parrafoPopular">Monica, Chandler, Phoebe, Joey, Ross, Rachel. Son 6 amigos los cuales tendran grandes hsitorias que siempore estaran envueltos.</p>
        <a href="https://seriefriends.com/"> Watch </a>
      </div>
    </div>    
  </div>

  <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src =" http://www.pastposters.com/cw3/assets/product_expanded/R/shrek-2-cinema-quad-movie-poster-(4).jpg" alt="" />
      </div>
      <div className="content">
        <h3>Shrek 2</h3>
        <p className="parrafoPopular">Algunos meses después de que el ogro Shrek y la princesa Fiona se conocieran y se casaran, shrek esta dispuesto a conocer a los padres de fiona y aventuras le esperan.</p>
        <a href="https://www.dreamworks.com/movies/shrek"> Watch </a>
      </div>
    </div>    
  </div>

  <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src =" https://imagenes.heraldo.es/files/image_654_v1/files/fp/uploads/imagenes/2019/03/15/marvel-lanza-el-nuevo-trailer-de-la-ultima-pelicula-de-los-vengadores.r_d.370-221.png" alt="" />
      </div>
      <div className="content">
        <h3>EndGame</h3>
        <p className="parrafoPopular">Despues de los sucesos de infinity war los vengadores se encuentran derrotados y sin fuerzas. Hasta que llega scott lang con un plan que podria salvar todo.</p>
        <a href="https://www.marvel.com/"> Watch </a>
      </div>
    </div>    
  </div>

  <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src =" https://cdn2.img.sputniknews.lat/img/07e5/0c/1e/1119868039_0:75:1200:975_1920x0_80_0_0_486ce18b93c066c13ce4e18613fac987.jpg" alt="" />
      </div>
      <div className="content">
        <h3>Encanto</h3>
        <p className="parrafoPopular">Los madrigales son una familia con grandes dones y talentos pero con mirabel es diferente; pero se tomara la tarea de investigar el secreto de su hermano.</p>
        <a href="https://www.disneylatino.com/peliculas/encanto"> Watch </a>
      </div>
    </div>    
  </div>
  </div>

  {/* container populares 3 ------------------------------------------------------------------- */}
    
  <div className="contenedorPopularGeneral2" >
     <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src =" https://i.blogs.es/2cc78a/ordenstarwars/840_560.jpg" alt="" />
      </div>
      <div className="content">
        <h3>Star Wars</h3>
        <p className="parrafoPopular">La guerra de las galaxias es una franquicia que se a extendido a lo largo de los años y se basa en las aventuras se los Jedi contra los malvados.</p>
        <a href="https://www.starwars.com/"> Watch </a>
      </div>
    </div>    
  </div>

  <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src ="https://cinepremiere.com.mx/assets/images/noticias/2015/06-junio/DragonBallSuper-poster2.jpg" alt="" />
      </div>
      <div className="content">
        <h3>Dragon ball</h3>
        <p className="parrafoPopular">Veremos la historia de goku y sus amigos, enfrentandose a todos aquellos que quieran destruir el universo y estaran siempre para combatirlos.</p>
        <a href="https://es.dragon-ball-official.com/"> Watch </a>
      </div>
    </div>    
  </div>

  <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src =" https://i.blogs.es/eaa6e4/el-juego-del-calamar-cartel/450_1000.jpeg" alt="" />
      </div>
      <div className="content">
        <h3>Squid Game</h3>
        <p className="parrafoPopular">Cuando muchas personas de escasos recursos y poco dinero se enteran de un lugar que si ganas seras millonario,acceden a dicho lugar; pero descubriran que es un lugar mucho más.</p>
        <a href="https://www.squidgamecasting.com/"> Watch </a>
      </div>
    </div>    
  </div>

  <div className="containerPopulares">
    <div className="cardPopulares">
      <div className="imagePopular">
        <img href="#" src ="https://acnews.blob.core.windows.net/imgnews/large/NAZ_5dccc27ff4c64672b4f157feb7da2947.jpg" alt="" />
      </div>
      <div className="content">
        <h3>Fast And Furius</h3>
        <p className="parrafoPopular">La famosa saga de rapidos y furiosos, donde conocemos la historia de toretto y su familia y como tendra que afrontar cada adversidad y prueba para proteger a lo que más ama.</p>
        <a href="https://www.thefastsaga.com/"> Watch </a>
      </div>
    </div>    
  </div>
  </div>
{/* footer */}

    
    <footer>
<div className="container__footer">
    <div className="box__footer">
        <div className="logo">
            <img src="Images/logo-magtimus.png" alt=""/>
        </div>
        <div className="terms">
            <p>Una pagina que busca promover el conocimiento a la cultura hacia el septimo arte. El cine cada vez se apodera de lo melifluo y lo bello y toca cada parte sensitiva de nuestro conceptualismo.</p>
        </div>
    </div>
    <div className="box__footer">
        <h2>Soluciones</h2>
        <a href="https://www.google.com">App Desarrollo</a>
        <a href="https://www.youtube.com/@miguelsalazar3743">YouTube</a>
        <a href="/">Numero: 3007456224</a>
        <a href="https://cloud.mongodb.com/v2/63e2bff03fe35e1f03ea3e52#/clusters">Base de datos</a>
    </div>

    <div className="box__footer">
        <h2>Otros</h2>
        <a href="https://comfy-praline-cc6350.netlify.app/">Pagina anime</a>
        <a href="https://sprightly-manatee-c0427d.netlify.app/">Game Snake</a>
        <a href="https://astounding-moxie-aed4c9.netlify.app/">Pag Pokemon</a>
        <a href="https://migueljoel.neocities.org/">Spiderman</a>              
    </div>

    <div className="box__footer">
        <h2>Redes Sociales</h2>
        <a href="https://es-la.facebook.com/"> <i className="fab fa-facebook-square"></i> Facebook</a>
        <a href="https://twitter.com/?lang=es"><i className="fab fa-twitter-square"></i> Twitter</a>
        <a href="https://co.linkedin.com/"><i className="fab fa-linkedin"></i> Linkedin</a>
        <a href="https://www.instagram.com/miguelsalazar777/"><i className="fab fa-instagram-square"></i> Instagram</a>
    </div>

</div>

<div className="box__copyright">
    <hr/>
    <p>Todos los derechos reservados de <b>MIGUEL SALAZAR</b></p>
</div>
</footer>



    </div>
  );
}
