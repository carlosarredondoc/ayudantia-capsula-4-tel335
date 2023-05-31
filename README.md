# Ayudantia-capsula-4-tel335

Usando el repositorio de ejemplo del [Control 1 - Solucion](https://github.com/carlosarredondoc/control-1-rest-api-koa/tree/solucion)

Se requiere consumir el servicio de la api rest usando react, el cual se ubica en la carpeta backend y otra frontend, el contexto es el mismo un inventario de un almacen, en donde se necesitan.

1. Cree una vista para obtener los productos disponibles

~~~
Ruta: /api/products
Formato: JSON
Metodo: GET
~~~

2. Añadir nuevos productos al inventario apartir de un formulario, con su boton de envio.

~~~
Ruta: /api/product
Formato: JSON
Metodo: POST o PUT
~~~

3. Filtre apartir de una categoria los productos, usando un **Select** o **Combox** o **Un input de texto** estilo busqueda

~~~
Ruta: /api/products/:category
Formato: JSON
Metodo: GET
~~~

3. Edite un producto en particular a partir de su id, utilizando un boton en el producto de edicion

~~~
Ruta: /api/products/:id
Formato: JSON
Metodo: PUT
~~~


4. Agregue css centrando el formulario y componentes de este, colores a su gusto, margenes, etc

## Backend

~~~
cd backend
~~~

~~~
npm install
~~~

~~~
npm run start:dev
~~~

# Link Referencias

[Curso ReactJS](https://www.youtube.com/watch?v=rLoWMU4L_qE&t=1506s&pp=ygUKZmF6dCByZWFjdA%3D%3D)

[Proyecto Consumiendo API REST (Ingles)](https://www.youtube.com/watch?v=lsBDpQ9aQG0)

[Proyecto Practico Consumiendo un API](https://www.youtube.com/watch?v=545YvE1t3F8)

[Reactjs Axios y Peticiones (GET PUT DELTE) (Ingles)](https://www.youtube.com/watch?v=O_yUe8qElYM)
