import React, { useState } from "react";
import "./Submissions.css"; // Import CSS file

const Submissions = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [comment, setComment] = useState("");

  const submissions = [
    {
      rollNo: 101,
      name: "Amit Sharma",
      project: "AI Chatbot",
      file: "ai_chatbot.pdf",
      date: "2025-03-01",
    },
    {
      rollNo: 102,
      name: "Priya Verma",
      project: "E-commerce Website",
      file: "ecommerce_website.docx",
      date: "2025-03-02",
    },
    {
      rollNo: 103,
      name: "Rahul Gupta",
      project: "Student Management System",
      file: "student_mgmt.xlsx",
      date: "2025-03-03",
    },
    {
      rollNo: 104,
      name: "Sneha Patel",
      project: "IoT Smart Home",
      file: "iot_smart_home.pdf",
      date: "2025-03-04",
    },
    {
      rollNo: 105,
      name: "Vikram Singh",
      project: "Blockchain Voting System",
      file: "blockchain_voting.pptx",
      date: "2025-03-05",
    },
  ];

  // Function to accept the submission
  const handleAccept = (rollNo) => {
    alert(`Submission accepted for Roll No: ${rollNo}`);
  };

  // Function to open the comment popup
  const handleAddComment = (student) => {
    setSelectedStudent(student);
    setComment(""); // Reset comment input
  };

  // Function to submit the review
  const handleSubmitComment = () => {
    alert(`Review submitted for ${selectedStudent.name}: ${comment}`);
    setSelectedStudent(null); // Close the popup
  };

  // Function to cancel the comment popup
  const handleCancelComment = () => {
    setSelectedStudent(null); // Close the popup
  };

  return (
    <div className="card-container">
      {submissions.map((submission) => (
        <div key={submission.rollNo} className="card">
          <h3>
            {submission.name} ({submission.rollNo})
          </h3>
          <p>
            <strong>Project:</strong> {submission.project}
          </p>
          <p>
            <strong>Submitted On:</strong> {submission.date}
          </p>
          <a href={`uploads/${submission.file}`} download>
            Download File
          </a>
          <div className="button-group">
            <button
              className="accept-btn"
              onClick={() => handleAccept(submission.rollNo)}
            >
              Accept
            </button>
            <button
              className="comment-btn"
              onClick={() => handleAddComment(submission)}
            >
              Add Comment
            </button>
          </div>
        </div>
      ))}

      {/* Enhanced Comment Popup */}
      {selectedStudent && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Review for {selectedStudent.name}</h3>
            <textarea
              placeholder="Write your review here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="popup-buttons">
              <button className="cancel-btn" onClick={handleCancelComment}>
                Cancel
              </button>
              <button className="submit-btn" onClick={handleSubmitComment}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Submissions;
