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
  "nombre":"Diego",
  "apellido":"Marafetti"
}

---

El **método para borrar** un socio sería un simple delete ubicando al socio por su número de socio:

DELETE/socio/{nroSocio}

---

#### CRUD de Profesor:

---

El **método post** para dar de alta un profesor va a contener los datos del mismo (los datos son a modo de ejemplo):

POST/profesor/create

{
  "legajo":123,
  "nombre":"Juan",
  "apellido":"Perez"
}

---

El **método read** se va a realizar mediante el get, por el cuál vamos a obtener los datos del profesor ubicandolo gracias a su legajo.

GET/profesor/{legajo}

---

El **método put** para actualizar un profesor sería similar:

PUT/profesor/{legajo}

{
  "legajo":123,
  "nombre":"Pepe",
  "apellido":"Martinez"
}

---

El **método para borrar** un profesor sería un simple delete ubicando al mismo por su número de legajo:

DELETE/profesor/{legajo}

---

#### CRUD de Deporte: int idDeporte, Str descripcion, Profesor profesor

---

El **método post** para dar de alta un deporte va a contener los datos del mismo (los datos son a modo de ejemplo):

POST/deporte/create

{
  "idDeporte":1,
  "descripcion":"Futbol",
  profesor:123
}

---

El **método read** se va a realizar mediante el get, por el cuál vamos a obtener los datos del deporte ubicandolo gracias a su idDeporte.

GET/deporte/{idDeporte}

---

El **método put** para actualizar un deporte sería similar:

PUT/deporte/{idDeporte}

{
  "idDeporte":1,
  "descripcion":"Rugby",
  profesor:456
}

---

El **método para borrar** un deporte sería un simple delete ubicando al mismo por su idDeporte:

DELETE/deporte/{idDeporte}

---

**Asignar profesor a deporte**
Al realizar esta función tengo dudas pero se me ocurrio hacer un put en deportes, y que estos tengan un atributo del tipo profesor que sea quien los dé. Por lo que podría ser algo así:

PUT/deporte/idDeporte/profesor/idProfesor

Por ejemplo:

PUT/deporte/1/profesor/123

Asignará al deporte id=1 el profesor legajo=123.

---

**Asignar socio a deporte**
Tambien tengo dudas pero intente hacerla lo mas similar posible a la de asignarProfesorADeporte:

PUT/socio/nroSocio/deporte/idDeporte

Por ejemplo:

PUT/socio/123/deporte/1
