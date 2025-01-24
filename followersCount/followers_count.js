let count = 0;
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("votre publication Instagram a gagne 10 abonnes ! Felicitations !");

    } else if (count === 20) {
        alert("Votre publication Instagram a gagne 20 abonnes ! Continuez comme ca !");
    }
}