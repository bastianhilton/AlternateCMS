import {DataTable} from 'simple-datatables'

// AlternateCMS Time Functionality

const d = new Date();
const year = d.getFullYear();

document.getElementById("currentYear").innerHTML = year;

// Scroll To Top Functionality

const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// DataTables Javascript

document.addEventListener('DOMContentLoaded', function () {
// eslint-disable-next-line no-unused-vars
const table = new DataTable("table", {
  searchable: true,
  fixedHeight: true,
  perPageSelect: 25,
  header: true,
  sortable: true,
  labels: {
    placeholder: "Search...",
    perPage: "{select} entries per page",
    noRows: "No entries to found",
    info: "Showing {start} to {end} of {rows} entries",
}
})
})