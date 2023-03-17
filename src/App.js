// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Navbar from "./components/Navbar"
// import Sidebar from "./components/Sidebar";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Header />

//       <div class="row">
//         <div className="col-md-3">
//       <Sidebar />
//       </div>
//       <div className="col-md-9">
//       <MainContent />
//       </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default App;

import Footer from "./Profilepage/Footer";
import Header from "./Profilepage/Header";
import MainContent from "./Profilepage/MainContent";
import Navbar from "./Profilepage/Navbar"
import Sidebar from "./Profilepage/Sidebar";
import Head from "./Profilepage/Head";
import Try from "./Profilepage/try";
import "./App.css"

function Profilepicture() {
  return (
    <div>
   
      <Navbar />
      <div class="row">
      <div className="col-md-6">
      <Header />
     </div>
      <div className="col-md-6"> 
      <Head />
        </div>
        <div className="col-md-4">
      <Sidebar />
      </div>
      <div className="col-md-4">
      <MainContent />
      </div>
      <div className="col-md-4">
      <Try />
      </div>
      </div>
      <Footer />
    </div>
  )
}


export default Profilepicture;