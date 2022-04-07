import './style.css';

const personData = [
  { name: 'regiss', age: 31},
  { name: 'allain', age: 30 },
  { name: 'papa', age: 70 },
  { name: 'Lualua', age: 210 },
  { name: 'Just', age: 210 },
  { name: 'Franc', age: 210 },
  { name: 'Gigi', age: 210 },
];

function loadTableData(personData) {
  const tableBody = document.getElementById('tableData');
  // const table = document.createElement('div');
  let dataHtml = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const person of personData) {
    dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`;
  }
  tableBody.innerHTML = dataHtml;
}

window.onload = () => {
  loadTableData(personData);
};

loadTableData(personData);
