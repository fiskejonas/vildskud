import "./style.css";

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  console.log("hej123");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

// document.querySelector(".icon").addEventListener("click", myFunction);

// function myFunction() {
//   console.log("hej");
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

document.getElementById("dageDropdown").addEventListener("change", filterTable);

function filterTable() {
  console.log("hej");
  // Variables
  let dropdown, table, rows, cells, dag, filter;
  dropdown = document.getElementById("dageDropdown");
  table = document.getElementById("myTable");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  // Loop gennem rows
  for (let row of rows) {
    cells = row.getElementsByTagName("td");
    dag = cells[3] || null; // rammer den tredje "td" i "tr"
    if (filter === "Dato" || !dag || filter === dag.textContent) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}

document.querySelectorAll(".table_row").forEach((item) => {
  item.addEventListener("click", (event) => {
    {
      let infotekst = item.nextElementSibling;
      let arrowTing = item.lastElementChild;
      if (infotekst.style.display === "none") {
        infotekst.style.display = "block";
        arrowTing.classList.add("arrow");
        arrowTing.classList.remove("arrow2");
      } else {
        infotekst.style.display = "none";
        arrowTing.classList.remove("arrow");
        arrowTing.classList.add("arrow2");
      }
    }
  });
});
