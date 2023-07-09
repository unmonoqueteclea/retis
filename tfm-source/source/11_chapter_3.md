# Machine Learning y aplicaciones médicas {#ml}
<!-- Comienzo: Lunes, 27 Mayo
     Previsión: Lunes, 3 de Junio
     Papers útiles: (P2) (P0) (P25-P36)
     Fin versión 1: Sabado, 9 de Junio
-->

Tradicionalmente, el trabajo de los ingenieros de software ha
consistido en dar a las computadoras una serie de reglas explícitas de
cómo tienen que procesar la información para tomar decisiones. Sin
embargo, la complejidad del campo de la medicina es tal que sería
prácticamente imposible capturar toda la información relevante
mediante una serie de reglas definidas de forma explícita
[@schwartz1986artificial].

El **Machine Learning** es la rama de la Inteligencia Artificial que
ha permitido crear **sistemas que aprendan de los datos sin necesidad
de que se programen reglas específicas**. Esto ha supuesto una
auténtica revolución en prácticamente cualquier sector profesional
entre los que, por supuesto, se encuentra también la medicina. Estos
sistemas buscan, de forma automática, **patrones** en los datos que
les permitan predecir una variable objetivo en función de una serie
de variables de entrada del sistema. De esta forma se crea un
**modelo** que, idealmente, será capaz de generalizar y obtener la
salida correcta para nuevas entradas nunca vistas. Esto se conoce como
**Aprendizaje Supervisado** aunque es importante mencionar que no es
la única forma de Machine Learning o Aprendizaje Automático. ^[Existe
también, por ejemplo, el Aprendizaje No Supervisado, que permite
encontrar patrones en los datos aunque no exista una variable objetivo
a predecir]

Uno de los principales inconvenientes del Machine Learning con
respecto al aprendizaje humano es, a la vez, una de sus principales
ventaja: la **necesidad de grandes cantidades de datos para su
correcto funcionamiento**. Si se alimentan con una cantidad suficiente
de datos, los algoritmos de Machine Learning podrán encontrar patrones
que, para los humanos, serían prácticamente imposible de detectar. El
cerebro humano es una máquina bastante compleja y sofisticada de
encontrar patrones. Sin embargo, tiene grandes dificultades en
realizar el análisis de datos con alta dimensionalidad. Un modelo de
Machine Learning podrá analizar, en segundos, más pacientes de los que
verá un médico en toda su vida. Además, la cantidad de predictores
distintos que manejará sería totalmente inviable para un humano.

En la Figura \ref{interes-ml} vemos como, a pesar de existir desde los
años 60, el interés de la población en el Machine Learning ha
experimentado un gran ascenso en los últimos años. La democratización
del Machine Learning ha comenzado y multitud de empresas han empezado
a usar modelos predictivos de Aprendizaje Automático en sus
procesos. Existen 3 principales motivos en este crecimiento:

![Interés, a lo largo del tiempo y en todo el mundo, del término
Machine Learning en el buscador Google. Datos de Enero de 2014 a Julio
de 2019. Un valor de 100 indica la máxima popularidad del término.
Los valores 50 y 0 indican, respectivamente, que un término es la
mitad de popular en relación con el valor máximo o que no existen
suficientes datos del término. Fuente de los datos: Google Trends
\label{interes-ml}](source/figures/interes-ml.png){width=100%}

- **Nuevos algoritmos**: Principalmente en la rama del Deep Learning,
  en los últimos años se ha producido una serie de importantes
  avances. Sin embargo, este no es el factor principal del
  crecimiento, pues la mayoría de algoritmos que se están implantando
  en muchas compañías existen desde hace varias décadas.
- **Mayor capacidad de computación**: Sin duda, este ha sido un factor
  clave en el crecimiento de estas técnicas. Además, la entrada al
  mercado de las tarjetas gráficas o GPUs ha permitido paralelizar los
  procesos consiguiendo ejecuciones cientos de veces más rápidas.
- **Mayor cantidad de datos**: Todos estos algoritmos no podrían
  aportar valor de no existir ingentes cantidades de datos, tanto
  estructurados como no estructurados, en los que poder encontrar
  patrones. Con el creciente uso de servicios online y la expansión
  del IoT o Internet de las Cosas se están generando mayor cantidad de
  datos cada día que nunca antes se había generado. Según Forbes, el
  90% de los datos existentes en 2018 en todo el mundo, se generaron
  entre 2016
  y 2017. ^[https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read/]




## IA, Big Data,  Machine Learning y Deep Learning
Inteligencia Artificial, Big Data, Machine Learning, Deep Learning;
actualmente existe mucha confusión en el uso de estos términos. Aunque
comparten características, no tienen el mismo significado. En este
apartado se detallarán las similitudes y diferencias entre todos ellos
para evitar el lenguaje inexacto usado habitualmente, principalmente,
en publicidad y medios de comunicación.

Comenzaremos por el **Big Data**, pues es el término más vago y
confuso. Cuando hablamos de Big Data nos referimos al análisis de
grandes cantidades de datos que no podrían ser analizados con técnicas
convencionales de computación. Sin embargo, las líneas que marcan las
fronteras del Big Data están difusas, y a menudo es un término más
utilizado por medios de comunicación y falsos gurús que por
profesionales técnicos y académicos.

