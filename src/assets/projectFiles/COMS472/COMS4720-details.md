## Overview
**Probabilistic Escape-Pursuit Planning** was the final project in a **3-part AI path planning series** for **COM S 4720 (Principles of Artificial Intelligence)** at Iowa State University.  

The system simulates a competitive **multi-agent grid environment** where agents must **pursue targets** while also **evading pursuers** under **stochastic movement conditions**.

---

## Tech Stack
- **Algorithms:** A* Search, Monte Carlo Simulation, Heuristic Design  
- **AI Techniques:** Adversarial AI, Probabilistic Modeling, EMA Estimation  
- **Languages & Tools:** Python (NumPy, standard libraries)  

---

## Features

#### Intelligent Agent Design
- Built a **rotation-aware agent** that earned **1st place** in the class playoff, outperforming all other student implementations.  
- Modeled **probabilistic movement uncertainty**, where actions could randomly rotate left, right, or stay on course.  
- Designed a **hybrid estimator** using **Exponential Moving Averages (EMAs)** and a **sliding window** to track and adapt to rotation patterns.  

#### Heuristic Scoring System
- Rewards **central positioning** for tactical flexibility.  
- Penalizes **corners and dead ends** that restrict movement.  
- Evaluates all possible move variants for **safety and effectiveness**.  

#### Adaptive Behavior Modes
The agent dynamically switches between three modes based on game state:  
- **Offensive** – Pursues targets with pathfinding and noise correction.  
- **Defensive** – Escapes threats while maximizing mobility.  
- **Normal** – Holds central positioning for balanced flexibility.  

---

## Results & Impact
- Successfully tested in **100+ grid environments** with static obstacles and randomized uncertainty.  
- Demonstrated **high adaptability and robustness**, consistently outperforming peer agents.  
- Delivered strong performance in a **competitive, adversarial AI setting**.  
- Built entirely in **Python**, focusing on **efficient, self-contained AI logic** with no external dependencies beyond NumPy.  

---