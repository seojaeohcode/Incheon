import React, { Component } from "react";
import './App.scss';
import YoutubeBackground from 'react-youtube-background'

class App extends Component {
  render() {
    return (
      <body>
        <header>
          <div className="backvideo">
            <YoutubeBackground
              videoId={"hcRG5Gb-A-U"} // default -> "jssO8-5qmag"
              // aspectRatio={string} // default -> "16:9"
              // overlay={string}       // defaults -> null | e.g. "rgba(0,0,0,.4)"
              className={"sizeup"}   // defaults -> null
            // onReady={func}       // defaults -> null
            >
              {
                <div>

                </div>
              }
              <div class="linklist">
                <div class="toplist">list</div>
                <a href="https://seojaeohcode.github.io/seoul/#/">-서울</a><br />
                <div class="current">-인천</div>
                -대전<br />
                -대구<br />
                -울산<br />
                -부산<br />
                -광주<br />
                -제주
              </div>
              <div class="slogan">
              <img src="https://github.com/shareproject-0/portfolio-web-incheon/blob/main/%EC%8A%AC%EB%A1%9C%EA%B1%B4.png?raw=true" height="100px" />
              </div>
            </YoutubeBackground>
          </div>
        </header>
        <main>
          <section>
            <div class="sec">
              <div class="Largetitle">Attractions in Incheon</div>
              <div class="flexbox">
                <div class="leftimagepos"><img id="photo" src="https://github.com/shareproject-0/portfolio-web-incheon/blob/main/%EB%AA%85%EC%86%8C1.jpg?raw=true" height="800px" /></div>
                <div class="textbox one">
                  <div class="textpos">
                    <h3>명소1</h3><br />
                    <h1>송도 센트럴파크</h1><br />
                    <h2>
                      연수구 송도국제도시 중심에 있는 공원으로<br />
                      이국적 풍경과 아름다운 야경으로 유명한 곳이다.<br /><br />
                      근처의 G타워 33층 무료 전망대에서는<br />
                      서해, 인천대교, 공원 전경 등을 한눈에 볼 수 있다.
                    </h2>
                  </div>
                </div>
              </div>
              <div class="flexbox">
                <div class="rightimagepos"><img id="photo" src="https://github.com/shareproject-0/portfolio-web-incheon/blob/main/%EB%AA%85%EC%86%8C2.jpg?raw=true" height="800px" /></div>
                <div class="textbox two">
                  <div class="textpos">
                    <h3>명소2</h3><br />
                    <h1>월미도</h1><br />
                    <h2>
                      인천을 대표하는 관광지로 북성동에 있다.<br />
                      바다가 한눈에 보이는 문화의 거리에는<br />
                      디스코팡팡으로 유명한 놀이공원과 횟집, 카페 등이 있고<br />
                      주말에는 다양한 공연이 펼쳐진다.
                    </h2>
                  </div>
                </div>
              </div>
              <div class="flexbox">
                <div class="leftimagepos"><img id="photo" src="https://github.com/shareproject-0/portfolio-web-incheon/blob/main/%EB%AA%85%EC%86%8C3.jpg?raw=true" height="800px" /></div>
                <div class="textbox one">
                  <div class="textpos">
                    <h3>명소3</h3><br />
                    <h1>차이나타운</h1><br />
                    <h2>
                      인천시 중국 북성동과 선린동 일대에는<br />
                      ‘작은 중국’이라 불리는 차이나타운이 있다.<br />
                      중국풍의 거리에는 패루, 공자상,<br />
                      삼국지 벽화, 자장면 박물관 등 볼거리가 많다.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div class="foot">
          <div class="tone">programmer:seojaeoh</div>
          <div class="ttwo">designer:baekintae</div>
          <div class="logo">
          <img src="https://github.com/shareproject-0/portfolio-web-incheon/blob/main/logo.png?raw=true" height="100px" width="100px"/>
          </div>
          </div>
        </footer>
      </body>
    );
  }
}

export default App;
