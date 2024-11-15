import React from "react";

const Experience = () => {
  return (
    <section
      className="resume-section"
      id="experience"
      style={{ paddingTop: "80px", paddingBottom: "5px" }}
    >
      <div className="resum-section-content">
        <h2 className="mb-5">Career</h2>
        <div className="subheading mb-3">
          <div className="container">
            <div className="content">
              <div className="left-column">
                <p className="date">2023.04 - 2024.04</p>
                <p className="company">헬로서치(주)</p>
                <p className="position">파견직</p>
              </div>
              <div className="right-column">
                <p>
                  하나손해보험 전략채널팀에서 파견직으로 1년 간 근무하였습니다.
                </p>
                <p>
                  주로 매 월 영업 실적에 대한 자료를 집계하여 작성, 보고하는
                  업무와 사업비 마감하는 업무를 하였습니다.
                </p>
                <p>
                  그리고 청약지원실 인력관리를 지원하였으며, 현장에서의 영업
                  활동 관련하여 사무 업무를 지원하였습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content">
              <div className="left-column">
                <p className="date">2022.11 - 2023.01</p>
                <p className="company">
                  임서영영재교육
                  <br />
                  연구소
                </p>
                <p className="position">정규직</p>
              </div>
              <div className="right-column">
                <p>
                  초등학교 저학년 교육 시설로 원내 공문 작성, 비품 관리, 시설
                  관리 등의 총무 업무를 맡았습니다.
                </p>
                <p>
                  2개월 재직 중 재정 악화로 인해 오래다니지 못하고
                  퇴사하게되었습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content">
              <div className="left-column">
                <p className="date">2021.10 - 2022.09</p>
                <p className="company">
                  탐앤탐스
                  <br />
                  성신여대점
                </p>
                <p className="position">정규직</p>
              </div>
              <div className="right-column">
                <p>
                  바리스타 자격증을 취득하여 탐앤탐스 카페에서 근무하였습니다.
                </p>
                <p>고객 응대, 음료 제조 등의 업무를 맡았습니다.</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content">
              <div className="left-column">
                <p className="date">2017.03 - 2021.07</p>
                <p className="company">텔게이트(주)</p>
                <p className="position">정규직</p>
              </div>
              <div className="right-column">
                <p>
                  통신 마케팅 회사로 기업 영업을 담당하는 부서에서
                  근무하였습니다.
                </p>
                <p>
                  주된 업무로 이메일을 통해 고객(기업)과의 영업 관리, 사용 중인
                  인터넷 전화, 웹 팩스 등 신규 또는 변경 등의 전산 업무를
                  맡았습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h2 className="mb-5">License</h2>
        <div className="subheading mb-3">
          <li>SQLD | SQL 개발자 (2023.04)</li>
          <li>바리스타 1급 (2021.09)</li>
        </div>
        <br />
        <br />
      </div>
    </section>
  );
};

export default Experience;
