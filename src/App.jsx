import { useEffect, useState } from 'react'
import './App.css'
import MainSection from './components/MainSection'
import Loader from "./components/Loader/Loader";
// import { Example } from './components/Example'
function App() {

  const [loading,setloading] = useState(false);

  const changeLoading =() => {
    setloading((prevState) => !prevState);
  }

  // useEffect(()=> {
  //   let timer = setTimeout(()=>{
  //     changeLoading();
  //   },3600)
  //   return ()=> {
  //     clearTimeout(timer);
  //   }
  // },[])
  return (
            <div style={{backgroundColor:"black",height:"100vh",width:"100%",overflow:"hidden"}}>
              {<Loader setLoading={changeLoading}/>}
              {loading && <MainSection/>}
              {/* <Example/> */}
            </div>
        )
    }
  export default App
                