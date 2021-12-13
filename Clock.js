// create needle : type = hour, min, sec
let Clock = function (){

    this.createNeedle = function (target, w, h, color, type){
        // create needle
        let needle = document.createElement('div');
        needle.style.width = w;
        needle.style.height = h;
        needle.style.backgroundColor = color;
        needle.style.position = "absolue";
        needle.style.transformOrigin = "center bottom";
        switch (type){
            case 'sec' :
                setInterval(function (){
                    let r = new Date().getSeconds();
                    needle.style.transform = "rotate(" + r*6 + "deg)";
                }, 1000)
        }
        document.getElementById(target).appendChild(needle);
    }

}
