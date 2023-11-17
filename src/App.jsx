import React, { useState, useEffect } from "react";
import "./App.css";

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi} />;
      })}
    </ul>
  );
}

function Yazi({ id, url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}

function Arama({ aramaMetni, onSearch }) {
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni} />
    </div>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "Flutter Öğreniyorum",
      url: "wwww.facebook.com.tr",
      yazar: "Ali Yüksek",
      yorum_sayisi: 2,
      puan: 5,
      id: 2,
    },
    {
      baslik: " Python Öğreniyorum",
      url: "www.isubu.edu.tr",
      yazar: "Ayşe Veli",
      yorum_sayisi: 3,
      puan: 4,
      id: 3,
    },
    {
      baslik: "Veri Madenciliği",
      url: "wwww.linkedin.com.tr",
      yazar: "Damla Yalçın",
      yorum_sayisi: 2,
      puan: 5,
      id: 4,
    },
    {
      baslik: "İşletim Sistemleri",
      url: "www.btk.gov.tr",
      yazar: "Yağmur Yalçın",
      yorum_sayisi: 3,
      puan: 4,
      id: 5,
    },
    {
      baslik: "Oyun Programlama",
      url: "wwww.unity.com",
      yazar: "Atakan Berk",
      yorum_sayisi: 2,
      puan: 5,
      id: 6,
    },
  ];

  const arananYazilar = yaziListesi.filter(function (yazi) {
    return (
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
    );
  });

  function handleSearch(event) {
    setAramaMetni(event.target.value);
    localStorage.setItem("aranan", event.target.value);
  }

  useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  return (
    <div>
      <h1>Yazılar</h1>
      <Arama onSearch={handleSearch} aramaMetni={aramaMetni} />
      <hr />
      <p>
        <strong>{aramaMetni} aranıyor...</strong>
      </p>
      <Liste yazilar={arananYazilar} />
    </div>
  );
}

export default App;
