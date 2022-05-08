import React, { useState, useEffect, useRef } from "react";
import { TweenLite, Power3 } from "gsap";

// photos
import Photo1 from "../../../static/image/photo-1.jpeg";
import Photo2 from "../../../static/image/photo-2.jpeg";
import Photo3 from "../../../static/image/photo-3.jpeg";

// icons
import ArrowLeft from "../../../static/svg/arrow-left.svg";
import ArrowRight from "../../../static/svg/arrow-right.svg";

const testimonials = [
  {
    name: "Wade Warren",
    job: "Software Engineer at Etsy",
    image: `${require("../../../static/image/photo-1.jpeg").default}`,
    paragraph: (
      <q>
        Browse through the pages and form an opinion
        <br />
        about what the website offers. Good or bad, the <br />
        review should focus on what is important to the <br />
        audience. The audience is made up of potential <br />
        Users of the website.
      </q>
    ),
  },
  {
    name: "Wade Warren",
    job: "Software Engineer at Etsy",
    image: `${require("../../../static/image/photo-2.jpeg").default}`,
    paragraph: (
      <q>
        Browse through the pages and form an opinion
        <br />
        about what the website offers. Good or bad, the <br />
        review should focus on what is important to the <br />
        audience. The audience is made up of potential <br />
        Users of the website.
      </q>
    ),
  },
  {
    name: "Wade Warren",
    job: "Software Engineer at Etsy",
    image: `${require("../../../static/image/photo-3.jpeg").default}`,
    paragraph: (
      <q>
        Browse through the pages and form an opinion
        <br />
        about what the website offers. Good or bad, the <br />
        review should focus on what is important to the <br />
        audience. The audience is made up of potential <br />
        Users of the website.
      </q>
    ),
  },
];

const Feedback = () => {
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  let imageList = useRef(null);
  let testimonialList = useRef(null);

  const imageWidth = 420;

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1,
    });
  }, []);

  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeout,
    });
  };

    const slideRight = (index, duration, multiplied = 1) => {
      TweenLite.to(imageList.children[index], duration, {
        x: imageWidth * multiplied,
        ease: Power3.easeout,
      });
    };


  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.Lieaseout,
    });
  };

  //Function for next and prev slide

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1,
    });
  };
  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <div className="feedback">
      <div className="feedback-content">
        <span className="feedback-content--main">
          People’s feedback about Chakri!
        </span>
        <span className="feedback-content--sub">
          Feedback occurs when outputs of a system are routed back as input as
          part <br /> of a chain of cause-and-effect that forms a circuit or
          loop
        </span>
      </div>
      <div className="testimonial-section">
        <div className="testimonial-container">
          <div onClick={prevSlide} className="arrows left">
              <img src={ArrowLeft} alt="left arrow" />
          </div>
          <div className="inner">
            <div className="t-image">
              <ul ref={(el) => (imageList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <img src={testimonials[0].image} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <img src={testimonials[1].image} alt={testimonials[0].name} />
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <img src={testimonials[2].image} alt={testimonials[0].name} />
                </li>
              </ul>
            </div>
            <div className="t-content">
              <ul ref={(el) => (testimonialList = el)}>
                <li className={state.isActive1 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[0].paragraph}</p>
                    <h3 className="name">{testimonials[0].name}</h3>
                    <h4 className="title">{testimonials[0].job}</h4>
                  </div>
                </li>
                <li className={state.isActive2 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[1].paragraph}</p>
                    <h3 className="name">{testimonials[1].name}</h3>
                    <h4 className="title">{testimonials[1].job}</h4>
                  </div>
                </li>
                <li className={state.isActive3 ? "active" : ""}>
                  <div className="content-inner">
                    <p className="quote">{testimonials[2].paragraph}</p>
                    <h3 className="name">{testimonials[2].name}</h3>
                    <h4 className="title">{testimonials[2].job}</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div onClick={nextSlide} className="arrows right">
            <img src={ArrowRight} alt="right arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

