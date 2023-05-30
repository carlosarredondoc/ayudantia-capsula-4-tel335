import axios from 'axios';
import React from 'react';
const url = 'http://localhost:8000/'

const BotonUnirse = ({ cupos, equipo, token, id, usuariosEquipo1, setEquipo1, usuariosEquipo2, setEquipo2, pertenecer, checkUser }) => {
    //Peticion para unirse a un partido mediante el id del partido y el equipo al que se quiere unir Peticion POST
    const handleJoin = () => {
        // Para este caso como cada endpoint del backend es protegido se debe pasar el token en el header de la peticion
        axios.post(url + 'api/match/linkuserwithmatch/' + equipo, {
            id: id
        }, { headers: { 'Authorization': `Bearer ${token}` } })

        // Se actualiza el estado de los cupos
        if (equipo === 1) {
            //Hook useState para definir los equipos
            setEquipo1(usuariosEquipo1 + 1)
        } else if (equipo === 2) {
            setEquipo2(usuariosEquipo2 + 1)
        }
        checkUser()
    }
    return (
        <>
            {
                cupos === 0 ?
                    <button className='partidos-card-partidos-boton-disable' disabled >Cupos Agotados</button>
                    :
                    pertenecer ? <button className='partidos-card-partidos-boton-disable' disabled >Quiero Jugar</button>
                        :
                        <button className='partidos-card-partidos-boton' onClick={() => handleJoin()}>Quiero Jugar</button>
            }
        </>
    );
}

export default BotonUnirse;