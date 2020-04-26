const moonPath = "M12.5 22.5877C12.5 35.0141 22.5 45.0877 22.5 45.0877C10.0736 45.0877 0 35.0141 0 22.5877C0 10.1613 10.0736 0.0876744 22.5 0.0876744C22.5 0.0876744 12.5 10.1613 12.5 22.5877Z";
const sunPath = "M45 22.5C45 34.9264 34.9264 45 22.5 45C10.0736 45 0 34.9264 0 22.5C0 10.0736 10.0736 0 22.5 0C34.9264 0 45 10.0736 45 22.5Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

//Ketika svg di click

darkMode.addEventListener('click', () => {

    //setting timeline
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    //menambahkan animasi di dalam timeline
    timeline.add({
        targets: ".sun",
        d: [
            { value: toggle ? sunPath : moonPath  }
        ]
    })

    //penambahan animasi rotate di objek SVG
    .add({
        targets: '#darkMode',
        rotate: 320
    },"-= 350")
    .add({
        targets: "footer",
        backgroundColor: toggle ? 'rgb(142, 194, 254)' : "rgb(0,0,0)",
        color : toggle ? "rgb(0,0,0)" : "rgb(142, 194, 254)"
    },"-= 700")
    .add({
        targets: "#footer-text",
        color : toggle ? "rgb(0,0,0)" : "rgb(255,255,255)"
    },"-= 700")
    .add({
        targets: "#img-1",
        Display : toggle ? "none" : "block"
    },"-= 700")
    .add({
        targets: "#img-2",
        Display : toggle ? "block" : "none"
    },"-= 700");


    //setiap objek di klik 
    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }
    
});