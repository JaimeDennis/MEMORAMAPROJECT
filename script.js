let startBtn = document.getElementById("start");
        let stopBtn = document.getElementById("stop");
        let resetBtn = document.getElementById("reset");
        console.log(startBtn);
        let hour = '00';
        let minute = '00';
        let second = '00';
        let count = '00';
 
        startBtn.addEventListener('click', function () {
            timer = true;
            stopWatch();
        });
        
        stopBtn.addEventListener('click', function () {
            timer = false;
        });
        
        resetBtn.addEventListener('click', function () {
            timer = false;
            hour = 0;
            minute = 0;
            second = 0;
            count = 0;
            document.getElementById('hr').innerHTML = "00";
            document.getElementById('min').innerHTML = "00";
            document.getElementById('sec').innerHTML = "00";
            document.getElementById('count').innerHTML = "00";
        });
 
        function stopWatch() {
            if (timer) {
                count++;
        
                if (count == 100) {
                    second++;
                    count = 0;
                }
        
                if (second == 60) {
                    minute++;
                    second = 0;
                }
        
                if (minute == 60) {
                    hour++;
                    minute = 0;
                    second = 0;
                }
        
                let hrString = hour;
                let minString = minute;
                let secString = second;
                let countString = count;
        
                if (hour < 10) {
                    hrString = "0" + hrString;
                }
        
                if (minute < 10) {
                    minString = "0" + minString;
                }
        
                if (second < 10) {
                    secString = "0" + secString;
                }
        
                if (count < 10) {
                    countString = "0" + countString;
                }
        
                document.getElementById('hr').innerHTML = hrString;
                document.getElementById('min').innerHTML = minString;
                document.getElementById('sec').innerHTML = secString;
                document.getElementById('count').innerHTML = countString;
                setTimeout(stopWatch, 10);
            }
        }

        var au=document.getElementById('aud');
        var isPlaying=true;
        let primeraImagen = null;
        let totalpares=6;
        let x=0;
        let y=0;
        let tid='tabla4x3';
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        function resetearJuego() {
            console.log(totalpares);
            x = 0;
            y = 0;
            const imagenes = [
                { id: 1, src: "./Imagenes/ArtTheClown.jpeg" },
                { id: 2, src: "./Imagenes/Freddy.jpeg" },
                { id: 3, src: "./Imagenes/BOBA.jpg" },
                { id: 4, src: "./Imagenes/Michael.jpeg" },
                { id: 5, src: "./Imagenes/JigSaw.jpg" },
                { id: 6, src: "./Imagenes/Chucky.jpeg" },
                { id: 7, src: "./Imagenes/Ghostface.jpeg" },
                { id: 8, src: "./Imagenes/PENYWISE.jpg" },
                { id: 9, src: "./Imagenes/Sadako.webp" },
                { id: 10, src: "./Imagenes/The thing.webp" },
                { id: 11, src: "./Imagenes/Tomie-by-Junji-Ito-Review-2.jpg" },
                { id: 12, src: "./Imagenes/JASON.jpg" }
            ];
            console.log(imagenes.length);
            if (totalpares > imagenes.length) {
                console.error("No hay suficientes imágenes para este número de pares.");
                console.log(totalpares);
                console.log(imagenes.length/2);
                return;
            }
            const tablas = document.querySelectorAll('.tablauno');
                
            tablas.forEach((tabla) => {
                if (tabla.style.display !== 'none') {
                    const imagenesAleatorias = shuffleArray(imagenes);
                    const celdas = tabla.querySelectorAll('td');
                    const imagenesParaTabla = imagenesAleatorias.slice(0, totalpares);

                    const pares = [];
                  
                    for (let i = 0; i < totalpares; i++) {

                        pares.push(imagenesParaTabla[i], imagenesParaTabla[i]);
                    }

                    const imagenesAleatoriasParaTabla = shuffleArray(pares);

                    celdas.forEach((celda, index) => {
                        const imagen = celda.querySelector('img');
                        imagen.src = imagenesAleatoriasParaTabla[index].src;
                        imagen.setAttribute('data-id', imagenesAleatoriasParaTabla[index].id);
                        imagen.style.display = 'none';
                    });
                }
            });
            
            primeraImagen = null;
            document.getElementById('Winscreen').style.display='none';
            document.getElementById('wincon').style.display='none';
            if(totalpares===6){
                document.getElementById('tabla4x3').style.display='grid';
            }
            if(totalpares===8){
                document.getElementById('tabla4x4').style.display='grid';
            }
            if(totalpares===10){
                document.getElementById('tabla4x5').style.display='grid';
            }
            if(totalpares===12){
                document.getElementById('tabla4x6').style.display='grid';
            }
        }
        //mucho

        function MostrarCarta(celda) {
            if(y>2){
                setTimeout(500);
                y=0;
            }
            y=y+1;
            if(y<3){
                const imagen = celda.querySelector('img');
                const imagenId = imagen.getAttribute('data-id');
                if (imagen.style.display === 'block') {
                
                }else {
                    if (primeraImagen === null) {
                        primeraImagen = { id: imagenId, elemento: imagen };
                        imagen.style.display = 'block';
                    } else {
                        imagen.style.display = 'block';
                        setTimeout(() => {
                            if (primeraImagen.id === imagenId) {
                                y=y+1;
                                x=x+1;
                                if (x === totalpares){

                                    document.getElementById('tabla4x3').style.display='none';
                                    document.getElementById('tabla4x4').style.display='none';
                                    document.getElementById('tabla4x5').style.display='none';
                                    document.getElementById('tabla4x6').style.display='none';
                                    document.getElementById('wincon').style.display='block';
                                    document.getElementById('Winscreen').style.display='block';
                                    document.getElementById('wincon').style.opacity=1;
                                    document.getElementById('Winscreen').style.opacity=1; 
                                }
                            } else {
                                primeraImagen.elemento.style.display = 'none';
                                imagen.style.display = 'none';
                                y=y+1;
                            }
                            primeraImagen = null;
                        }, 500);
                    }
                }
            }
            
        }
//cambio para master
        function cambiarTabla(tablaId) {
            // Oculta todas las tablas
            tid=tablaId;
            var todasLasTablas = document.querySelectorAll("table");
            todasLasTablas.forEach(function(tabla) {
                tabla.style.display = "none";
            });

            // Muestra la tabla seleccionada
            var tablaSeleccionada = document.getElementById(tablaId);
            if (tablaSeleccionada) {
                console.log(tablaId);
                tablaSeleccionada.style.display = "table";
                if(tablaId === 'tabla4x3'){
                    totalpares=6;
                } else if(tablaId === 'tabla4x4'){
                    totalpares=8;
                } else if(tablaId === 'tabla4x5'){
                    totalpares=10;
                } else if(tablaId === 'tabla4x6'){
                    totalpares=12;
                }        
                resetearJuego();
            }
        }
        window.onload = function() {
            resetearJuego(); 
        };
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