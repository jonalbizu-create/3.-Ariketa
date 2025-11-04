// 1. Testu-Aldatzailea
function aldatuTestua() {
  const testua = document.getElementById("testu_aldagarria");
  testua.innerText = "Testua aldatu da!";
}

// 2. Kolore Txandakatzailea (Estiloak JS-tik aplikatuz)
function aldatuKolorea() {
  const elementua = document.getElementById("kolore_aldagarria");
  if (elementua.style.color === "blue") {
    elementua.style.color = "black";
  } else {
    elementua.style.color = "blue";
  }
}

// 3. Elementuen Ezkutagailua (display propietatea aldatuz)
function txandakatuEzkutatzea() {
  const p = document.getElementById("ezkutatu_hau");
  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
}

// 4. Batuketa Kalkulagailua
function batuketaEgin() {
  const z1 = Number(document.getElementById("zenbaki1").value);
  const z2 = Number(document.getElementById("zenbaki2").value);
  const emaitza = z1 + z2;
  document.getElementById("emaitza4").innerText = emaitza;
}

// 5. Testu-Gehitzailea (Elementu berriak sortzea)
function gehituElementua() {
  const input = document.getElementById("elementu_berria");
  const zerrenda = document.getElementById("zerrenda_dinamikoa");
  const li = document.createElement("li");

  if (input.value.trim() !== "") {
    li.textContent = input.value;
    zerrenda.appendChild(li);
    input.value = "";
  } else {
    alert("Idatzi zerbait lehenik!");
  }
}

// 6. Kontagailua (aldagai globalak erabiliz)
// Oharra: klikKopurua HTML amaierako <script> blokean hasieratuta dago
function kontatuKlik() {
  klikKopurua++;
  document.getElementById("kontagailu_emaitza").innerText = klikKopurua;
}

// 7. Zenbaki Asmatzearen Jokoa
// Oharra: zenbakiSekretua HTML amaierako <script> blokean hasieratuta dago
function konprobatuZenbakia() {
  const saiakera = Number(document.getElementById("asmatutako_zenbakia").value);
  const emaitza = document.getElementById("joko_emaitza");

  if (isNaN(saiakera) || saiakera < 1 || saiakera > 5) {
    emaitza.innerText = "Mesedez, sartu 1 eta 5 arteko zenbaki bat.";
    return;
  }

  if (saiakera === zenbakiSekretua) {
    emaitza.innerText = "Zorionak! Asmatu duzu!";
  } else if (saiakera < zenbakiSekretua) {
    emaitza.innerText = "Handiagoa da!";
  } else {
    emaitza.innerText = "Txikiagoa da!";
  }
}


// 8. Atzeko Planoaren Kolore-Aldatzailea (Random)
function aldatuAtzekoPlanoarenKolorea() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}