# Retis: Diabetic Retinopathy and DMAE detection

> `retis` is a latin word and means *network*. This is because the
> retina is a big network of blood vessels.

The **Retis project** tries to detect **Diabetic Retinopathy (DR)**
and **Age-Related Macular Degeneration (DMAE)** in eye fundus images
using Convolutional Neural Networks.

This project is my **final Master's Degree Thesis** in [Polytechnical
University of Valencia](https://www.upv.es/en). You can download the
thesis (in Spanish)
[here](https://github.com/unmonoqueteclea/retis/raw/master/thesis.pdf).

You can use the webapp from
[https://unmonoqueteclea.github.io/retis/](https://unmonoqueteclea.github.io/retis/)

Choose in the menu on the left one of the two prediction systems and
select a patient in the top dropdown menu. You will see, automatically
the predictions of the classifiers, their confidences and some
interesting attention maps.

![example](./docs/img/demo.gif)


## what can I do with this app?

This app shows the results of the program for a set of images. The
output from the program is pre-loaded. However, there is an associated
Jupyter Notebook
[here](https://github.com/unmonoqueteclea/retis/blob/master/notebook/predictions.ipynb)
where you can test all the models with your own images. Due to storage
limitation of Github, I can't upload the trained models, please send
me an email to `pgonzalezcarrizo@gmail.com` and I will send you all
the needed model files.
