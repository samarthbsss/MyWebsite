import Navbar from "./Nav";
import Main from "./Main";
import GitComp from "./GitComp";
import Footer from "./Fotter";
import { Contact } from "./Contact";
import { About } from "./About";



const Home=()=>{
 return<>
 <Navbar/>
 <Main/>
 <About/>
 <GitComp/>
 {/* <Teck/> */}
 <br></br>
 <Contact/>
 <Footer/>

 </>
}

export default Home;