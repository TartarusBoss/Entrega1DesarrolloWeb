# SportZone — Sitio Web de Comercio Deportivo

Desarrollo web 2026-2
Matías Herrera Vanegas
Trabajo #1

## Descripción del Proyecto
SportZone es un sitio web enfocado en la presentación y catálogo de artículos deportivos especializados para tres disciplinas en específico: Futbol, baloncesto y MMA. 
Está diseñado para permitir a deportistas y aficionados explorar productos por categoría y enviar consultas directas o solicitudes de pedido a través de un formulario interactivo.
En general el objetivo del trabajo fue hacer una "tienda" centralizada en la cuál encuentras accesorios para jugar fútbol, baloncesto o de artes marciales mixtas, Eso evita que el usuario tenga que buscar en 3 tiendas distintas para comprar articulos de cada deporte, y que en una sola plataforma pueda encontrar lo necesario para esos 3 deportes, ya que son deportes muy gustados y que a la persona promedio le agradan

El proyecto fue hecho con un modelo de datos de entidad-relacion para que después sea más fácil implementarle la api rest, hay 3 entidades y son: Producto, Categoría y Mensaje/Solicitud, los lenguajes utilizados fueron HTML, JS y CSS y por el momento fue hecho sin el uso de ningún Framework, en el momento la parte del Front no está tan elaborada pero para los próximos avances se mejorará según lo que vayamos aprendiendo     

Una ventaja que tiene el proyecto es que es fácil de navegar y tiene una interfaz limpia y ordenada, con filtros para encontrar solo lo que estés buscando, cada producto tiene su información, y tiene un formulario para hacer la compra de manera rápida (se le va a implementar una forma de comprar más sofisticada en el futuro)

La información se relaciona conectando los productos con las categorías deportivas, entonces puedes ver solo productos de la categoría que escojas


¿Cómo interactúa una persona con la página?

- Al entrar a la pagina, el usuario ve un encabezado arriba con el nombre de la tienda y el menú de navegación. abajo hay una sección de bienvenida presenta informacion de la pagina.
- Cuando el usuario baja a la sección del catálogo, encuentra una barra de botones con las categorías: *Todos, Fútbol, Básquet y MMA*. 
- Al hacer clic en cualquier deporte (por ejemplo MMA), la página no se recarga ni parpadea; sino que desaparecen los demás productos y solo se muestran las tarjetas correspondientes al deporte que hayas elegido.
- Si la persona entra desde un celular, las tarjetas de productos se acomodan verticalmente en una sola columna. Si entra desde un pc el espacio se aprovecha distribuyendo las tarjetas en 3 o 4 columnas automáticamente.
- En la parte de abajo el usuario encuentra un formulario para escribir su nombre, correo y los productos que le interesan. Al presionar "Enviar Mensaje", la página revisa inmediatamente los datos sin recargar la pantalla. Si todo está correcto, aparece una confirmación en verde; si falta algún dato, le indica en rojo exactamente qué debe corregir.

- El HTML no contiene productos escritos manualmente, un archivo de JavaScript tiene una lista con la información de cada artículo (su foto, título, deporte, precio y descripción). Al cargar la página JavaScript lee esa lista y dibuja cada tarjeta dentro del contenedor del HTML.
- Cuando se hace clic en un botón de categoría, un evento en JS filtra la lista original de productos y selecciona únicamente los que coinciden con el deporte que hayas elegido, limpia la pantalla y vuelve a dibujar solo ese grupo de tarjetas.
- Al intentar enviar el formulario, JavaScript comprueba que el nombre no esté vacío, que el mensaje tenga la longitud adecuada y valida que el correo ingresado tenga la estructura correcta (usuario@dominio.com). Si encuentra un error escribe el aviso debajo del campo correspondiente, si todos los datos son válidos, limpia el formulario y confirma el envío.

