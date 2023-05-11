import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitComp = () => {
  return (
    <>
      <div>
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
        <div style={{border:'1px solid red', alignContent:'center', justifyContent:'center' }} >
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

export default GitComp;
