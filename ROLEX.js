// header//
let header = document.querySelector('.scroll-header');


window.onscroll = function () {

    
    // if (scrollY >= 100) {
    //     header.style.backgroundColor = 'var(--four-color)';
    //     header.style.boxShadow = '0 1px 4px hsl(0deg 4% 15% / 10%)'

    // } else {
    //     header.style.backgroundColor = 'none'
    //     header.style.boxShadow = 'none';
    // }
    

    if (scrollY >= 300) {
        bttn.style.display = 'block';
    } else {
        bttn.style.display = 'none';
    }
}

//moon


let moon = document.getElementById('moon');

moon.addEventListener("click",togglethem)


 function togglethem () {
  console.log("hi");
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        moon.className = "fa-solid fa-sun";
        localStorage.setItem("theme", "dark");
    } else {
        moon.className = "fa-regular fa-moon";
        localStorage.setItem("theme", "light");
    }
};

// Check if theme is saved in localStorage and set the theme accordingly
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    moon.className = "fa-solid fa-sun";
} else {
    document.body.classList.remove("dark-theme");
    moon.className = "fa-regular fa-moon";
}













// footer//

let bttn = document.getElementById('bttn');
bttn.onclick = function () {
    scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    }
    )
}










