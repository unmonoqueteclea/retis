# Conclusiones {#conclusiones}

En plena era de los datos y la automatización, la medicina no puede
quedar atrás. Las enfermedades analizadas son solo 2 ejemplos de cómo
el Machine Learning puede ayudar a los especialistas a detectar
posibles enfermedades en estadios muy tempranos, lo que nos permitirá
tratarlas antes de que puedan afectar a la vida diaria del paciente.

Durante este trabajo hemos podido comprobar cómo las dos enfermedades
que más casos de ceguera producen en todo el mundo podrían ser
detectadas de forma muy temprana, pudiendo así ser tratadas antes de
que avancen. El uso de clasificadores de Machine Learning entrenados
con datos históricos fiables nos permite crear sistemas robustos que
aúnen todo el conocimiento de los mejores expertos y puedan llegar a
todos estos sitios donde no es fácil encontrar este tipo de
especialistas.

Los resultados obtenidos, incluso estando lejos de los de algunos de
los modelos estudiados durante el análisis del estado del arte, son un
motivo de optimismo. Como ya se ha explicado a lo largo del trabajo,
la mayoría de éstos procedían de datasets con una cantidad muy
limitada de imágenes. El sobreajuste, con cantidades tan pequeñas de
imágenes es prácticamente inevitable. Los modelos del estado del arte,
cuando se utilizaran en *el mundo real* con imágenes procedentes de
otras cámaras con distintos tamaños, profundidades de color,
artefactos, etc.  tendrán serios problemas para generalizar. Sin
embargo, nuestro sistema está preparado ante todos esos posibles
cambios gracias a la gran cantidad de datasets utilizados, y al uso
del **Data Augmentation**.

Lejos de buscar el *número bonito*, o el *gran titular*, el objetivo
de este trabajo, como se puso de manifiesto en el capítulo inicial ha
sido siempre crear un sistema verdaderamente **útil** para ser
introducido en las clínicas. Para ello, es necesario conseguir un
sistema **robusto** e **interpretable**. La robustez nos la
proporcionará haber usado más de 39000 imágenes procedentes de 13
conjuntos distintos de datos junto con la combinación de las
predicciones de varios modelos con diferentes arquitecturas.  La
interpretabilidad nos la proporcionará el Sistema de Predicción e
Interpretación descrito en apartados anteriores. La información
proporcionada por este sistema como las predicciones parciales con su
correspondiente confianza de cada clasificador o los mapas de atención
ayuda al usuario a entender por qué ha tomado el sistema una decisión
concreta y decidir si es fiable la predicción dada. Aunque sea común
oír aquello de *"Tortura los datos y te confesarán lo que quieras
oír"*, en este caso esa frase no describe la forma de trabajar que ha
sido utilizada.

## Trabajo futuro
 Una vez creado un sistema inicial verdaderamente útil, robusto y
escalable conseguir esos *números bonitos* de los que hablábamos
anteriormente, requerirá principalmente de tres elementos: **nuevas
imágenes, mayor pre-procesamiento, y mayor capacidad de computación
para entrenar modelos más complejos**.

El hecho de que el entrenamiento de algunos de los modelos llegara a
durar hasta 96 horas, no ha permitido realizar tantas ejecuciones como
se hubiera deseado. De haber contado con más tiempo o máquinas más
potentes, nuevas arquitecturas como **Xception**, **DenseNet** o
**MobileNet** hubieran sido evaluadas. Además, soluciones de
**Automated Machine Learning** como
**AutoKeras**^[https://autokeras.com/] hubieran sido de gran utilidad
para la obtención de arquitecturas más adecuadas al problema
analizado.

Aún quedan preguntas en el aire, y no tienen fácil respuesta. Estas
preguntas giran alrededor de cómo sería la puesta en producción de
este sistema en los servicios de salud de todo el mundo. Este sistema
nunca debería ser usado de forma autónoma y, ante la duda, siempre
debería prevalecer la opinión del especialista. Sin embargo, esto no
quita que su implantación en las consultas como complemento a la
opinión del especialista tendría grandes ventajas permitiendo a éste
percibir detalles de los que, quizás, en una primera exploración
inicial no se había percatado. Sólo después de un tiempo de evaluación
de esta forma en consultas, podría empezar a plantearse dotar al
sistema de algo más de autonomía, lo que nos permitiría implementarlo
en sistemas de salud donde la cantidad de especialistas disponibles es
muy limitada.

Durante los próximos años de democratización del Machine Learning,
muchos profesionales entenderán que todos estos sistemas no vienen a
sustirtuirlos sino que son una herramienta más de trabajo como lo
pueden ser las tan usadas hojas de cálculo. El Machine Learning está
muy lejos de sustituir a las personas en ámbitos extremadamente
complicados como la medicina. Y hacer una predicción de si esto algún
día pasará es poco más que apostar a un número al azar en una ruleta.
