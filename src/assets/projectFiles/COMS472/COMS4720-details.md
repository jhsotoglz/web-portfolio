# Probabilistic Escape-Pursuit Planning

## Overview
**Probabilistic Escape-Pursuit Planning** was the final project in a **3-part AI path planning series** for **COM S 4720 (Principles of Artificial Intelligence)** at Iowa State University.  
The system simulates a competitive **multi-agent grid environment** where agents must **pursue targets** while also **evading pursuers** under **stochastic movement conditions**.

---

## Tech Stack
- **Algorithms:** A* Search, Monte Carlo Simulation, Heuristic Design  
- **AI Techniques:** Adversarial AI, Probabilistic Modeling, EMA Estimation  
- **Languages & Tools:** Python (NumPy, standard libraries)  

---

## Project Highlights
- Developed a **rotation-aware agent** that earned **1st place** in the class playoff, outperforming all other student implementations.  
- Integrated **probabilistic movement modeling**, where actions could rotate **left, right, or stay straight** with random uncertainty.  
- Implemented a **hybrid estimator** using **Exponential Moving Averages (EMAs)** and a **sliding window** to track rotation probabilities for better prediction.  
- Designed a **heuristic scoring system** to:
  - Reward central positioning.  
  - Penalize corners and dead ends.  
  - Evaluate all move variants for both **safety** and **effectiveness**.  

---

## Agent Behavior Modes
The planner dynamically switches between three tactical modes based on the grid state:  

- **⚔️ Offensive** – Pursues targets with A* pathfinding and noise correction.  
- **🛡️ Defensive** – Escapes threats while maximizing mobility.  
- **⚖️ Normal** – Maintains central positioning for flexibility.  

---

## Results
- Tested across **100+ grid environments** with static obstacles and stochastic uncertainty.  
- Demonstrated **high adaptability and robustness**, consistently outperforming other strategies.  
- Built entirely in **Python**, emphasizing **efficient, self-contained AI logic** without external dependencies beyond NumPy.  

---

