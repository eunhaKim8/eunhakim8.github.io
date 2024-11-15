import React from "react";

const Project = () => {
  const openPdf = () => {
    window.open(`${process.env.PUBLIC_URL}/pawfit_project.pdf`, "_blank");
  };
  const openVedio = () => {
    window.open(`${process.env.PUBLIC_URL}/pawfit_web.mp4`, "_blank");
  };
  const openPdfm = () => {
    window.open(`${process.env.PUBLIC_URL}/movie24_project.pdf`, "_blank");
  };
  return (
    <section
      className="resume-section"
      id="awards"
      style={{ paddingTop: "80px", paddingBottom: "5px" }}
    >
      <div className="resum-section-content">
        <h2 className="mb-5">Project</h2>
        <div className="subheading mb-3">
          <div className="info">
            <p
              className="company"
              style={{
                fontSize: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center", // 텍스트와 버튼의 수직 중앙 정렬
              }}
            >
              팀 프로젝트 - [ Pawfit ] 반려견 출장 케어 서비스 플랫폼
              <div style={{ display: "flex", gap: "10px" }}>
                {/* 버튼을 Flex 컨테이너 안에 두고 gap을 조정 */}
                <button
                  onClick={openPdf}
                  style={{
                    fontSize: "13px",
                    padding: "8px 18px",
                    color: "#fff",
                    backgroundColor: "#212529",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s, transform 0.3s",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#6ccbd7")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#212529")
                  }
                  onMouseDown={(e) =>
                    (e.target.style.transform = "scale(0.95)")
                  }
                  onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                >
                  프로젝트 발표 자료 보기
                </button>
                <button
                  onClick={openVedio}
                  style={{
                    fontSize: "13px",
                    padding: "8px 18px",
                    color: "#fff",
                    backgroundColor: "#212529",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s, transform 0.3s",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#6ccbd7")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#212529")
                  }
                  onMouseDown={(e) =>
                    (e.target.style.transform = "scale(0.95)")
                  }
                  onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                >
                  시연 영상 보기
                </button>
              </div>
            </p>

            <p className="position" style={{ fontSize: "18px" }}>
              " 대형견 견주, 다견 가정, 강아지를 키우는 1인 가구를 타겟으로
              <br />
              반려견의 건강 상태에 맞춰 출장 케어 서비스 제공하는 플랫폼 구축 "
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                alignItems: "stretch", // 높이를 동일하게 맞춤
                flexWrap: "wrap", // 요소가 줄을 넘어가도록 설정
              }}
            >
              <p
                className="description_education"
                style={{
                  fontSize: "15px",
                  flex: 1, // 각 p 태그가 같은 너비를 가지도록 설정
                }}
              >
                <div style={{ padding: "5px" }}>
                  <i
                    className="fa fa-toggle-on"
                    aria-hidden="true"
                    color="#6ccbd7"
                  ></i>{" "}
                  <strong>기간 / 인원</strong>
                  <div style={{ fontSize: "14px" }}>
                    <br />
                    • 2024.08.22 ~ 2024.10.06
                    <br />• 프론트엔드 3인 / 백엔드 4인(지원자 포함) 구성된 팀
                    프로젝트
                  </div>
                </div>
              </p>
              <p
                className="description_education"
                style={{
                  fontSize: "15px",
                  flex: 1, // 각 p 태그가 같은 너비를 가지도록 설정
                }}
              >
                <div style={{ padding: "5px" }}>
                  <i
                    className="fa fa-toggle-on"
                    aria-hidden="true"
                    color="#6ccbd7"
                  ></i>{" "}
                  <strong>핵심 기능</strong>
                  <div style={{ fontSize: "14px" }}>
                    <br />
                    • 네이버, 카카오 소셜 로그인 기능
                    <br />
                    • Python 활용한 견종 분류 기능 개발
                    <br />
                    • 관리자 대시보드 시각화 페이지
                    <br />• 이메일 인증 서비스 및 비밀번호 암호화 기능
                  </div>
                </div>
              </p>
              <p
                className="description_education"
                style={{
                  fontSize: "15px",
                  flex: 1, // 각 p 태그가 같은 너비를 가지도록 설정
                }}
              >
                <div style={{ padding: "5px" }}>
                  <i
                    className="fa fa-toggle-on"
                    aria-hidden="true"
                    color="red"
                  ></i>{" "}
                  <strong>주요업무 및 상세역할</strong>
                  <div style={{ fontSize: "14px" }}>
                    <br />
                    • 로그인 / 회원가입 페이지 기능 개발
                    <br />
                    • Java Mail 을 활용한 이메일 인증 기능 구현
                    <br />
                    • Spring Security 를 활용한 비밀번호 암호화 기능 구현
                    <br />• ID / PW 찾기 기능 구현
                    <br />• 회원 정보 수정 기능 구현
                  </div>
                </div>
              </p>
              <p
                className="description_education"
                style={{
                  fontSize: "15px",
                  flexBasis: "100%", // 새로운 줄로 넘기기 위해 추가
                }}
              >
                <div style={{ padding: "5px" }}>
                  <i
                    className="fa fa-toggle-on"
                    aria-hidden="true"
                    color="#6ccbd7"
                  ></i>{" "}
                  <strong>배운 점 및 성과</strong>
                  <div style={{ fontSize: "14px" }}>
                    <br />
                    이전 프로젝트에서는 프론트엔드와 백엔드 경계가 모호했거나,
                    개인 프로젝트로 진행되어 수정 사항을 바로 파악할 수 있었고,
                    따로 소통이 필요하지 않았습니다. <br />
                    <br />
                    하지만 이번 팀 프로젝트에서는 백엔드 역할로 로그인 기능을
                    구현하면서, 관련 기능과 연관된 팀원들과의 협업이 많았습니다.
                    로그인 기능이 다양한 다른 기능들과 연결되다 보니 로그인이
                    구현되어야 개발할 수 있는 부분들이 있었어서 시간에 대한
                    압박을 느꼈습니다. 그리고 다른 연관된 부분들과 코드 공유가
                    원활하지 않았던 부분이 있어 오류가 발생하기도 했습니다.
                    또한, 프론트엔드와의 통합 과정에서 데이터 형식 및 전달
                    범위에 대한 사전 협의가 부족하여 어려움이 있었습니다. 이를
                    통해 협업과 설계의 중요성을 깨닫게 되었습니다.
                    <br />
                    <br />
                    프로젝트를 진행하게되면서 Spring Security와 JWT 등 다양한
                    라이브러리를 접하면서 이를 잘 활용하는 것이 개발 능력 향상에
                    필수적임을 느꼈습니다.
                  </div>
                </div>
              </p>
              <p
                className="description_education"
                style={{
                  fontSize: "15px",
                  flexBasis: "100%", // 새로운 줄로 넘기기 위해 추가
                }}
              >
                <div style={{ padding: "5px" }}>
                  <i
                    className="fa fa-toggle-on"
                    aria-hidden="true"
                    color="#6ccbd7"
                  ></i>{" "}
                  <strong>어려웠던 점과 해결 방법</strong>
                  <div style={{ fontSize: "14px" }}>
                    <br />
                    어려웠던 점은 JWT 라이브러리를 처음 사용하면서 개념을
                    이해하고 적용하는 부분이었습니다. 처음 접하는 라이브러리였기
                    때문에, 먼저 유튜브의 무료 강의를 통해 개념을 파악한 후,
                    구글링을 통해 사용 방법을 더 깊이 있게 조사했습니다.
                    <br />
                    <br />
                    특히, 관리자와 일반 사용자 계정으로 권한을 나누어 로그인
                    상태를 유지하면서, 각 계정에 허용된 경로만 접근할 수 있도록
                    구현하는 것이 필요했습니다. 로그아웃 또한 서버 측에서 토큰을
                    무효화하는 방법과 클라이언트 측에서 토큰을 삭제하는 두 가지
                    방식이 있었습니다.
                    <br />
                    <br />
                    각 계정의 권한은 JWT의 기본 "ROLE_" 접두사를 활용하여 DB 에
                    권한 컬럼으로 지정하였고, 이를 통해 이메일, 역할, 토큰 발행
                    및 만료 시간 정보를 프론트엔드에 전달했습니다.
                    프론트엔드에서는 전달받은 토큰을 경로마다 헤더에 포함하여
                    권한을 확인할 수 있도록 처리해 로그인 유지 문제를
                    해결하였습니다.
                    <br />
                    <br />
                    로그아웃에 대해서는, 다중 토큰 사용하여 서버에서 토큰을
                    무효화하는 방식이 보안 측면에서 유리하다는 점을 알게
                    되었습니다. 이 방법은 데이터베이스에 다중 토큰을 저장,
                    삭제하거나 무효화 처리할 수 있어, 만약 탈취된 토큰이
                    있더라도 새로운 토큰을 생성하여 보안을 강화할 수 있었습니다.
                    하지만 팀원들과 논의한 결과, 짧은 개발 기간 안에 이 개념을
                    완벽하게 적용하는 것이 어려웠기 때문에 클라이언트에서 토큰을
                    삭제하는 방법을 선택하는 쪽으로 결정해 로그아웃 기능을
                    구현하였습니다.
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="subheading mb-3">
          <div className="info">
            <p
              className="company"
              style={{
                fontSize: "25px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center", // 텍스트와 버튼의 수직 중앙 정렬
              }}
            >
              개인 프로젝트 - [ MOVIE24 ] 영화 리뷰 웹 사이트
              <div style={{ display: "flex", gap: "10px" }}>
                {/* 버튼을 Flex 컨테이너 안에 두고 gap을 조정 */}
                <button
                  onClick={openPdfm}
                  style={{
                    fontSize: "13px",
                    padding: "8px 18px",
                    color: "#fff",
                    backgroundColor: "#212529",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s, transform 0.3s",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#6ccbd7")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#212529")
                  }
                  onMouseDown={(e) =>
                    (e.target.style.transform = "scale(0.95)")
                  }
                  onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
                >
                  프로젝트 발표 자료 보기
                </button>
              </div>
            </p>

            <p className="position" style={{ fontSize: "18px" }}>
              " 영화에 대한 리뷰를 등록하고 사용자들끼리 소통할 수 있는 웹사이트
              구축 "
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                alignItems: "stretch", // 높이를 동일하게 맞춤
                flexWrap: "wrap", // 요소가 줄을 넘어가도록 설정
              }}
            >
              <p
                className="description_education"
                style={{
                  fontSize: "15px",
                  flex: 1, // 각 p 태그가 같은 너비를 가지도록 설정
                }}
              >
                <div style={{ padding: "5px" }}>
                  <i
                    className="fa fa-toggle-on"
                    aria-hidden="true"
                    color="#6ccbd7"
                  ></i>{" "}
                  <strong>기간 / 인원</strong>
                  <div style={{ fontSize: "14px" }}>
                    <br />
                    • 2024.07.25 ~ 2024.07.28
                    <br />• 1인 개인 프로젝트 프로젝트
                  </div>
                </div>
              </p>
              <p
                className="description_education"
                style={{
                  fontSize: "15px",
                  flex: 1, // 각 p 태그가 같은 너비를 가지도록 설정
                }}
              >
                <div style={{ padding: "5px" }}>
                  <i
                    className="fa fa-toggle-on"
                    aria-hidden="true"
                    color="#6ccbd7"
                  ></i>{" "}
                  <strong>핵심 기능</strong>
                  <div style={{ fontSize: "14px" }}>
                    <br />• 게시판 CRUD 구현
                    <br />• 댓글 형식의 리뷰 작성 기능 구현
                  </div>
                </div>
              </p>

              <p
                className="description_education"
                style={{
                  fontSize: "15px",
                  flexBasis: "100%", // 새로운 줄로 넘기기 위해 추가
                }}
              >
                <div style={{ padding: "5px" }}>
                  <i
                    className="fa fa-toggle-on"
                    aria-hidden="true"
                    color="#6ccbd7"
                  ></i>{" "}
                  <strong>배운 점 및 성과</strong>
                  <div style={{ fontSize: "14px" }}>
                    <br />
                    학원에서 배운 Spring Framework와 JSP를 활용해 기본적인 CRUD
                    기능을 갖춘 게시판 형태의 웹사이트를 구축하는 개인
                    프로젝트를 처음으로 진행했습니다. <br />
                    단기간에 진행한 프로젝트였기에 가장 기본적인 기능만
                    구현했지만, 이를 통해 Spring Framework의 구조를 이해하고,
                    패키지 구성 및 데이터베이스 연동 방법 등 전반적인 프로젝트
                    구조에 대해 깊이 고민할 수 있는 시간이었습니다.
                  </div>
                </div>
              </p>
              <p
                className="description_education"
                style={{
                  fontSize: "15px",
                  flexBasis: "100%", // 새로운 줄로 넘기기 위해 추가
                }}
              >
                <div style={{ padding: "5px" }}>
                  <i
                    className="fa fa-toggle-on"
                    aria-hidden="true"
                    color="#6ccbd7"
                  ></i>{" "}
                  <strong>개선할 점</strong>
                  <div style={{ fontSize: "14px" }}>
                    <br />
                    회원가입 및 로그인 기능은 기간이 정해져있어 마무리하지
                    못했지만, 차후 보안성을 고려해 비밀번호 암호화 기능을
                    추가하여 완성할 계획입니다. <br />
                    또한, 영화 목록을 텍스트 리스트 형태로 구현했는데, 개선 시
                    이미지 리스트로 변경하고, 마우스 오버 시 줄거리가 표시되도록
                    수정할 예정입니다. <br />
                    마지막으로, 사용자와 관리자를 구분하여 관리자 대시보드를
                    추가해 사이트 관리 기능을 강화하고자 합니다.
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