## Links del Proyecto
* **Sitio Web Publicado (Vercel):** [https://entrega1-desarrollo-web.vercel.app/]
* **Repositorio en GitHub:** [https://github.com/TartarusBoss/Entrega1DesarrolloWeb.git]

## Procedimiento para ejecutar el proyecto

cd Entrega1DesarrolloWeb
En windows: start index.html
en MAC: open index.html

## Decisiones Técnicas Explicadas


### 1. ¿Dónde usaste Flexbox y dónde Grid, y por qué en cada caso?
- Flexbox: Lo usé en los lugares donde necesitaba organizar cosas en una sola fila o columna. 
  - En la barra de arriba (header), para poner el nombre de la tienda a la izquierda y el menú a la derecha.
  - Dentro de cada tarjeta de producto, para ordenar de arriba a abajo la foto, el nombre, la descripción y el precio, haciendo que todos los precios queden alineados abajo.

- Grid: Lo usé en la sección del catálogo porque necesitaba organizar las tarjetas en varias filas y columnas como una cuadrícula. Lo util del grid es que acomoda las tarjetas solo automaticamente, en pantalla de celular muestra 1 columna, en tablet muestra 2 y en computador se acomoda a 3 o 4 columnas automáticamente.

### 2. ¿Qué hace tu JavaScript, explicado sin copiar el código? ¿Cómo funciona tu validación?
- Muestra los productos solo: En lugar de escribir el código de cada producto a mano en el HTML, los datos están guardados en una lista en JavaScript. La página lee esa lista y crea las tarjetas automáticamente.
- Filtra por deportes: Cuando se hace clic en un botón (como "Fútbol" o "MMA"), JavaScript revisa la lista, selecciona únicamente los productos de ese deporte y vuelve a dibujar solo esas tarjetas en la pantalla.
- Valida el formulario: Cuando se intenta enviar el mensaje, JavaScript detiene el envío por un segundo para revisar que los datos estén bien escritos:
  1. Que no dejes campos vacíos.
  2. Que el nombre tenga al menos 3 letras.
  3. Que el correo sea un correo válido (con su "@" y punto).
  4. Que el mensaje tenga una explicación de mínimo 10 letras.
  Si algo está mal, muestra un texto en rojo debajo de la casilla correspondiente para avisarte qué debes corregir, sin usar ventanas emergentes fastidiosas (*alerts*).

### 3. Si usaste IA, ¿para qué la usaste y qué cambiaste tú del resultado?
Usé la IA como un profesor alterno y al mismo tiempo como un asistente que me explicó el porqué de las cosas, también siento que ayuda mucho en materia de sintaxis y estructura porque aveces es dificil aprender lenguajes nuevos porque hay muchos comandos y funcionalidades que toman tiempo aprender.  le pedí sugerencias para estructurar el HTML semántico, para entender la mejor forma de organizar el CSS responsive y para saber qué regla usar al validar correos electrónicos en JavaScript entonces para cada aspecto que tiene el código (back y front) le pedí ayuda para saber como era la forma correcta de hacerlo. 
Fue un trabajo en el q aunque la IA ayudó mucho y es una herramienta muy útil, también hay que entender las decisiones que la IA tomó, es tener un balance entre ayudarse de la IA pero al mismo tiempo saber que se hizo y porqué, elegí los colores azul y azul oscuro del diseño, cambié los nombres de las clases en CSS y ajusté la lógica para que los mensajes de error aparecieran exactamente donde yo quería y como yo quería, en la parte técnica obviamente una IA va a saber más que un humano pero la cuestión es de saber utilizarla responsablemente y no solo dejar lo que haga la IA sino tener un criterio del porqué de las cosas.

### 4. ¿Qué fue lo más difícil y cómo lo resolviste?
Lo más difícil fue hacer que el filtro por categorías funcionara correctamente sin que se duplicaran los productos ni se borraran los botones al hacer clic. se resolvió creando una función específica en JavaScript que se encarga de limpiar el espacio del catálogo antes de volver a dibujar los productos de la categoría seleccionada, siento que más que todo se hizo dificil porque aprender una sintaxis toma tiempo y es un proceso en el que toca equivocarse y ayudarse también de la IA para poder entender como y porqué se deben hacer las cosas en este caso con HTML, JS y CSS, hoy en día es una bobada luchar contra la inteligencia artificial porque es una herramienta que optimiza demasiado el tiempo, que enseña lo que necesites aprender entonces siento que es una herramienta hecha para apoyarse en ella y preguntarle lo que no entiendas y obviamente optimiza mucho tiempo también, siempre me ha parecido un poco complicado como conectar un archivo con otro, o componentes que están en archivos distintos sin embargo me pareció bien el primer trabajo ya que al no ser algo tan complejo se puede comenzar poco a poco y cuando uno aprende algo desde 0 es más fácil seguir aprendiendo


