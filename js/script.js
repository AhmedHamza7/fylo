AOS.init({
    duration: 700,
    offset: 70,
    delay: 100,
});

// Change Scroll Active
const navList = document.getElementById("nav-menu");
const links = navList.querySelectorAll("a");
const sections = document.querySelectorAll("section[id]");

window.onload = function(){
    console.log(links[0]);
    links[0].classList.add('active')
}

document.addEventListener("scroll", function () {
    // ========== Change Link
    let curentSection = "";
    for (let i = 0; i < sections.length; i++) {
       if (scrollY >= sections[i].offsetTop - 300) {
          curentSection = sections[i].getAttribute("id");
       }
    }
 
    links.forEach((link) => {
       link.classList.remove("active");
       if (link.getAttribute("data-section").includes(curentSection)) {
          link.classList.add("active");
       }
    });
 });