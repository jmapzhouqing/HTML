function main(){
    var canva = document.getElementById("example");
    if(canva!=null){
        var ctx = canva.getContext("2d");
        ctx.fillStyle = 'rgba(0,0,255,1.0)';
        ctx.fillRect(120,10,150,150);
    }
}
