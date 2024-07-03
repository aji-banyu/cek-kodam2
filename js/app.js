const khodamNames = [
  "Ultraman Hijau",
  "Rangger Pink",
  "Ikan Berkepala Lele",
  "Rangger Hitam",
  "Ayam Kampung",
  "Rangger Merah",
  "Neymar Bogor",
  "Ayam Warna Kuning",
  "Ikan Sumbing",
  "Monyet Mullet",
  "Wedus Cacat",
  "Tuyul Ceperet",
  "Kodok Afrika",
  "Sendal Jepit",
  "Tahu Bosok",
  "Susu Kambing Jantan",
  "Ikan Dugong",
  "Kak Gem",
  "Singa Introvert",
  "Popok Bayi",
  "Bagas Dribble",
  "Si Imut Dari Pulau Jawa",
  "Sigit Rendang",
  "Kamu Pasti Wibu",
  "Sayur Kangkung",
  "Banteng PDI",
  "Supra Bapak",
  "Pohon Pisang Keramat",
  "Ultramen",
  "Ireng Man",
  "Suparmin",
  "Nyi roro kidol",
  "Tikus Goreng",
  "Saber Roam",
  "Sosis Bakar",
  "Kentut Berdahak",
  "Plola Plolo",
  "Kosong",
  "Ayam Penyet",
  "Siluman Naga",
  "Kecoa Terbang",
  "Ferdi Sambo",
  "Joker Mewing",
  "Mimi Peri",
  "Kentos Kelapa",
  "Nana Jungler",
  "Mas Hendra Pentol",
  "Bidadari Surga",
];

function cekKhodam() {
  document.getElementById("loading").style.display = "flex";

  // lama waktu
  // let loaded = setInterval(() => {
  //   //   document.getElementById("loading").style.display = "flex";
  // }, 1000);

  // hentikan interval
  setTimeout(() => {
    //   clearInterval(loaded);
    document.getElementById("loading").style.display = "none";
    const randomIndex = Math.floor(Math.random() * khodamNames.length);
    const randomKhodam = khodamNames[randomIndex];

    const nama = document.getElementById("nama").value.trim();

    if (nama === "") {
      alert("Nama tidak boleh kosong!");
      return;
    }

    // khusus mbak niyak
    if (
      nama == "Niyak" ||
      nama == "Utees" ||
      nama == "Niya" ||
      nama == "fudhla" ||
      nama == "Mahbatul" ||
      nama == "Utsniya Fudhla" ||
      nama == "Utsniya Mahbatul Fudhla" ||
      nama == "Utsniya"
    ) {
      const resultContainer = document.getElementById("result");
      resultContainer.innerHTML = `<p class="text-2xl text-white-500 font-bold">"${nama}"</p><br/>
    <p class="text-2xl text-white-500 font-bold">Kodam : Tuyul Ceperet</p>`;
      const inputNama = document.getElementById("nama");
      inputNama.value = "";
      return;
    }

    // khusus mbak yayas
    if (
      nama == "Akyas" ||
      nama == "Yayas" ||
      nama == "Aya" ||
      nama == "Aya'" ||
      nama == "Ayak" ||
      nama == "Akyas mauqiyyah" ||
      nama == "Mauqiyyah"
    ) {
      const resultContainer = document.getElementById("result");
      resultContainer.innerHTML = `<p class="text-2xl text-white-500 font-bold">"${nama}"</p><br/>
    <p class="text-2xl text-white-500 font-bold">Kodam : Kentut Berdahak</p>`;
      const inputNama = document.getElementById("nama");
      inputNama.value = "";
      return;
    }
    // monyet end

    console.log(`Khodam yang muncul: ${randomKhodam}`);

    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `<p class="text-2xl text-white-500 font-bold">"${nama}"</p><br/>
    <p class="text-2xl text-white-500 font-bold">Kodam : ${randomKhodam}</p>`;

    const inputNama = document.getElementById("nama");
    inputNama.value = "";
  }, 3000);
}
const form = document.getElementById("khodamForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  cekKhodam();
});
