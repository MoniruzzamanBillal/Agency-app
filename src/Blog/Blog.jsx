import React from "react";
import "./Blog.css";
import videoImage from "../images/video.png";
import ArticleImg from "../images/article.png";
import CaseStudyImg from "../images/case-study.png";

const BlogCardInfo = [
  {
    //  <i class="ri-arrow-right-line"></i>
    heading: "Video",
    img: videoImage,
    describe: `To know about work.Watch some vid....`,
    icon: "ri-arrow-right-line",
  },
  {
    //  <i class="ri-arrow-right-line"></i>
    heading: "Article",
    img: ArticleImg,
    describe: `Do you want to improve the way your brand interact with customers?Let's tal...`,
    icon: "ri-arrow-right-line",
  },
  {
    //  <i class="ri-arrow-right-line"></i>
    heading: "Case study",
    img: CaseStudyImg,
    describe: `Boost your conversation rate with u...`,
    icon: "ri-arrow-right-line",
  },
];

export default function Blog() {
  return (
    <>
      <div className="container">
        <div className="BlogContainer" id="Blog">
          <div className="BlogWrapper">
            <div className="BlogTop">
              <h3 className="BlogTopHeading">Our Vlog</h3>
              <h2 className="BlogTopDescription">
                Let's have a look from our
                <span className="BlogTopDescriptionSpan"> recent blog</span>
              </h2>
            </div>
            <div className="BlogCardContainer">
              {BlogCardInfo.map((ele, index) => (
                <div className="BlogCard">
                  <div className="CardWrapper">
                    <div className="BlogCardTop">
                      {/* <h2>Video</h2> */}
                      <h2>{ele.heading}</h2>
                    </div>
                    <div className="BlogVideoContainer">
                      {/* <img src={videoImage} alt="videoImage" /> */}
                      <img src={ele.img} alt="videoImage" />
                    </div>
                    <div className="BlogCardBottom">
                      {/* <p className="blogCardDescription">
                      To know about work.Watch some vid....
                    </p> */}
                      <p className="blogCardDescription">{ele.describe}</p>
                    </div>
                    <div className="BlogCardIcon">
                      {/* <i class="ri-arrow-right-line"></i> */}
                      <i class={ele.icon}></i>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="CardWrapper">
                <div className="BlogCardTop">
                  <h2>Video</h2>
                </div>
                <div className="BlogVideoContainer">
                  <img src={videoImage} alt="videoImage" />
                </div>
                <div className="BlogCardBottom">
                  <p className="blogCardDescription">
                    To know about work.Watch some vid....
                  </p>
                </div>
                <div className="BlogCardIcon">
                  <i class="ri-arrow-right-line"></i>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
