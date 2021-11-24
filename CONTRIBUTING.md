# Contribuir para Torch 
En caso de querer participar en el proyecto deberías echarle un vistazo a las guías de estilo y las convenciones que se aplican en este repositorio :wink:. 
***
## [FrontEnd](#FrontEnd) | [BackEnd](#BackEnd) | [Colaborativo](#Colaborativo) | [Documentación](#Documentación) 
***

# FrontEnd
Las guías de estilo, el entorno empleado y los convenios a los que se sujeta el diseño del frontend son un apartado importante en cuanto a la ejemonía de la estética y la usabilidad del proyecto se refiere. Trataremos de dejarte claro cómo pensamos y cómo diseñamos en este apartado.
<!--PENDIENTE-->

# BackEnd
Es crucial conocer la madurez de la comunicación de este proyecto en términos del funcionamiento de la API REST. De igual manera saber cómo diseñamos y conocer la base de datos es estrictamente necesario para poder desarrollar eficazmente.
<!--PENDIENTE-->

# Colaborativo
En este apartado se especifican todos los puntos a tener en cuenta en cuanto al manejo del entorno colaborativo y el control de versiones se refiere.

## **Trabajar con el control de versiones de Git**
Respecto a este aspecto se deben tener en cuenta los siguientes puntos básicos
- Estructura de ramas
- Flujo de trabajo
- Nomenclatura de ramas
- Nomenclatura de mensaje de commits
### **Estructura de ramas**:seedling:
La estructura de ramas que se va a emplear es la expuesta en el[ GitHub Flow](https://githubflow.github.io/), dónde se reduce a una rama principal y a ramas temporales que parten de esta con una funcionalidad concreta y se mergean de nuevo a la principal. Esta alternativa surge de cara a la cantidad de problemas y peculiaridades propias del Git Flow original.

Las ramas secundarias a considerar dependen de la función y son:
  - ``feat``: para las funcionalidades a desarrollar del código.
  - ``hotfix``: para solucionar fallos rápidos sobre el código principal.
  - ``bug``: Cambios del código ligados a una issue concreta.
  - ``junk``: Código experimental que nunca va a ser mergeado.
  - ``docs``: Código de documentación explícita y redacciones. 

### **Flujo de trabajo** :hourglass:

El flujo de trabajo logado al GitHub Flow se puede describir en una serie de puntos principales:

- Todo lo que reside en la rama ``master`` o ``main`` es desplegable.
- Para trabajar en algo nuevo se debe crear una rama descripriva según una [nomenclatura](###Nomenclatura), a partir de la rama principal.
- Se debe hacer commit regularmente en esa rama y reflejar ese cambio haciendo push a la misma rama en remoto.
- Cuando necesites una revisión, una retroalimentación, ayuda o creas que la rama está lista para mergear, abre una pull request.
- Cuando alguien revise y confirme tu código puedes mexclarlo con master
- Cuando se haya mezclado con master, puedes y debes desplegarlo inmediatamente

Esta información se encuentra descrita en la página oficial del [GitHub Flow](https://githubflow.github.io/), la cual debe ser leída con detenimiento
### **Nomenclatura de ramas**:closed_book:

Una nomenclatura a seguir para las ramas que se creen a partir de la principal puede permitir la clasificación correcta de los PR y evitar confusiones a la hora de desarrollar y contribuir al repositorio. La que se sugiere para este proyecto está muy ligada a la recomendada por GitHub y Gitlab.

Para nombrar correctamente una rama se consideran dos componentes: la clasificación y la característica y deben cumplir unas restricciones:
- Primero se introduce el identificador de la rama y a continuación el nombre.
- El tipo de rama y el nombre se separan por una barra '/'.
- Los nombres deben ser lo más cortos y descriptivos posibles.
- Si un texto tuviera más de una palabra se separan por un guión '-'.
```bash
tipo-de-rama/nueva-funcion
```

No es muy común, pero en caso de que una característica vaya a dividirse en varias porque se va a abordar de manera grupal se simboliza la subrama añadiendo otro nombre y dividiéndolo del origen con una barra '/'

```bash
tipo-de-rama/funcion-grande/sub-función
```
### **Nomenclatura de mensaje de commits**:blue_book:

Para este apartado se seguirán al 100% las [recomendaciones de estilo](https://github.com/nhn/tui.calendar/blob/master/docs/COMMIT_MESSAGE_CONVENTION.md) propuestas por GitHub para los commits. En el propio documento viene exquisitamente resumido por lo que es una referencia directa y no hace falta extender nada aquí.

### **Otros** :sparkles:
Es importante tener en cuenta los siguientes aspectos extra, aplicarlos es positivamente enriquecedor:

- [Añadir tags a los commit](https://www.tutorialspoint.com/how-to-tag-a-commit-in-git).
- Conocer el flujo de trabajo para desarrollo TDD.
- Saber aplicar comentarios y hacer una review adecuada en la PullRequest.
- Conocer el sistema de Issues de GitHub.  
# Documentación
<!--PENDIENTE-->
