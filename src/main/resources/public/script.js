wait = false
function resizee(){
    if(!wait) {
        let row = document.querySelector(".guesses2");
        if(document.querySelector(".popcont").classList.contains("grow")) {
        let origwidth = row.offsetWidth;
        let maxwidth = 336;
        let maxheight = 64;
        let ratio = maxheight / maxwidth
        let origheight = row.offsetHeight;
        if(origwidth < maxwidth) {
        let rows = document.querySelectorAll('.guesses2')
        for(let i = 0; i < rows.length;i++) { 
        rows[i].style.height = (origwidth * ratio)+"px"
        }
    }
        
        wait = true;
        setTimeout(function(){wait = false},100)
        }}
}
// ----------------
// window resize
// ----------------

window.addEventListener('resize', resizee);


function fadee(time) {
    let BGCONT = document.querySelector(".bgcontainer")
    if(BGCONT.classList.contains("nodisplay")) {
        BGCONT.classList.remove("nodisplay")
        BGCONT.style.transition = time+"ms"
        setTimeout(function() {
            BGCONT.classList.add("bgcontaineractive")
            document.querySelector(".popcont").classList.add("grow")
            resizee()
        },50)
        setTimeout(function() {BGCONT.style.transition = "0ms"},time)
        
    }
    else {
        BGCONT.style.transition = time+"ms"
        setTimeout(function() {
            BGCONT.classList.remove("bgcontaineractive")
            document.querySelector(".popcont").classList.remove("grow")
    },50)
        setTimeout(function() {BGCONT.classList.add("nodisplay")},time)
    }
}
function betolt(mit) {
    let contcont = document.querySelector(".contcont")
    let cim = contcont.childNodes[1]
    let content = contcont.childNodes[3]
    switch (mit) {
        case "login":
            cim.innerHTML = "Belépés"
            
            break;
        case "info":
            cim.innerHTML = "Szabályok"
            content.innerHTML = `
            <p class="contentp">Találd ki a napi szót 8 tippből! Minden tipp után a négyzetek színe jelzi, hogy mennyire kerültél közel a megoldáshoz.</p>
        <div class="guessescenter">
        <div class="guesses2">
            <div class="row">
            <div class="letterboxgreen"><div class="letterbox"><div class="letter">H</div></div></div>
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">I</div></div></div>
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">T</div></div></div>
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">E</div></div></div>
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">L</div></div></div>
            </div>
        </div>
        </div>
        <p class="contentp">A "H" betű szerepel a szóban és jó helyen van.</p>
        <div class="guessescenter">
        <div class="guesses2">
            <div class="row">
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">Sz</div></div></div>
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">Ó</div></div></div>
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">Z</div></div></div>
            <div class="letterboxyellow"><div class="letterbox"><div class="letter">A</div></div></div>
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">T</div></div></div>
            </div> 
        </div> 
        </div>
        <p class="contentp">Az "A" betű szerepel a szóban, de nem jó helyen van.</p>
        <div class="guessescenter">
        <div class="guesses2">
            <div class="row">
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">J</div></div></div>
            <div class="letterboxgrey"><div class="letterbox"><div class="letter">Á</div></div></div>
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">T</div></div></div>
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">É</div></div></div>
            <div class="letterboxcontainer whiteborder"><div class="letterbox"><div class="letter">K</div></div></div>
            </div>
        </div>
        </div>
        <p class="contentp">Az "Á" betű nem szerepel a szóban.</p>
        <p class="contentdolt">Ez egy nyílt forráskódú, továbbfejlesztett magyar változata a Wordle játéknak.</p>
        <p class="contentdolt">A módosítatlan szólistánkat <a target="_blank" class="link" href="https://gist.github.com/Konstantinusz/f9517357e46fa827c3736031ac8d01c7">innen</a> érheted el.</p>
        <p class="contentdolt">Nézd meg <a target="_blank" class="link" href="https://github.com/danci1050/Szozat-2.0">a továbbfejlesztett magyar verzió kódját itt.</a></p>
        <p class="contentdolt">Az angol verzió klónjának <a target="_blank" class="link" href="https://github.com/cwackerfuss/react-wordle">a kódját itt találod.</a></p>
        <p class="contentdolt">Az eredeti játékot pedig <a target="_blank" class="link" href="https://github.com/cwackerfuss/react-wordle">itt kipróbálhatod.</a></p>
        <p class="contentdolt">A továbbfejlesztett magyar vezió agyát <strong>Nagy Dániel</strong>, a kinézetét pedig <strong>Ákim László</strong> valósította meg.</p>
        `;
            break;
        case "settings":
            cim.innerHTML = "Beállítások"
            break;
        case "stats":
            cim.innerHTML = "Statisztika"
            content.innerHTML="Lépj be vándor"
            break;
        default:
            break;
    }
}

