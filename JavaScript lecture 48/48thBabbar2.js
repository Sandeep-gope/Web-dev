// Use of "Date" object

let curr = new Date();
console.log(curr);

let date = new Date('Aug 06 2003 11:30');
console.log(date);

let newDate = new Date(2003, 7, 7);
console.log(newDate);

let oldDate = new Date(2003, 7, 7);
console.log(oldDate.getDay());
console.log(oldDate.setFullYear(2006));
console.log(oldDate);