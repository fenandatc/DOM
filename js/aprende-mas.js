const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("#reloj","#activar-alarma","#desactivar-alarma")
})

/* Menu Hamburgesa */

function hamburgerMenu(panelBtn,panel, menuLink){
    const d = document;

    d.addEventListener("click",e => {
        if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
}

/* Reloj 

digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

*/

function digitalClock(clock,btnPlay,btnStop){
    let clockTempo;
    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
        
           e.target.disabled = true 
        }

        if(e.target.matches(btnStop)){
            clearInterval (clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

let audio = d.getElementById("audio");
function alarm(clock, alarmPlay, alarmStop){
    let clockAlarm;
    d.addEventListener("click", e=>{
        if(e.target.matches(alarmPlay)){
            clockAlarm = setInterval(() => {
                audio.play();
            }, 2000);

            e.target.disabled = true
        }

        if(e.target.matches(alarmStop)){
            clearInterval (clockAlarm);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(alarmPlay).disabled = false;
        }
    })
    
}