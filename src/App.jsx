import { useState } from 'react'
import './App.css'
import Header from './header';
import CountryTimeComponent from './CountryTimeComponent';



function App() {
  
  return (
    <>
     <div
      style={{
        backgroundImage: `url('/images/bg.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight:'100vh',
        zIndex:'-1',
        
        // Additional background styles if needed
      }}>
      {/*Header Section*/}
       <Header/>
      {/* end of header section */}

       <div className="container">
     <div className="row">
      <div className="container-body">
      <div className="col-md-8 col-sm-12 hello-world">
        <h1 className='hello-style'>Hello World</h1>
        <br />
          <CountryTimeComponent />

      </div>
      <div>
    
     </div>
      </div>
      </div>
    </div>
        </div> 
   

    </>
  )
}

export default App
