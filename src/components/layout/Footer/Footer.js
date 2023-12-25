import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    
    <footer id="footer">
      
      
      <div className="leftFooter">
        <h4>Lecture App</h4>
        <p>Download App for Android and IOS mobile phone</p>
        
      </div>

      <div className="midFooter">
        <h1>LectureApp</h1>
        <p> LectureApp is an innovative web platform designed to revolutionize online education. Seamlessly combining video lectures, interactive quizzes, and a dynamic comment section, LectureApp provides instructors with a user-friendly space to share knowledge and engage with students. With a responsive design, personalized user profiles, and secure authentication, the platform offers a comprehensive learning experience. Students can effortlessly access a rich video library, participate in discussions, and assess their understanding through integrated quizzes. LectureApp aims to create a collaborative and immersive learning environment, fostering the exchange of ideas and enhancing the educational journey for both instructors and students. </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/nimish.nimish.98/">facebook</a><br></br>
        <a href="https://www.instagram.com/chaturvedinimish/">Instagram</a><br></br>
        <a href="https://www.linkedin.com/in/nimish-chaturvedi-9b27321bb/">linkedin</a>
      </div>
    </footer>
  );
};

export default Footer;