# 📚 Best Practices - Authentication Application

This is a demonstration project of a **simple Full-Stack application**, using **React** for the frontend and **Node.js (Express)** for the backend API.  
The main goal is to present a **clear project structure** with **basic authentication practices** (registration and login).

---

## ✨ Features

- **Registration (Sign Up)**: Create a new user.  
  ➤ The password is **hashed using `bcrypt`** before being stored.
- **Login (Sign In)**: Authenticate a user by comparing the provided password with the **stored hash**.
- **Form Validation**: Uses **`Joi`** on the API side to validate data structure (email and password).
- **User Management**: Users are stored in a local file named `users.json`.  
  ⚠ **Note**: This method is purely **educational** and **not suitable for production**.

---

## 🗄 Project Architecture

The project is divided into **two main parts**:

```
frontend/    → User Interface (React)
api/         → Backend Server (Express)
```

---

## 🚀 Getting Started

### ✅ 1. Run the API (Backend)

The API runs on the port defined in the `.env` file.

1. Go to the **project root**
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start   # or node main.js
   ```

> 📎 The entry point depends on your `package.json`, but **`node main.js`** is commonly used.

➡ **More info in** `api/README.md`.

---

### ✅ 2. Run the Frontend (React)

The frontend requires the **API to be running first**.

1. Go to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

➡ **More info in** `frontend/README.md`.

---

## 📄 Detailed Documentation

### 🔹 <a id="documentation-frontend">Frontend Documentation</a>
For more information about frontend development:  
👉 Check **`frontend/README.md`**

### 🔹 <a id="documentation-api">API Documentation</a>
For details about endpoints, backend structure, and controllers:  
👉 Check **`api/README.md`**

---

> 🎯 **Educational Goal:** provide a clean and well-structured foundation to understand the fundamental best practices for authentication in a modern full-stack architecture.


## 🗄 Architecture du Projet

Le projet est structuré en **deux parties principales** :

```
frontend/    → Interface utilisateur (React)
api/         → Serveur Backend (Express)
```

---

## 🚀 Démarrage du Projet

### ✅ 1. Lancer l'API (Backend)

L'API s'exécute sur le port défini dans le fichier `.env`.

1. Allez à la **racine du projet**
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le serveur :
   ```bash
   npm start   # ou node main.js
   ```

> 📎 Le point d'entrée dépend de votre `package.json`, mais **`node main.js`** est généralement utilisé.

➡ **Plus d'infos dans** `api/README.md`.

---

### ✅ 2. Lancer le Frontend (React)

Le frontend nécessite que **l'API soit déjà démarrée**.

1. Accédez au dossier frontend :
   ```bash
   cd frontend
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Démarrez l'application React :
   ```bash
   npm start
   ```

➡ **Plus d'infos dans** `frontend/README.md`.

---

## 📄 Documentation détaillée

### 🔹 <a id="documentation-frontend">Documentation Frontend</a>
Pour plus d’informations sur le développement du frontend :  
👉 Consultez **`frontend/README.md`**

### 🔹 <a id="documentation-api">Documentation API</a>
Pour les détails concernant les endpoints, la structure backend et les contrôleurs :  
👉 Consultez **`api/README.md`**

---

> 🎯 **Objectif pédagogique :** fournir une base claire et propre pour comprendre les bonnes pratiques fondamentales en matière d’authentification dans une architecture full-stack moderne.
