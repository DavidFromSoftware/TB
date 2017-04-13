# TB

## Ejercicio 1

### Comenzar

En la carpeta /ejercicio1/ debemos correr los siguientes comandos en orden: 

```sh
$ sudo chmod u+x app.js
$ npm install
$ ./app.js
```

Para que asi el archivo app.js tenga permisos de ejercucion por terminal, instalar la unicar dependencia que necesitara el script, y por ultimo correr directamente el script

## Ejercicio 2

### Comenzar

En la carpeta /ejercicio2/ debemos tener corriendo el servicio de mongodb y despues correr los siguientes comandos en orden: 

```sh
$ npm install
$ node app
```

Si es la primera vez que se corre aparecera el mensaje

```sh
Autogenerada data en la base para productos
```
Se utiliza para tener data por defecto en la tabla que utiliza la api.

### Rutas

#### Obtener Stock
- URL : /api/stock
- Method : GET


#### Agregar producto al stock
- URL : /products/:id/add
- Method : PUT
- Url Params: amount=integer

El parametro amount representa la cantidad que se va a agregar al stock, si no se agrega nada su valor por defecto es 1


#### Eliminar producto del Stock
- URL : /products/:id/remove
- Method : PUT
- Url Params: amount=integer

El parametro amount representa la cantidad que se va a descontar del stock, si no se agrega nada su valor por defecto es 1

### Test

Para correr los test unitarios solo corremos un comando

```sh
$ npm test
```


## Ejercicio 3

### Comenzar

En la carpeta /ejercicio3/ debemos tener corriendo el servicio de mongodb y el ejercicio 2 para los request del este ejercicio, y despues correr los siguientes comandos en orden: 

```sh
$ npm install
$ npm start
```
