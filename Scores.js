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
    Object.keys(data).forEach(key =>{
        console.log(data[key]);
        if(`${data[key].Modo}`=== tid){
            rowHTML += `<tr>
                        <td>${data[key].Nombre}</td>
                        <td>${data[key].Tiempo}</td>
                    </tr>`;
        }
    });
    console.log(rowHTML);
    tbody.innerHTML =rowHTML;
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