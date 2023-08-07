import React, { useEffect } from "react";
import { useRef } from "react";
import Image from "next/image";

export default function SimpleSlider(props) {
  let [galleryState, setGalleryState] = React.useState(null);
  let [index, setIndex] = React.useState(0);
  let [imageList, setImgList] = React.useState([]);
  const updateImageList = (currentIndex) => {
    return props.imgData.map((x, i) => {
      let publicId = x.attributes.url.split("/").pop().split(".")[0];
      let optimizedUrl = `https://res.cloudinary.com/deoh6bmf7/image/upload/q_auto,f_auto/large_${publicId}.jpg`;

      return (
        <Image
          className={"h-full pointer-events-auto bg-transparent relative z-0"}
          key={x.id}
          src={optimizedUrl}
          width={x.attributes.width}
          height={x.attributes.height}
          alt={x.attributes.caption}
          loading={
            i >= currentIndex - 1 && i <= currentIndex + 1 ? "eager" : "lazy"
          } // Load only the current, next, and previous images eagerly
        />
      );
    });
  };

  // Initialize image list
  useEffect(() => {
    setImgList(updateImageList(index));
  }, [props.imgData]);

  useEffect(() => {
    let arrowLeft = document.getElementById("arrowLeft");
    let arrowRight = document.getElementById("arrowRight");
    arrowLeft.addEventListener("click", previous);
    arrowRight.addEventListener("click", next);
  }, []);

  const sectionEl = useRef(null);
  const imageEl = useRef(0);

  let [sectionWidth, setSectionWidth] = React.useState({});
  let [windowWidth, setWindowWidth] = React.useState({});
  let [imageWidth, setImageWidth] = React.useState({});
  let navWidth = windowWidth - sectionWidth;

  useEffect(() => {
    setSectionWidth(document.getElementById("main").offsetWidth);
    console.log(document.getElementById("main").offsetWidth);
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  let half = sectionWidth / 2;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let next = () => {
    setIndex((prev) => {
      let nextIndex = prev < props.imgData.length - 1 ? prev + 1 : 0;
      setImgList(updateImageList(nextIndex)); // Update the image list when the index changes
      return nextIndex;
    });
  };

  let previous = () => {
    setIndex((prev) => {
      let previousIndex = prev > 0 ? prev - 1 : props.imgData.length - 1;
      setImgList(updateImageList(previousIndex)); // Update the image list when the index changes
      return previousIndex;
    });
  };
  // ...
  let [enterLeft, setEnterLeft] = React.useState(false);
  let [enterRight, setEnterRight] = React.useState(false);
  let [leftPosition, setLeftPosition] = React.useState([]);

  let halfClick = leftPosition.x - navWidth;

  return (
    <section ref={sectionEl} className=" max-h-80 flex shrink max-w-full ">
      <div
        onMouseMove={(e) => {
          setLeftPosition({ x: e.clientX, y: e.clientY });
        }}
        className=" w-3/4  h-5/6 flex justify-center basis-11/12 my-5    "
        onClick={halfClick < half ? previous : next}
      >
        <div
          id="slider-layout"
          style={{ width: sectionWidth }}
          className="w-3/4 h-full h-max-full z-99 absolute grid grid-cols-2"
        >
          <div
            id="left"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => {
              setEnterLeft(true);
            }}
            onMouseLeave={() => {
              setEnterLeft(false);
            }}
            onMouseMove={(e) => {
              setLeftPosition({ x: e.clientX, y: e.clientY });
            }}
            onClick={() => enterLeft && previous}
            className="  h-full   z-99 relative  "
          ></div>

          <div
            id="right "
            style={{ cursor: "pointer" }}
            onMouseEnter={() => {
              setEnterRight(true);
            }}
            onMouseLeave={() => {
              setEnterRight(false);
            }}
            onMouseMove={(e) => {
              setLeftPosition({ x: e.clientX, y: e.clientY });
              console.log(leftPosition);
            }}
            onClick={() => enterRight && next}
            className="  h-screen z-0 relative  "
          ></div>
        </div>

        {imageList[index]}
      </div>
    </section>
  );
}
