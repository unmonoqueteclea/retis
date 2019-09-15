# Diseño de Sistema de Detección de RD y DMAE {#sistema}
La **gran cantidad de conjuntos de imágenes** utilizados y el
**extremo desbalanceo** de las clases han sido los dos factores que
más han condicionado el diseño de los sistemas. Esto ha provocado que
se hayan realizado **3 aproximaciones distintas al problema**, todas
ellas basadas en Deep Learning, y únicamente obteniendo resultados
útiles de 2 de ellas.

Durante este capítulo se analizarán estas aproximaciones. Este
análisis no se limitará a una simple descripción del clasificador
utilizado, sino que se detallarán los principales aspectos de
cualquier proyecto de este tipo: los **datos** usados, su limpieza y
procesado, el proceso de selección de **hiperparámetros** o incluso
las características y limitaciones impuestas por los **recursos
hardware y software** utilizados.

## Exploración de los datos
Una de las principales contribuciones de esta investigación ha sido
precisamente la **extensa cantidad de conjuntos distintos de
imágenes** utilizados en la creación de los modelos. Para entrenar el
modelo se han seleccionado imágenes de prácticamente todos los
datasets utilizados por los sistemas del capítulo \ref{arte}. En total
han sido utilizados **13 conjuntos de imágenes**, con un total de
**39118 imágenes** ^[Sin embargo, como se verá durante este capítulo,
algunos de los clasificadores que se han entrenado no han utilizado el
conjunto completo de imágenes para el entrenamiento.]. Destaca el
dataset **Kaggle** que contiene el 66% del total de imágenes
utilizadas. Este dataset proviene de una competición
^[https://www.kaggle.com/c/diabetic-retinopathy-detection/] realizada
en 2015 que supuso importantes avances en la detección de Retinopatía
Diabética a partir de imágenes de fondo de ojo.

Como se ha visto, la cantidad total de imágenes es muy elevada, siendo
muy superior al tamaño medio de los datasets de los modelos analizados
en el capítulo \ref{arte}. Algunos de los modelos creados han
utilizado grupos más reducidos de imágenes, seleccionadas
aleatoriamente del conjunto de datos original. En la tabla
\ref{datasets0} se muestra la cantidad de imágenes de cada tipo
existentes en cada uno de los datasets utilizados.

---------------------------------------------------------------------------
Dataset                             SANA               RD             DMAE
---------------               -----------     ------------   --------------
GRAND-CHALLENGE                     311                 0               89

ARIA                                 61                59               23

DIARET DB0                           20               110                0

E-OPTHA                             268               195                0

HEI-MED                               0               169                0

HRF                                  15                15                0

KAGGLE                            25810              9316                0

MESSIDOR                            540               660                0

ONHSD                                 0                99                0

ROC                                   0                50                0

DIAGNOS                              23                 0               22

STARE                                37                89               47

FOM                                 533               457              101

---------------------------------------------------------------------------

Table: Cantidad de imágenes de cada tipo en cada uno de los conjuntos
de imágenes utilizados \label{datasets0}


Haber utilizado todos estos datasets ha supuesto una dificultad
añadida al proceso pues se ha tenido que realizar un costoso trabajo
previo de **selección, limpieza y preparación de los datos**. Se han
creado una serie de scripts que han recorrido cada una de las carpetas
y han separado las imágenes de cada tipo.


Como se puede observar en los datos de la tabla \ref{datasets1}, el
gran problema del conjunto de imágenes utilizado, que ha condicionado
en gran medida la forma de trabajar con él, es el gran **desbalanceo**
existente entre las clases. La clase predominante, las imágenes de
retinas sanas, contiene **más del 70%** del total de imágenes. Por el
contrario la clase minoritaria, las imágenes de retinas con DMAE,
únicamente contiene 281 imágenes, **menos del 1% del total**. Este
gran desbalanceo nos obligará a aplicar diversas técnicas que permitan
compensarlo como la **asignación de pesos distintos a las instancias
de cada clase** en el cálculo de la función de coste o el
**submuestreo de los datasets**.


---------------------------------------------------------------------------
    Clase                Total de imágenes        % del dataset completo
---------------        ---------------------     -------------------------
    Todas                     39118                        100

    Sanas                     27618                       70.60

    RD                        11219                       28.68

    DMAE                        281                        0.72

---------------------------------------------------------------------------

Table: Cantidad de imágenes de cada tipo en el conjunto completo de
datos utilizado \label{datasets1}

Otra dificultad derivada del uso de 13 datasets distintos es que
nuestro clasificador tendrá que tratar imágenes con características
muy distintas, como se observa en la tabla \ref{datasets2}. Las
condiciones en las que han sido tomadas, procesadas y almacenadas las
imágenes varían en gran medida entre los distintos datasets. Sin
embargo, si se pretende crear un clasificador robusto que sea capaz de
trabajar en todo tipo de condiciones, utilizar esta elevada cantidad
de conjuntos de imágenes será de gran ayuda.

\newpage

---------------------------------------------------------------------------------------------------------
        Dataset                                 Origen                      Tamaño       Formato
-------------------------------      -----------------------------        ---------     ---------
 GRAND-CHALLENGE                            [@ichallenge]                   Varios          JPG

 ARIA                                    [@zheng2012automated]             576x768          TIFF
                                       [@farnell2008enhancement]

 DIARET DB0                            [@kauppi2006diaretdb0]             1500x1152         PNG

 E-OPTHA                               [@decenciere2013teleophta]           Varios          JPG

 HEI-MED                                [@giancardo2012exudate]           2196×1958         JPG

 HRF                                   [@odstrcilik2013retinal]           3504×2336         JPG

 KAGGLE                                 [@cuadros2009eyepacs]               Varias          JPG

 MESSIDOR                             [@decenciere2014feedback]           2240×1488         TIFF

 ONHSD                                   [@lowell2004optic]                760×570          BMP

 ROC                                  [@niemeijer2009retinopathy]           Varias          JPG

 AMD DIAGNOS                                 Privada                        Varias          JPG

 STARE                                  [@hoover1998locating]              605x700          TIFF

 FOM                                        Privada                         Varias          JPG

-------------------------------------------------------------------------------------------------------

Table: Características de las imágenes de cada uno de los conjuntos
utilizados \label{datasets2}


Como puede verse en la tabla \ref{datasets2} algunas de las bases de
datos utilizadas no son bases de datos públicas sino que han sido
facilitadas por diversas instituciones al **Computer Vision and
Behaviour Analysis Lab (CVBLab)**^[http://www.cvblab.webs.upv.es] de
la Universidad Politécnica de Valencia en el contexto del proyecto
**Acrima**
^[http://www.cvblab.webs.upv.es/project/acrima_en/]. Gracias a estas
bases de datos privadas, se ha podido contar con un conjunto de
imágenes de DMAE suficientemente grande como para aplicar técnicas de
Deep Learning.


## Recursos utilizados
Respecto al **software** utilizado, la librería Open Source
**Keras**^[https://keras.io/] ha sido la elegida. Keras es una
librería de Deep Learning de alto nivel en Python que permite
realizar, de forma rápida, todo tipo de redes neuronales. Además, es
capaz de trabajar sobre varios frameworks de más bajo nivel: Theano
^[https://github.com/Theano/Theano], CNTK
^[https://github.com/Microsoft/cntk] o
**Tensorflow**^[https://github.com/tensorflow/tensorflow]. Será éste
último el framewok sobre el que crearemos nuestros modelos con Keras
(Figura \ref{keras}). Otra importante característica de Keras a tener
en cuenta es que permite la ejecución tanto en CPU como en GPU, sin
necesidad de modificar para ello el código.


![Logos de las dos librerías de Python utilizadas para la
investigación: Keras y
Tensorflow. \label{keras}](source/figures/keras.jpeg){width=100%}


También se ha hecho uso de las Jupyter Notebooks
^[https://jupyter.org/] (Figura \ref{jupyter}), entornos de trabajo
que permiten la creación de documentos que combinen fragmentos de
código con texto, imágenes e incluso elementos interacivos. Las
Jupyter Notebooks han ayudado a mostrar de forma simple y ordenada al
usuario los resultados de las predicciones realizadas a partir de las
imágenes de fondo de ojo proporcionadas.


![Ejemplos de Jupyter Notebooks. Fuente: https://jupyter.org/
\label{jupyter}](source/figures/jupyter.png){width=100%}

En relación con el **hardware**, como todo proyecto de Deep Learning,
la tarjeta gráfica utilizada durante el entrenamiento ha jugado un
papel fundamental. En proyectos con grandes conjuntos de imágenes,
como es el caso, no disponer de tarjeta gráfica (o disponer de una
tarjeta sin la suficiente capacidad de procesamiento) puede hacer
inviable el entrenamiento de los modelos. En este caso, la tarjeta
gráfica utilizada ha sido la **NVIDIA TITAN Xp**. Esta tarjeta cuenta
con una **arquitectura Pascal** con una frecuencia de reloj de 1481
MHz, y 12 GB de memoria. La potencia de cómputo de la NVIDIA TITAN Xp
es de 12.15 TFLOPS. Además, parte del procesamiento en local se ha
realizado en un **MacBook Air** con un procesador **Intel Core i7 de
2.2 GHz** y 8 GB de memoria RAM.

## Pre-procesado de las imágenes

Las siguientes transformaciones han sido aplicadas a las imágenes
durante la fase de **pre-procesado**:

- **Reescalado del valor de los píxeles**: Dividiendo el valor de cada
  píxel entre 255 se obtienen únicamente valores entre 0 y 1, que son
  valores más comunes y, por lo tanto, más fáciles de manejar por los
  algoritmos de entrenamiento de las redes.
- **Reescalado de las imágenes**: Todas las imágenes han sido
  reescaladas a un tamaño de 224x224. La elección de este tamaño se
  debe a que es el **tamaño de las imágenes del dataset
  Imagenet**. Puesto que los pesos que usaremos como punto de partida
  de nuestra red vienen de una red entrenada con este dataset,
  mantener un mismo tamaño de imagen permitirá poder reusar mejor
  algunos de los filtros aprendidos.

La técnica conocida como **Data Augmentation** ha sido utilizada en
todos los sistemas. Esta técnica permite añadir al conjunto de
imágenes de entrenamiento, nuevas imágenes que provienen de la
aplicación de diversas transformaciones a las imágenes del conjunto
original. Esta técnica supondrá, como es obvio, un aumento del número
total de imágenes del conjunto de entrenamiento y permitirá la
obtención de clasificadores capaces de generalizar mejor ante nuevos
casos. Dependiendo de las transformaciones utilizadas, el Data
Augmentation permitirá la obtención de clasificadores más robustos
frente al ruido, traslación/rotación de los objetos, a las variaciones
del brillo, etc. En este caso, las transformaciones utilizadas han
sido:

- Inversión del eje horizontal
- Aplicación de zoom aleatorio (hasta 1.25x)
- Desplazamiento aleatorio en el eje horizontal (hasta 10%)
- Desplazamiento aleatorio en el eje vertical (hasta 10%)
- Modificación aleatoria del brillo (entre -50% y +50%)

La librería utilizada, **Keras**, ha simplificado en gran medida este
proceso. Las transformaciones elegidas y sus parámetros han sido
escogidas de tal forma que den lugar a imágenes *coherentes* como las
que se podrían obtener con cualquier cámara de fondo de ojo.

\newpage

## Diseño del sistema 1: Gran clasificador
A continuación se presentarán las características de los sistemas de
clasificación realizados. Estos sistemas tienen como finalidad la
**detección de imágenes de retinas sanas, enfermas de RD o enfermas de
DMAE**.  Sin embargo, en ningún momento ha sido objetivo de este
trabajo la detección de los diferentes niveles de gravedad de ambas
patologías, principalmente debido a la falta de suficientes conjuntos
de imágenes que proporcionen esta información para la fase de
entrenamiento de los modelos. Los 3 sistemas presentados a
continuación son totalmente independientes.

El primer sistema realizado (Figura \ref{des1}) se trata de una **CNN
basada en la arquitectura VGG16** [@simonyan2014very] que trata de
distinguir, de una sola vez, entre los 3 tipos de imágenes (RD, DMAE,
Sanas). A la salida de la última capa convolucional se han añadido 3
capas de tipo **fully connected** con 2048, 1024 y 512 neuronas. Entre
ellas, para evitar el *overfitting* se han intercalado capas de tipo
**Dropout**. Por último, la capa de salida cuenta con 3 neuronas (una
por cada clase) y hace uso de la función de activación
**softmax**. Para entrenar esta red se han utilizado las 39118
imágenes de todos los datasets descritos anteriormente.

![Arquitectura utilizada para el sistema 1. Elaboración propia
\label{des1}](source/figures/design1_ar.png){width=100%}

El gran desbalanceo existente entre las clases, como se presentaba en
la tabla \ref{datasets1}, ha supuesto que este diseño no fuera capaz
de detectar correctamente las 3 clases que componen nuestro problema
y, por lo tanto, **ha sido desechado**.


## Diseño del sistema 2: Clasificador Multietapa
Los resultados del primer sistema ponen de manifiesto la necesidad de
aplicar técnicas que traten el problema del desbalanceo. Por ello, el
segundo sistema consta de **dos clasificadores binarios en cascada**
(Figura \ref{design2}):

   - El primer clasificador diferencia entre **retinas sanas y retinas
     enfermas** (sin distinguir entre Retinopatía Diabética o
     Degeneración Macular).

   - El segundo clasificador diferencia, de entre las imágenes de
     retinas detectadas como enfermas en el paso anterior, si el
     paciente está afectado de **RD o de DMAE**.

![Arquitectura del sistema clasificador en dos etapas Elaboración
propia \label{design2}](source/figures/design2.png){width=100%}

Gracias a este sistema basado en dos etapas se obtiene un desbalanceo
entre clases, en cada una de las etapas, inferior al del conjunto
original de imágenes. El primer clasificador **hace uso del conjunto
completo de imágenes** para el entrenamiento pero, como se ha
comentado, **únicamente es capaz de distinguir entre dos posibles
casos, retinas sanas y retinas enfermas**. En la tabla \ref{c1s2}
vemos la distribución de las imágenes de este primer clasificador en
los conjuntos de entrenamiento, validación y test.

---------------------------------------------------------------------------
Conjunto         Clase            Total        Total (%)
-------    -----------     ------------   --------------
train             sana            17610            70.34

train          enferma             7425            29.66

valid             sana             4463            71.31

valid          enferma             1796            28.69

test              sana             5544            70.86

test           enferma             2280            29.14

---------------------------------------------------------------------------

Table: Distribución de las imágenes del clasificador Sano/Enfermo del
sistema 2. \label{c1s2}

Para tratar el **desbalanceo** existente en esta **primera etapa**, se
ha hecho uso de una técnica basada en aplicar durante el entrenamiento
a las instancias de la clase minoritaria (en este caso, la clase
**enferma**) un peso que compense el desbalanceo en la función de
coste.

\newpage
Para la **segunda etapa** la aproximación ha sido distinta. Si se
hubiera usado el conjunto de imágenes completo, el desbalanceo hubiera
sido demasiado grande, imposible de abordar incluso por la técnica
utilizada anteriormente. En este caso, se ha hecho uso de la técnica
conocida como **subsampling o submuestreo**. Para evitar tener una
cantidad de imágenes de RD muy superior a la de DMAE se han
seleccionado, de forma aleatoria, un conjunto de imágenes de RD que
serán las utilizadas para el entrenamiento. De esta forma, se
entrenará el clasificador con la misma cantidad de imágenes de DR que
de DMAE.

Esta arquitectura basada en dos etapas nos ha permitido usar la
totalidad de las imágenes para el entrenamiento sin necesidad de
entrenar modelos con datasets extremadamente desbalanceados (como era
el caso del sistema inicial).

En la Figura \ref{des2} podemos ver la arquitectura utilizada en los
clasificadores de ambos subsistemas. Como se puede comprobar, es
prácticamente igual a la del sistema 1, pero en este caso se elimina
una de las capas **fully connected**. El clasificador sano/enfermo
únicamente ha hecho uso de la arquitectura **VGG16**, mientras que el
clasificador RD/DMAE ha hecho uso de las 3 arquitecturas de la imagen:
**VGG16** [@simonyan2014very], **Resnet50** [@he2016deep] e
**InceptionV3** [@szegedy2016rethinking]. Puesto que ahora la salida
de la red es binaria, se ha cambiado la función de activación softmax
utilizada anteriormente en la última capa por la **función sigmoide**.

![Arquitectura utilizada para los clasificadores de ambos subsistemas
del segundo diseño.
\label{des2}](source/figures/des2.png){width=100%}

Ambos clasificadores han utilizado la técnica del **Transfer
Learning**. Partiendo de los pesos originales procedentes de
**Imagenet**, se han realizado diversos entrenamientos, cambiando el
número de parámetros de la red *congelados*:

- Entrenamiento únicamente de las capas fully-connected
- Entrenamiento de las capas fully-connected y el bloque convolucional
  número 5: (Últimas 4 capas de la red convolucional)
- Entrenamiento de las capas fully-connected y los bloques
  convolucionales 4 y 5: (Últimas 8 capas de la red convolucional)
- Entrenamiento de las capas fully-connected y los bloques
  convolucionales 3, 4 y 5: (Últimas 12 capas de la red convolucional)
- Entrenamiento de las capas fully-connected y los bloques
  convolucionales 2, 3, 4 y 5: (Últimas 15 capas de la red
  convolucional)
- Entrenamiento de la red completa

Como se detallará en el siguiente capítulo, la ejecución de varios
entrenamientos alterando hiperparámetros como el *learning rate* o el
*batch size* ha permitido obtener los valores óptimos para éstos.

## Diseño del sistema 3: Ensemble de Clasificadores
El tercer sistema diseñado permite detectar los 3 posibles casos (RD,
DMAE, y Sana) en una sola etapa a partir de la combinación de las
predicciones de 3 clasificadores entrenados con diferentes
subconjuntos de imágenes (Figura \ref{design3}). De esta forma, al
igual que en el caso anterior conseguimos entrenar modelos con la
misma cantidad de imágenes en cada clase.

![Arquitectura del sistema de ensemble de clasificadores simples. Los
bloques superiores representan los conjuntos de imágenes utilizados
para el entrenamiento de los mismos Elaboración propia
\label{design3}](source/figures/design3.png){width=100%}


De la misma forma que el sistema anterior, este sistema también ha
aplicado **Transfer Learning** descongelando progresivamente bloques
de capas hasta llegar a obtener la mejor evaluación posible con el
dataset de validación.

La arquitectura utilizada ha sido la misma que la de la Figura
\ref{des2} (aunque, en este caso, con 3 neuronas en la última capa,
una por cada posible clase de salida), entrenándose con las mismas 3
arquitecturas: VGG16, Resnet50 e InceptionV3.



## Diseño del Sistema de Predicción e Interpretación
Para hacer accesible el uso de los sistemas de predicción se ha
diseñado un pequeño software que abstrae la complejidad de todo el
proceso, permitiendo a los especialistas hacer uso de estos modelos
simplemente seleccionando las imágenes del paciente que se desea
analizar. Para ello, se ha hecho uso de las Jupyter Notebook
explicadas anteriormente.

Mediante este programa, el usuario puede elegir el sistema que quiere
utilizar en cada caso: el Clasificador Multietapa, o el Ensemble de
Clasificadores. Una vez seleccionada la imagen de fondo de ojo a
analizar, el programa devolverá sus predicciones, el grado de
confianza y un mapa de calor procedente de la aplicación del
algoritmmo **Grad-Cam**.

En el capítulo \ref{resultados}, se analizan los resultados de
diversas ejecuciones del programa.
