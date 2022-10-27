import React from "react";
import "./App.css";
import about from "img/about.jpg";
import bicycle1 from "img/bicycle1.jpg";
import bicycle2 from "img/bicycle2.jpg";
import bicycle3 from "img/bicycle3.jpg";
import main from "img/mainvisual.jpg";
import Profile from "img/logo.svg";

function App() {
  return (
    <div>
      <body>
        <header>
          <h1>
            <img src={Profile} alt="about" />
          </h1>
          <nav>
            <ul>
              <li>About</li>
              <li>Bicycle</li>
            </ul>
          </nav>
        </header>
        <main>
          <div>
            <img src={main} alt="about" />
          </div>
          <section>
            <h2>type</h2>
            <div>
              <img src={about} alt="about" />
              <h3>KAKERU MIYAICHI</h3>
              <p>テキストテキストテキストテキスト</p>
            </div>
          </section>
          <section>
            <h2>Bicycle</h2>
            <ul>
              <li>
                <img src={bicycle1} alt="about" />
                <h3>タイトルタイトル</h3>
                <p>テキストテキストテキスト</p>
              </li>
              <li>
                <img src={bicycle2} alt="about" />
                <h3>タイトルタイトル</h3>
                <p>テキストテキストテキスト</p>
              </li>
              <li>
                <img src={bicycle3} alt="about" />
                <h3>タイトルタイトル</h3>
                <p>テキストテキストテキスト</p>
              </li>
            </ul>
          </section>
        </main>
        <footer></footer>
      </body>
    </div>
  );
}

export default App;
