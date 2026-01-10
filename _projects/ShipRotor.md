---
layout: page
title: Ship-Airwake-Rotor Aerodynamic Interactions
description: Subscale wind tunnel investigation of helicopter shipboard operations
img: assets/img/projects/ShipRotor/ShipRotor_Cover.jpg
importance: 1
category: Research
related_publications: true
---

The shipboard operation of rotorcraft poses significant challenges to the pilots onboard or the flight  controls of unoccupied aerial systems (UAS). Aerodynamic interactions between the ship’s airwake and the wake of the rotor(s) result in a highly unsteady turbulent flow field that impacts the rotorcraft aerodynamic and flight dynamic behavior. This project goes through model-scale experiments with main goal being to provide a holistic understanding of the airwake–rotor interaction through data collected using particle image velocimetry (PIV), surface pressure, and six-component rotor hub loads measurements. Physical insights and measured data are also used to verify and validate the numerical simulation models developed within the lab.

<hr>


<div class="row">
    <div class="col-sm">
        {% include figure.liquid path="assets/img/projects/ShipRotor/ShipRotor_1.jpg" title="Apparatus" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Experimental Apparatus.
</div>

<div class="row justify-content-sm-center">
<div style="width: 100%; min-width: 400px; max-width: 800px;">
<div style="position: relative; width: 100%; overflow: hidden; padding-top: 56.25%;">
<iframe style="position: absolute; top: 0; left: 0; right: 0; width: 100%; height: 100%; border: none;" src="https://www.youtube.com/embed/pd8myZq5FcE?si=JySXkT7yBAeM0qio" width="560" height="315" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>
<div class="caption">
    Sample measurement results of an approaching rotor along a 3-deg approach path towards the landing deck
</div>

<br>

<hr>
<h3> Recovery of High-Frequency Pneumatic Pressure Signal </h3>

To obtain the accurate unsteady pressure distributions on the ship deck without loads of expensive transducers such as a Kulite sensor, it is necessary to account for the signal distortion of pneumatic tubes. The dynamic response of a pressure measuring system using pneumatic tubes is known to be prone to signal attenuation, resonance, and phase lag. These problems render them useful only when measuring static or low-frequency pressure fluctuations. As a result, an experimental technique to characterize the system using frequency response analysis (FRA) and recover the high-frequency components of a pneumatic pressure tube system was developed. 

The system identification was performed using an enclosed test chamber with a loudspeaker installed on one side to generate fluctuating pressures. A single high-frequency response pressure sensor (PCB 103B01 microphone) serving as the reference signal was mounted on the other end of the chamber next to the pressure ports where the pneumatic tubes in question were connected.

<div class="row">
    <div class="col-sm-8 offset-sm-2">
        {% include figure.liquid path="assets/img/projects/ShipRotor/PScanner_1.png" title="Schematics" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    System schematics of the characterization apparatus.
</div>

<div class="row">
    <div class="col-sm-8 offset-sm-2">
        {% include figure.liquid path="assets/img/projects/ShipRotor/PScanner_2.png" title="Photos" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Photos of the characterization setup.
</div>

The system was programmed to sweep through a range of frequency signals to characterize the full range of the pressure scanner. Data acquisition was triggered simultaneously for the microphone and the pressure scanner such that data were synchronized in time. By comparing the amplitudes and phases of the pressure scanner signal to the reference, we can understand the frequency response of the pneumatic tube system.


After obtaining the frequency response, the system's transfer function was estimated with empirical fitting. Finally, the high-frequency pressure signals were recovered with a technique called Wiener Deconvolution. After this correction, the signal cross-correlation between the reference and the signal in question increased from 0.11 to 0.98, and the overall RMS error was reduced by 86%.

<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/ShipRotor/PScanner_3.png" title="Freqencu Response" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="caption">
        Frequency responses of tubes with different lengths.
    </div>
    <div class="col-sm mt-2 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/ShipRotor/PScanner_4.png" title="Correction Results" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="caption">
        Time histories and frequency spectra before and after correction.
    </div>
</div>

<br>

<hr>
<h3> Dual Motor Phase Synchronization </h3>

In order to replicate a dual-rotor vehicle, e.g. the V-22 Osprey, in our sub-scale experiment, a dual-motor system was used to drive to two rotors independently with phase synchronization. The benefit of this setup compared with a single motor with a split transmission shaft or timing belts is that this mechanically isolates the two rotors for independent load measurements.

A Teensy 4.0 microcontroller was used as the central controller for closed-loop motor speed and phase control. A high resolution magnetic encoder was mounted behind the motors to track the speed and azimuth. The program was written such that one motor served as the ‘Master,’ where only an RPM controller was implemented. The other motor was configured as a ‘Slave,’ which follows the rotational speed of the ‘Master’ and tries to maintain the desired phase difference between the two motors. The controller outputs the control signals to the two motors using the DShot600 communication protocol, allowing a throttle update rate above 1 kHz. So far, it has been demonstrated that the phase tracking controller worked well up to over 6000 RPM with an average error of just around 1~2 degrees.

<div class="row">
    <div class="col-sm-8 offset-sm-2">
        {% include figure.liquid path="assets/img/projects/ShipRotor/7200rpm_Throttle1kHz.gif" title="Phase_Sync" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Demo video of the dual rotor phase-synchronization at 7200 RPM. (Image Captured at 2400 FPS; Video playback at 10 FPS)
</div>



{% cite chen2024unsteadyJAHS %}
{% cite chen2025windtunnel %}
{% cite chen2026subscale %}

