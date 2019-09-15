# Estado del arte en detección de RD y DMAE {#arte}
A lo largo de este capítulo se analizará el estado del arte de la
detección de **Retinopatía Diabética** y **Degeneración Macular
Asociada a la Edad** a partir de imágenes de fondo de ojo. En la
actualidad, prácticamente la totalidad de los nuevos modelos
publicados en este campo son modelos de **Deep Learning**. Sin
embargo, se comenzará analizando los modelos basados en **Machine
Learning** que precedieron a los actuales.


Al no existir en este campo un conjunto de datos de referencia sobre
el que se evalúen todos los modelos, hay que tomar con cierta cautela
las métricas de evaluación de los algoritmos que se detallarán a lo
largo de este capítulo, puesto que cada modelo habrá sido entrenado y
evaluado con datos distintos. De hecho, muchos de estos modelos han
sido entrenados con conjuntos de apenas 100 o 200 imágenes, lo que
hace muy probable que exista **sobreajuste** (u *overfitting*) y que
el resultado de ponerlos en producción sea mucho peor del esperado.


## Aproximaciones basadas en Machine Learning

Las modelos basados en Machine Learning para la detección de
patologías en imágenes de fondo de ojo requieren una gran cantidad de
**características**, escogidas y extraídas, de cada imagen, de forma
manual por los investigadores. Para la obtención de las mismas es
necesario **conocimiento experto** en la materia. Además, este tipo de
características tienden a no generalizar bien, dando lugar a modelos,
en muchas ocasiones, sobreajustados. Sin embargo, en los casos en los
que nuestro conjunto de imágenes de entrenamiento es muy limitado, es
común que los modelos basados en Machine Learning nos ofrezcan mejores
resultados que los basados en Deep Learning. Además, la
interpretabilidad de los modelos finales y sus predicciones es mayor
en los modelos de Machine Learning que en los de Deep Learning.


### Detección de RD mediante Machine Learning
Este tipo técnicas se basan en la búsqueda, en las imágenes, de cada
una de las lesiones que caracterizan la Retinopatía Diabética. Las
lesiones que caracterizan la RD, como se ha analizado anteriormente,
son: **exudados**, **microaneurismas** y **hemorragias**. En el caso
de la PDR, es posible encontrar también **neovascularización**. A
partir de características obtenidas principalmente mediante técnicas
de procesamiento digital de imágen y gracias al uso de
**clasificadores basados en Machine Learning** es posible detectar la
enfermedad, e incluso, estimar su gravedad.

Muchos de estos modelos comienzan por la obtención de imágenes
binarias que representaran los **vasos sanguíneos** presentes en la
imagen de la retina (Figura \ref{venas}). La longitud, tamaño o
posición de los mismos son de gran ayuda para el diagnóstico de la
RD. Mediante la aplicación de una serie de técnicas al canal verde de
las imágenes de fondo de ojo, es posible aislar estos vasos del resto
de la imagen [@acharya2009computer]. Otros modelos se basan también en
la detección y seguimiento de las líneas centrales de los vasos
sanguíneos [@tolias1998fuzzy] [@englmeier2004early]
[@vlachos2010multi]. También existen técnicas más avanzadas para ello
basadas en el uso de **filtros adaptados** de dos dimensiones
[@katz1989detection] [@hoover1998locating] [@mookiah2013evolutionary]
[@gang2002detection]. A partir de estos pre-procesamientos, existen
sistemas capaces de detectar anchuras anormales en estos vasos
sanguíneos [@hayashi2001development], que suelen ser un indicio de la
existencia de RD.

![Imagen binaria de los vasos sanguíneos de la retina. Fuente:
http://www.aria-database.com/
\label{venas}](source/figures/venas.tif){width=90%}


La presencia de **hemorragias** en las imágenes de fondo de ojo es
mayor en los estadios más graves de la enfermedad. Su detección se
realiza habitualmente junto con la detección de los vasos sanguíneos.

