let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function showContents(id_no) {
    
    var div = document.getElementById("ada-div-id"+id_no);
    var para = document.getElementById("ada-div-para-id"+id_no)



    if(div.classList[0]=="ada-div"){
        div.classList.add("show");
        div.classList.remove("ada-div");
        para.style.display = "block";
    }
    else{
        div.classList.add("ada-div");
        div.classList.remove("show");
        para.style.display = "none";
    }
}

function handleToggle(){
    var ul = document.getElementById('nav-id');
    console.log(ul.style.display);
    if(ul.style.display == "block"){
        ul.style.display = "none"
    }
    else {
        ul.style.display = "block"
    }
}