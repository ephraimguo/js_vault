function LimitDrag(id){
    Drag.call(this, id);
}

for(var i in Drag.prototype){
    LimitDrag.prototype[i] = Drag.prototype[i];
}

LimitDrag.prototype.fnMove = function (ev){
    var oEvent = ev || event;
    var pTop = oEvent.clientY - this.disY;
    var pLeft = oEvent.clientX - this.disX;


    if (pTop <0) {
        this.oDiv.style.top = 0;
    }
    else if(pTop > document.documentElement.clientHeight - this.oDiv.offsetHeight){
        this.oDiv.style.top = document.documentElement.clientHeight - this.oDiv.offsetHeight +'px';
    }
    else{
        this.oDiv.style.top = pTop + 'px';
    }


    if (pLeft <0 ) {
        this.oDiv.style.left = 0;
    }
    else if(pLeft > document.documentElement.clientWidth - this.oDiv.offsetWidth){
        this.oDiv.style.left = document.documentElement.clientWidth - this.oDiv.offsetWidth + 'px';
    }
    else {
        this.oDiv.style.left = pLeft + 'px';
    }
}