La presencia de **exudados** es el síntoma más característico de
RD. Para la detección de éstos es común comenzar por la eliminación de
los vasos sanguíneos y el disco óptico de las imágenes. Una vez
eliminados estos elementos, es posible detectar los exudados mediante
una secuencia de algoritmos de procesamiento de imágen
[@acharya2009computer]. Técnicas más avanzadas, basadas en
**clasificadores estadísticos** basados en los niveles de brillo y uso
de ventanas espaciales como estrategia de verificación han obtenido
resultados cercanos all 100% de exactitud en la detección de imágenes
con exudados (sensibilidad) y 70% de exactitud en la detección de
imágenes de retinas sanas (especificidad)
[@wang2000effective]. Técnicas de detección de exudados basadas en
**redes neuronales** [@hunter2000quantification] o en el algoritmo
**PCA**^[Principal Components Analysis] [@li2000fundus] también han
conseguido resultados similares a los comentados anteriormente. Esta
última técnica, también permitía obtener la localización del disco
óptico y la fóvea con unas exactitudes, respectivamente, de 99% y
100%.

A partir de la presencia de **microaneurismas** es también posibe la
detección de la RD, llegando a conseguirse una sensibilidad del 85% y
una especificidad del 90% [@jelinek2006automated]. La forma de
detectarlos es similar a las anteriores y requiere eliminar el disco
óptico y los vasos sanguíneos de la imagen antes de aplicar una serie
de técnicas de procesamiento de imágenes. También es posible el uso de
técnicas basadas en **morfología matemática** [@walter2007automatic]
[@hatanaka2008improvement]. Algunos de estos métodos realizan
**transformaciones del espacio de color** de las imágenes a HSV (Hue,
Saturation, Value), espacio donde les es más fácil realizar el
procesamiento. El uso de las **transformada Wavelet** también ha
demostrado ser eficaz en la detección de microaneurismas
[@quellec2008optimal].

De la misma forma que muchas de las técnicas explicadas hasta ahora
basan su predicción en la detección de alguna de las lesiones típicas
de la RD, también existen sistemas más complejos que son capaces de
detectar, de forma simultánea, los tres tipos de lesiones y realizar
predicciones en base a la presencia de cada tipo de lesión mediante
clasificadores como **árboles de decisión** o **redes neuronales**
[@ege2000screening], [@sinthanayothin2002automated],
[@sinthanayothin2003automated], [@reza2011decision]. Técnicas de
aprendizaje no supervisado como el **FCM**^[Fuzzy c-means] también han
demostrado ser eficaces en esta tarea [@osareh2002classification]

Todas las investigaciones analizadas anteriormente trataban de
predecir una variable binaria, la presencia o no de retinopatía
diabética. Sin embargo, otras investigaciones han tratado de detectar
también el **tipo de RD** (Proliferativa o No Proliferativa). Estas
técnicas han conseguido sensibilidad y especifidad de más del 95%
[@mookiah2013evolutionary] mediante el uso de **redes
neuronales**. Otros trabajos han intentado distinguir, con éxito,
hasta **5 grados de RD**
[@acharya2008application],[@acharya2009computer],
[@acharya2012integrated].

### Detección de DMAE mediante Machine Learning
A pesar de ser la mayor causa de ceguera en países desarrollados
[@wong2014global], la detección de la **Degeneración Macular Asociada
a la Edad (DMAE)** en imágenes de fondo de ojo no ha despertado tanto
interés en la comunidad científica como la Retinopatía Diabética. Una
extensa búsqueda en la bibliografía arroja un solo estudio
[@pead2019automated] que analiza todos los métodos actuales de
detección de DMAE basados en Machine Learning y Deep Learning. Ese
estudio concluye que únicamente existen 14 publicaciones que abordan
este tema ^[La búsqueda realizada filtra las publicaciones que no
contengan una evaluación robusta del modelo, que no estén escritas en
inglés o que no utilicen un método basado en las imágenes de fondo de
ojo].

