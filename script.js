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
    var sm = document.querySelector("p.u-d");
    sm.innerHTML = "3 years as a web developer. Expert in HTML, CSS, Bootstrap and Javascript. Over 9 years as an academic writer. Written at least 400 Disseratations and Thesis, and over 600 Essays, reflection papers, case studies, capstone projects and exams. Worked as an assistant medical research associate at Kenya Medical Research Institute and assistant Laboratory Technologist in Kenyatta University Health Unit. <br><br> Please reach out for more information."
    lnk.style.display = "none";
}