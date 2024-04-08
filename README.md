# TpArqWeb (Sistema de socios)

## Sobre mí:
Alumno Lautaro Ferrin, legajo 0124643. Estoy cursando la materia Arquitectura Web de manera online sincrónica los lunes a las 19hs con el profesor Diego Marafetti.

#### Para llevar a cabo el trabajo práctico la idea que se me ocurrió fue realizar un sistema de socios de un club, apuntado a la parte administrativa del club.

### En este sistema se podrá dar de alta/baja: 

- socios (int nroSocio, Str nombre, Str apellido)
- profesores (int legajo, Str nombre, Str apellido)
- deportes (int idDeporte, Str descripcion)
- profesores de deportes

### Funciones:

Habrá funciones getSocios(), getProfesores(), getDeportes(), las cuales retornarán arrays del respectivo dato que se este solicitando.

También existirá una función asignarProfesorADeporte(Profesor profesor, Deporte deporte) que como bien su nombre indica permitirá asignar un profesor al deporte que éste enseñe.

### CRUDs:

De cada una de las clases mencionadas anteriormente **(socio, profesor y deporte)** existirá un crud para poder realizar las operaciones básicas sobre ellos (**C**reate, **R**ead, **U**pdate, **D**elete).

#### Ejemplo CRUD de Socio:

---

El **método post** para dar de alta un socio va a contener los datos del mismo (los datos son a modo de ejemplo):

POST/socio/create

{
  "nroSocio":123,
  "nombre":"Lautaro",
  "apellido":"Ferrin"
}

---

El **método read** se va a realizar mediante el get, por el cuál vamos a obtener los datos del socio ubicandolo gracias a su nroSocio.

GET/socio/{nroSocio}

---

El **método put** para actualizar un socio sería similar:

PUT/socio/{nroSocio}

{
  "nroSocio":123,
  "nombre":"Lautaro",
  "apellido":"Ferrin"
}

---

El **método para borrar** un socio sería un simple delete ubicando al socio por su número de socio:

DELETE/socio/{nroSocio}
