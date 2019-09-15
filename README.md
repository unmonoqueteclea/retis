# Retis Project: DR and DMAE detection

The word **retis** comes from latin and means *network*. This is because the
retina is a big network of blood vessels.

The **Retis Project** tries to detect **Diabetic Retinopathy (DR)**
and **Age-Related Macular Degeneration (DMAE)** in eye fundus images
using Deep Learning. This project is my **final Master's Degree
Thesis** in Polytechnical University of Valencia. You can download the
thesis (in Spanish)
[here](https://github.com/unmonoqueteclea/retis/raw/master/thesis.pdf).

You can use the webapp from
[https://unmonoqueteclea.github.io/retis/](https://unmonoqueteclea.github.io/retis/)

# What can I do with this app?

This app shows the results of the program for a set of images. As we
are trying to create a static webapp, the output from the program is
pre-loaded. However, there is an associated Jupyter Notebook
[here](https://github.com/unmonoqueteclea/retis/blob/master/predictions-notebook/Predictions.ipynb)
where you can test all the models with your own images.

For using this webapp, simply choose in the menu on the left one of
the two prediction systems and select a patient in the top dropdown
menu. You will see, automatically the predictions of the classifiers,
their confidences and some interesting attention maps.
