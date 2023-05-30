import React, { useState } from 'react';
import balon from './../images/balon.png'
import player from './../images/player.png'
import axios from 'axios'
const url = 'http://localhost:8000/'

const Login = ({ setSesion, setToken, setIsUser }) => {
    //Hook Usestate para definir una variable de estado y su función set
    const [usuario, setUsuario] = useState('profesor@soccerapp.cl')
    const [password, setPassword] = useState('12345')

    //Función para capturar los datos ingresados en el formulario
    //Se utiliza una misma funcion onchange para ambos input de usuario y contraseña
    const onChange = (e) => {
        // Set del usuario
        if (e.target.name === 'usuario') {
            setUsuario(e.target.value)
        // Set de la contraseña
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    //Función para enviar los datos del formulario al backend
    const onSubmit = async (e) => {
        //Previene el comportamiento por defecto del formulario que es recargar la pagina al mandar un formulario
        e.preventDefault()
        //Petición post al backend para validar el usuario y contraseña
        const respuesta = await axios.post(url + 'api/users/login', { email: usuario, password: password })
        //En respuesta.data vienen los datos de la respuesta del backend en este caso necesitamos el token
        if (respuesta.data.token) {
            //Establecemos el token mediante el set del hook useState pasado por props
            setToken(respuesta.data.token)
            //Establecemos el inicio de la sesion mediante el set del hook useState pasado por props
            setSesion(true)
        } else {
            //En caso de que no venga el token es porque el usuario o contraseña son incorrectos por ende se limpian los input
            setUsuario('')
            setPassword('')
        }
    }

    
    return (
        <div>
            <form onSubmit={onSubmit} className='login-formulario'>
                <h1 className='login-title'>Soccer App</h1>
                <div>
                    <div className='login-label'>
                        <input
                            type='text'
                            name='usuario'
                            id='correo'
                            value={usuario}
                            onChange={onChange}
                            className='login-input'
                            placeholder='Correo'
                        />
                    </div>
                    <div className='login-label'>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            value={password}
                            onChange={onChange}
                            className='login-input'
                            placeholder='Contraseña'
                        />
                    </div>
                </div>
                <div>
                    <button className='login-boton' type='submit'><img src={balon} className="logo-balon" alt='balon' />Ingresar</button>
                </div>
                <div>
                    <button className='login-boton' type='submit' onClick={() => setIsUser(false)}>Crear Usuario</button>
                </div>
            </form>
            <img src={player} alt='' className='logo-player' />
        </div>
    );
}

export default Login;