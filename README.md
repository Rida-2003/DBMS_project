# 🎓 Batch-wise Semester GPA System

This is a web-based project for calculating and displaying **semester-wise average GPA** for each student batch using academic data. The system uses SQL to fetch and compute GPA data and presents it in a user-friendly interface using HTML, JavaScript, Node.js, and Alpine.js.



## 📌 Features

- Calculate batch-wise average GPA by semester and year
- Query student marks, GPA, and credit hours
- Weighted GPA based on course credit hours (theory + lab)
- Interactive frontend using Alpine.js
- Backend server with Express (Node.js)
- Simple and responsive design (HTML + JS)



## 🧑‍💻 Technologies Used

- Frontend: HTML, JavaScript, Alpine.js  
- Backend: Node.js, Express.js  
- Database:PostgreSQL (SQL)  
- Other Tools: Git, CMD, pgAdmin (for DB management)



## 🗃️ Database Tables

This project uses several tables:
- `student`: Student registration data
- `recap`: Course offering by semester
- `courses`: Course titles and credit hours
- `cmarks`: Student marks
- `grade`: GPA scale
- `hid`: Used to identify final marks entries

## 📃 License
This project is for educational purposes only.

## 🚀 How to Run

 1. Clone the repository:
 git clone https://github.com/Rida-2003/DBMS_project.git
 cd DBMS_project

  2.Install dependencies:
  npm install

 3. Set up your PostgreSQL database:
 Import all .sql files (tables and data)
 Update your database credentials in index.js or .env

 4. Run the app:
 node index.js
 App runs at: http://localhost:4500










