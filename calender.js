const base = new Date();
const currentMonth = base.getMonth();
const currentDay = base.getDate();
const currentYear = base.getFullYear();
const today = currentMonth + '-' + currentDay + '-' + currentYear;

let days30 = new Array(30);
let days31 = new Array(31);
let days28 = new Array(28);

let months = [january: days30, 
