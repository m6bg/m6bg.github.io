---
title: Supercapacitor Power Buffer for an Iridium 9603N Satellite Link
subtitle: Bridging a 4.3x instantaneous power gap on a 1.5 W payload budget
org: Michigan Aeronautical Science Association (MASA)
role: Avionics Director & Avionics Engineer
program: USC Rocket Propulsion Laboratory, Daybreak
dates: "[START] – [END]"
stack: [Power Electronics, PCB Design, Altium, Satellite Comms, Qualification Testing]
summary: A two-cell series supercapacitor bank that decouples average power from instantaneous power for an Iridium 9603N modem on a 1.5 W payload budget. Flew on USC Rocket Propulsion Laboratory's Daybreak vehicle in April 2026 to 331,790 feet.
order: 1
---

## *elevator pitch*

The Iridium 9603N modem pulls roughly 6.5 W during a transmit burst; our payload allowance was 1.5 W continuous. Driven directly, the first transmission collapses the 5 V rail and browns out the radio. I sized and designed a two-cell series supercapacitor bank in Altium that decouples average power from instantaneous power: it accumulates energy while the modem idles, sources the burst, then recharges under a current limit that keeps total system draw inside the allowance. A state-of-charge lockout inhibits transmission until the bank has recovered. The board flew on USC Rocket Propulsion Laboratory's Daybreak vehicle in April 2026, which reached 331,790 feet.

<figure>
  <img src="/figs/supercap_charging/supercap_charging_image_1.png" alt="3D render of the populated Daybreak sensor payload PCB in Altium, with the two-cell supercapacitor bank at the upper left">
  <figcaption>Altium 3D render of the populated board. The series supercapacitor pair sits at the upper left, beside the Iridium 9603N footprint.</figcaption>
</figure>

## *core processes*

Two constraints set the design. The rail floor is hard at 4.5 V, and supercapacitor terminal voltage falls linearly as charge leaves; the question is not whether the bank stores enough energy but whether it holds above 4.5 V through the full burst, including the drop across its own ESR. Second, idle draw of roughly 200 mA at 5 V leaves only about 0.5 W of surplus for recharging, so every transmission carries a mandatory recovery interval. That is what makes the lockout necessary rather than optional.

Commodity cells are rated 2.7 V, so a 5 V rail needs a series pair, giving a 5.4 V maximum. Series stacking splits voltage unevenly across tolerance spread, so the bank needs active balancing, handled by the charger's internal balancer tied to the cell midpoint. The charge path is current-limited because an empty supercapacitor presents as a short circuit; without the limit, the payload trips upstream protection on power-up and never comes up at all. An LTC4041 supercapacitor charger manages the bank, with charge current programmed by its PROG resistor (4.02 kΩ, a 500 mA setting) behind a TPS2553 power switch that limits total input current to 300 mA.

Sizing landed somewhere unintuitive. At 1.4 A for 8 ms into roughly 1 F, the charge removed accounts for about 11 mV of droop against 900 mV of headroom. Nearly all the droop is ohmic, so cell selection follows ESR rather than capacitance. **[NEEDED: cell part number, rated and derated ESR.]**

<figure>
  <img src="/figs/supercap_charging/supercap_charging_image_2.png" alt="Altium schematic sheet of the Iridium power stage: TPS2553 input current limit, LTC4041 supercapacitor charger, and the series supercapacitor bank with balancer">
  <figcaption>Iridium power schematic: TPS2553 input limit, LTC4041 charger and balancer, and the series supercapacitor bank with its feedback network.</figcaption>
</figure>

## *results and improvements*

I authored the hardware qualification protocol for the board: random vibration at 6.8 Grms and thermal cycling across the operating range. It passed both, and passed functional test through integration and pre-flight. **[CONFIRM from the SOP: vibration axes and duration, thermal range and cycle count.]**

The payload returned no data from the flight. The failure was in firmware; the power hardware was operable through pre-flight test and is not implicated. **[NEEDED: one sentence naming which firmware and where it sat. If the lockout is firmware-resident rather than a comparator, say so directly.]**

The improvement is instrumentation. The buffer logs nothing about itself, so a downstream firmware failure leaves no independent record of whether the power system behaved. Logging bank voltage and lockout state onboard, or even a latching brownout supervisor readable on the ground, would have made the board's own performance recoverable without depending on the software that failed.
