## Pokedex
Se desarrolló un proyecto mobil en el que se le permite
al usuario utilizar una pokedex. Con esta el podrá acceder
a los pokemons de la primera generación mediante un buscador,
un menú de equipo y una lista de los 151 pokemons.
# Pasos
- Se realizó un Backlog en el cual se definió cuales eran los 
  pasos a seguir para la elaboración del proyecto.
- Se creó el diseño en Figma para defenir el aspecto de la página, 
  este diseño debió ser mobile-first.
- Se realizó un nuevo proyecto de Angular, en el que debía contar 
  con una carpeta de servicios, que serviría para conectar la 
  la aplicación con la api de Pokémon.
- Se crearon los componentes del header, buscador, equipo y pokemons.
- Se modificaron los elementos de HTML, SCSS y TS para añadirle 
  funcionalidad y estilos a los componentes.
- Se enlazaron algunos componentes con la carpeta de servicios
  para que pudieran utilizar características de la api.
# ¿Cómo funciona el código?
El código se divide en las secciones de los componentes de Angular y la carpeta de servicios. La carpeta de servicios cumple la función de conectarse con la pokeapi y los componentes contienen las secciones de HTML, SCSS y Typescript. Hay componentes cuya única función es desplegar el HTML de otro componente, es decir, solo sirven para el enrutamiento de la página, para que las secciones estén conectadas entre sí. 
En los servicios se tiene que se utiliza la clase HTTP para realizar la conexión con la pokeapi y se crearon fuciones para obtener los datos de los pokemon. En los respectivos componentes se crearon funciones que nos permiten acceder a la información específica que se requería para mostrarla en el HTML y con el SCSS se le dieron estilos a los componentes.
# ¿Qué se entregó?
- header
- buscador
- equipo
- lista de pokemons
Todo hecho en Typescript, html y SCSS