Por otro lado, los campos de la **Inteligencia Artificial (IA)**, el
**Machine Learning** y el **Deep Learning** sí que están más
claramente definidos aunque, el hecho de que cada uno de ellos sea un
subcampo del anterior (Figura \ref{ia-ml}), a menudo da lugar a
confusión. Llamamos **Inteligencia Artificial** a un conjunto de
técnicas que tratan de que los ordenadores imiten, de alguna forma, el
comportamiento humano.

![El Machine Learning es un campo perteneciente a la Inteligencia
Artificial. El Deep Learning, a su vez, es un campo dentro del Machine
Learning. Elaboración propia
\label{ia-ml}](source/figures/ia-ml.png){width=80%}

El **Machine Learning** es un subcampo dentro de la IA, que consiste
en un conjunto de técnicas y herramientas, principalmente
estadísticas, que permiten a los ordenadores obtener patrones a partir
de grandes conjuntos de datos. Gracias a esos patrones seremos capaces
de entender mejor los datos o hacer predicciones. La forma más común
de Machine Learning es el conocido como **Aprendizaje
Supervisado**. Durante el entrenamiento de los modelos de Aprendizaje
Supervisado, se proporcionan al algoritmo una serie de datos
históricos. Entre ellos se encuentra la **variable objetivo**, es
decir, la que posteriormente querremos predecir en los nuevos datos de
entrada. Por ejemplo, en un modelo de detección de cáncer a partir de
imágenes médicas, nuestra variable objetivo será precisamente la que
indique si una imágen pertenece a un paciente enfermo de cáncer o un
paciente sano. Esta variable, por lo tanto, tendrá dos posibles
valores, siendo este un problema de **clasificación**. En los
problemas de clasificación se tratan de predecir **variables discretas
o clases**, es decir, variables que solo pueden tomar un rango
limitado de posibles valores. Si, por ejemplo, realizáramos un modelo
para predecir el precio de una vivienda en función de sus
características, nos encontraríamos ante un problema de **regresión**,
pues el precio es un valor contínuo.

Es común en los algoritmos para aprendizaje supervisado el uso de una
**función de coste**. Esta función mide el error entre las
predicciones del modelo y los datos reales. De forma iterativa, muchos
de los algoritmos de Aprendizaje Automático tratarán de ajustar una
serie de parámetros (o pesos) intentando minimizar esta función. Un
claro ejemplo de algoritmos con este comportamiento son las conocidas
como **redes neuronales**, de las que explicaremos su funcionamiento
en el siguiente apartado.

Precisamente las redes neuronales, son las que dan lugar al **Deep
Learning**. Cuando añadimos más complejidad a las redes neuronales
somos capaces de detectar patrones mucho menos evidentes, además de
tratar problemas complejos sin necesidad de un pre-procesamiento
manual previo de los datos que los simplifique. Este pre-procesamiento
sí que es necesario en muchos proyectos de Machine Learning y, de
hecho, supone un importante porcentaje del tiempo de trabajo de los
ingenieros de Machine Learning. Los algoritmos de Deep Learning son
actualmente el estado del arte en tareas como reconocimeiento de
imágenes [@krizhevsky2012imagenet], reconocimiento del habla
[@deng2013new], procesamiento del lenguaje natural
[@collobert2011natural], análisis de información de aceleradores de
partículas [@baldi2014searching] o reconstrucción de los circuitos
cerebrales [@helmstaedter2013connectomic], entre muchas otras.

Como vemos en la Figura \ref{interes-ai} el término Big Data, que
durante mucho tiempo estuvo en cabeza en popularidad, ha perdido
fuerza en los últimos años mientras que Machine Learning y Deep
Learning (en menor medida) siguen creciendo.

![Interés, a lo largo del tiempo y en todo el mundo, de los término
Machine Learning (en azul), Deep Learning (en rojo) y Big Data (en
amarillo) en el buscador Google. Datos de Enero de 2014 a Julio
de 2019. Un valor de 100 indica la máxima popularidad del término.
Los valores 50 y 0 indican, respectivamente, que un término es la
mitad de popular en relación con el valor máximo o que no existen
suficientes datos del término. Fuente de los datos: Google Trends
\label{interes-ai}](source/figures/interes-ai.png){width=80%}


## Redes neuronales, descenso de gradiente y backpropagation
Una red neuronal consiste en un conjunto de nodos, conocidos como
**neuronas**, conectados entre si para transmitirse señales. Estas
neuronas suelen estar dispuestas en una serie de **capas**, en las
que, comúnmente, cada neurona de una capa está conectada a todas las
neuronas de las capas anteriores. De esta forma, la salida de unas
neuronas pasa a ser la entrada de otras (Figura \ref{neural-network}).

![Representación de una red neuronal con dos capas ocultas. Cada uno
de los círculos representa una neurona. Elaboración propia
\label{neural-network}](source/figures/neural-network.png){width=90%}

![Representación de una sola neurona con 3 entradas. Cada una de esas
entradas tiene asociado un peso. La neurona utiliza la función de
activación ReLU. Elaboración propia
\label{single-neuron}](source/figures/single-neuron.png){width=90%}

