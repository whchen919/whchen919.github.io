---
layout: page
title: Soteria
description: A tiltrotor designed by Georgia Tech that won 2<sup>nd</sup> place in the 40<sup>th</sup> VFS graduate student design competition
img: assets/img/projects/Soteria/Soteria_Cover.png
importance: 1
category: Other Student Activities
related_publications: false
---
<p align="justify">
Placed 2<sup>nd</sup> in the 40<sup>th</sup> Vertical Flight Society Graduate Student Design Competition, Soteria is a high-speed compound foldable tiltrotor configuration designed to carry a large payload volume with a minimum 450-knot cruise speed at altitudes above 20,000 ft and achieving a minimum radius of operation of over 500 nautical miles, while being able to operate over unprepared surfaces.
</p>

<hr>


<div class="row">
    <div class="col-sm-10 offset-sm-1">
        {% include figure.liquid loading="eager" path="assets/img/projects/Soteria/Soteria_1.png" title="Soteria" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Rendering and dimentions of Soteria.
</div>


<div class="row">
    <div class="col-sm-5 offset-sm-1">
        {% include figure.liquid loading="eager" path="assets/img/projects/Soteria/Soteria_2.png" title="The Team" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Team Soteria.
        </div>
    </div>
    <div class="col-sm-5">
        {% include figure.liquid loading="eager" path="assets/img/projects/Soteria/Soteria_3.png" title="Certificate" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Second place award certificate.
        </div>
    </div>
</div>

<br>

<hr>

<h3>Preliminary Vehicle Sizing with Genetic Algorithm</h3>

<p align="justify">
A MATLAB sizing code was written from scratch and implemented for the conceptual design phase to size and optimize the vehicle design parameters based on the mission requirements and the selected vehicle configuration. This program was done without using the optimization toolbox and integrates basic rotary-wing and fixed-wing performance analysis methods along with data-based weight estimation regression models, e.g. NDARC, to explore variables in the design space that produce feasible vehicle designs and then optimizes the target attributes through a genetic algorithm (GA).
</p>

<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Soteria/GA_1.png" title="FlowChart_GA" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            High level flow chart of the vehicle sizing program based on genetic algorithm.
        </div>
    </div>
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Soteria/GA_2.png" title="FlowChart_FE" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Fitness evaluation function where detailed vehicle attributes, such as dimensions, weights, and performance metrics, were estimated and scored.
        </div>
    </div>
</div>


<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Soteria/GA_3.png" title="Hisotry" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Evolution history of the vehicle design algorithm. (Top left) Fitness value of the best individual and the population average. (Top center) Maximum takeoff weight of the best individual. (Top right) Rotor disk loading and main wing lift-to-drag ratio of the best individual. (Bottom Left) Scoring breakdown of the best individual.  (Bottom right) Penalty factors due to constraint violations of the best individual.
</div>

<br>

<hr>

<h3>Vehicle Control Algorithm and Real-Time Simulation</h3>

<p align="justify">
A vehicle flight simulator was developed in Simulink, using precomputed vehicle aerodynamic coefficients as look-up tables. The vehilce switches between control laws as it transitions from vertical to horizontal flight. 
</p>

<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Soteria/FC_1.png" title="Control Mode Scheduling" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Vehicle control mode scheduling.
        </div>
    </div>
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Soteria/FC_2.png" title="UI" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Full vehicle real-time simulation user interface.
        </div>
    </div>
</div>


<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/Soteria/FC_3.png" title="System Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Flight controller and simulation system architecture.
</div>