const btnBukaUndangan = document.getElementById("btnBukaUndangan");
const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicToggle");

btnBukaUndangan.addEventListener("click", function() {
    //mengunci scroll 
    document.body.classList.remove("locked-scroll");
    musicButton.style.display = "block";

    try {
        music.play();
        musicButton.classList.add("playing");
        musicButton.setAttribute("aria-label", "Hentikan musik latar");
    } catch (error) {
        console.log("Autoplay diblokir oleh browser sampai ada interaksi tambahan.");
    }

    // Scroll smooth
    const bagianMempelai = document.getElementById("mempelai");
    if (bagianMempelai) {
        bagianMempelai.scrollIntoView({ behavior: "smooth" });
    }
});

musicButton.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        musicButton.classList.add("playing");
        musicButton.setAttribute("aria-label", "Hentikan musik latar");
    } else {
        music.pause();
        musicButton.classList.remove("playing");
        musicButton.setAttribute("aria-label", "Putar musik latar");
    }
});

// COUNTDOWN
const weddingDate = new Date(2026, 11, 20, 8, 0, 0).getTime();

function updateCountdown() {
    const now = Date.now();
    const difference = weddingDate - now;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (difference > 0) {
        days = Math.floor(difference / (1000 * 60 * 60 * 24));
        hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        minutes = Math.floor((difference / (1000 * 60)) % 60);
        seconds = Math.floor((difference / 1000) % 60);
    }

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);