"use strict";

//////// SELECTORS
// Lists of items
const navItems = document.querySelectorAll("ul.list-of-calendars li");
const tables = document.querySelectorAll("table")

// Nav elements
const navAll = document.querySelector(".nav-all");
const navMain = document.querySelector(".nav-main");

// Tables
const calendarFull = document.querySelector(".calendar-full")
const calendarMain = document.querySelector(".calendar-main")



//////// EVENT LISTENERS
// Nav elements - all
navItems.forEach(function (item) {
    item.addEventListener("click", function() {
        navItems.forEach(function(li) {
            li.classList.remove("active-calendar");
        });
        item.classList.add("active-calendar");
    });
});


// Nav elements - single
navAll.addEventListener("click", function() {
  tables.forEach(function (li) {
    li.classList.add("hidden");
  })
  calendarFull.classList.remove("hidden");
})

navMain.addEventListener("click", function() {
  tables.forEach(function (li) {
    li.classList.add("hidden");
  })
  calendarMain.classList.remove("hidden");
})

