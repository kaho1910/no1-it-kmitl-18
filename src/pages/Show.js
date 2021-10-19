import React, { useState, useEffect, useRef } from 'react'
import './Show.css'
function Show() {
  const frameCount = 105;
  const html = document.body;
  const[image, setImage] = useState(null);
  const canvas = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const [frameIndex, setFrame] = useState(0);
  const [src, setSrc] = useState(`https://gmedia.playstation.com/is/image/SIEPDC/ps5-hero-widescreen-image-sequence-${frameIndex.toString().padStart(4, '0')}?wei=1920&hei=1080&qlt=70,1&resMode=bilin&fmt=jpg`)
  useEffect(()=> {
    const frame = new Image();
    frame.src = src;
    frame.onload = () => setImage(frame);
  }, [])
  useEffect(() =>{
    if(image && canvas){
      const context = canvas.current.getContext("2d");
      context.drawImage(image, 0, 0)
    }
  }, [image, canvas])
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  useEffect(() =>{
    setFrame(Math.min(frameCount - 1,Math.ceil((scrollPosition / maxScrollTop) * frameCount)))
    setSrc(`https://gmedia.playstation.com/is/image/SIEPDC/ps5-hero-widescreen-image-sequence-${(Math.min(frameCount - 1,Math.ceil((scrollPosition / maxScrollTop) * frameCount))).toString().padStart(4, '0')}?wei=1920&hei=1080&qlt=70,1&resMode=bilin&fmt=jpg`);
  }, [scrollPosition])
  useEffect(()=> {
    const frame = new Image();
    frame.src = src;
    frame.onload = () => setImage(frame);
  }, [src])
    return (
      <div className="App" id="App">
        <canvas ref={canvas} width="1730" height="973"></canvas>
        {console.log(frameIndex, src)}
      </div>
    );
}

export default Show;