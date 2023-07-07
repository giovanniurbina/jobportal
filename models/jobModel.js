
const mysql = require('mysql2');

const jobSchema = `
CREATE TABLE jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(70) NOT NULL,
  description TEXT NOT NULL,
  salary VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  available BOOLEAN DEFAULT TRUE,
  jobType INT NOT NULL,
  user INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (jobType) REFERENCES jobTypes(id),
  FOREIGN KEY (user) REFERENCES users(id)
);
`;

module.exports = jobSchema;



// const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema;


// const jobSchema = new mongoose.Schema({

//     title: {
//         type: String,
//         trim: true,
//         required: [true, 'Title is required'],
//         maxlength: 70,
//     },

//     description: {
//         type: String,
//         trim: true,
//         required: [true, 'Description is required'],
//     },
//     salary: {
//         type: String,
//         trim: true,
//         required: [true, 'Salary is required'],
//     },
//     location: {
//         type: String,
//     },
//     available: {
//         type: Boolean,
//         default: true
//     },
//     jobType: {
//         type: ObjectId,
//         ref: "JobType",
//         required: true
//     },
//     user: {
//         type: ObjectId,
//         ref: "User",
//         required: true
//     },



// }, { timestamps: true })

// module.exports = mongoose.model("Job", jobSchema);