
import '../css/componentes.css';
import webpackimg from '../assets/img/webpack-logo.png';
export const saludar = (nombre) => {


    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ nombre }!!!`;

    document.body.append(h1);

    //  imagen

    // const imagen = document.createElement('img');
    // imagen.src = webpackimg;
    // document.body.append( imagen );
}
