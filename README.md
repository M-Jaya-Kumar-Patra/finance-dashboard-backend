# 💰 Finance Dashboard Backend

A backend system for managing financial records with role-based access control and analytics APIs. Built to demonstrate backend architecture, secure authentication, and data processing.

---

## 🚀 Features

* 🔐 JWT Authentication (Register / Login)
* 👤 Role-Based Access Control (Admin, Analyst, Viewer)
* 💰 Financial Records Management (Create, Read, Update, Delete)
* 🔍 Filtering (by type, category, date range)
* 📊 Dashboard APIs:

  * Total Income
  * Total Expense
  * Net Balance
  * Category-wise breakdown
  * Monthly trends
* 🛡️ Secure password hashing using bcrypt

---

## 🧑‍💻 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JSON Web Tokens (JWT)
* bcrypt.js

---

## 📁 Project Structure

```
src/
 ├── config/
 │    └── db.js
 ├── controllers/
 │    ├── authController.js
 │    ├── recordController.js
 │    └── dashboardController.js
 ├── middleware/
 │    └── authMiddleware.js
 ├── models/
 │    ├── User.js
 │    └── Record.js
 ├── routes/
 │    ├── authRoutes.js
 │    ├── recordRoutes.js
 │    └── dashboardRoutes.js
 └── app.js

server.js
.env
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com//finance-dashboard-backend.git
cd finance-dashboard-backend
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Create `.env` file

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/Zorvyn
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run Server

```
npm run dev
```

---

## 🔐 Authentication APIs

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

---

## 💰 Record APIs

### Create Record

```
POST /api/records
```

### Get Records

```
GET /api/records
```

Query Params:

* type (income / expense)
* category
* startDate
* endDate

---

### Update Record

```
PUT /api/records/:id
```

### Delete Record

```
DELETE /api/records/:id
```

---

## 📊 Dashboard APIs

### Summary

```
GET /api/dashboard/summary
```

Response:

* totalIncome
* totalExpense
* netBalance

---

### Category Breakdown

```
GET /api/dashboard/categories
```

---

### Monthly Trends

```
GET /api/dashboard/trends
```

---

## 🔑 Role-Based Access Control

| Role    | Permissions   |
| ------- | ------------- |
| Viewer  | Read only     |
| Analyst | Read + Create |
| Admin   | Full access   |

---

## 🧠 Design Decisions

* Used **MongoDB** for flexible schema and aggregation support
* Implemented **JWT authentication** for secure API access
* Used **middleware** for authentication and authorization
* Followed **MVC architecture** (controllers, models, routes)
* Used **aggregation pipelines** for analytics APIs

---

## ⚠️ Assumptions

* Each financial record belongs to a single user
* Only Admin and Analyst can create/update/delete records
* Viewer role has read-only access
* Authentication is required for all protected routes

---

## 📌 Future Improvements

* Pagination for large datasets
* API documentation using Swagger
* Unit and integration testing
* Rate limiting for security
* Deployment (Render / Railway / AWS)

---

## 👨‍💻 Author

**M Jaya Kumar Patra**

---

## ⭐ Notes

This project was developed as part of a backend assessment to demonstrate:

* Backend architecture design
* Secure authentication
* Role-based access control
* Data processing and analytics
