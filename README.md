# 🎤 EventBeat

Sistema de gestión de conciertos y eventos musicales desarrollado con arquitectura MVC.

## 📋 Descripción

EventBeat permite administrar artistas, venues, eventos musicales, entradas y asistentes, 
gestionando la disponibilidad de entradas según la capacidad de cada venue.

## 🛠️ Tecnologías

- **Backend:** Node.js + Express
- **Base de datos:** MongoDB + Mongoose
- **Arquitectura:** MVC (Model-View-Controller)


## 🗃️ Modelo de datos

- **Artist**: nombre, género musical, biografía, foto
- **Venue**: nombre, dirección, capacidad, ciudad
- **Event**: artista, venue, fecha, hora, precio de entrada, estado
- **Ticket**: evento, asistente, cantidad, estado (disponible/vendida)
- **Attendee**: nombre, email, entradas compradas

## ⚙️ Instalación

1. Instalar pnpm y Node.js

2. Clonar el repositorio
```bash
    git clone https://github.com/titoValen/aplicacion-h-parcial-n1.git
    cd aplicacion-h-parcial-n1
```

3. Configurar el user y email
```bash
    git config user.name <nombre-git>
    git config user.email <email-git>
```

4. Instalar las dependencias
```bash
    pnpm i 
```

5. Arrancar el proyecto
```bash
    pnpm start
```

## 🎨 Paleta de colores

| Uso | Color |
|-----|-------|
| Principal | `#6C1FC7` |
| Secundario | `#00D9B5` |

## 👤 Autor

Tito Valentín

## 📄 Licencia

Proyecto académico - Parcial de Aplicaciones Híbridas