La Figura \ref{single-neuron} representa las operaciones realizadas
por una sola neurona durante la predicción. Estas mismas operaciones
son realizadas en todas las neuronas de la red. Cada neurona combina
sus entradas con un conjunto de coeficientes o pesos. Las entradas
$x_1,x_2,x_3$ y los pesos $w_1,w_2,w_3$ son números reales, que pueden
ser positivos o negativos. ^[Aunque no se haya representado, también
existe un término adicional, *b* (término de sesgo), que no está
multiplicado por ningún peso y se suma a z] El nombre de **peso** se
debe a que la función de estos, al multiplicarse por los valores de
las entradas es definir la importancia de cada una de ellas. En cada
una de las neuronas, los resultados de todos estos productos se suman
(ecuacion \ref{eq:train1}) y se pasa el valor obtenido a lo que se
conoce como **función de activación**  (ecuacion \ref{eq:train2}) , que
añade un comportamiento no-lineal al proceso que permite modelar
funciones curvas o no triviales. Actualmente, la función de activación
más utilizada es la **ReLU** (Rectified Linear Unit) ^[Otras funciones
de activación usadas comúnmente son **softmax**, **tangente
hiperbólica** o la **función sigmoide**] cuya fórmula podemos ver en
la ecuación \ref{eq:relu}.

\begin{equation} \label{eq:relu}
f(z)=max(z,0)
\end{equation}

\begin{equation} \label{eq:train1}
 z = x_1w_1 + x_2w_2 + x_3w_3 + b
\end{equation}

\begin{equation} \label{eq:train2}
  out = max(z,0)
\end{equation}

Como vemos en la ecuación \ref{eq:train3}, las ecuaciones anteriores
pueden ser generalizadas para cualquier número de entradas.

\begin{equation} \label{eq:train3}
 out(X) = max(\sum_{i}x_iw_i+b,0)
\end{equation}

Durante el **entrenamiento**, los pesos cambian de valor, intentando
minimizar la función de coste. Suponiendo que $y$ es el valor real
de la variable objetivo para un conjunto de entradas $X$, la función
de coste $L(X,y)$ podría ser simplemente la de la ecuación
\ref{eq:train4}.

\begin{equation} \label{eq:train4}
 L(X,y) = (out(X) - y)^2
\end{equation}

Para ajustar el vector de pesos se suele calcular el vector de
gradiente. Este vector indica, para cada peso, cómo se modificaría el
error si ese peso se aumentara ligeramente. Es decir, nos proporciona
la pendiente de la función de coste (o función de pérdidas). El vector
de pesos es entonces ajustado en el sentido opuesto al vector de
gradiente (ecuación \ref{eq:train5}), bucando así **minimizar el
error**. El valor $\alpha$ representa lo que conocemos como **learning
rate** o **factor de aprendizaje** y se encarga de controlar la
velocidad a la que la red neuronal aprende. Es muy importante la
elección correcta de este parámetro, pues, un valor demasiado bajo
supondrá que la red tarde muchas iteraciones en encontrar el mínimo de
la función de coste. Sin embargo, un valor demasiado alto puede
suponer que la red no sea capaz de converger y encontrar este
mínimo. Este proceso completo es lo que conocemos como **descenso de
gradiente**.

\begin{equation} \label{eq:train5}
 w_{ij} =  w_{ij} - \alpha\frac{\partial L(X,y)}{\partial w_{ij}}
\end{equation}

En la práctica, este proceso no usa todos los datos cada vez sino que
se utiliza el **Descenso de Gradiente Estocástico** (SGD por sus
iniciales en inglés). Gracias al SGD podemos actualizar los pesos de
nuestra red neuronal tomando cada vez un pequeño conjunto de datos
(conocido como **batch**).

El origen de las redes neuronales es el **Perceptrón**, desarrollado
en los años 60, que era una red simple de una sola capa de entrada y
una capa de salida. Sin embargo, fue en los años 80 cuando estas
comenzaron a desarrollar su verdadero potencial gracias al algoritmo
de *backpropagation*, que permitió que se añadieran nuevas capas
intermedias a las redes neuronales, conocidas como **capas
ocultas**. La técnica de *backpropagation* no es más que una
aplicación de la regla de la cadena de las derivadas que permite
propagar el error calculado al final de la red a todas las capas de
ésta. En la ecuación \ref{eq:train6} podemos ver un ejemplo de como
aplicar la regla de la cadena de las derivadas para obtener la
derivada de la función de coste en función de los pesos. De la misma
forma, podríamos aplicar la regla de la cadena para obtener la
derivada de la función de coste en función de los pesos de varias
capas atrás.

\begin{equation} \label{eq:train6}
 \frac{\partial L(X,y)}{\partial  w_{ij}} =  \frac{\partial L(X,y)}{\partial out(X)} \frac{\partial out(X)}{\partial  w_{ij}}
\end{equation}

Gracias a la técnica de *backpropagation*, podemos propagar el error a
lo largo de las capas, para calcular en cada una el vector de
gradiente y actualizar con él los pesos. El *backpropagation* ha
permitido, por lo tanto, añadir **nuevas capas intermedias** a las
redes.

Estas capas intermedias permiten encontrar patrones más complejos, y
dieron lugar a lo que conocemos como **Deep Learning**. Si no
tuviéramos **capas ocultas**, nuestras redes únicamente encontrarían
relaciones directas entre las entradas y las salidas. Sin embargo, las
capas ocultas nos permiten modelar de forma mucho más acertada el
mundo real, donde las salidas dependen de las interacciones y
combinaciones entre las distintas entradas. Estrictamente hablando,
nos referimos a Deep Learning cuando tenemos una red con más de una
capa oculta. El Deep Learning permite crear modelos computacionales
compuestos de múltiples capas de procesamiento que son capaces de
aprender representaciones de los datos con **múltiples capas de
abstracción** [@lecun2015deep].

