import React from 'react'
import i1 from '../Data/i1.jpg'
import i2 from '../Data/i2.jpg'
import i3 from '../Data/i3.jpg'
import i4 from '../Data/i4.jpg'
import i5 from '../Data/i5.jpg'
import i6 from '../Data/i6.jpg'
import {
    faGithub,
    faFacebook,
    faInstagram,
    
  } from "@fortawesome/free-brands-svg-icons";
  

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const slides = [
    {
      title: "Aadithya Niranjan",
      des: "Frontend Web developer",
      githublink: "https://github.com/AadiNir",
      linkedinlink:"https://www.linkedin.com/in/aadithya-niranjan-817103214",
      instagramlink:"https://www.instagram.com/_____aadithyaniranjan_____/",
      image: i1
    },
    {
      title: "Sabari Ganesh",
      des: "Backend web developer",
      githublink: "https://github.com/AadiNir",
      linkedinlink:"https://www.linkedin.com/in/aadithya-niranjan-817103214",
      instagramlink:"https://www.instagram.com/_____aadithyaniranjan_____/",      image:i2
    },
    {
      title: "Dhananjay",
      des: "Frontend web developer",
      githublink: "https://github.com/AadiNir",
      linkedinlink:"https://www.linkedin.com/in/aadithya-niranjan-817103214",
      instagramlink:"https://www.instagram.com/_____aadithyaniranjan_____/",      image:i6
    },
    {
      title: "Madhavan",
      des: "Frontend web developer",
      githublink: "https://github.com/AadiNir",
      linkedinlink:"https://www.linkedin.com/in/aadithya-niranjan-817103214",
      instagramlink:"https://www.instagram.com/_____aadithyaniranjan_____/",      image:i4
    },
    {
      title: "Sai",
      des: "Frontend web developer",
      githublink: "https://github.com/AadiNir",
      linkedinlink:"https://www.linkedin.com/in/aadithya-niranjan-817103214",
      instagramlink:"https://www.instagram.com/_____aadithyaniranjan_____/",      image:i5
    }
  ];
  
  function useTilt(active) {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  }
  
  const initialState = {
    slideIndex: 0
  };
  
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
      };
    }
  };
  
  function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
  
    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
        <div
          className="slideBackground"
          style={{
          }}
        />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <p className='slidedes'>{slide.des}</p>
            
            <a className="slideSubtitle" href={slide.des}><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            <a className="slideDescription" href={slide.linkedinlink}><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a className="Slidelinkedin" href={slide.instagramlink}><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
          </div>
        </div>
      </div>
    );
  }
  

const Slider = () => {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  return (
    <div className="slides">
    <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>

    {[...slides, ...slides, ...slides].map((slide, i) => {
      let offset = slides.length + (state.slideIndex - i);
      return <Slide slide={slide} offset={offset} key={i} />;
    })}
    <button onClick={() => dispatch({ type: "PREV" })}>›</button>
  </div>
  )
}

export default Slider