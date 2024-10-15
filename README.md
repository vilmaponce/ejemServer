# Servidor HTTP en Node.js

Este proyecto implementa un servidor HTTP básico utilizando Node.js. A continuación se explica el código y su funcionamiento.

## Estructura del Código

### Importación de Módulos

```javascript
import http from 'http';
import url from 'url';

```
http: Módulo que permite crear servidores web y manejar solicitudes HTTP.
url: Módulo que facilita el análisis y manipulación de URL
Configuración del Servidor
```javascript
const hostname = '127.0.0.1';
const port = 3000;
```
hostname: Dirección IP local (localhost) donde se ejecutará el servidor.
port: Puerto en el que el servidor escuchará las solicitudes (3000 en este caso).
Creación del Servidor
```javascript
const server = http.createServer((req, res) => {
```
Se crea un servidor HTTP y se define un callback que se ejecutará cada vez que se reciba una solicitud.
Análisis de Solicitudes
```javascript
const parsedUrl = url.parse(req.url, true);
const pathName = parsedUrl.pathname;
const method = req.method;
```
Se analiza la URL de la solicitud y se extrae el pathname y el método HTTP.
Manejo de Rutas
```javascript
if (pathName === '/' && method === 'GET') {
```
Si la ruta es '/about' y el método es GET, se responde con información sobre la aplicación.
```javascript
else if (pathName === '/data' && method === 'POST') {
```
Si la ruta es '/data' y el método es POST, se recolectan los datos enviados en el cuerpo de la solicitud.
Procesamiento de Datos
```javascript
req.on('data', chunk => {
  body += chunk.toString();
});
```
Los datos se reciben en fragmentos y se concatenan en una variable body.
```javascript
req.on('end', () => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(`Datos recibidos: ${body}\n`);
});
```
Una vez que se han recibido todos los datos, se envía una respuesta al cliente indicando los datos recibidos.
Manejo de Errores
```javascript
else {
  res.statusCode = 404;
  res.end('Ruta no encontrada\n');
}
```
Si la ruta solicitada no coincide con las definidas, se responde con un código de estado 404 y un mensaje de error.
Inicio del Servidor
```javascript
server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
```
El servidor comienza a escuchar en la dirección y puerto especificados, imprimiendo un mensaje en la consola al iniciarse.
Cómo Ejecutar el Servidor
Asegúrate de tener Node.js instalado en tu máquina.

Clona este repositorio y navega a la carpeta del proyecto.

Ejecuta el servidor con el siguiente comando:
```javascript
npm start
```
Abro navegador  http://127.0.0.1:3000/ para ver la página de inicio.

Rutas Disponibles

**GET /: Página de inicio.**

**GET /about: Información sobre la aplicación.**

**POST /data: Enviar datos al servidor.**