En las redes profundas, cada capa de neuronas se entrena,
automáticamente, en un conjunto de características distinto en base a
la salida de la capa anterior. A medida que avanzamos a través de la
red, las características que las neuronas son capaces de detectar son
más complejas, ya que agregan y recombinan características de capas
anteriores. Esta propiedad, conocida como **jerarquía de
características**, hace posible que este tipo de redes sean capaces de
tratar datasets de muy alta dimensionalidad. Las redes neuronales
profundas realizan por lo tanto **extracción automática de
características** sin la necesidad de la intervención de un humano
[@lecun2015deep].

Otra técnica a destacar, que será usada en los sistemas diseñados, es
la técnica del **dropout**. Esta técnica de regularización trata de
evitar el sobreajuste de la red ignorando de forma aleatoria, durante
el entrenamiento, la salida de algunas neuronas. De esta forma, se
fuerza a la red neuronal a encontrar patrones más robustos, evitando
así que aprenda el *ruido* de nuestro conjunto de datos.

### Redes neuronales convolucionales
La capacidad de las redes neuronales de encontrar patrones complejos
en datasets con una gran cantidad de dimensiones las convierte en
candidatas perfectas para tareas como la clasificación de imágenes o
el reconocimiento de voz. Sin embargo, estos clasificadores necesitan
un trabajo manual previo de extracción de características cuando
tratan con señales (imágenes, audios, etc).

