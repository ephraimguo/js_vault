// 当鼠标hover杂复选框上的时候，让div1显示出来，鼠标移出来的时候，让div1消失
function $(){
    return document.getElementById('div1')
}

function mouseOver(){

    $().style.backgroundColor = '#00ff00';
    $().style.height = '300px';
    $().style.width = '300px';
}

function mouseOut(){
    $().style.backgroundColor = '#ff0000';
    $().style.height = '200px';
    $().style.width = '200px';
}

function show_hide() {
    var oDiv = document.getElementById('div_1');
    if (oDiv.style.display == 'block') {
        oDiv.style.display = 'none';
    }
    else {
        oDiv.style.display = 'block';
    }
}

function to_red(){
    var oDiv = document.getElementById('div_2');

    oDiv.className = 'tored';
}