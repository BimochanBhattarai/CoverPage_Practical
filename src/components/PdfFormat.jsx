import "./PdfFormat.css";
import logo from "./logo.png";

export default function PdfFormat() {
  return (
    <div className="A4Paper">
      <div className="wrapper">
        <div className="header">
          <img className="logo" src={logo} alt="Logo"></img>
          <h1 className="clgName">KATHFORD</h1>
        </div>
        <div className="sub-header">
          <h2 className="disc">INTERNATIONAL COLLEGE OF ENGINEERING & MANAGEMENT</h2>
          <div className="one"></div>
          <div className="one"></div>
          <h2 className="Affiliated">AFFILIATED TO TRIBHUVAN UNIVERSITY</h2>
        </div>
        <div className="format">
            <p>Lab Report on</p>
            <p className="subject">Computer Architecture</p>
        </div>
        <div className="lines">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line1"></div>
        </div>
      </div>
    </div>
  );
}
