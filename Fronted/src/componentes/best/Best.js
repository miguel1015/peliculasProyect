import React from "react";
import { useState } from "react";
import "./Best.css";
import { FcEditImage } from "react-icons/fc";
import icono from "../images/avatarIcon.png"
import {
  useDeleteMoviesMutation,
  useGetMoviesQuery,
  usePostMoviesMutation,
  usePutMoviesMutation,
} from "../../redux/api";
import {
  Modal,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import ButtonEliminar from "./ButtonEliminar";

export default function Best() {
  
  const [dataMovie, setDataMovie] = useState({
    name: "",
    peliculaFav: "",
    puntuacion: "",
  });
  //para abri el modal.
  const { isOpen, onOpen, onClose } = useDisclosure();
  //para obtener las criticas hechas.
  const { data } = useGetMoviesQuery();
  //variables de estado para obtener el valor.
  const [name, setName] = useState("");
  const [peliculaFav, setPeliculaFav] = useState("");
  const [puntuacion, setPuntuacion] = useState("");
  //es una condicion para abir la parte para editar.
  const [indexEdit, setIndexEdit] = useState("");
  //para crear un nuevo comentario o critica.
  const [createMovie, { data: dataMovies, isError, error }] =
    usePostMoviesMutation();
    // para actualizar los datos.
  const [update] = usePutMoviesMutation();
  const [deleteCritica] = useDeleteMoviesMutation()


  //enviar datos al formulario
  const handleForm = (e) => {
    e.preventDefault();
    setDataMovie({
      ...dataMovie,
      [e.target.name]: e.target.value,
    });
    console.log(dataMovie);
  };


  //agregar tarea
  const formulario = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const peliculaFav = e.target.peliculaFav.value;
    const puntuacion = e.target.puntuacion.value;
    createMovie({ name, peliculaFav, puntuacion });
  };

  //boton de editar
  const botonEditar = (_id, name, peliculaFav, puntuacion) => {
    update({
      _id,
      post: { name: name, peliculaFav: peliculaFav, puntuacion: puntuacion },
    });
    onOpen();
  };
  const onChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "peliculaFav") {
      setPeliculaFav(e.target.value);
    }
    if (e.target.name === "puntuacion") {
      setPuntuacion(e.target.value);
    }
  };

  const botonEliminar = (_id) => {
    deleteCritica({_id})
  };


  return (
    <div>
      <h1>Critics</h1>
      {/* formulario  */}
      <div className="divForm">
        <form className="primerformulario" onSubmit={formulario}>
          <input
            type="text"
            className="inputSpanid"
            placeholder="Ingrese su user"
            name="name"
            required
            onChange={handleForm}
          ></input>
          <label className="lableprimerform">
            <span className="spanid">NOMBRE</span>
          </label>
          <input
            type="text"
            placeholder="Ingrese su pelicula"
            name="peliculaFav"
            required
            onChange={handleForm}
          ></input>
          <label className="lableprimerform">
            <span className="spannombre">PELICULA FAVORITA</span>
          </label>
          {/* pun */}
          <input
            type="text"
            placeholder="Ingrese su valoracion"
            name="puntuacion"
            required
            onChange={handleForm}
          ></input>
          <label className="lableprimerform">
            <span className="spanStar">PUNTUACION</span>
          </label>
          <button className="glowing-btn">
            <span className="glowing-txt">
              EN<span className="faulty-letter">V</span>IAR
            </span>
          </button>
        </form>
      </div>
      {/* tabla-------------------------------------------------------------------- */}
      <table>
        <tbody>
          <tr>
            <th style={{background:"transparent"}}></th>
            <th>NOMBRE</th>
            <th>PELICULA FAVORITA</th>
            <th>PUNTUACION</th>
          </tr>
          {data?.map((id, index) => (
            <tr key={index}>
              <td style={{background:"transparent"}}>
                <img src={icono} alt="" style={{width:"50px"}} ></img>
              </td>
              <td>{id.name}</td>
              <td>{id.peliculaFav}</td>
              <td>{id.puntuacion}</td>
              <td className="btnEdit">
                <button
                  onClick={() => {
                    onOpen();
                    setIndexEdit(id._id);
                    setName(id.name);
                    setPeliculaFav(id.peliculaFav);
                    setPuntuacion(id.puntuacion);
                  }}
                  className="button-86"
                >
                  <FcEditImage className="iconedit"></FcEditImage>
                </button>
                {/* Modal de editar */}
                {indexEdit === id._id ? (
                  <div>
                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalFooter className="modalEdit">
                    <ModalCloseButton className="ModalCloseBoton" />
                        <Input
                          className="inputName"
                          value={name}
                          name="name"
                          onChange={onChange}
                        />
                        <Input
                          className="inputFav"
                          value={peliculaFav}
                          name="peliculaFav"
                          onChange={onChange}
                        />
                        <Input
                          className="inputPunt"
                          value={puntuacion}
                          name="puntuacion"
                          onChange={onChange}
                        />
                        <Button
                          className="botonModalEditar"
                          onClick={() => {
                            botonEditar(id._id, name, peliculaFav, puntuacion);
                            onClose();
                          }}
                        >
                          Actualizar
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                ) : null}
              </td>
             <ButtonEliminar
             botonEliminar={botonEliminar}
             id={id}
             />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