El principal signo de DMAE, como se ha analizado en capítulos
anteriores, es la aparición de **drusas**, que pueden ser observadas
en la imágenes de fondo de ojo como pequeños conjuntos de manchas
blancas y amarillas. Por lo tanto, este tipo de modelos tratarán de
buscar estas lesiones en las imágenes. En la Figura \ref{metodosamd}
vemos cuáles son las tareas principales en la detección de DMAE
mediante Machine Learning.


![Resumen de las fases de la detección de DMAE mediante Machine
Learning. Fuente: [@pead2019automated]
\label{metodosamd}](source/figures/fases-amd.png){width=90%}


Como se ha explicado en el anterior apartado, los algoritmos basados
en Machine Learning suelen requerir de una fase de **pre-procesado y
extracción de características**, dado que no son capaces de procesar
la imágen *en bruto*. Puesto que las drusas son pequeñas regiones
brillantes en las imágenes, algunos métodos han utilizado para su
detección diversas características calculadas a partir de los
**histogramas** de las imágenes. Además, es común aplicar una
**ecualización del histograma** como paso previo a la extracción de
características para obtener un mayor contraste en las imágenes
[@hijazi2010retinal], [@zheng2012automated], [@mookiah2014automated],
[@mookiah2014decision]. Aplicar un **filtro de mediana** permite
eliminar, antes de la extracción de características, el ruido de alta
frecuencia de las imágenes [@kankanahalli2013automated]
[@phan2016automatic]. El uso de técnicas de **morfología matemática**
también ha demostrado ser eficaz para resaltar las regiones con drusas
de la imagen [@burlina2011automatic], [@garcia2017machine].

Tras el **pre-procesado y extracción de características** es común
realizar una **selección de características** que nos permite eliminar
características (o columnas o campos) que puedan resultar irrelevantes
o puedan confundir a los algoritmos de Machine Learning. Para esto, se
han utilizado algoritmos basados en la **correlación entre las
distintas características** [@garcia2017machine] test paramétricos y
no paramétricos como el **t-test** [@mookiah2014automated],
[@mookiah2014decision] o, incluso, **algoritmos genéticos**
[@acharya2017automated]

En el último paso, la **clasificación**, podemos separar los
algoritmos en dos grupos: los que simplemente tratan de diferenciar
entre sano/enfermo y los que tratan también de detectar grados de
afectación de la enfermedad. Dentro del primer grupo encontramos
métodos como el **Razonamiento Basado en Casos** en el que, de forma
similar al algoritmo **K-Nearest Neighbors**, simplemente se mide el
grado de parecido entre el histograma de la imágen de fondo de ojo a
predecir y cada uno de los histogramas de las imágenes del conjunto de
datos de entrenamiento [@hijazi2010retinal]. También encontramos
métodos basados en los algoritmos **Naive Bayes** o **SVM**
[@zheng2011automated], [@garcia2017machine]. Sin embargo, otras
publicaciones han tratado de detectar también la gravedad de la
enfermedad (estableciendo 5 posibles grados) con algoritmos como
**Random Forest**, **K-Nearest Neighbors** o **SVM**
[@kankanahalli2013automated], [@phan2016automatic].



##  Aproximaciones basadas en Deep Learning
Las aproximaciones basadas en **Deep Learning**, haciendo uso de
**Redes Neuronales Convolucionales**, representan actualmente el
estado del arte en multitud de tareas de análisis de imágenes
médicas. Entre ellas se encuentra también, como no podía ser de otra
forma, el análisis de imágenes de fondo de ojo. Una de las principales
ventajas de este tipo de aproximaciones es que se elimina la necesidad
de la extracción de características en base a conocimiento experto. De
esta forma, **la red es directamente alimentada con las imágenes**,
siendo tarea de ésta la extracción de características que permitan
distinguir con eficacia las distintas clases de nuestro problema.


### Detección de RD mediante Deep Learning
<!-- Paper 5 Apartado 5-->

