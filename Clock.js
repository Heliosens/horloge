/**
 * create clock
 * create needle type = 'hour' or 'min' or 'sec'
 * @constructor
 */
let Clock = function (){

    /**
     *
     * @param target
     * @param w
     * @param h
     * @param hUnit
     * @param color
     * @param type
     * @param imgUrl
     */
    this.createNeedle = function (target, w, h, hUnit, color, type, imgUrl = ""){
        // create frame needle
        let frame = document.createElement('div');
        frame.style.height = (2 * h) + hUnit;
        // create needle
        let needle = document.createElement('div');
        needle.style.width = w;
        needle.style.height = h + hUnit;
        needle.style.backgroundColor = color;
        needle.style.position = "absolute";
        needle.style.transformOrigin = "center bottom";
        frame.appendChild(needle);

        /**
         * rotate in function of needle type
         */
        switch (type){
            case 'sec' :
                setInterval(function (){
                    let r = new Date().getSeconds();
                    needle.style.transform = "rotate(" + r*6 + "deg)";
                }, 1000)
                break;
            case 'min' :
                setInterval(function (){
                    let r = new Date().getMinutes();
                    needle.style.transform = "rotate(" + r*6 + "deg)";
                }, 1000)
                break;
            case 'hour' :
                setInterval(function (){
                    let r = new Date().getHours();
                    needle.style.transform = "rotate(" + r*30 + "deg)";
                }, 1000)
                break;
        }
        let place = document.getElementById(target);
        place.style.position = "relative";
        place.style.display = "flex";
        place.style.justifyContent = "center";
        place.style.alignItems = "center";
        place.appendChild(frame);
    }

}
