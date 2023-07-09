---
lang: es
---

<!--
Para crear PDF: make pdf
For italic, add one * on either side of the text
For bold, add two * on either side of the text
For bold and italic, add _** on either side of the text
Ejemplo cita: [@Cousteau1963]
Latex: (@ref_for_eqn1) $f(x) = ax^3 + bx^2 + cx + d$
Lista desordenada:
    - item
    - item

For syntax highlighting in code blocks, add three "`"
characters before and after a code block:

```python
mood = 'happy'
if mood == 'happy':
    print("I am a happy robot")
```

Alternatively, you can also use LaTeX to create a code block as shown
in the Java example below: \lstinputlisting[style=javaCodeStyle,
caption=Main.java]{source/code/HelloWorld.java}

If you use `javaCodeStyle` as defined in the `preamble.tex`, it is
best to keep the maximum line length in the source code at 80
characters.


Figures can be added with the following syntax:
![my_caption \label{my_label}](source/figures/my_image.pdf){ width=50% }

For details on setting attributes like width and height, see:
http://pandoc.org/MANUAL.html#extension-link_attributes

![RV Calypso is a former British Royal Navy minesweeper converted into
a research vessel for the oceanographic researcher Jacques-Yves Cousteau.
It was equipped with a mobile laboratory for underwater field researc
h. \label{ref_a_figure}](source/figures/example_figure.pdf){ width=100% }


-->



# Introducción {#intro}

Durante este capítulo inicial se presenta el contexto y la motivación
principal detrás de este trabajo, los objetivos perseguidos y la
estructura en la que se plasma toda esta información a lo largo del
mismo.

El presente documento pretende mostrar todas las tareas de
investigación realizadas para la realización del **Trabajo Final de
Máster** que permite la obtención del título de **Máster Universitario
en Ingeniería de Telecomunicaciones** de la Universidad Politécnica de
Valencia. Este trabajo supone 30 créditos ECTS (de los
120 créditos totales de la titulación), lo que equivale
aproximadamente a 750 horas de trabajo.

## Motivación

