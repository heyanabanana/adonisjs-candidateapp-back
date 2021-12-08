# Proyect Adonis JS

- Tiempo para ejectuarlo: **15 días**
- Tecnología: **adonisjs.com**
- Lenguaje: **TypeScript**
- Tutoriales iniciales: [https://jagr.co/series/lets-learn-adonis-5](https://jagr.co/series/lets-learn-adonis-5)

## Objetivo

Vamos a realizar una API Rest (JSON) en la que podremos buscar perfiles técnicos dentro de una base de datos de candidatos.

Tendremos **4 modelos** básicos:

- User
- Candidate
- Skill
- Experience

De **User** tendremos:

- Nombre completo (string)
- Correo electrónico (string)
- Contraseña (string)

De **Candidate** tendremos:

- Nombre completo (string)
- Correo electrónico (string)
- Teléfono (string)
- Fecha de nacimiento (date)
- Salario actual (número)
- Salario deseado (número)
- Localidad (string)
- País (string)
- Remoto (boolean)
- Movilidad geográfica (boolean)
- Activo (boolean)
- _User_ (relación)

De **Skill** tendremos:

- Nombre (string)

De **Experience** tendremos:

- _Candidate_ (relación)
- _Skill_ (relación)
- Nivel (número - 1 (junior), 2 (semi-senior), 3 (senior))

**Fase de creación en Adonis**

- Creamos el **modelo**
- Creamos la **migración**
- Creamos el **controlador**
- Creamos el **Validador de Creación** y el de **Actualización**
- Creamos las rutas de acceso al **controlador**
- Ejecutamos la migración
  **Ejemplo:**
  - node ace make:model **Candidate** -mc
    Crea el modelo _Candidate_, la migración y el controlador
  - node ace make:validator **CreateCandidate**
    Crea el validador de la creación de _Candidate_
  - node ace migration:run
    Ejecuta la migración a la base de datos

**Endpoints para cada modelo**

GET - Obtiene todos los objetos, pudiendo **filtrar**

GET by id - Obtiene un objeto por su identificador

POST - Crea un objeto

PUT - Modifica el objeto, indicando su identificador

DELETE - Borra un objeto por su identificador

**Autenticación**

Todos los endpoints serán accesibles con un token, obtenido al hacer login en el sistema por parte del usuario (_después de introducir correo electrónico y contraseña_).

**Filtros para Users** (todos los filtros deben devolver a aquellos que tienen **activo = true**)

- Filtro por 1 o varias skills, con sus respectivos niveles
- Filtro por localidad (debe coincidir con la localidad o si el user tiene _movilidad_ a **true)**
- Filtro por país
- Filtro por remoto
- Filtro por salario deseado (igual o superior)
- **Excepción: Filtro activo = false**

**Despliegue**

- Despliega la API en Heroku y comprueba que todo funciona mediante Postman o Insomnia.
