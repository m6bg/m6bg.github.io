---
title: Supercapacitor Power Buffer
subtitle: A bidirectional power stage for smoothing pulsed DC loads
date: 2025-03-15
stack: [Altium, LTspice, STM32]
summary: A compact supercapacitor buffer that supplies short current peaks while keeping the upstream rail stable. Designed, simulated, assembled, and characterized from transient response through thermal performance.
order: 1
---

## Overview

This project explores a bidirectional buck-boost stage that places a supercapacitor bank between a constrained DC source and a pulsed load. The controller charges the bank when headroom is available, then supports the rail during fast load steps.

## Design targets

| Parameter | Target | Measured |
| --- | ---: | ---: |
| Input voltage | 12 V nominal | 11.8–12.2 V |
| Peak load | 8 A for 250 ms | 8 A for 250 ms |
| Rail droop | < 500 mV | 310 mV |
| Switching frequency | 250 kHz | 248 kHz |

> The primary constraint was limiting source current without slowing the load's transient response.

## Control approach

The STM32 samples the source current, rail voltage, and capacitor voltage. A fast inner current loop handles the converter while a slower supervisory loop sets charge and discharge limits.

```c
current_error = current_target - current_measured;
duty_command += kp * current_error + ki * current_integral;
duty_command = clamp(duty_command, DUTY_MIN, DUTY_MAX);
```

## Results

Bench testing confirmed stable transitions between charge and assist modes. The next revision will add per-cell monitoring and reduce the high-current loop area in the PCB layout.
