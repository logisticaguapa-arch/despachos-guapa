// Service worker MÍNIMO.
//
// Su único propósito es cumplir el requisito técnico que exigen los
// celulares (sobre todo Android) para permitir instalar la página como una
// aplicación con ícono propio. NO guarda copias de archivos, NO habilita
// modo sin conexión y NO cambia en nada el funcionamiento de la app: cada
// acción sigue necesitando conexión a internet, exactamente igual que hoy.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(self.clients.claim());
});

// Handler "vacío": deja pasar todas las peticiones directo a la red, sin
// interceptarlas ni guardarlas. Su sola presencia es lo que el navegador
// necesita para considerar la app "instalable".
self.addEventListener('fetch', () => {});