La aparición de las **Redes Neuronales Convolucionales (CNN por sus
siglas en inglés)** permitió eliminar la extracción de características
y delegarla en el propio algoritmo de *backpropagation*. De esta
forma, es posible usar como entradas de nuestro modelo los *datos en
bruto* (píxeles de las imágenes o muestras de audio). Un momento clave
para las redes convolucionales fue en 2012, en el **ImageNet Large
Scale Visual Recognition Challenge (ILSVRC)**
^[http://image-net.org/challenges/LSVRC/] cuando una solución novedosa
basada en CNNs [@krizhevsky2012imagenet] obtuvo, de forma holgada, la
primera posición en la competición.

La arquitectura de las redes convolucionales está basada en la
organización de la corteza visual del cerebro humano. En él, existen
neuronas individuales que responden a estímulos en una región
delimitada del campo visual. Este tipo de redes son muy similares a
las redes neuronales tradicionales analizadas anteriormente. De la
misma forma que éstas, las CNN también están compuestas de neuronas
dispuestas en capas y se busca minimizar una función de coste mediante
el ajuste de una serie de pesos. Sin embargo, las CNN, al asumir que
tendrán imágenes como entradas, pueden realizar tareas más
especializadas que evitarán la carga computacional que supondría
tratar cada píxel de la imagen como un input más de una red neuronal
convencional.

Una de las principales ventajas de las redes neuronales
convolucionales con respecto a otras aproximaciones al problema es que
las CNN poseen un cierto grado de **invarianza a la distorsión y al
desplazamiento**. Esto permite que podamos usar este tipo de redes sin
apenas pre-procesamiento de las imágenes.

Las CNN constan de **capas convolucionales** y **capas de reducción (o
pooling)** alternadas.

En las **capas de convolución** se aplican una serie de **filtros** a
las imágenes (cuyos pesos son parámetros modificados durante el
entrenamiento por el algoritmo de *backpropagation*). En ellas se
producen también las **transformaciones no lineales (ReLU)**. Cada uno
de los filtros se desplazará sobre toda la imagen calculándose, en
cada posición, el producto escalar entre la región de la imagen y los
valores del filtro. Este proceso, la convolución ^[Aunque es común en
la literatura hablar de este proceso como convolución, en realidad
este cálculo en tratamiento digital de señal es conocido como una
correlación cruzada. [@Goodfellow-et-al-2016]] de la imagen con el
filtro, es el que da nombre a estas capas. Estos filtros hacen de
**detectores de características**. Precisamente el desplazamiento de
ese filtro por toda la imagen es lo que nos permitirá detectar formas
y patrones en cualquier posición de la imagen, consiguiendo así la
deseada invarianza al desplazamiento. En la Figura \ref{lena} podemos
ver el efecto de la convolución sobre una imagen.

![Resultado de la convolución de una imagen con un filtro Sobel de 3x3
horizontal (arriba) y otro vertical (abajo) Fuente:
https://victorzhou.com/blog/intro-to-cnns-part-1/
\label{lena}](source/figures/lena.png){width=80%}

En las **capas de reducción o pooling** se disminuye la cantidad de
parámetros. Para ello, se obtiene el promedio o el máximo de una serie
de regiones, reduciendo así el tamaño del mapa de características y
contribuyendo a evitar el *overfitting*. En función de si se obtiene
el promedio o el máximo de las regiones, estas capas son de **Max
Pooling** o de **Average Pooling**. La Figura \ref{maxpool} representa
este proceso.

![Representación del proceso de Max Pooling con un filtro de 2x2 sobre
una imagen de 4x4. Elaboración propia
\label{maxpool}](source/figures/maxpool.jpeg){width=80%}


Al final de todas estas capas tenemos las **Fully Connected Layers**,
capas como las de las redes tradicionales que, a partir de los
parámetros extraídos por las capas convolucionales y de pooling,
realizan las clasificaciones o regresiones finales.

La Figura \ref{conv} representa todo este proceso en un ejemplo de
reconocimiento de dígitos en imágenes. En ella podemos ver la salida
de los filtros de las dos capas convolucionales que tiene la
arquitectura del ejemplo.

![Representación de los mapas de activación de una red convolucional
con 2 capas convolucionales y 3 fully-connected. Cada capa
convolucional va seguida de una de max pooling. Fuente:
http://scs.ryerson.ca/~aharley/vis/conv/flat.html
\label{conv}](source/figures/conv.png){width=100%}


El funcionamiento del algoritmo de *backpropagation* en las redes
convolucionales es practicamente igual que en las no convolucionales,
por lo que no supone demasiada dificultad teórica añadida para el
entrenamiento. La red será capaz de encontrar, durante el
entrenamiento, los pesos de los filtros que permitan extraer las
características adecuadas para predecir correctamente nuestra clase
objetivo.


Las CNN explotan la propiedad de que, los patrones detectados, no son
más que composiciones de otros patrones más simples. En una imágen,
por ejemplo, mediante la composición de varias líneas simples damos
lugar a motivos que, de nuevo mediante composición, dará lugar a las
formas de los objetos. La detección de cada uno de estos niveles de
abstracción corresponderá a unas capas concretas de nuestra red
convolucional, siendo las primeras capas las que detectarán
características más simples como líneas, bordes o colores y las
últimas capas las que detectarán elementos compuestos mucho más
complejos. Esto es conocido como la **jerarquía de las capas**.

Existe una gran cantidad de arquitecturas de redes convolucionales,
que han demostrado ser eficaces en diversos campos. Ejemplos de ellas
pueden ser las siguientes:

- **LeNet**: Fue, en 1998, una de las primeras arquitecturas de
  CNNs [@lecun1998gradient]. Su propósito era, principalente, el
  reconocimiento de dígitos en imágenes. Era una red pequeña con 7
  capas, siendo dos de ellas convolucionales, otras dos de tipo
  pooling y el resto fully-connected.
- **Alexnet**: Fue la ganadora en 2012 del concurso ILSVRC
  [@krizhevsky2012imagenet], con una arquitectura similar a LeNet pero
  más profunda, con cerca de 60 millones de parámetros y haciendo uso,
  entre otras novedades, de la función de activación ReLU.
- **VGGNet**: Fue presentada en 2014 [@simonyan2014very], y aún sigue
  siendo la arquitectura preferida por la comunidad para la extracción
  de características de imágenes. Fue la primera arquitectura de CNNs
  realmente profunda (19 capas). Se caracteriza por ser una
  arquitectura muy uniforme que usa únicamente filtros de 3x3. Sin
  embargo, era muy costosa de entrenar, puediendo llegar a tener hasta
  140 millones de parámetros.
- **ResNet**: Presentada un año después a la VGGNet [@he2016deep], se
  caracteriza por tener saltos entre capas. La salida de la **capa i**
  puede ser la entrada de la **capa i+2**.
- **Inception**: La primera versión de esta arquitectura (Google Net)
  [@szegedy2015going] introdujo immportantes novedades entre las que
  destacaba el uso de varios filtros de distintos tamaños en el mismo
  nivel, cuyas salidas serían concatenadas. El objetivo era crear
  redes *más anchas* en vez de *más profundas*.



## Transfer Learning
La mayoría de métodos de Machine Learning asumen que los datos de
entrenamiento y los de test vienen de la misma distribución y espacio
funcional [@pan2009survey]. Por ello, cuando esta distribución cambia,
debemos volver a entrenear nuestros modelos desde 0, obteniendo datos
totalmente nuevos. El **Transfer Learning**, sin embargo, mediante la
transferencia de conocimiento entre modelos, permite transferir
información de un modelo entrenado previamente a un modelo nuevo que
está siendo entrenado en otro conjunto de datos distinto.

El Transfer Learning es una técnica de Machine Learning que permite
utilizar un modelo desarollado para una tarea específica como punto de
partida para otra tarea distinta (aunque relacionada). Además de
permitirnos obtener clasificadores de forma mucho más rápida
aprovechando el conocimiento previo, el Transfer Learning hace posible
el uso del Deep Learning con conjuntos de datos pequeños con los que
sería imposible entrenar una red desde 0. El Transfer Learning es
considerado por muchos investigadores como un paso más en dirección
hacia la AGI ^[Artificial General Intelligence: Aquella inteligencia
artificial que puede realizar con éxito cualquier tarea intelectual de
cualquier ser humano].

### Transfer Learning con imágenes
En la práctica, cada vez es menos común el entrenamiento de redes
convolucionales *from scratch*.  Existen 2 principales motivos:

- En determinados ámbitos, no siempre existen datasets con una gran
  cantidad de imágenes, suficiente para entrenar una red convolucional
  desde cero.
- Aún existiendo dicho dataset, el tiempo necesario para su completo
  entrenamiento puede ser de días, semanas o incluso meses dependiendo
  del equipo usado, la cantidad de datos y la complejidad de la
  arquitectura de la red.

Existen tres principales estrategias a la hora de realizar Transfer
Learning:

- **Red convolucional como extractor de características**: Como se ha
  analizado anteriormente, una red convolucional puede ser vista como
  una herramienta para extraer características de las imágenes que
  posteriormente serán usadas por capas *fully connected* (o por
  cualquier otro tipo de clasificador) para realizar la
  clasificación. Conociendo esto, podemos utilizar la red
  convolucional entrenada para un conjunto de imágenes en otro
  conjunto de imágenes distinto, siendo el clasificador final el único
  que tendrá que ser reentrenado.
- **Fine-tuning de la red convolucional** Como se ha analizado
  anteriormente, las capas iniciales de las redes convolucionales se
  encargan de detectar características más generales y patrones
  simples, que van siendo más complicados a medida que avanzamos hacia
  capas posteriores. Por lo tanto, es común que estas primeras capas
  tengan siempre contenidos similares incluso en modelos entrenados
  con diferentes conjuntos de imágenes. Estas capas podrán ser
  reaprovechadas, con lo que únicamente tendremos que reentrenar las
  últimas capas y el clasificador final.
- **Modelos pre-entrenados**: Este tercer caso supone el
  reentrenamiento total de la red, sin embargo, partiendo de unos
  pesos que han sido previamente entrenados en otro conjunto de
  imágenes. De esta forma se consigue que el número de iteraciones
  necesarias hasta llegar al nivel de exactitud requerido sea menor.

Los criterios para decidir qué estrategia de Transfer Learning usar en
cada caso dependen principalmente de las diferencias de contenido y
tamaño entre las imágenes de nuestro dataset y las del dataset
original (con el que se entrenó el modelo que vamos a reutilizar)

Es común usar las siguientes *rules of thumb* como guía en función de
4 posibles escenarios: ^[http://cs231n.github.io/transfer-learning/]

- **El nuevo dataset es pequeño pero similar al original**: Al
  tratarse de un dataset pequeño, modificar las capas convolucionales
  de nuestro modelo original puede dar lugar a **sobreajuste**. Por lo
  tanto, y puesto que las imágenes de ambos datasets son similares, la
  estrategia adecuada será utilizar la red convolucional como
  extractor de características y entrenar únicamente el clasificador
  final.
- **El nuevo dataset es grande y similar al original**: En este caso,
  como tenemos más imágenes podremos realizar fine-tunning de la red
  sin miedo a caer en sobreajuste.
- **El nuevo dataset es pequeño y muy diferente al original**: De
  nuevo, al tener un dataset pequeño, descartaremos entrenar la red
  convolucional. En este caso, lo que haremos es entrenar solo un
  clasificador. Además, al ser las imágenes distintas a las del
  dataset original, no podremos aprovechar las últimas capas de la red
  convolucional que serán eliminadas.
- **El nuevo dataset es grande y muy diferente al original**: En este
  caso entrenaremos la red convolucional al completo. Sin embargo,
  será de utilidad comenzar nuestro entrenamiento a partir de un
  modelo pre-entrenado.

\newpage
## Explicabilidad las redes convolucionales
Para la introducción de técnicas basadas en Deep Learning en diversos
sectores profesionales (siendo la medicina uno de ellos), tan
importante como la exactitud de las predicciones, es la existencia de
técnicas que permitan **explicar el por qué de esas predicciones** o,
al menos, dar un valor de **confianza** para cada una.  Aunque las
redes neuronales sean generalmente consideradas como **cajas negras**,
en los últimos años han aparecido nuevas técnicas que permiten
entender los factores que han llevado al clasificador a tomar una u
otra decisión.  Concretamente, durante este trabajo, se hará uso de
una técnica para la interpretación de redes neuronales convolucionales
conocida como **Mapas de Atención**, técnica basada en
**Gradient-weighted Class Activation Mapping (Grad-CAM)**
[@selvaraju2017grad].  Gracias a estos mapas podemos conocer cuáles
son las zonas de una imagen que más han influido en una
predicción. Para ello, esta técnica usa los gradientes específicos de
cada clase que fluyen hasta la última capa convolucional para producir
un mapa de calor con las zonas de interés para la detección de esa
clase (Figura \ref{gradcam}).

![Mapas de atención generados por Grad-Cam para distintas clases de
Imagenet. Fuente: https://github.com/raghakot/keras-vis
\label{gradcam}](source/figures/grad-cam.png){width=70%}


Esta técnica no requiere modificar la arquitectura de la red ni volver
a entrenarla. Además, permite obtener la localización aproximada de
los objetos detectados en la imagen, aunque durante el entrenamiento
no se haya utilizado ningún tipo de información de localización.


## Aplicaciones médicas del Machine Learning
¿Cómo sería un sistema sanitario en el que cada decisión relacionada
con una enfermedad, en lugar de ser tomada por una sola persona, fuera
tomada por un conjunto de los principales expertos del mundo de esa
enfermedad? Esa es la pregunta que se hacen multitud de investigadores
[@rajkomar2019machine]. Estos concluyen que los tratamientos recetados
de esta forma, y no los más conocidos por una única persona que los
prescribe, serían los más efectivos. Además, se evitaría el **error
humano**. Por desgracia, un sistema de este tipo sería inviable debido
principalmente a la falta de expertos, que no darían abasto para
diagnosticar a millones de pacientes cada día. Sin embargo, el Machine
Learning nos promete un sistema similar a este pero realmente viable y
escalable, con la capacidad de **aplicar todas las lecciones recogidas
de la experiencia colectiva** en cada una de las decisiones, sin que
esto genere una gran carga de trabajo para unos pocos expertos.

Hace ya 50 años se ponía de manifiesto la necesidad de *"aumentar, o
incluso remplazar las funciones intelectuales de los médicos"*
[@schwartz1970medicine]. Además, la implementación de los
**Historiales Clínicos Electrónicos** en diversidad de sistemas de
salud, proporciona una ingente cantidad de datos que podrían ser de
gran utilidad para la creación de modelos de Machine Learning de todo
tipo. ^[Aunque no hay que olvidar las limitaciones derivadas de la
privacidad y la protección de datos]

El uso de herramientas estadísticas en medicina no es ninguna
novedad. Desde antes de la irrupción de las técnicas más novedosas de
Machine Learning y Deep Learning, la estadística descriptiva tenía un
papel fundamental, estando prácticamente siempre presente en los
artículos de las revistas de medicina. Son necesarias técnicas
estadísticas que nos permitieran estudiar la eficacia de los fármacos
o los factores de riesgo de determinadas enfermedades.

La rama de la **epidemilogía**, cuyos orígenes se sitúan hacia el
siglo IV a.C., trata de recopilar y tratar los datos de los pacientes
y sus patologías, para estudiar la frecuencia y distribución de los
diversos fenómenos relacionados con la salud. La epidemilogía trata de
encontrar patrones en las enfermedades centrándose principalmente en
tres aspectos: tiempo, lugar y persona. Gracias a ella somos capaces
de definir los problemas de salud más importantes de una comunidad,
además de sus factores de riesgo. Con esta información podremos
desarrollar programas de prevención o control, e incluso predecir
tendencias de una enfermedad.

Sin embargo, la revolución del Machine Learning y el Deep Learning de
los últimos años se empieza a hacer notar, aunque de forma más lenta
que en otros campos, en la medicina. Por primera vez, este tipo de
técnicas salen del ámbito de la investigación y son utilizadas para el
**diagnóstico**. Tradicionalmente los programas utilizados en
diagnóstico eran **sistemas expertos**. Este tipo de programas
simplemente se limitaban a pedir una serie de datos sobre el paciente,
y obtenían conclusiones a partir de una serie de reglas que
previamente habían tenido que ser definidas por especialistas. Sin
embargo, con sistemas basados en Machine Learning, **estas reglas son
automáticamente inferidas a partir de datos históricos** (Figura
\ref{tradicional}). Una de las principales características del Machine
Learning, que le hace destacar sobre otros métodos tradicionales, es
su capacidad de manejar enormes cantidades de predictores y encontrar
complicados patrones en ellos.

![Diferencias ente Software tradicional y Machine
learning. Elaboración propia.
\label{tradicional}](source/figures/tradicional.png){width=85%}


Además, debido a la gran cantidad de información no estructurada
existente (imágenes, señales, textos, etc.) en medicina, como era de
esperar, el **Deep Learning** puede jugar un papel esencial,
permitiendo que los datos *hablen por sí mismos*. Sin embargo, en todo
momento tenemos que tener presente que nuestras evaluaciones pueden
ser demasiado optimistas o que el sobreajuste puede hacer que nuestros
modelos dejen de funcionar al ponerlos en producción. Tener una
Inteligencia Artificial explicable, de la que no solo obtengamos
predicciones sino el por qué de las mismas, es algo que facilitará la
entrada de estos algoritmos en el día a día de los médicos.

A continuación se detallarán los ámbitos dentro del campo de la
medicina en la que el Aprendizaje Automático puede realizar
importantes contribuciones.

### Pronóstico
El Machine Learning nos puede ayudar, mediante la búsqueda de
patrones, en la predicción de la evolución de un enfermo. En varios
servicios de salud existen ya implantados sistemas que, mediante
Machine Learning, son capaces de identificar a los pacientes que están
en riesgo de tener que ser transferidos a las unidades de cuidados
intensivos. [@escobar2016piloting]. Además, diversos estudios sugieren
que se pueden crear eficaces modelos de pronóstico médico a partir de
la información en bruto de historiales [@rajkomar2018scalable] e
imágenes médicas [@de2018clinically].

La estandarización de los historiales médicos electrónicos sería de
gran ayuda para la implantación de estos sistemas permitiendo, además,
la agregación de datos. Formatos como el **Fast Healthcare
Interoperability Resources (FHIR)** [@mandel2016smart] han nacido en
los últimos años con este propósito.

### Diagnóstico
Según concluye la Academia Nacional de Ciencias de EEUU, prácticamente
todos los pacientes serán diagnosticados de forma errónea al menos una
vez en su vida [@ball2015improving].  Diversos estudios han encontrado
problemas sistemáticos en los servicios de salud de todo el mundo. Hay
evidencias de que, en los sistemas en los que los servicios de
diagnóstico y tratamiento los realiza una misma organización
obteniendo mayores ingresos la compañía mediante la prescripción de
medicamentos y la solicitud de nuevas pruebas médicas, la tendencia a
hacerlo aumenta considerablemente [@currie2014addressing].

Los datos históricos pueden ser de gran ayuda para la identificación
de posibles patologías durante las visitas clínicas, encontrando
patrones complejos y ayudando a eliminar posibles errores y sesgos
humanos. Los modelos podrían, incluso, sugerir nuevas pruebas a los
médicos en base a los datos recogidos en tiempo real
[@slack1966computer].

### Tratamiento
La aproximación más directa al problema del tratamiento mediante
Machine Learning sería la creación de modelos entrenados con datos
históricos que aprendieran los medicamentos recetados por los médicos
en cada situación. Sin embargo, esta aproximación tiene un claro
problema, el modelo aprendería los hábitos de prescripción de los
médicos, que no tienen por qué ser los ideales. Por lo tanto, en este
campo aún más, es de vital importancia generar datasets fiables y
analizados en profundiad por expertos para entrenar los modelos
[@rajkomar2019machine].



### Retos clave
Uno de los principales retos en la creación de modelos de Aprendizaje
Automático para medicina es la **falta de datos de calidad**. Este
tipo de modelos, sobre todo los de Deep Learning, funcionan mejor
cuanto mayor es la cantidad de datos de los que disponen para su
entrenamiento. Sin embargo, en el campo de la medicina no existe tanta
disponibilidad de los mismos como sí que existe en otros ámbitos. Una
de las principales causas de esa escasez es la inviolable
**privacidad** de los datos de los pacientes, que a menudo impide la
creación de grandes datasets y únicamente permite crear conjuntos de
datos lo suficientemente agregados como para que no pueda obtenerse
datos de una persona en concreto. [@rajkomar2019machine]

Otro de los retos es el **sesgo** existente en los datos. Toda actividad
humana está influenciada por un sesgo, ya sea consciente o
inconsciente. La máxima **Entrada basura/Salida basura** de la
analítica de datos está presente también en este campo. De nada
servirá contar con potentes modelos capaces de aprender complicados
patrones, si luego esos patrones los encontrará en datos erróneos o
sesgados.

La **interpretabilidad** de los modelos es también clave. Los médicos
deben conocer el grado de veracidad y las limitaciones de estas
técnicas para poder incorporarlas como una herramienta más. La
sobreconfianza en estos sistemas puede conllevar una disminución de la
alerta de los médicos que puede tener consecuencias letales. Que los
modelos proporcionen, junto con sus predicciones, un grado de
confiabilidad es un buen principio, pero no basta. De hecho, en
ocasiones estos intervalos de fiabilidad pueden ser interpretados de
forma incorrecta [@jiang2018trust]. Es necesario crear modelos que
sean capaces de explicar el por qué de sus predicciones. De hecho,
esto era uno de los requisitos que indicó la Unión Europea en su
**Guia ética para una Inteligencia Artificial fiable**
^[https://ec.europa.eu/digital-single-market/en/news/ethics-guidelines-trustworthy-ai]. La
necesidad de interpretabilidad de los resultados pude suponer un
problema en técnicas de Deep Learning, que siempre han sido tachadas
de ser **cajas negras**. Sin embargo, en los últimos años se han
realizado diferentes estudios que demuestran que los modelos de Deep
Learning pueden ser interpretables con las herramientas
adecuadas. [@cruz2013deep], [@lipton2016mythos], [@zhang2018visual].

## Correlación no implica causalidad
Aunque sea un mantra repetido hasta la saciedad en la literatura, esta
advertencia merece un apartado propio en un trabajo de estas
características, pues es algo a tener en cuenta y que implica tener
mucha cautela al obtener conclusiones mediante este tipo de
métodos. En muchas ocasiones creemos, de forma errónea, que existe una
relación de causa y efecto entre dos variables que están
correlacionadas, cuando esto no siempre es cierto.


La correlación entre dos variables puede ser debida a una tercera
**variable oculta** que no tenemos por qué conocer o simplemente puede
ser lo que conocemos como **correlación espúrea**, es decir, mera
casualidad (que no causalidad).

Sin embargo, la falacia **Cum hoc ergo propter hoc** (en latín, "Con
esto, por tanto a causa de esto") sigue siendo estando muy presente en
los medios de comunicación y en las **pseudociencias**.

Si alguna vez el lector divisa a un sujeto disfrazado de pirata, no lo
tome por loco. Ese sujeto podría ser un seguidor de **Bobby
Henderson**, creador de la iglesia pastafari que, cansado de
argumentos de los creacionistas basados en esta falacia, realizó un
estudio (Figura \ref{piratas}) en el que demostraba una clara
correlación entre la temperatura global y el descenso del número de
piratas (un claro ejemplo de la existencia de una variable oculta, el
tiempo). Es común, desde entonces, que los seguidores de Henderson se
disfracen de piratas para recordarlo.


![Correlación entre el aumento de la temperatura media global y el
descenso del número de piratas. Fuente:
https://www.jotdown.es/2016/06/correlacion-no-implica-causalidad/
\label{piratas}](source/figures/piratas.jpg){width=90%}


Otro ejemplo curioso es la singular correlación entre el número de
ahogados en piscinas en Estados Unidos y el número de apariciones en
películas de Nicholas Cage (Figura \ref{cage}), en este caso una clara
correlación espúrea. Si se torturan los datos durante el tiempo
suficiente, éstos confesarán lo que deseemos.

![Correlación entre el número de ahogados en piscinas de Estados
Unidos y el número de apariciones en películas de Nicholas Cage.
Fuente: http://www.tylervigen.com/spurious-correlations
\label{cage}](source/figures/cage.pdf){width=100%}


Sin embargo, lejos de quedar en una mera anécdota como las anteriores,
es extremadamente preocupante que existan familias en todo el mundo
que estén decidiendo no vacunar a sus hijos debido a una aparente
correlación, en un estudio de 2010, entre el número de casos de
autismo y las vacunaciones.

Por lo tanto, es necesaria una gran cautela antes de obtener
conclusiones de los sistemas de Machine Learning. Además, no estaría
de más, aunque no serán objeto de análisis en este trabajo, tener
presentes el Sesgo del Superviviente ^[https://es.wikipedia.org/wiki/Sesgo_del_superviviente] y la Paradoja
de Simpson ^[https://es.wikipedia.org/wiki/Paradoja_de_Simpson]).
