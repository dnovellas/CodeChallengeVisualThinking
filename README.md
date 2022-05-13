# CodeChallengeVisualThinking
Semana #4 práctica #5. Cursos de Visual Thinking API

Requerimientos:

    Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
    Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
    Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.

Solución:
    
    Se agregaron pruebas automatizadas con GitHub Actions, cambiando un poco el script usado anteriormente.
    Las pruebas se corren cada vez que se hace un push al repositorio remoto (Github).
        
    
    Dependencias:
      * JEST: framework para desarrollar las pruebas de unidad para el proyecto.
      * EXPRESS: Se usa para tener un servidor en el que montar la API.
      * ESLINT: Se usa como linter del proyecto, para hacer correcciones de estilo en el código.

    Diseño de tus componentes:
    La aplicación consta de una clase encargada de cargar la información desde archivos en formato json.
    Asi mismo se cuenta con una servicio (VisualpartnerService.js), este es el encargado de procesar la información recibida, y regresar los datos procesados.
    Tanto el servicio como la clase de carga de información, son consumidos por el controller. El controller será el encargado de consumir los servicios necesarios para obtener y procesar la información solicitada por la web api (server.js) que es el que expone los endpoint de la web api.

    Explica tu API: cómo consultarla, qué formato va a responder, incluye ejemplos etc.
    
    La API consta de los siguientes endpoints:

URL: "/v1/students"
HTTPVerb: GET
Description: Obtiene toda la lista de estudiantes.
Example:
  INPUT: "/v1/students"
  OUTPUT:
  [{"id":"6264d5d89f1df827eb84bb23","name":"Warren","email":"Todd@visualpartnership.xyz","credits":508,"enrollments":["Visual Thinking Intermedio","Visual Thinking Avanzado"],"previousCourses":1,"haveCertification":true},{"id":"6264d5d85cf81c496446b67f","name":"Lucinda","email":"Sexton@visualpartnership.xyz","credits":677,"enrollments":["Visual Thinking Avanzado"],"previousCourses":6,"haveCertification":true},...]

URL:"/v1/students/emails/"
HTTPVerb: GET
Description: Obtiene las cuentas de correo de los estudiantes que tengan certificación.
Example:
  INPUT: "/v1/students/emails/"
  OUTPUT:
  ["Todd@visualpartnership.xyz","Sexton@visualpartnership.xyz","Sharlene@visualpartnership.xyz","Howell@visualpartnership.xyz","Haynes@visualpartnership.xyz","Montoya@visualpartnership.xyz","Benton@visualpartnership.xyz","Dionne@visualpartnership.xyz","Mcpherson@visualpartnership.xyz","Gracie@visualpartnership.xyz","Ila@visualpartnership.xyz","Dorthy@visualpartnership.xyz","Mcfarland@visualpartnership.xyz","Maryann@visualpartnership.xyz","Alana@visualpartnership.xyz","Rosemary@visualpartnership.xyz","Keith@visualpartnership.xyz","Delaney@visualpartnership.xyz","Ball@visualpartnership.xyz","Sally@visualpartnership.xyz","Antoinette@visualpartnership.xyz","Juliette@visualpartnership.xyz","Harding@visualpartnership.xyz","Dixon@visualpartnership.xyz","Beulah@visualpartnership.xyz","Moses@visualpartnership.xyz","Shields@visualpartnership.xyz","Jewell@visualpartnership.xyz","Hays@visualpartnership.xyz"]

URL:"/v1/students/credits/:credits"
HTTPVerb: GET
Description: Obtiene la lista de estudiantes que tengan una cantidad de créditos mayor o igual al parámetro recibido.
Example:
  INPUT: "/v1/students/filterByCredistGreaterThan/500"
  OUTPUT:
    {"credits":"500","visualpartners":[{"id":"6264d5d89f1df827eb84bb23","name":"Warren","email":"Todd@visualpartnership.xyz","credits":508,"enrollments":["Visual Thinking Intermedio","Visual Thinking Avanzado"],"previousCourses":1,"haveCertification":true},{"id":"6264d5d85cf81c496446b67f","name":"Lucinda","email":"Sexton@visualpartnership.xyz","credits":677,"enrollments":["Visual Thinking Avanzado"],"previousCourses":6,"haveCertification":true},{"id":"6264d5d8dd1a0be4e249c662","name":"Phillips","email":"Camacho@visualpartnership.xyz","credits":973,"enrollments":["Visual Thinking Intermedio"],"previousCourses":8,"haveCertification":false},...]}