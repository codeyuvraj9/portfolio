import React from 'react'

const PDF_FILE_URL = "http://localhost:3000/YuvrajRes.pdf"

export default function About() {
  const handleDownload = (url) => {
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', "MyResume.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };


  return (
    <div style={{ backgroundColor: "#2E2F31", color: "white", padding: "3vh 9vw", textAlign: "center"}}>
      <h3>Who am I?</h3>
      <h4>I am Yuvraj Singh Rajput, a Full Stack Developer</h4>
      <p style={{ padding: "0 3vw" }}>I have worked on famous MERN stack. I have made various projects on it such as GoFood, Keeper, To-Do List App etc.
        I started my journey with learning HTML, CSS and JavaScript and then further improved my tech stack by learning frameworks such as
        BootStrap, Express js etc. I have also learned to integrate my web app with database using MongoDB.
        Apart from my web development skills, I have also learned C++ laguage and am well versed in it. I have solved more than 400
        questions on Data Structures and Algorithms on various platforms like LeetCode, GeeksForGeeks, CodeStudio and InterviewBit.
        I have also learned SQL.
      </p>

      <hr style={{ border: "bold", borderWidth: "0.2vw" }} />

      <table style={{backgroundColor:"#2E2F31", marginLeft:"27vw"}}>
        <tbody>
          <tr>
            <td>Name : Yuvraj Singh Rajput</td>
            <td>From : Jabalpur, Madhya Pradesh</td>
          </tr>
          <tr>
            <td>Age : 22</td>
            <td>Email : rajputyuvrajsingh9@gmail.com</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-lg btn-success" style={{ color: "black", margin: "4vh 0 0" }} onClick={() => { handleDownload(PDF_FILE_URL); }}>Download CV</button>

    </div>
  )
}