Existen dos grupos principales de algoritmos de Deep Learning para la
detección de Retinopatía Diabética: los que tratan de detectar y
localizar en la imagen de fondo de ojo cada una de las lesiones
típicas de la RD y los que, por el contrario, tratan de detectar
directamente la presencia de la enfermedad sin enfocarse en detectar
ni localizar las lesiones concretas. Es este segundo grupo el que nos
interesa analizar, pues es la metodología que utilizaremos en la
creación de nuestro modelo. Además, la gran ventaja de este tipo de
modelos es que no necesita un dataset con anotaciones de la
localización de las lesiones para ser entrenados. Simplemente
necesitamos un conjunto de datos con etiquetas de **sano/enfermo**.

Prácticamente todos los modelos de este tipo han sido **Redes
Neuronales Convolucionales**. La arquitectura **Inception** ha
demostrado ser muy efectiva en la detección de la RD proliferativa.
[@gulshan2016development]. En este caso, se trataba de una
clasificación binaria donde sólo existían dos posibles salidas
(enfermo/sano). Sin embargo, muchos otros investigadores han tratado
de detectar diferentes niveles de gravedad [@colas2016deep],
[@quellec2017deep], [@costa2017convolutional]. Además, agunos de estos
modelos son capaces de detectar también las lesiones concretas que
aparecen en cada imagen [@colas2016deep], [@quellec2017deep]

Otros investigadores también han hecho uso, de forma satisfactoria, de
la arquitectura **AlexNet** [@mansour2018deep], o **ResNet**
[@gargeya2017automated]. Además, este último modelo añadía al final de
la red una capa convolucional adicional que permitía observar e
interpretar el proceso de aprendizaje de la red, solventando así el
problema de interpretabilidad que a menudo tienen este tipo de
modelos. La gran interpretabilidad, junto con una alta **accuracy**
hacen que este modelo sea para muchos investigadores el **modelo de
referencia** en detección de Retinopatía Diabética.

También se han realizado investigaciones con pasos previos de
extracción de características usando técnicas como **Bag Of Visual
Words** [@costa2017convolutional] o extracción del fondo de las
imágenes mediante **Modelos Gaussianos Mixtos** [@mansour2018deep]

Otras técnicas, como la de **Data Augmentation** consistente en crear
nuevas imágenes a partir de transformaciones sobre las imágenes
originales, han demostrado también ser eficaces
[@pratt2016convolutional].

Además del Data Augmentation, otra técnica que también ha sido usada
para solventar el problema de la falta de imágenes ha sido el
**Transfer Learning**. Esta técnica ha sido aplicada utilizando, como
base para nuestros modelos, otros modelos que habían sido previamente
entrenados en otros datasets con todo tipo de imágenes
[@maninis2016deep], [@li2017convolutional] o con datasets específicos
de imágenes de fondo de ojo [@gondal2017weakly]. De ambas formas ha
demostrado ser de utilidad, especialmente en los casos en los que el
conjunto de imágenes de entrenamiento era demasiado reducido como para
poder entrenar una arquitectura compleja desde cero.



### Detección de DMAE mediante Deep Learning
De la misma forma que con la Retinopatía Diabética, los métodos de
detección de DMAE basados en Deep Learning han permitido saltar la
etapa de extracción de características, delegándola en el propio
clasificador. Prácticamente la totalidad de los modelos de Deep
Learning de este tipo han hecho uso de **Redes Neuronales
Convolucionales**. Estas redes han sido entrenadas desde 0
[@tan2018age] o, en ocasiones se ha hecho uso de la técnica del
**Transfer Learning**. Gracias a ésta, se han utilizado los pesos de
redes entrenadas previamente en otros conjuntos de imágenes como punto
de partida para el entrenamiento de las últimas capas de las redes
convolucionales [@burlina2016detection]. Además, como es común en Deep
Learning, también se han propuesto algunos modelos basados en la
combinación de las predicciones de varios modelos distintos
[@grassmann2018deep], técnica conocida como **ensemble**. Sin embargo,
la cantidad de publicaciones que abordan la detección de DMAE mediante
Deep Learning es aún muy limitada y es de esperar que muchas de las
técnicas avanzadas que ya se están utilizando en la detección de
Retinopatía Diabética sean aplicadas durante los próximos años a la
detección del a Degeneración Macular Asociada a la Edad.
