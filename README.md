# TpArqWeb (Sistema de socios)

## Sobre mí:
Alumno Lautaro Ferrin, legajo 0124643. Estoy cursando la materia Arquitectura Web de manera online sincrónica los lunes a las 19hs con el profesor Diego Marafetti.

---

#### Para llevar a cabo el trabajo práctico la idea que se me ocurrió fue realizar un sistema de socios de un club, apuntado a la parte administrativa del club.

### En este sistema se podrá dar de alta/baja: 

- socios (int nroSocio, Str nombre, Str apellido)
- profesores (int legajo, Str nombre, Str apellido)
- deportes (int idDeporte, Str descripcion, Profesor profesor)
- profesores de deportes

### Funciones:

Habrá funciones getSocios(), getProfesores(), getDeportes(), las cuales retornarán arrays del respectivo dato que se este solicitando.

También existirá una función asignarProfesorADeporte(Profesor profesor, Deporte deporte) que como bien su nombre indica permitirá asignar un profesor al deporte que éste enseñe y otra que permitira a los socios inscribirse a los deportes: inscribirseADeporte(Socio socio Deporte deporte).

### CRUDs:

De cada una de las clases mencionadas anteriormente **(socio, profesor y deporte)** existirá un crud para poder realizar las operaciones básicas sobre ellos (**C**reate, **R**ead, **U**pdate, **D**elete).

#### Ejemplo CRUD de Socio:

---

El **método post** para dar de alta un socio va a contener los datos del mismo (los datos son a modo de ejemplo). El nroSocio no lo pasaremos aqui ya que es autoincremental:

POST/socios

{
  "nombre":"Lautaro",
  "apellido":"Ferrin"
}

---

El **método read** se va a realizar mediante el get, por el cuál vamos a obtener los datos del socio ubicandolo gracias a su nroSocio.

GET/socios/nroSocio

---

El **método put** para actualizar un socio sería similar:

PUT/socios/nroSocio

{
  "nombre":"Diego",
  "apellido":"Marafetti"
}

---

El **método para borrar** un socio sería un simple delete ubicando al socio por su número de socio:

DELETE/socios/nroSocio

---

#### CRUD de Profesor:

---

El **método post** para dar de alta un profesor va a contener los datos del mismo (los datos son a modo de ejemplo), el legajo es autoincremental:

POST/profesores

{
  "nombre":"Juan",
  "apellido":"Perez"
}

---

El **método read** se va a realizar mediante el get, por el cuál vamos a obtener los datos del profesor ubicandolo gracias a su legajo.

GET/profesores/legajo

---

El **método put** para actualizar un profesor sería similar:

PUT/profesores/legajo

{
  "nombre":"Pepe",
  "apellido":"Martinez"
}

---

El **método para borrar** un profesor sería un simple delete ubicando al mismo por su número de legajo:

DELETE/profesores/legajo

---

#### CRUD de Deporte:

---

El **método post** para dar de alta un deporte va a contener los datos del mismo (los datos son a modo de ejemplo), el idDeporte es autoincremental:

POST/deportes

{
  "descripcion":"Futbol",
  profesor:123
}

---

El **método read** se va a realizar mediante el get, por el cuál vamos a obtener los datos del deporte ubicandolo gracias a su idDeporte.

GET/deportes/idDeporte

---

El **método put** para actualizar un deporte sería similar:

PUT/deportes/idDeporte

{
  "descripcion":"Rugby",
  profesor:456
}

---

El **método para borrar** un deporte sería un simple delete ubicando al mismo por su idDeporte:

DELETE/deportes/idDeporte

---

**Asignar profesor a deporte**
Para realizar esta funcion hago un put en deportes para permitir que los deportes puedan en un principio crearse sin profesores asignados y luego al ir a este endpoint, actuaria similar al put de deportes para actualizarlo y permitir asignar un profesor. Seria así:

POST/profesoresDeportes/:idDeporte

Por ejemplo:

POST/profesoresDeportes/1
{
  "descripcion": "Prueba",
  "profesor":"Diego Marafetti"
}

---

**Asignar socio a deporte**
La hice similar a profesoresDeportes pero con socios a deportes. Por lo que quedaria de la siguiente forma:

POST/sociosDeportes/:idDeporte
{
  "descripcion":"Futbol",
  "profesor":"Diego Marafetti",
  "socio":"Lautaro Ferrin"
}
