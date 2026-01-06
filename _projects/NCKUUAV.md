---
layout: page
title: NCKU UAV Design Team
description: An undergraduate team dedicated to designing and prototyping fixed-wing UAVs
img: assets/img/projects/NCKUUAV/NCKUUAV_Cover.png
importance: 2
category: Unmanned Aerial Vehicles
related_publications: false
---

The UAV Design Team of the Department of Aeronautics and Astronautics (DAA) at the National Cheng Kung University (NCKU) is an organization run by students. The team is dedicated to designing different aerodynamic configurations of fixed-wing UAVs, ranging from conventional, V-tail, canard, boxed-wings, and etc. We've participated in various design competitions, equivelent to the AIAA Design, Build, Fly competition, in Taiwan. I was honored to serve as the team lead when we participated and won several awards in the annual Taiwan Innovated UAV Design Competition in 2016. After graduated from college, I continued to provide guidance and support to the team alongside the studies for my Master's degree.

<hr>

<h3> The Blazing Sun (烈焰千陽) </h3>

The Blazing Sun is a canard 



<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/NCKUUAV/TBS_2.jpg" title="Ground Roll" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/NCKUUAV/TBS_1.jpg" title="Take-off" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Photos of The Blazing Sun during one of the test flights.
</div>




<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/NCKUUAV/TBS_3.jpg" title="Exterior CAD" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/NCKUUAV/TBS_4.jpg" title="Structural CAD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/NCKUUAV/TBS_5.jpg" title="CFD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Outer mold line (OML) of The Blazing Sun in CATIA.
        </div>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
        <div class="caption">
            Detailed structure layout of The Blazing Sun in CATIA.
        </div>
</div>
<div class="caption">
    CFD simulation to assess the effectness of added winglets.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
