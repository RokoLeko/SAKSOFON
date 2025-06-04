function prikaziSliku(ton) {
    const img = document.getElementById('slikaTona');
    const nazivTona = document.getElementById('naziv-tona');

    const imgPath = `slike/${ton}.jpg`;
    const imgTest = new Image();
    imgTest.src = imgPath;
    
    imgTest.onload = function() {
        img.src = imgPath;
        
        document.getElementById('popup').style.display = 'flex';
    }
    
    imgTest.onerror = function() {
        alert('Slika za odabrani ton nije pronađena!');
    }
}

function zatvoriPopup() {
    document.getElementById('popup').style.display = 'none';
}


window.onclick = function(event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}