function flipto(which, colour) {
    let speed = 175;
    let allbox = document.querySelectorAll(".letterbox")
    let now = allbox[which - 1];
    now.parentElement.classList.remove("letterboxyellow")
    now.parentElement.classList.remove("letterboxgreen")
    now.parentElement.classList.remove("letterboxgrey")
    now.parentElement.style.transition = speed + "ms";
    now.parentElement.classList.add("flip")
    setTimeout(function () {
        now.parentElement.style.transitionDuration = "10ms";
        now.parentElement.classList.add("letterbox" + colour);
        now.parentElement.style.transitionDuration = speed + "ms";
        setTimeout(function () {
            now.parentElement.classList.remove("letterboxcontainer")
            now.parentElement.classList.remove("flip");
        }, speed)
    }, speed-100)
}
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);

var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
document.querySelector("#menutitle").innerHTML = "Hundle - "+day+". nap"


// ----------------
// window onload
// ----------------
window.addEventListener("load", function () {
   




    let probalkozasok = []
    let mostaniszo = ""
    let hanyadiksor = 1
    let hanyadikbetu = 1
    
    function getszo() {
        let szo = ""
        let kockak = document.querySelectorAll(".letterbox")
        let hanyadik = (hanyadiksor - 1) * 5;
        for(let i = hanyadik;i < hanyadik+5;i++) {
            let betuu = kockak[i].firstChild != null ? kockak[i].firstChild.innerHTML : ""
            szo += betuu
        }
        return szo;
    }
    forgas = false
    const timer = ms => new Promise(res => setTimeout(res, ms))

async function szinez(sz1,sz2,sz3,sz4,sz5) {
        let hanyadik = (hanyadiksor - 1) * 5 + 1;
        let szinek = [sz1,sz2,sz3,sz4,sz5]
        forgas = true
        for(let i = 0;i<5;i++){
            
            switch (szinek[i]) { 
                case "correct":
                    flipto(hanyadik, "green")
                    break;
                case "close":
                    flipto(hanyadik, "yellow")
                    break;
                case "wrong":
                    flipto(hanyadik, "grey")
                    break;
                default:
            }
            hanyadik++
            await timer(375);
        }
        forgas = false
        checkwin(sz1,sz2,sz3,sz4,sz5)
        hanyadiksor++
        hanyadikbetu = 1
    }
    function checkwin(a1,a2,a3,a4,a5) {
        if (a1 == "correct" && a2 == "correct" && a3 == "correct" && a4 == "correct" && a5 == "correct") {
            console.log("Nyertél geci")
            let valoswin = true 
            if(valoswin) {
                forgas = true
            }
            //szerver oldalon le kell csekkolni, hogy valóban nyert-e valaki, majd ha igen, akkor letiltani az inputokat.
        }
    }

    async function doo(mit) {
        if (mit == "do" && !forgas) {
            if(document.querySelectorAll(".letter")[(hanyadiksor * 5) - 1] != null && !forgas){
            var response = await checkWord(getszo().toLowerCase())
            szinez(response[0],response[1],response[2],response[3],response[4])
            }
        }
        else {
            let kockak = document.querySelectorAll(".letterbox")
            let hanyadik = (hanyadiksor - 1) * 5 + hanyadikbetu - 1;
            if (hanyadikbetu > 1 && !forgas) { kockak[hanyadik - 1].innerHTML = ''; kockak[hanyadik - 1].parentNode.classList.remove("whiteborder"); hanyadikbetu-- }
        }
    }
    
   
    
    function write(betu) {
        let speed = 100
        let kockak = document.querySelectorAll(".letterbox")
        let hanyadik = (hanyadiksor - 1) * 5 + hanyadikbetu - 1;
        if (hanyadikbetu <= 6 && !forgas) {
            let elozo = kockak[hanyadik - 1] != null ? kockak[hanyadik - 1].firstChild.innerHTML.toUpperCase() : 0
            let elozoelozo = kockak[hanyadik - 2] != null ? kockak[hanyadik - 2].firstChild.innerHTML.toUpperCase() : 0
            let duplak = ["S", "Z", "L", "N", "T", "D", "DZ", "C", "G"]
            let most = ["Z", "Y", "S"]
            let voltevaltozas = false
            if (elozo != 0 && duplak.includes(elozo) && most.includes(betu)) {
                switch (betu) {
                    case "Z":
                        if (elozo == "D") {
                            if (elozoelozo == "D") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">DZ</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">DZ</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">DZ</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "S") {
                            if (elozoelozo == "S") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">SZ</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">SZ</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">SZ</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        break;
                    case "S":
                        if (elozo == "Z") {
                            if (elozoelozo == "Z") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">ZS</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">ZS</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">ZS</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "C") {
                            if (elozoelozo == "C") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">CS</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">CS</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">CS</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "DZ") {
                            if (elozoelozo == "DZ") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">DZS</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">DZS</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">DZS</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        break;
                    case "Y":
                        if (elozo == "L") {
                            if (elozoelozo == "L") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">LY</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">LY</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">LY</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "G") {
                            if (elozoelozo == "G") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">GY</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">GY</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">GY</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "N") {
                            if (elozoelozo == "N") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">NY</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">NY</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">NY</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        else if (elozo == "T") {
                            if (elozoelozo == "T") {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">TY</div>'
                                kockak[hanyadik - 2].innerHTML = '<div class="letter">TY</div>'
                            }
                            else {
                                kockak[hanyadik - 1].innerHTML = '<div class="letter">TY</div>'
                            }
                            hanyadikbetu--
                            hanyadik--
                            voltevaltozas = true
                        }
                        break;
                    default:
                    return 0
                }
                
            }
            if (!voltevaltozas && hanyadikbetu <= 5) {
                kockak[hanyadik].innerHTML = '<div class="letter">' + betu + '</div>'
                kockak[hanyadik].parentNode.classList.add('whiteborder')
                kockak[hanyadik].parentNode.style.transitionDuration = speed + "ms";
                kockak[hanyadik].parentNode.classList.add('boom')
                setTimeout(function () {
                    kockak[hanyadik].parentNode.classList.remove('boom')
                }, speed)
            }
            if(hanyadikbetu <= 5) {mostaniszo += betu}
            if(!voltevaltozas && hanyadikbetu == 6) {hanyadikbetu = 5}
            
            hanyadikbetu++;
        }
    }

    let betuk = ["Cs", "Dz", "Dzs", "Gy", "Ly", "Ny", "Sz", "Ty", "Zs", "Ö", "Ü", "Ó", "Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ő", "Ú", "A", "S",
        "D", "F", "G", "H", "J", "K", "L", "É", "Á", "Ű", "Í", "Y", "X", "C", "V", "B", "N", "M"]
    let gombok = document.querySelectorAll(".normalbtn")
    for (let i = 0; i < betuk.length; i++) {
        gombok[i].setAttribute("data-betu", betuk[i])
    }
    let bigbtns = ['do', 'delete']
    let szoveg = ['Beküld', 'Töröl']
    let bigbtn = document.querySelectorAll(".bigbtn")
    bigbtn[0].setAttribute("data-do", bigbtns[0])
    bigbtn[1].setAttribute("data-do", bigbtns[1])
    bigbtn[0].firstChild.innerHTML = szoveg[0]
    bigbtn[1].firstChild.innerHTML = szoveg[1]

    
    document.querySelector(".btnbox").addEventListener("click",
        function (event) {
            let betu = event.target.closest('.normalbtn')
            betu = betu == null ? betu : betu.getAttribute("data-betu").toUpperCase()
            if (betu == null) {
                betu = event.target.closest('.bigbtn')
                if (betu != null) {
                    doo(betu.getAttribute('data-do')) //töröl + beküld
                }
            }
            else {
                write(betu) // Írás
            }
        });
});

 async function checkWord(word){
    const url = 'http://localhost:8080/api/v1/szozat/'
    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'plain/text',
        },
        body: word
    }).then(response => response.json())
    .then(data => {
        return data
    });
    return response;
}
