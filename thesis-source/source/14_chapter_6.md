# Análisis de los resultados obtenidos {#resultados}
Durante este capítulo se analiza el funcionamiento de los sistemas
descritos en el capítulo anterior. En todos los casos, el dataset
original ha sido dividido en 3 subgrupos, obteniendo así:

- **Dataset de entrenamiento**
- **Dataset de validación**
- **Dataset de  test**

Los resultados que se presentan durante este capítulo son los
correspondientes a los datasets de validación y, en algunos casos, los
de test, puesto que la evaluación del clasificador con el conjunto de
datos de entrenamiento no es relevante para conocer la capacidad de
**generalización** de los sistemas. El dataset de validación ha
permitido evaluar el rendimiento de diferentes **arquitecturas e
hiperparámetros** mientras que el dataset de test ha permitido dar, al
final del proceso, una evaluación del sistema final con datos nuevos y
comprobar el funcionamiento del **Sistema de Predicción e
Interpretación**. Las métricas proporcionadas serán siempre las del
**mejor epoch**, es decir, el que ha obtenido el mínimo valor de
pérdidas con el dataset de validación.

Antes de pasar al análisis de los sistemas, es importante conocer cómo
se obtienen las métricas utilizadas, como se presenta durante la
siguiente sección.

## Evaluación de sistemas de Machine Learning

Un paso tan importante como el modelado en un proyecto de análisis de
datos es la evaluación de los resultados. Es de gran importancia
establecer medidas que nos permitan saber cómo se está comportando
nuestro modelo. En la literatura existe una gran cantidad de métricas,
aunque en este caso nos centraremos en algunas de las más comunes en
problemas de este tipo.

El problema analizado en este trabajo es un problema de
**clasificación**, es decir la variable objetivo (la que predecimos)
solo puede tomar un conjunto de valores discretos. Además, lo que
inicialmente era un problema con tres posibles clases (RD/DMAE/Sano)
también puede descomponerse en **dos problemas de clasificación
binaria** (RD/Sano) (DMAE/Sano). Se trata de predecir una clase con
sólo dos posibles valores. Cuando en un problema de este tipo
comparamos la predicción realizada por un modelo con el *ground truth*
(es decir, la clase que realmente correspondería a esa instancia),
pueden darse 4 posibles casos:

- **Verdadero Positivo (o True Positive, TP)**: El sistema predice que
  el paciente **SÍ** tiene la enfermedad y acierta.
- **Verdadero Negativo (o True Negative, TN)**: El sistema predice que
  el paciente **NO** tiene la enfermedad y acierta.
- **Falso Negativo (o False Negative, FN)**: El sistema predice,
  erróneamente, que el paciente **NO** tiene la enfermedad cuando en
  realidad sí que la tiene.
- **Falso Positivo (o False Positive, FP)**: El sistema predice,
  erróneamente, que el paciente **SÍ** tiene la enfermedad cuando en
  realidad no la tiene.


A partir de la cantidad de predicciones de cada uno de estos posibles
4 tipos se pueden definir una serie de medidas muy comunes en
problemas de este tipo.

La métrica más común, conocida como **Accuracy** o **Exactitud**, mide
el porcentaje de aciertos del sistema (ecuacion \ref{eq:accuracy}). Esta
métrica carece de utilidad cuando tenemos conjuntos de datos
desbalanceados.

\begin{equation} \label{eq:accuracy}
 \frac{TP+TN}{TP+TN+FN+FP}
\end{equation}

La **Sensibilidad** mide la proporción de los pacientes que **Sí**
tienen la enfermedad que nuestro clasificador ha sido capaz de
detectar (ecuación \ref{eq:sensibilidad})

\begin{equation} \label{eq:sensibilidad}
 \frac{TP}{TP+FN}
\end{equation}

La **Especificidad**, en cambio, mide proporción de los pacientes que
**No** tienen la enfermedad que nuestro clasificador ha sido capaz de
detectar (ecuacion \ref{eq:especificidad})

\begin{equation} \label{eq:especificidad}
 \frac{TN}{TN+FP}
\end{equation}

En función del campo de aplicación de los modelos, unas métricas toman
más importancia que otras. Incluso es común tener **umbrales de
actuación** en nuestros modelos que nos permitan elegir el punto de
equilibrio deseado entre sensibilidad y especificidad. Un modelo que
trata de predecir la presencia de una enfermedad siempre tratará de
enfocarse más en obtener una buena **sensibilidad** antes de centrarse
en la **especificidad**. El coste de predecir erróneamente que un
paciente tiene una enfermedad, es menor al de no haber detectado la
enfermedad en un paciente que sí que la tenía.

