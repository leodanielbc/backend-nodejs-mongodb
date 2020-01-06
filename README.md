# Backend con Node.js
Contrucción de un REST-API haciendo uso de Express y la Base de Datos no Relacional MongoDB
### Funciones aplicadas


* Implementacion de una capa de manejo de cache
* Uso de nyc, agregando un comando para coverage
* Creacion de test para las utilidades usando la tecnica TDD(test driven development)
* Ejecucion de Test a la parte de servicios
* Creacion de test para endpoints(URLs)
* Capa de validacion de datos usando un middleware
* Capa de manejo de errores usando un middleware
* Implementacion de las acciones de mongodb (insertOne, find or findOne, updateOne, deleteOne)

### Installation

Requiere [Node.js](https://nodejs.org/) v12.14.0.

Instalar las dependencias e iniciar el servidor.

```sh
$ cd backend-nodejs-mongodb
$ npm install
$ npm run dev
```

For production environments...

```sh
$ npm start
```