La Organización Mundial de la Salud (OMS) estima que, en 2010, 285
millones de personas padecían algún tipo de discapacidad visual. De
ellas, 39 millones eran ciegas. [@world2013universal]. El informe
detallaba 7 principales causas de discapacidad visual entre las que se
encontraban las 2 enfermedades que se analizarán en este trabajo: la
**Retinopatía Diabética** y la **Degeneración Macular Asociada a la
Edad**. Según se estimaba, el 80% de estas discapacidades podrían
haberse evitado con las intervenciones adecuadas para su
prevención. En respuesta, la OMS lanzaba su plan de acción que
comenzaría en 2014 y finalizaría en 2019. El informe
^[https://www.who.int/blindness/actionplan/en/] asociado a este plan de
acción ponía de manifiesto la necesidad de que los servicios de salud
ocular se convirtieran en parte integral del sistema primario de salud
y se resaltaba la importancia de las campañas de prevención.

La **Retinopatía Diabética (RD)** pertenece al grupo de las
enfermedades vasculares, y se ha convertido en la **principal causa
evitable de ceguera en todo el mundo**. Esta patología se da
actualmente en el 35% de las personas con diabetes, enfermedad que
afecta al 8.5% de la población mundial [@IAPB], [@idf2017] . Se estima
que 191 millones de personas sufrirán retinopatía diabética en 2030
[@zheng2012worldwide].  La incidencia de la RD es del 50% a partir de
los 10 años de la aparición de la diabetes, y del 90% a partir de los
30 años [@mookiah2013computer].

En la Figura \ref{diabetes_dr} se puede observar la previsión
esperada de crecimiento entre 2015 y 2040, tanto en el número de casos
de diabetes, como en el de casos de diabetes que dan lugar a RD
^[Datos de
https://atlas.iapb.org/vision-trends/diabetic-retinopathy]. El aumento
de la población mundial, y el envejecimiento de la misma serán
factores determinantes en este crecimiento, pero también lo serán el
aumento de casos de sobrepeso y la vida sedentaria.

![Prevalecencia y previsión de crecimiento de la diabetes y la RD a
nivel mundial. Gráfico de elaboración propia
\label{diabetes_dr}](source/figures/stat.png){width=100%}


La diabetes supone, aproximadamente, el 11.6% del presupuesto total de
salud de la mayoría de países [@zhang2009economic]. Además, el coste
de los pacientes con RD supera notablemente al de los pacientes sin
dicha patología, incrementándose éste con la gravedad de la RD
[@zhang2017direct].

Es importante destacar el hecho de que casi el 75% de las personas que
sufren Retinopatía Diabética pertencen a países en vías de desarrollo
[@mansour2017evolutionary], donde no existen los medios adecuados para
su detección temprana ni su tratamiento.

Por otro lado, la **Degeneración Macular Asociada a la Edad (DMAE)**
es la más común de las enfermedades que afectan a la retina. Esta
patología, de tipo degenerativo, es la **mayor causa de ceguera en
países desarrollados**, dándose en un 9% de la población mundial
[@wong2014global]. Hasta el 80% de los casos de ceguera causados por
esta enfermedad son evitables si son detectados y tratados a
tiempo. [@pascolini2012global]

El rápido crecimiento de estas enfermedades hace insostenible el
sistema actual basado únicamente en la revisión de expertos. Es
necesario introducir en las clínicas sistemas de detección automática
a partir de imágenes digitales que permitirían agilizar el trabajo de
los médicos o incluso permitir el diagnóstico en zonas donde ni
siquiera existen ese tipo de expertos. Aunque existen diferentes
métodos para el diagnóstico como la tomografía de coherencia óptica
(TCO) o la angiografía, el método más utilizado actualmente se basa en
el análisis de **imágenes de fondo de ojo** obtenidas mediante cámaras
especializadas (Figura \ref{eidon}). Este tipo de análisis se ha
impuesto al resto de métodos por la facilidad de uso de las cámaras y
su menor coste.

![Modelo de cámara de fondo de ojo Eidon de la compañía Centervue
\label{eidon}](source/figures/eidon.jpg){width=40%}

A la fecha de publicación de este trabajo (Septiembre de 2019) aún se
desconoce cuál ha sido el grado de eficacia del plan de acción
propuesto por la OMS, cuyo objetivo principal era la reducción de un
25% de los casos de discapacidad visual evitables. Lo que sí que se ha
podido comprobar es el crecimiento experimentado en el número de
investigaciones realizadas en torno a la detección automática de
algunas de estas enfermedades, entrando a la obra nuevos actores como
Google que han permitido dar pasos de gigante en la lucha contra este
tipo de
patologías. ^[https://ai.googleblog.com/2018/12/improving-effectiveness-of-diabetic.html]

## Objetivos

El objetivo principal de esta investigación ha sido el **desarrollo de
un sistema de detección automática de Retinopatía Diabética y
Degeneración Macular Asociada a la Edad**. Sin embargo, al ser este un
objetivo amplio, se han establecido una serie de objetivos más
específicos que se detallan a continuación:

- Estudio de la anatomía y fisiología del ojo humano, enfocándose en
  las causas y los efectos de las enfermedades analizadas.
- Análisis y comparación de las principales aproximaciones a la
  detección automática de ambas patologías realizadas hasta la fecha,
  tanto las basadas en Machine Learning como en Deep Learning.
- Diseño, desarrollo y evaluación de diversas topologías de redes
  neuronales convolucionales en la detección de ambas patologías
- Interpretación de las redes convolucionales, tratando de comprender
  qué factores le han ayudado a predecir, en cada caso, la existencia
  o ausencia de la enfermedad.


## Principales contribuciones
Las principales contribuciones de este trabajo giran en torno a dos
características: la **robustez** y la **interpretabilidad**.

- En busca de la **robustez** se han utilizado más de 39000 imágenes
  procedentes de 13 datasets distintos para el entrenamiento de los
  modelos. La combinación de las predicciones de varios clasificadores
  en las predicciones finales de cada sistema también ha contribuido a
  compensar el *overfitting* o *underfitting* que pueda tener algún
  modelo en concreto.

- Para conseguir **interpretabilidad** se ha diseñado un **Sistema de
  Predicción e Interpretación** que ha proporcionado los valores de
  confianza de las predicciones, las predicciones de cada clasificador
  por separado, las predicciones combinadas, y los mapas de
  activación.


## Estructura
El presente documento está dividido en los siguientes 7 capítulos:

1. **[Introducción](#intro)**: Este primer capítulo se presenta el
   problema y la forma en la que éste será abordado en los sucesivos
   capítulos.
2. **[El ojo y sus patologías](#ojo)**: Durante este segundo capítulo
   se estudia la anatomía y fisiología del ojo y se analizan las
   características principales las dos patologías que han motivado
   esta investigación: RD y DMAE.
3. **[Machine Learning y aplicaciones médicas](#ml)**: Además de
   ofrecer una visión general del funcionamiento y características de
   los sistemas de Machine Learning, durante estas páginas se muestran
   ejemplos de las aplicaciones médicas de los mismos.
4. **[Estado del arte en detección de RD y DMAE](#arte)**: Se analizan
   las principales aproximaciones para la detección de RD y DMAE,
   tanto de Machine Learning como de Deep Learning, publicadas hasta
   el momento.
5. **[Diseño de Sistema de Detección de RD y DMAE](#sistema)**: En
   este capítulo se muestra el sistema propuesto para la detección de
   RD y DMAE. También se detallan las características de todos los
   conjuntos de imágenes utilizados para el entrenamiento del sistema
   y el sistema adicional para la interpretacción de las predicciones.
6. **[Análisis de los resultados obtenidos](#resultados)**: Este
   capítulo detalla las evaluaciones realizadas al sistema presentado
   en el capítulo anterior.
7. **[Conclusiones](#conclusiones)**: Para finalizar, se analizan las
   aportaciones realizadas por esta investigación, su aplicabilidad en
   el mundo real y las posibles líneas de investigación futuras que se
   abren en este momento.
