// Faster and Efficiency

// Code 1
// This is slow
const t1 = performance.now();

for(let i = 1; i<=100; i++)
{
    let para = document.createElement('p');
    para.textContent = "Sandeep Gope";

    // From here itself it is taking reflow and repaint , hence, time taking
    document.body.appendChild(para);
}

const t2 = performance.now();
console.log("Total time by code 1:" +(t2-t1));

// Code 2
// This is faster
// Number of reflows and repaints are less
const t3 = performance.now();

let mydiv = document.createElement('div');

for(let i = 1; i<=100; i++)
{
    let para = document.createElement('p');
    para.textContent = "Jai Shree Ram";
    // Till here it does not take any reflow or repaint
    mydiv.appendChild(para);
}

// From here it takes reflow as well as repaint
document.body.appendChild(mydiv);

const t4 = performance.now();
console.log("Total time by code 2:" +(t4-t3));

// Use of document fragment
// Very less reflows and repaint(preferred as compared to the above codes)
let fragment = document.createDocumentFragment();

for(let i = 1; i<=100; i++)
{
    let para = document.createElement('p');
    para.textContent = " Hello Jii ";
    // This line does not tak any reflow or repaint , coz we are not using original document
    fragment.appendChild(para);
}

// This line takes reflow as well as repaint 
document.body.appendChild(fragment);