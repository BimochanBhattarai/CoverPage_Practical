import { useState } from "react";
import "./PdfFormat.css";
import logo from "./logo.png";

export default function PdfFormat(userData) {
  return (
    <div className="A4Paper">
      <div className="wrapper">
        <div className="header">
          <img className="logo" src={logo} alt="Logo"></img>
          <h1 className="clgName">KATHFORD</h1>
        </div>
        <div className="sub-header">
          <h2 className="disc">
            INTERNATIONAL COLLEGE OF ENGINEERING & MANAGEMENT
          </h2>
          <div className="one"></div>
          <div className="one"></div>
          <h2 className="Affiliated">AFFILIATED TO TRIBHUVAN UNIVERSITY</h2>
        </div>
        <div className="format">
          <p>Lab Report on</p>
          <p className="subject">{userData.data.subject}</p>
        </div>
        <div className="lines">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line1"></div>
        </div>
        <div className="info">
          <div className="sub-by">
            <p className="sub">Submitted by:</p>
            <div className="sameLine">
              <p>Name:</p>
              <p id="name" className="space">
                {userData.data.name}
              </p>
            </div>
            <div className="sameLine">
              <p>Exam Roll No.:</p>
              <p id="rollno" className="space">
                {userData.data.rollno}
              </p>
            </div>
            <div className="sameLine">
              <p>Reg No.:</p>
              <p id="regno" className="space">
                {userData.data.regno}
              </p>
            </div>
            <div className="sameLine">
              <p>Faculty:</p>
              <p id="faculty" className="space">
                {userData.data.faculty}
              </p>
            </div>
            <div className="sameLine">
              <p>Semester:</p>
              <p id="semester" className="space">
                {userData.data.semester}
              </p>
            </div>
          </div>
          <div className="sub-to">
            <p className="sub">Submitted to:</p>
            <p id="teacher">{userData.data.teacher}</p>
          </div>
        </div>
        <div className="date">
          <p>Date:</p>
          <p id="miti">{userData.data.miti}</p>
        </div>
      </div>
    </div>
  );
}
