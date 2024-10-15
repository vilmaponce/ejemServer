import http from 'http';
import url from 'url';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Parseamos la URL de la solicitud
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const method = req.method;

  // Rutas y métodos
  if (pathName === '/' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página de inicio\n');
  } else if (pathName === '/about' && method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Acerca de nosotros\n');
  } else if (pathName === '/data' && method === 'POST') {
    let body = '';

    // Recolectamos los datos enviados en el cuerpo de la solicitud
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // Una vez recibidos todos los datos, procesamos la información
    req.on('end', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(`Datos recibidos: ${body}\n`);
    });
  } else {
    res.statusCode = 404;
    res.end('Ruta no encontrada\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