## Evaluación del Sistema 1: Gran Clasificador
Como ya se anunciaba en el capítulo \ref{sistema}, debido al gran
desbalanceo existente entre las clases, este sistema **no nos ha
permitido distinguir correctamente entre las 3 clases**. Tras
evaluarse varios valores distintos para el *learning rate* y *batch
size* e incluso añadirse pesos a las clases que compensaran el
desbalanceo existente, el proceso de descenso de gradiente ha quedado
constantemente *atrapado* en mínimos locales en los que el
clasificador predice la misma clase para todas las
instancias. Concluimos, por lo tanto, que **un solo clasificador no
tiene capacidad suficiente para obtener patrones de un conjunto de
datos tan desbalanceado** y habrá que buscar soluciones alternativas.

## Evaluación del Sistema 2: Clasificador Multietapa
El segundo sistema consta de 2 etapas: la clasificación
**Sano/Enfermo** y la clasificación **RD/DMAE**. Ambas etapas son
analizadas a continuación.


### Etapa 1: Clasificador Sano/Enfermo
Las 39118 imágenes de las que se componía nuestro cojunto de imágenes
inicial han sido divididas en 2 grupos: **Retinas Sanas y Retinas
Enfermas**.

Puesto que ha sido utilizada la técnica de **Transfer Learning**, se
han realizado varias ejecuciones descongelando, progresivamente cada
uno de los bloques convolucionales de la arquitectura utilizada,
**VGG16**. Esta arquitectura posee 5 bloques convolucionales con
**capas de pooling** en cada uno de estos bloques.

Inicialmente se han realizado varios entrenamientos del bloque *fully
connected* para evaluar los posibles *batch size* y *learning
rate*. La tabla \ref{batch} contiene los resultados obtenidos para
distintos *batch sizes*.  Las evaluaciones de la tabla son las
correspondientes al dataset de validación para el mejor epoch ^[el que
tiene menores pérdidas con el dataset de validación]. El *learning
rate* utilizado ha sido de 0.0001.

\newpage

------------------------------------
 batch size   accuracy     loss
-----------  ----------  ---------
     16       0.7062      0.5973

     32       0.6782      0.6151

     64       0.7072      0.6073
-------------------------------------

Table: Resultados del entrenamiento para distintos batch size. Modelos
evaluados con el dataset de validación \label{batch}

A partir de la tabla \ref{batch} se puede intuir que el tamaño del
*batch size* no juega un papel de gran importancia en el proceso de
entrenamiento por lo que se ha decidido usar, a partir de este momento
un tamaño de **64**. Este tamaño nos permite entrenar la red de forma
más rápida y nos asegura que en cada *batch* exista suficiente
cantidad de imágenes de las dos clases. Usar tamaños superiores habría
ocasionado problemas de memoria en la GPU utilizada.

De la misma forma, como se aprecia en la tabla \ref{lr}, también se han
realizado varios entrenamientos del clasificador que nos han permitido
comprobar cuál es el *learning rate* adecuado para nuestro
problema. Para ello se ha utilizado un *batch size de 64*.

---------------------------------------------------------------------------
 learning rate    accuracy      loss
---------------- -----------  ---------
     0.001         0.287         11.4

     0.0001        0.6782       0.6151

     0.00005       0.7199       0.6037
---------------------------------------------------------------------------

Table: Resultados del entrenamiento para distintos learning
rate. Modelos evaluados con el dataset de validación \label{lr}

Como se ha podido comprobar, utilizar un *learning rate* demasiado
alto provoca que el descenso de gradiente quede *atrapado* en mínimos
locales o no sea capaz de converger, dando lugar a unos valores de
pérdidas demasiado altos. El **learning rate de 0.0005** es el que nos
da mejores resultados y por lo tanto ha sido utilizado en los
posteriores entrenamientos. Este valor tendrá que disminuirse
ligeramente cuando entrenemos varias capas convolucionales a la vez
para asegurarnos un descenso de gradiente lento que pueda converger en
un mínimo absoluto.

Una vez decididos los hiperparámetros se ha comenzado a *descongelar*
los diversos bloques de las capas convolucionales de la red,
obteniendo los resultados de la tabla \ref{training}

