---
layout: page
title: Rotary Balance
description: Development of a rotary balance for aircraft stall-spin investigation
img: assets/img/projects/RotaryBalance/RotaryBalance_Cover.png
importance: 2
category: Research
related_publications: true
---
<p align="justify">
My role as a research engineer was to develope a prototype rotary balance system to characterize the aerodynamic charateristics of an aircraft in a spinning motion at the Aerospace Science and Technology Research Center (ASTRC) in National Cheng Kung University (NCKU). Experiments conducted with the Standard Dynamics Model (SDM), a generic fighter aircraft model, showed good agreement with available data extracted from previous studies.
</p>
<hr>

<p align="justify">
I was in charge of the design of the entire mechanical and measurement system on rotating side of the system and the SDM model. The system was designed to perform experiments with wind speeds up to 50 m/s and a rotational speed up to 300 RPM. Finite element analysis (FEA) was conducted to ensure the structure was able to withstand the expected loads on the system, including gravitational, aerodynamic, and centrifugal forces with acceptable margins to spare.
</p>

<div class="row">
    <div class="col-sm-8 offset-sm-2">
        {% include figure.liquid loading="eager" path="assets/img/projects/RotaryBalance/RotaryBalance_Cover.png" title="Rotary Balance" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The ASTRC rotary balance.
</div>

<div class="row">
    <div class="col-sm-8 offset-sm-2">
        {% include figure.liquid loading="eager" path="assets/img/projects/RotaryBalance/RB_3.png" title="CAD" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Main components of the ASTRC rotary balance.
</div>

<p align="justify">
The majority of SDM model was 3D-printed and reinforced by laminating fiberglass with epoxy over the external surfaces using a vacuum bagging technique. The main wings had additional carbon fiber plates embedded internally to better resist bending from the aerodynamics loads.
</p>

<div class="row">
    <div class="col-sm-8 offset-sm-2">
        {% include figure.liquid loading="eager" path="assets/img/projects/RotaryBalance/SDM.png" title="SDM" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Exploded view of the Standard Dynamics Model.
</div>

<p align="justify">
A 5-component force balance to measure the aerodynamic loads was integrated into the body of the SDM along with the signal amplifiers to increase the signal-to-noise ratio (SNR). The balance was fully calibrated abd varified in-house and showed good linearity within the designed range.
</p>

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/9UDIpH_l_iU?si=oBQ7Ub21AR-a8aiH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</p>
<div class="caption">
    The rotary balance in operation during an experiment campaign in the ASTRC low-speed wind tunnel.
</div>

<p align="justify">
The experiment results were compared with those from tests conducted in NASA Ames and other facilities. The differences in coefficients for normal force and pitching moment increased as the angle of attack increased, mainly due to the effect of Reynolds number. On the other hand, side forces and lateral moments showed good agreement, suggesting minimal Reynolds number and compressibility effect.
</p>

<p align="justify">
The entire system was designed, built, and tested within a time frame of about a year, and the obtained results were published in the <i>Journal of Aeronautics, Astronautics, and Aviation</i> {% cite chung2022aerodynamic %} and received the best paper award in 2022.
</p>

