//1. membuat HTML fragments
// const MHS = {
//   nama: `Galih Arizza`,
//   umur: 30,
//   nrp: `2312760`,
//   email: `sadaddf@email.com`,
// };

// const EL = `<div class="mhs">
//     <h2>${MHS.nama}</h2>
//     <span class="nrp">${MHS.nrp}</span>
// </div>`;

//2.menggunakan looping untuk array
// const MHS = [
//   {
//     nama: `Galih Arizza`,
//     email: `email@email.com`,
//   },
//   {
//     nama: `Candra Aditya`,
//     email: `email+1@email.com`,
//   },
//   {
//     nama: `Dimas Fatoni Perdana`,
//     email: `email+2@email.com`,
//   },
// ];

// const EL = `<div class="mhs">
// ${MHS.map(
//   (m) => `
// <ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
// </ul>
// `
// ).join(``)}
// </div>`;

//3. conditionals
//ternary
//jika lagu tanpa feat bisa kita masukkan conditional seperti dibawah
// const LAGU = {
//   judul: `Tetap Dalam Jiwa`,
//   penyanyi: `Isyana Saraswati`,
//   feat: `Rayi Putra`,
// };

// const EL = `<div class="lagu">
//     <ul>
//         <li>${LAGU.judul}</li>
//         <li>${LAGU.penyanyi} ${LAGU.feat ? `(Feat. ${LAGU.feat})` : ``}</li>
//     </ul>
// </div>`;

// 4.nested / bersarang
const MHS = {
  nama: `Galih Arizza`,
  semester: 7,
  mataKuliah: [`TKJ`, `Pemprograman`, `Rekayasa Web`, `Apapun lah`],
};

function cetakMataKul(mataKuliah) {
  return `
    <ol>
    ${mataKuliah
      .map(
        (m) => `
    <li>${m}</li>
    `
      )
      .join(``)}
    </ol>
    `;
}

const EL = `
<div class="mhs">
    <h2>${MHS.nama}</h2>
    <span>Semester: ${MHS.semester}</span>
    <h4>Mata Kuliah:</h4>
    ${cetakMataKul(MHS.mataKuliah)}
</div>
`;

document.body.innerHTML = EL;
