# Cyclops Vision

> *One eye. All the depth you need.*

Real-time monocular depth estimation on a Raspberry Pi 5, built in 48 hours at the **European Defense Tech Hackathon Porto, 2026**. **2nd place.**

📊 **[View the pitch deck →](https://whothemann.github.io/cyclops-vision-presentation/Presentation/)**
&nbsp;&nbsp;&nbsp;&nbsp;Slide presentation, deployed via GitHub Pages.

🛠️ **[See the engineering repo →](https://github.com/whothemann/cyclops-vision-depth)**
&nbsp;&nbsp;&nbsp;&nbsp;Training code, ablation experiments, ONNX export, and Pi 5 inference.

---

## What it is

A drone needs to know how far away things are. The conventional answers all carry a tax: stereo cameras need calibration and baseline, time-of-flight sensors are expensive, LiDAR adds weight and cost. Cyclops Vision asks whether a single ordinary camera plus a small neural network can deliver "good enough" depth for situational awareness on a power-and-weight-constrained platform — and at what cost.

The result: a fine-tuned [RTMonoDepth_s](https://github.com/danielenricocahall/RT-MonoDepth) model (~1.3 M parameters), distilled from Depth Anything V3 Nested as the teacher, running as a ~5 MB ONNX model at **5–10 FPS on a Raspberry Pi 5** with no PyTorch runtime dependency.

## Bill of materials

| Component                              | Cost  |
|----------------------------------------|------:|
| Compute (STM32MP25 + memory)           | 25 € |
| Camera (Sony IMX296 + optics)          | 60 € |
| Power & I/O                            | 20 € |
| PCB & assembly                         | 18 € |
| Housing & mechanical                   | 25 € |
| Calibration & QC                       | 27 € |
| **Total BOM (at 1,000 units)**         | **175 €** |

Scales to ~105 € at 10k units.

## Repository contents

This repo is the **pitch artifact**: the slide deck, branding assets, and presentation site. The actual training and deployment code lives in the [companion engineering repo](https://github.com/whothemann/cyclops-depth).

```
.
├── Presentation/                # HTML slide deck (deployed via GitHub Pages)
├── logo/                        # Project logo (HTML / assets)
└── animation/                   # Supporting animation assets
```

## Team

Built in 48 hours by **Niclas**, **Luca**, and **Lars Husemann** at the European Defense Tech Hackathon, Porto, 2026.

## See also

- 🔧 **Engineering repo** — [cyclops-depth](https://github.com/whothemann/cyclops-vision-depth) — training code, ablations (v1–v4), ONNX export, Pi 5 inference, full training report.
