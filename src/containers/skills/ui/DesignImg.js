import React, { Component, useRef, useEffect } from "react";
import lottie from 'lottie-web';
import data from "./mlops.jpg"

// for animated svgs use json file
// export default function DesignImg(){
//     const container = useRef(null)
//     useEffect(() => {
//       lottie.loadAnimation({
//         container: container.current,
//         renderer: 'svg',
//         loop: true,
//         autoplay: true,
//         animationData: require('./mlops.png')
//       })
//     }, [])
//     return (
//       <div className="App">
//         <div className="container" ref={container}></div>
//       </div>
//     );
// }

// for static svgs
class DesignImg extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img src={data} alt="" width="450"/>
        </div>
      </div>
    );
  }
}

export default DesignImg;
