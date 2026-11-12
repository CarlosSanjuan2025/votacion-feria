// ============ CONFIGURACIÓN ============
// URL de tu Firebase Realtime Database (sin "/" al final). Si la dejas vacía, la página funciona en MODO DEMO.
// Fotos: una imagen por proyecto en la carpeta fotos/ con el nombre 1.jpg, 2.jpg ... 7.jpg
window.CONFIG = {
  FIREBASE_URL: "https://votacion-ieti-default-rtdb.firebaseio.com",
  TITULO: "Feria de Proyectos Tecnológicos",
  INSTITUCION: "I.E.T.I. Nuestra Señora del Rosario · Pitalito",
  PROYECTOS: [
    { id: 1, nombre: "Fuente hídrica con sensor de movimiento para evitar el desperdicio de agua", lider: "Yesenia", foto: "fotos/1.jpg" },
    { id: 2, nombre: "Riego automático de plantas para la IETI Nuestra Señora del Rosario de Pitalito", lider: "Ximena", foto: "fotos/2.jpg" },
    { id: 3, nombre: "Recompensa ecológica: prototipo tecnológico para incentivar el reciclaje en estudiantes de 2.º grado mediante puntos acumulados", lider: "Karol", foto: "fotos/3.jpg" },
    { id: 4, nombre: "Parlanchicanecas: una estrategia didáctica e interactiva para fortalecer la separación de residuos en estudiantes de 3.º grado", lider: "Karla", foto: "fotos/4.jpg" },
    { id: 5, nombre: "Sistema de control de entrega de almuerzos mediante huella digital", lider: "Ricardo", foto: "fotos/5.jpg" },
    { id: 6, nombre: "Prototipo de fuente de agua fría para la IETI Nuestra Señora del Rosario de Pitalito", lider: "Marleidis", foto: "fotos/6.jpg" },
    { id: 7, nombre: "Grifería automática", lider: "Joeth", foto: "fotos/7.jpg" }
    ]
};