---------------------------------------------------------------------------
train blocks       LR      accuracy      loss    sensitivity    specifity
----------------  ----     --------    --------  -----------    ---------
      FC          5e-5      0.7149      0.6549     0.1713         0.9338

 Bloque 5         5e-5      0.7532      0.5294     0.3805         0.9012

 Bloques 4,5      5e-6      0.7126      0.6854        0              1

 Bloques 3,4,5    5e-6      0.7880      0.4748     0.4793         0.9131

 Bloques 2,3,4,5  5e-6      0.7961      0.4704     0.5867         0.8624

 Todos            5e-6      0.8015      0.4604     0.4680         0.9364
---------------------------------------------------------------------------

Table: Resultados del entrenamiento para distintos bloques
convolucionales entrenados. Modelos evaluados con el dataset de
validación \label{training}


Como se puede ver en la tabla \ref{training}, **los mejores resultados
se han obtenido al entrenar todos los bloques convolucionales**,
obteniendo una *accuracy* de 80.15%. Sin embargo, será la versión de
la red en la que se han entrenado los bloques 2, 3, 4 y 5 la que se
usará en el **Sistema de Predicción e Interpretación** para la segunda
etapa del Clasificador Multietapa. Esta versión tiene una sensibilidad
notablemente superior, con unas pérdidas similares a las de la red que
ofrece las mínimas pérdidas. Cabe destacar que, a partir del
entrenamiento del bloque 4, hemos tenido que disminuir el *learning
rate* para evitar caer en mínimos locales y asegurar la convergencia.

Debido a la gran carga computacional que ha supuesto entrenar este
modelo (cada entrenamiento ha durado una media de 72 horas),
únicamente se ha evaluado la arquitectura **VGG16**.


![Pérdidas para el dataset de validación del entrenamiento de los
bloques 2,3,4 y 5 (y FC) del clasificador Sano/Enfermo. Se ha aplicado
un filtro de
suavizado. \label{valloss}](source/figures/loss1.png){width=100%}


La Figura \ref{valloss} contiene la progresión de las pérdidas durante
el entrenamiento del clasificador final elegido para esta etapa.
**Las mínimas pérdidas se obtienen alrededor del epoch 45**. A partir
de ese momento, la red empieza a sufrir de *overfitting* y las
pérdidas con el dataset de validación aumentarán mientras que las del
dataset de entrenamiento continuarán descendiendo. Esto es un claro
indicador de que la red está comenzando a **memorizar** el dataset de
entrenamiento en vez de detectar y aprender patrones. Por lo tanto,
nos quedaremos con el estado de la red en ese epoch 45.


![Salida de la primera etapa del Sistema Multietapa para una imagen de
una retina enferma de RD
\label{hnh1}](source/figures/hnh1.png){width=70%}

![Salida de la primera etapa del Sistema Multietapa para una imagen de
una retina enferma de DMAE
\label{hnh2}](source/figures/hnh2.png){width=70%}

![Salida de la primera etapa del Sistema Multietapa para una imagen de
una retina sana
\label{hnh3}](source/figures/hnh3.png){width=70%}

En las Figuras \ref{hnh1}, \ref{hnh2} y \ref{hnh3} se pueden ver
ejemplos de la respuesta proporcionada por esta etapa del sistema.



\newpage

### Etapa 2: Clasificador RD/DMAE
La tabla \ref{training2} muestra los resultados del entrenamiento de
la arquitectura **VGG16** para la **segunda etapa** del **Sistema
Multietapa**. La función de este clasificador es diferenciar, de entre
las imágenes de retinas detectadas como enfermas en la etapa 1, cuáles
sufren Retinopatía Diabética y cuáles Degeneración Macular Asociada a
la Edad.


---------------------------------------------------------------------------
train blocks       LR      accuracy      loss
----------------  ----     --------    --------
     FC           1e-5      0.9231      0.1910

 Bloque 5         1e-5      0.9359      0.1483

 Bloques 4,5      1e-5      0.8958      0.2093

 Bloques 3,4,5    1e-5      0.9615      0.1443

 Bloques 2,3,4,5  1e-5      0.9103      0.1773

 Todos            1e-5      0.9487      0.1691
---------------------------------------------------------------------------

Table: Resultados del entrenamiento de la segunda etapa del Sistema
Multietapa. Modelos evaluados con el dataset de validación
\label{training2}

