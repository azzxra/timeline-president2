const presidents = [
  {
    name: "Ir. Soekarno",
    period: "1945 - 1967",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Presiden_Sukarno.jpg",
    history: "Presiden pertama Republik Indonesia dan tokoh utama di balik kemerdekaan Indonesia. Soekarno berperan besar dalam mempersatukan bangsa yang baru merdeka dan merumuskan dasar negara Pancasila. Pada masa kepemimpinannya, Indonesia berusaha membangun identitas nasional dan kedaulatan di tengah kondisi politik dan ekonomi yang masih belum stabil. Soekarno juga dikenal aktif di dunia internasional, terutama melalui Konferensi Asia Afrika 1955 yang mengangkat posisi Indonesia di mata dunia."
  },
  {
    name: "Soeharto",
    period: "1967 - 1998",
    image: "img/soeharto.jpg",
    history: "Soeharto menjabat sebagai presiden dengan masa pemerintahan terlama dalam sejarah Indonesia. Ia memimpin pada era Orde Baru yang menekankan stabilitas politik dan pembangunan ekonomi. Pada masanya, Indonesia mengalami pertumbuhan ekonomi yang cukup pesat, pembangunan infrastruktur, serta program swasembada pangan. Namun, pemerintahannya juga dikenal dengan pembatasan kebebasan berpendapat dan maraknya praktik korupsi. Masa Soeharto berakhir setelah krisis ekonomi 1998 dan tuntutan reformasi dari masyarakat."
  },
  {
    name: "B.J. Habibie",
    period: "1998 - 1999",
    image: "img/habibie.jpg",
    history: "B.J. Habibie memimpin Indonesia di masa transisi yang sangat sulit setelah jatuhnya Orde Baru. Meski masa jabatannya singkat, kontribusinya sangat berkesan. Ia membuka kebebasan pers, membebaskan tahanan politik, dan memulai reformasi demokrasi. Pada masanya juga dilakukan referendum Timor Timur. Habibie dikenal sebagai presiden yang berani mengambil keputusan penting demi perubahan sistem politik Indonesia ke arah yang lebih demokratis."
  },
  {
    name: "Abdurrahman Wahid",
    period: "1999 - 2001",
    image: "img/wahid.jpg",
    history: "dikenal sebagai presiden yang menjunjung tinggi nilai toleransi, pluralisme, dan kemanusiaan. Ia memperjuangkan hak-hak minoritas dan kebebasan beragama. Pada masa pemerintahannya, ia mencoba mengurangi peran militer dalam politik dan memperkuat demokrasi sipil. Meskipun kepemimpinannya penuh tantangan dan konflik politik, Gus Dur dikenang sebagai sosok yang humanis dan berani membawa perubahan."
  },
  {
    name: "Megawati Soekarnoputri",
    period: "2001 - 2004",
    image: "img/megawati.jpg",
    history: "Megawati merupakan presiden wanita pertama di Indonesia. Ia memimpin di masa awal stabilisasi pasca reformasi. Pada masa pemerintahannya, kondisi politik dan ekonomi mulai membaik secara perlahan. Salah satu hal penting pada masanya adalah pembentukan Mahkamah Konstitusi sebagai lembaga penjaga konstitusi."
  },
  {
    name: "Susilo Bambang Yudhoyono",
    period: "2004 - 2014",
    image: "img/sby.jpg",
    history: "Susilo Bambang Yudhoyono atau SBY adalah presiden pertama yang dipilih langsung oleh rakyat. Selama dua periode kepemimpinannya, Indonesia mengalami stabilitas politik dan pertumbuhan ekonomi yang relatif konsisten. Salah satu pencapaian paling berkesan adalah perdamaian Aceh melalui Perjanjian Helsinki tahun 2005. SBY juga dikenal aktif dalam diplomasi internasional dan penanganan bencana, termasuk tsunami Aceh."
  },
  {
    name: "Joko Widodo",
    period: "2014 - 2024",
    image: "img/jokowiw.jpg",
    history: "Jokowi dikenal sebagai presiden yang dekat dengan rakyat dan fokus pada pembangunan infrastruktur. Pada masanya, banyak jalan tol, bandara, pelabuhan, dan proyek strategis nasional dibangun untuk meningkatkan konektivitas antar daerah. Jokowi juga mendorong transformasi digital dan reformasi birokrasi. Kepemimpinannya berkesan karena gaya sederhana serta upaya pemerataan pembangunan hingga ke daerah terpencil."
  },
  {
  name: "Prabowo Subianto",
  period: "2024 - sekarang",
  image: "img/prabowo.jpg",
  history: "Prabowo Subianto menjabat sebagai presiden ke-8 Republik Indonesia sejak 2024. Fokus awal pemerintahannya adalah penguatan pertahanan nasional, ketahanan pangan, dan kemandirian ekonomi. Dengan latar belakang militer, Prabowo menekankan pentingnya stabilitas nasional dan kedaulatan negara. Masa pemerintahannya masih berjalan, namun arah kebijakannya berfokus pada keberlanjutan pembangunan."
}

];

const timeline = document.getElementById("timeline");
const modal = document.getElementById("modal");

presidents.forEach(p => {
  const item = document.createElement("div");
  item.className = "timeline-item";
  item.innerHTML = `
    <div class="content">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.period}</p>
    </div>
  `;
  item.onclick = () => openModal(p);
  timeline.appendChild(item);
});

function openModal(president) {
  document.getElementById("modal-name").innerText = president.name;
  document.getElementById("modal-period").innerText = president.period;
  document.getElementById("modal-history").innerText = president.history;
  modal.style.display = "block";
}

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
