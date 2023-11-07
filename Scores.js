window.onload = function() {
    Score("tabla4x3");
};
let url="https://memorama-e79c5-default-rtdb.firebaseio.com/Leaderboard";
let tid="";
function Score(tabid){
    tid=tabid;
    consultarAsync();
}
var isPlaying=true;
async function consultarAsync(){
    try {
        const response= await fetch(`${url}.json`);
        const alumnos = await response.json();
        rendertable(alumnos);
        console.log("hola mundo")
    } catch (error) {
        console.error("Error",error);
    }
}
function rendertable(data){
    console.log(data);
    let tbody=document.getElementById("HS");
    let rowHTML ="";
    var arreglo=[];
    Object.keys(data).forEach(key =>{
        console.log(data[key]);
        if(`${data[key].Modo}`=== tid){
            arreglo.push([`${data[key].Tiempo}`,`${data[key].Nombre}`]);
        }
    });
    console.log(arreglo);
    arreglo.sort(sortFunction);
    for(let i=0;i<arreglo.length;i++){
        rowHTML += `<tr>
        <td>${arreglo[i][1]}</td>
        <td>${arreglo[i][0]}</td>
    </tr>`;
    }
    console.log(rowHTML);
    tbody.innerHTML =rowHTML;
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
function mutemusic() {
    if (isPlaying) {
        aud.pause();
        const button = document.getElementById("mute").innerText = "Play";
    } else {
        aud.play();
        const button = document.getElementById("mute").innerText = "Pause";
    }
    isPlaying = !isPlaying;
}