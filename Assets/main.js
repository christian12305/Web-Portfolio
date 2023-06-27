window.addEventListener("scroll", function(event){
    let Yscroll = this.scrollY;
    let temp = Yscroll-1;

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
        console.log(X, Y);

        elem.style.backgroundImage = `radial-gradient(at ${X}% ${Y}%, hsl(52, 100%, 67%) -10%, rgba(149,179,244,1) 65%)`;
        
    }

});