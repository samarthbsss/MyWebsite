import Navbar from "./Nav";
import Main from "./Main";
import GitComp,{ Teck } from "./GitComp";
import Footer from "./Fotter";
import { Contact } from "./Contact";
import { About } from "./About";



const Home=()=>{
 return<>
 <Navbar/>
 <Main/>
 <About/>
 <GitComp/>
 <Teck/>
 <Contact/>
 <Footer/>

 </>
}

export default Home;