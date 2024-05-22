function getPilihanComputer() {
    var comp = Math.random();

    if(comp < 0.34) {
        return "gajah";

    } else if (comp >= 0.34 && comp < 0.67) {
        return "orang";

    } else {
        return "semut";
    }
}

function getHasil(comp, player) {
    var hasil = "";

    if (player == comp) {
        return "Seri!";

    } else if(player == "gajah") {
        if (comp == "orang") {
            return "Menang";
        } else {
            return "Kalah";
        }

    } else if(player == "orang") {
        if (comp == "semut") {
            return "Menang";
        } else {
            return "Kalah";
        }

    } else if(player == "semut") {
        if (comp == "gajah") {
            return "Menang";
        } else {
            return "Kalah";
        }
    }
}

function putar() {
    const imgComputer = document.querySelector(".img-komputer");
    const gambar = ['gajah','semut','orang'];

    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }

        imgComputer.setAttribute("src","../Gambar/" + gambar[i++] + ".png");

        if (i == gambar.length) {
            i=0;
        }

    }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
    pil.addEventListener("click", function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(function() {
            const imgComputer = document.querySelector(".img-komputer");
            imgComputer.setAttribute("src", "../Gambar/" + pilihanComputer + ".png");

            const info = document.querySelector(".info");
            info.innerHTML = hasil;
        }, 1000)

    })
})