import React from "react";
import "./App.css";
import about from "img/about.jpg";
import bicycle1 from "img/bicycle1.jpg";
import bicycle2 from "img/bicycle2.jpg";
import bicycle3 from "img/bicycle3.jpg";
import main from "img/mainvisual.jpg";
import Profile from "img/logo.svg";

function App() {
  const itemsData = [
    {
      title: "現場",
      subtitle: "やあ",
      src: "https://d-spirit.jp/wp-content/uploads/2019/11/genbaneko20191118-8-866x1024.jpg",
    },
    {
      title: "ヨシ！",
      subtitle: "よお",

      src: "https://pbs.twimg.com/media/FWInjDRacAAn-MC.jpg:medium",
    },
    {
      title: "ご安全に！",
      subtitle: "ぐへへ",
      src: "https://m.media-amazon.com/images/I/81AqZWAjHjL._AC_SL1500_.jpg",
    },
  ];

  const generateItems = () => {
    let items = [];
    for (let index = 0; index < itemsData.length; index++) {
      items.push(
        <div className="item-container">
          <img src={itemsData[index].src} width={200} alt=""></img>
          <h3>{itemsData[index].title}</h3>
          <p>{itemsData[index].subtitle}</p>
        </div>
      );
    }
    return items;
  };

  return (
    <div>
      <body>
        <header className="img2">
          <h1>
            <img src={Profile} alt="about" className="img3" />
          </h1>
          <nav>
            <ul>
              <li>About</li>
              <li>Bicycle</li>
            </ul>
          </nav>
        </header>
        <main>
          <div className="img4">
            <img src={main} alt="about" />
          </div>
          <section>
            <h2 className="moji3">type</h2>
            <div className="div1">
              <img
                src={
                  "https://pbs.twimg.com/profile_images/1322677816471691264/jrRD7Uvn_400x400.png"
                }
                alt="about"
                className="img1"
              />
              <div>
                <h3>KAKERU MIYAICHI</h3>
                <p>テキストテキストテキストテキスト</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="moji2">Bicycle</h2>
            <div className="bicycle-img-container">
              <ul className="baike">{generateItems()}</ul>
            </div>
          </section>
        </main>
        <footer></footer>
      </body>
    </div>
  );
}

export default App;
