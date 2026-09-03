# SAGA Platform Services 🚀

Welcome to the central infrastructure and platform repository for the **SAGA** ecosystem. This directory manages system infrastructure, service discovery, reverse proxy, and central configuration files for all microservices in the workspace.

---

## 👤 Student Information

* **Student Name:** Sachindu Chirau
* **Student ID:** `241711023`
* **GCP Project ID:** `directed-post-506508-i4`

---

## 🛠️ Common Platform Stack

* **Programming Language:** Java 25
* **Core Framework:** Spring Boot 4.0.1 / 4.1.0
* **Service Coordination:** Spring Cloud 2025.1.2
* **Build System:** Maven

---

## 📦 Infrastructure Child Repositories

The platform consists of three core infrastructure components that must be managed in a specific lifecycle order:

### 1. Service Registry (`service-registry`)
* **Role:** Dynamic Service Discovery and Registry.
* **Port:** `8761`
* **Details:** Built on Netflix Eureka Server. All domain microservices dynamically register their status and ephemeral ports here, enabling load balancing and decoupled service-to-service routing.
* **Startup Order:** **Must be started first.**

### 2. Config Server (`config-server`)
* **Role:** Centralized Configuration Management.
* **Port:** `8888`
* **Details:** Uses Spring Cloud Config Server. It reads centralized configuration property files (`.yaml`) from the internal path `config-server/src/main/resources/configurations` and serves configuration parameters to other services on initialization.
* **Startup Order:** **Started second.**

### 3. API Gateway (`api-gateway`)
* **Role:** Routing reverse-proxy & Edge Security.
* **Port:** `8084`
* **Details:** Uses Spring Cloud Gateway. It acts as the single gateway proxy routing external client requests to internal microservices registered on Eureka.
* **Routing Table:**
  * `/api/v1/users/**` $\rightarrow$ User Service
  * `/api/v1/salon/**` $\rightarrow$ Salon Service
  * `/api/v1/appoinments/**` $\rightarrow$ Appoinment Service
* **Startup Order:** **Started last**, after all domain microservices are running.

---

## 🚀 Getting Started & Startup Sequence

To spin up the platform infrastructure correctly, follow this strict startup order:

1. **Start Service Registry:**
   ```bash
   cd service-registry
   ./mvnw spring-boot:run