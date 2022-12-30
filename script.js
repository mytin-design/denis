//Sidepanel

function openNav() {
    document.getElementById("sidePanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}

//change theme
    let sheet = document.querySelector("link");

    let sheet2 = document.querySelector("link.link2");
    //a conflict was making the btn for @media <=500 not to work, so id for the sidepanel theme btn has been changed and accessed on its own

    //id for theme btn for >=996px 
    let themer = document.getElementById("themeId");

    //theme id for sidepanel id
    let theme = document.getElementById("themerId");

    //change button styles
    
function turnLight() {
    sheet.setAttribute("href", "styles-light.css");
    sheet2.setAttribute("href", "policy-light.css");

    //for media width >=996
    themer.setAttribute("onclick", "turnDark()");
    //for media width <=500
    theme.setAttribute("onclick", "turnDark()");

    //change button styles
    

}

function turnDark() {
    sheet.setAttribute("href", "styles-dark.css");
    sheet2.setAttribute("href", "policy-dark.css");

    //for media width >=996
    themer.setAttribute("onclick", "turnLight()");
    //for media width <=500
    theme.setAttribute("onclick", "turnLight()");
    

}

let openMe = (evt, id) => {
    //declare variables;

    let i, tbtns, tcontent;

    //get all content and hide them;

    tcontent = document.getElementsByClassName("tb-ctn");
    for(i = 0; i < tcontent.length;i++) {
        tcontent[i].style.display = "none";
    }

    //get all buttons and assign class active to current button

    tbtns = document.getElementsByClassName("tb-bn");

    for(i = 0; i < tbtns.length;i++) {
        tbtns[i].className = tbtns[i].className.replace("active", "");
    }

    //get current tab content and display it

    document.getElementById(id).style.display = "grid";
    evt.currentTarget += "active";
}

document.getElementById("dOpen").click();


function showMore() {
    var lnk = document.querySelector("button.u-lm-ln");
    var sm = document.querySelector("a.rmo");
    sm.style.display = "inline";
    //sm.innerHTML = "3 years as a web developer. Expert in HTML, CSS, Bootstrap and Javascript. Over 9 years as an academic writer. Written at least 400 Disseratations and Thesis, and over 600 Essays, reflection papers, case studies, capstone projects and exams. Worked as an assistant medical research associate at Kenya Medical Research Institute and assistant Laboratory Technologist in Kenyatta University Health Unit. <br><br> Please reach out for more information."
    lnk.style.display = "none";
}

let openImagea = () => {
//the objective is to:
//1. get img container and img of interest
//2. create a link and append the img of interest to it
//3. open the image to a blank page

//bug
//-creating link appends it at the end of the images;

   /* var imgs1 = document.getElementById("all");
    var imga = document.getElementById("pmg");
    let imgalink = document.createElement("a");
    imgalink.setAttribute("target", "_blank");
    imgalink.setAttribute("href", "./images/eller.png");

    imgs1.appendChild(imgalink);
    imgalink.appendChild(imga);*/
    window.location = "./images/ac1.PNG";

}

let openImageb = () => {
    window.location = "./images/med.png";
}

let openImagec = () => {
    window.location = "./images/shoe-big.png";
}

let openImaged = () => {
    window.location = "./images/hosp-big.png";
}


let openImagee = () => {
    window.location = "./images/akk.png";
}
let openImagef = () => {
    window.location = "./images/shoe-big.png";
}

let openImageg = () => {
    window.location = "./images/hosp-big.png";
}

let openImageh = () => {
    window.location = "./images/church-big.png";
}


let openImagei = () => {
    window.location = "./images/mr1.PNG";
}
let openImagej = () => {
    window.location = "./images/lab.png";
}
let openImagek = () => {
    window.location = "./images/med.png";
}

let openImagel = () => {
    window.location = "./images/KU REC LETTER.jpeg";
}


let openImagem = () => {
    window.location = "./images/wr4.PNG";
}
let openImagen = () => {
    window.location = "./images/wr3.PNG";
}
let openImageo = () => {
    window.location = "./images/wr2.PNG";
}
let openImagep = () => {
    window.location = "./images/wr1.PNG";
}


let openImageq = () => {
    window.location = "./images/ac1.PNG";
}
let openImager = () => {
    window.location = "./images/ac2.PNG";
}
let openImages = () => {
    window.location = "./images/ac3.PNG";
}
let openImaget = () => {
    window.location = "./images/ac4.PNG";
}

