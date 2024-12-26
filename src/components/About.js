import React from "react";

const About = () => {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Portfolio
          <span className="text-primary"> 김은하</span>
        </h1>
        <div className="subheading mb-5">
          · phone : 010-9155-2064 <br></br>· E-mail :
          <a href="mailto:dmsgk8383@naver.com"> dmsgk8383@naver.com</a>
        </div>
        <p className="lead mb-5">
          안녕하세요!
          <br />
          평소 저의 좌우명은 <b style={{ color: "#000" }}>
            '긍정적으로 살자!'
          </b>{" "}
          입니다.
          <br />
          <br />
          저는 긍정적으로 생각하는 데에도 노력이 필요하다고 생각합니다.
          <br />
          이런 마음가짐으로, 새로운 기술을 배우는 데 주저하지 않고 항상
          발전하려고 노력하여
          <br />
          주변에 긍정적인 영향을 줄 수 있는 사람이 되고 싶습니다.
          <br />
          <br />
        </p>
        <div className="social-icons text-center">
          <a
            className="social-icon"
            href="https://github.com/eunhaKim8"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