Además, como muestra la tabla \ref{training3}, también se han
entrenado otras arquitecturas. En este caso, en vez de realizarse
*fine-tuning*, se han entrenado todos los bloques convolucionales de
las mismas.

---------------------------------------------------------------------------
Arquitectura       LR      accuracy      loss
----------------  ----     --------    --------
 InceptionV3      1e-5      0.9167       0.263
 Resnet50         1e-5      0.9744      0.0816
---------------------------------------------------------------------------

Table: Resultados del entrenamiento de la segunda etapa del Sistema
Multietapa. Modelos evaluados con el dataset de validación
\label{training3}

![Salida de la segunda etapa del Sistema Multietapa para una imagen de
una retina enferma de RD
\label{dr1}](source/figures/dr1.png){width=70%}

![Salida de la segunda etapa del Sistema Multietapa para una imagen de
una retina enferma de DMAE
\label{dr2}](source/figures/dr2.png){width=70%}

Los resultados en esta segunda etapa son mucho más satisfactorios que
los de la primera, obteniéndose la máxima **accuracy** (97.4%) con la
arquitectura Resnet50, que será la utilizada en el **Sistema de
Predicción e Interpretación**. Las Figuras \ref{dr1} y \ref{dr2} son
dos ejemplos de la respuesta proporcionada por esta etapa del sistema.


\newpage
## Evaluación del Sistema 3: Ensemble de Clasificadores

Para este sistema se han evaluado 3 arquitecturas distintas: **VGG16,
ResNet e InceptionV3**. Como se ha explicado anteriormente, cada una
de estas tres arquitecturas ha sido entrenada con un subconjunto
distinto de los datos. De esta forma se han obtenido clasificadores no
correlados que, al ser combinados, han permitido obtener un
rendimiento superior al de cada uno de ellos de forma individual.

Para la arquitectura VGG16, al utilizarse la técnica del **Transfer
Learning**, se han evaluado diferentes versiones, congelando cada vez
distinto número de capas como muestra la tabla \ref{training4}.

---------------------------------------------------------------------------
train blocks       LR      accuracy      loss
----------------  ----     --------    --------
 FC               5e-5      0.6695      0.6676

 Bloque 5         5e-5      0.7458      0.6068

 Bloques 4,5      5e-6      0.7119      0.5878

 Bloques 3,4,5    5e-6      0.7119      0.5776

 Bloques 2,3,4,5  5e-6      0.7797      0.5456

 Todos            5e-6      0.7458      0.5973
---------------------------------------------------------------------------

Table: Resultados del entrenamiento del sistema 3. Modelos evaluados
con el dataset de validación \label{training4}

En este caso, el mejor resultado lo obtenemos dejando congelado el
primer bloque convolucional y entrenando el resto de bloques.

En la tabla \ref{training5} se muestran los resultados del
entrenamiento para otras arquitecturas.


---------------------------------------------------------------------------
Arquitectura       LR      accuracy      loss
----------------  ----     --------    --------
 InceptionV3      1e-5      0.6076       0.7293
 Resnet50         1e-5      0.6383       0.7260
---------------------------------------------------------------------------

Table: Resultados del entrenamiento con diferentes arquitecturas del
sistema 3. Modelos evaluados con el dataset de validación
\label{training5}

El **ensemble** final usado en el **Sistema de Predicción e
Interpretación** ha combinado las predicciones de la las dos redes de
la tabla \ref{training5} y la red que ha entrenado los bloques 2, 3, 4
y 5 de la tabla \ref{training4}.

En las Figuras \ref{s331}, \ref{s332} y \ref{s333} se pueden ver
ejemplos de la respuesta proporcionada por este tercer sistema. Como
se puede ver en ellas, existen ocasiones en que alguno de los 3
clasificadores del ensemble proporciona una respuesta equivocada. Sin
embargo, el resultado final proporcionado por el ensemble devuelve la
respuesta correcta. Es en estos casos donde se puede comprobar la
robustez que proporciona haber usado un sistema basado en la
combinación de varios modelos distintos.

![Salida del Sistema 3 para una imagen de una retina enferma de RD
(omitidos los mapas de activación)
\label{s331}](source/figures/s331.png){width=100%}

![Salida del Sistema 3 para una imagen de una retina enferma de DMAE
(omitidos los mapas de activación)
\label{s332}](source/figures/s332.png){width=100%}

![Salida del Sistema 3 para una imagen de una retina sana (omitidos
los mapas de activación)
\label{s333}](source/figures/s333.png){width=100%}




