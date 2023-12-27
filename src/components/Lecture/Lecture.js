import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import "./Lecture.css";
import VideoCard from './VideoCard.js';
import Comments from './CommentSection/Comments.js';
import Description from './Description/Description.js';


function VideoPlayer() {

  const [comments, setComments] = useState([]);
  const recommendedVideos = [
    { LectureNumber : 1 ,
      thumbnailUrl : 'https://i.ytimg.com/vi/92bkNXvnpmg/maxresdefault.jpg',
      id: '92bkNXvnpmg',
      title: 'Video 1' ,
      Description :"This is my video 1",
          quizIntervals: {"00:10":{
            "question":"What is the capital of France?",
            "options":["New York", "London", "Paris", "Dublin"],
            "answerIndex":2
          },
          "00:20":{
            "question":"What is the capital of India?",
            "options":["New York", "Delhi", "Paris", "Dublin"],
            "answerIndex":2
          },
          "01:00":{
            "question":"What is the capital of USA?",
            "options":[" Washington, D.C.", "London", "Paris", "Dublin"],
            "answerIndex":1
          },
        }
    },
    
    { LectureNumber : 2 ,
      thumbnailUrl : 'https://i.ytimg.com/vi/U07wzhfu66M/maxresdefault.jpg',
      id: 'U07wzhfu66M',
      title: 'Video2' ,
      Description :"This is my video 2",
              quizIntervals: {"00:10":{
                "question":"What is the capital of France?",
                "options":["New York", "London", "Paris", "Dublin"],
                "answerIndex":2
              },
              "00:20":{
                "question":"What is the capital of India?",
                "options":["New York", "Delhi", "Paris", "Dublin"],
                "answerIndex":2
              },
              "01:00":{
                "question":"What is the capital of USA?",
                "options":[" Washington, D.C.", "London", "Paris", "Dublin"],
                "answerIndex":1
              },

            },
    comments: [
      {
        "id": 1,
        "text": "Great video!",
        "user": "User1"
      },
      {
        "id": 2,
        "text": "Awesome content!",
        "user": "User2"
      }
      
    ]
  },
  { LectureNumber : 3 ,
    thumbnailUrl : 'https://i.ytimg.com/vi/92bkNXvnpmg/maxresdefault.jpg',
    id: '92bkNXvnpmg', title: 'this is  my Video 3' ,
    Description :"This is my video 3",
              quizIntervals: {"00:10":{
                "question":"What is the capital of France?",
                "options":["New York", "London", "Paris", "Dublin"],
                "answerIndex":2
              },
              "00:20":{
                "question":"What is the capital of India?",
                "options":["New York", "Delhi", "Paris", "Dublin"],
                "answerIndex":2
              },
              "01:00":{
                "question":"What is the capital of USA?",
                "options":[" Washington, D.C.", "London", "Paris", "Dublin"],
                "answerIndex":1
              },

            }
  },

    // Add more recommended videos as needed
  ];
  const [currentVideo, setCurrentVideo] = useState(recommendedVideos[0]);
 
  const loadComments = () => {
    // Hardcoded comments for demonstration
    setComments([
      { id: 1, text: 'Great video!', user: 'User1' },
      { id: 2, text: 'Awesome content!', user: 'User2' },
      // Add more comments as needed
    ]);
  };

  const changeVideo = (video) => {
    setCurrentVideo(video);
    setComments([]); // Clear comments for the new video
  };

  return (
    <div>
      <h2 className='videoTitle'>{currentVideo.title}</h2>
      <div className='TopDiv'>
       
          <div className="video-player">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${currentVideo.id}`} controls={true} width="980px" height="540px"  />
          </div>
          

          {/* Display Next videos */}
          <div className="nextVideos">
          <h3>Upcomming Videos</h3>
          <ul>
            {recommendedVideos.map(video => (
              <a href="#" onClick={() => changeVideo(video)}>
                <VideoCard video={video} />
              </a>
              
            ))}
          </ul>

          </div>
      </div>
      <div className="BottomDiv">
      <Description video={currentVideo} />
    
      <Comments />
      </div>
    </div>
  );
}

export default VideoPlayer;
