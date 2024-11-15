import React from "react";

const Education = () => {
  return (
    <section
      className="resume-section"
      id="education"
      style={{ paddingTop: "80px", paddingBottom: "5px" }}
    >
      <div className="resum-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="subheading mb-3">
          <div className="info">
            <p className="date">2024.04.25 - 2024.10.23</p>
            <p className="company" style={{ fontSize: "25px" }}>
              한국소프트웨어인재개발원 144기 <br />
              최종 프로젝트(Pawfit) 최우수상 수료
            </p>
            <p className="position" style={{ fontSize: "20px" }}>
              " 빅데이터 분석 서비스 구현을 위한 JAVA / PYTHON 풀스택 전문가
              양성 과정 "
            </p>
            <p
              className="description_education"
              style={{ fontFamily: "monospace", fontSize: "15px" }}
            >
              Java 프로그래밍을 학습해 HTML, CSS, JavaScript, JSP, Spring
              Framework 를 활용한 웹 개발 기술을 학습했습니다. <br></br>또한,
              SQL을 통한 데이터베이스 관리와 Python 프로그래밍을 학습하여 웹
              크롤링을 이용한 데이터 수집 기법을 익혔으며, <br></br>머신러닝과
              딥러닝의 이론 및 실습을 통해 데이터 분석 역량을 키웠습니다.
              <br></br>
              마지막으로, AWS 클라우드 환경에서 인공지능 및 딥러닝 분석 서비스를
              구축하는 경험을 쌓았습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
