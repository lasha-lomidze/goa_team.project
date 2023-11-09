
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const T = document.getElementById("try");
const thead = document.getElementById("thead");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2")
img1_clone = img1.cloneNode(true);
img2_clone = img2.cloneNode(true);
btn1_clone = btn1.cloneNode(true);

let slideIndex = 0;
showSlide(slideIndex);



function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

let func1Executed = false;

function Func1() {
    if (!func1Executed) {
        const row = document.createElement("tr");
        const img0 = document.createElement("td");
        img1_clone.style.width = "100%";

        const name1 = document.createElement("td");
        name1.textContent = "Shoes";
        name1.style.textAlign = "center";
        name1.style.fontWeight = "bold";
        name1.style.fontSize = "1.4em";

        const price1 = document.createElement("td");
        price1.textContent = "$49.99";
        price1.style.textAlign = "center";
        price1.style.fontWeight = "bold";
        price1.style.fontSize = "1.4em";

        const qty1 = document.createElement("td");
        qty1.textContent = 1;
        qty1.style.textAlign = "center";
        qty1.style.fontWeight = "bold";
        qty1.style.fontSize = "1.4em";

        const td = document.createElement("td");
        const removebtn = document.createElement("button");
        removebtn.textContent = "Remove item";
        removebtn.className = "JSbtn";

        btn1.addEventListener("click", function () {
            let currentQty = parseInt(qty1.textContent);
            currentQty += 1;
            qty1.textContent = currentQty;
        });

        thead.appendChild(row);
        row.appendChild(img0);
        img0.appendChild(img1_clone);
        row.appendChild(name1);
        row.appendChild(price1);
        row.appendChild(qty1);
        row.appendChild(td);
        td.appendChild(removebtn);

        func1Executed = true

        removebtn.addEventListener("click", function () {
            row.removeChild(name1);
            row.removeChild(price1);
            row.removeChild(qty1);
            row.removeChild(td);
            td.removeChild(removebtn);
            thead.removeChild(row);
            row.removeChild(img0);
            img0.removeChild(img1_clone);
            func1Executed = false
        });

    }
}


let func2executed = false 

function Func2(){

    if(!func2executed){
    const row = document.createElement("tr");
    const img0 = document.createElement("td");
    img2_clone.style.width = "100%";

    const name1 = document.createElement("td");
    name1.textContent = "Shoes";
    name1.style.textAlign = "center";
    name1.style.fontWeight = "bold";
    name1.style.fontSize = "1.4em";

    const price1 = document.createElement("td");
    price1.textContent = "$99.99";
    price1.style.textAlign = "center";
    price1.style.fontWeight = "bold";
    price1.style.fontSize = "1.4em";

    const qty1 = document.createElement("td");
    qty1.textContent = 1;
    qty1.style.textAlign = "center";
    qty1.style.fontWeight = "bold";
    qty1.style.fontSize = "1.4em";

    const td = document.createElement("td");
    const removebtn = document.createElement("button");
    removebtn.textContent = "Remove item";
    removebtn.className = "JSbtn";

    btn2.addEventListener("click", function () {
        let currentQty = parseInt(qty1.textContent);
        currentQty += 1;
        qty1.textContent = currentQty;
    });

    thead.appendChild(row);
    row.appendChild(img0);
    img0.appendChild(img2_clone);
    row.appendChild(name1);
    row.appendChild(price1);
    row.appendChild(qty1);
    row.appendChild(td);
    td.appendChild(removebtn);

    func2executed = true

    removebtn.addEventListener("click", function () {
        row.removeChild(name1);
        row.removeChild(price1);
        row.removeChild(qty1);
        row.removeChild(td);
        td.removeChild(removebtn);
        thead.removeChild(row);
        row.removeChild(img0);
        img0.removeChild(img2_clone);
        func2executed = false
    });
    }
}
