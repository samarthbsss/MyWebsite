import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from '../Css/gitcop.css'
import image from '../images/react.png'

const GitComp = () => {
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
    </>
  );
};
export const Teck=()=>{
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

 
  return <div className="teck">
      <h1>
        Teck Stack
      </h1>
       <div className="stack">
       <div style={styles.container}>
          <img src={image} style={style.image} />
        <p>React</p>
        </div>
        
      </div>
    

  </div>
}

export default GitComp;
