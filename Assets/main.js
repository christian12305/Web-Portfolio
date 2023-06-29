window.addEventListener("scroll", function(event){
    let Yscroll = this.scrollY;
    let temp = Yscroll-0.000001;

    while(temp != Yscroll){

        let headerOffset = document.querySelector('header').offsetHeight * 3;
    
        let totalHeight = this.document.documentElement.scrollHeight - headerOffset;
    
        let Ypercentage = (Yscroll / totalHeight).toFixed(1) * 100;

        console.log();

        temp = this.scrollY;

        let elem = this.document.querySelector('header');
        //X = 100% derecha
        // X = 100 - Ypercentage
        //Y = 100% abajo
        //if( x >= 50)
        // Y = Math.abs(Y = X - 60)
        //else
        // Y = Math.abs(Y = X - 20)
        let X = 90 -Ypercentage;
        let Y = 0;
        if( X >= 50){
            Y = Math.abs(X - 60);
        }else{
            Y = Math.abs(X - 30);
        }

        elem.style.backgroundImage = `radial-gradient(circle at ${X}% ${Y}%, hsl(52, 100%, 67%) -10%, rgba(149,179,244,1) 65%)`;
        
    }

});

//Highlights on navbar each section onscroll
let sections = document.querySelectorAll('.section');
let secNav = document.querySelectorAll('.nav-bar-desktop ul li a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            secNav.forEach((sec) => {
                sec.classList.remove('active');
                document.querySelector('.nav-bar-desktop ul li a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};