\newpage
## Sistema de Predicción e Interpretación
El Sistema de Predicción e Interpretación permite usar todos los
modelos explicados anteriormente simplemente seleccionando una imagen
de un paciente.

En las Figuras \ref{pred1} y \ref{pred2} se muestra el Sistema de
Predicción devolviendo la predicción realizada por las dos etapas del
Sistema 2 para la imagen de un paciente con Degeneración
Macular. Previamente, el usuario ha tenido que añadir la imagen de
fondo de ojo a una carpeta y haber seleccionado el nombre del fichero
en el selector de la parte superior. ^[Aunque el nombre del fichero
contenga la palabra AMD (Age-Related Macular Degeneration, en ningún
momento el sistema ha utilizado esa información para realizar su
predicción.] En los mapas de atención que devuelve el sistema es
posible apreciar cómo los modelos han basado su predicción en la
presencia de **drusas**.

![Respuesta del Sistema de Predicción a la imagen de una retina con
DMAE. Etapa primera del Sistema Multietapa
\label{pred1}](source/figures/pred1.png){width=100%}

![Respuesta del Sistema de Predicción a la imagen de una retina con
DMAE. Etapa segunda del Sistema Multietapa
\label{pred2}](source/figures/pred2.png){width=100%}


![Respuesta del Sistema de Predicción a la imagen de una retina con
RD. Etapa primera del Sistema Multietapa
\label{pred3}](source/figures/pred3.png){width=100%}

![Respuesta del Sistema de Predicción a la imagen de una retina con
RD. Etapa segunda del Sistema Multietapa
\label{pred4}](source/figures/pred4.png){width=100%}

De la misma forma, las Figuras \ref{pred3}, y \ref{pred4} muestran la
respuesta de ese mismo sistema para una retina enferma de RD.

![Respuesta del Sistema de Predicción a la imagen de una retina con
DMAE. Mapa de activación del primer clasificador del Ensemble de
Clasificadores \label{pred5}](source/figures/pred5.png){width=100%}

![Respuesta del Sistema de Predicción a la imagen de una retina con
DMAE. Mapa de activación del segundo clasificador del Ensemble de
Clasificadores \label{pred6}](source/figures/pred6.png){width=100%}

![Respuesta del Sistema de Predicción a la imagen de una retina con
DMAE. Mapa de activación del tercer clasificador del Ensemble de
Clasificadores \label{pred7}](source/figures/pred7.png){width=100%}


La respuesta del **Ensemble de Clasificadores** para una imagen de una
retina enferma de DMAE, como se aprecia en las Figuras \ref{pred5},
\ref{pred6} y \ref{pred7}, es muy interesante. Mientras que el primer
clasificador basa su clasificación en la posible presencia de
neovascularización (Figura \ref{pred5}), los otros dos clasificadores
(Figuras \ref{pred6} y \ref{pred7}) se basan en la presencia de
drusas.


![Respuesta del Sistema de Predicción a la imagen de una retina
sana. Mapa de activación del primer clasificador del Ensemble de
Clasificadores \label{pred8}](source/figures/pred8.png){width=100%}

![Respuesta del Sistema de Predicción a la imagen de una retina
sana. Mapa de activación del segundo clasificador del Ensemble de
Clasificadores \label{pred9}](source/figures/pred9.png){width=100%}


![Respuesta del Sistema de Predicción a la imagen de una retina
sana. Mapa de activación del tercer clasificador del Ensemble de
Clasificadores \label{pred10}](source/figures/pred10.png){width=100%}

Las Figuras \ref{pred8}, \ref{pred9} y \ref{pred10} muestran la salida
del **Ensemble de Clasificadores** para una imagen de una retina
sana. Este caso también es interesante porque ha permitido detectar un
**sesgo** en nuestro modelo.  La Figura \ref{pred10} muestra cómo este
clasificador basa su predicción en la pequeña muesca que existe en la
parte superior derecha de la imagen de fondo de ojo. Esto se debe a
que, todas las imágenes del dataset de Kaggle presentan esa
muesca. Como ese dataset únicamente contiene imágenes de retinas sanas
o retinas con RD, nuestro clasificador tiene un sesgo y
automáticamente descartará la opción de DMAE cuando vea una imagen de
este tipo. Esto puede explicar también el valor tan alto de
**accuracy** en la segunda etapa del **Clasificador Multietapa**. Este
sesgo deberá ser corregido en posteriores versiones del sistema.
