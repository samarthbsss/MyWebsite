import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from '../Css/gitcop.css'
import image from '../images/react.png'
import jav from '../images/java.png'
import html from '../images/html.png'
import chakra from '../images/chakraui.png'
import redux from '../images/redux.png'
import node from '../images/node.png'
import boot from '../images/boot.png'
import mongo from '../images/mongo.png'
import mongoose from '../images/mongoose.png' 
import express from '../images/express.svg'

const GitComp = () => {
  const style={
    container: {
      width: '10rem',
      height: '10rem',
      border: '1px solid #ccc',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    image: {
      maxWidth: '10rem',
      maxHeight: '10rem',
      objectFit: 'contain',
    },
  }

  return (
    <>
      <div>
        <h1>GitHub Overview</h1>
        <div>
          <img
            alt="git statux"
            src="https://github-readme-stats.vercel.app/api?username=samarthbsss&theme=dark&hide_border=true&include_all_commits=false&count_private=true"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=samarthbsss&theme=dark&hide_border=true"
            alt=""
          />
        </div>
        <div style={{border:'1px solid red',display:'flex', padding:'3rem', alignContent:'center', justifyContent:'center' }} >
        <GitHubCalendar
          username="samarthbsss"
          style={{
            // background: 'transparent',
            text: "#333",
            // grade4: 'green',
            // grade3: 'green',
            // grade2: 'yellowgreen',
            // grade1: 'orange',
            // grade0: 'red',
          }}
        />
        </div>
  
       
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=samarthbsss&theme=dark&hide_border=true&include_all_commits=false&count_private=true&layout=compact"
          alt="most used"
        />
      </div>
      <div className="teck">
      <h1>
        Teck Stack
      </h1>
       <div className="stack">
       <div style={styles.container} className="box">
          <img src={image} style={style.image} />
        <p>React</p>
        </div>
    
       <div style={styles.container} className="box">
          <img src={jav} style={style.image} />
        <p>JavaScript</p>
        </div>
      
      <div style={styles.container} className="box">
          <img src={html} style={style.image} />
        <p>HTML</p>
      </div>

      <div style={styles.container} className="box">
          <img src={chakra} style={style.image} />
        <p>Chakra Ui</p>
      </div>

      <div style={styles.container} className="box">
          <img src={mongo} style={style.image} />
        <p>Mongo DB</p>
      </div>

      <div style={styles.container} className="box">
          <img src={redux} style={style.image} />
        <p>Redux</p>
      </div>

      <div style={styles.container} className="box">
          <img src={boot} style={style.image} />
        <p>Bootstrap</p>
      </div>

      <div style={styles.container} className="box">
          <img src={mongoose} style={style.image} />
        <p>Mongoose</p>
      </div>

      <div style={styles.container} className="box">
          <img src={express} style={style.image} />
        <p>Express</p>
      </div>

      </div>
    

  </div>
    </>
  );
};


export default GitComp;
