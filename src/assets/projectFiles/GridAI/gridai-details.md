**GridAI** is an advanced web-based platform developed at **Iowa State University** to address challenges in modern energy distribution systems.  
It simplifies data analytics, provides seamless interaction with live telemetry, and enables operators to maintain **grid stability and efficiency**.

The platform offers solutions for:
- Predicting outages  
- Optimizing power flow  
- Managing distributed energy resources (DERs)  

---

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Monaco Editor  
- **Backend:** Kafka, Docker, Firebase, WebSocket  
- **Build Tools:** Babel  

---

## My Contributions
As part of the senior design team, I was responsible for major **front-end enhancements** and **real-time widget development**:

### 🔹 Real-Time Widget System
- Designed and implemented a **widget editor with live telemetry integration**.  
- Built a **four-quadrant layout** using React + TypeScript for widget editing.  
- Integrated **Monaco Editor** for live code editing with **Babel-powered JSX previews**.  
- Allowed users to customize widgets via **template code, controller scripts, and metadata** (title, measurement type, Kafka node key).

### 🔹 Widget Editor & Dashboard Features
- Developed widget creation forms with **predefined templates**.  
- Implemented widget list manager for organizing dashboard components.  
- Added error-isolated rendering using **React boundaries**.  
- Built telemetry subscription handlers to manage Kafka-based live data streams.  

### 🔹 Backend Contributions
- Helped extend the **Kafka telemetry system** to filter, transform, and stream live data via WebSocket.  
- Implemented **RESTful API endpoints** for widget management (CRUD operations).  
- Secured API routes with **Firebase token authentication**.  
- Persisted widget configurations in **Firestore** with **real-time sync** for seamless dashboard updates.  

---