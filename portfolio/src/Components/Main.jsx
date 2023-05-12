import styles from '../Css/main.css'
import logo from '../images/layered-waves-haikei.svg'

const Main=()=>{

    return <div >
            <div style={{border:"1px solid black", padding:'30px'}}>
            </div> 
            <div className="main">
            <div className='nameholder'>
                <div>
                <h3 className='holder'>Hi, My name is</h3>
                <h1 className='holder'>Samarth B S</h1>
                <h3 className='holder'>i am a Full Stack Developer.</h3>

                </div>
               
            </div>                
            <img src='https://placehold.co/400' alt='profile' border-radius='50%'/>
            </div>
          
       
    </div>
}



export default Main;
