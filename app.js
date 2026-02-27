let match = JSON.parse(localStorage.getItem("sidelineMatch")) || {
    gainlinePlus: 0,
    gainlineMinus: 0,
    domTackPlus: 0,
    domTackMinus: 0,
    quickBallPlus: 0,
    quickBallMinus: 0,
    turnoverWon: 0,
    turnoverLost: 0,
    penalties: 0
};

function saveData() {
    localStorage.setItem("sidelineMatch", JSON.stringify(match));
}

function updateStat(stat) {
    match[stat]++;
    saveData();
    calculateMomentum();
    displayStats();
}

function percent(a, b) {
    if ((a + b) === 0) return 0;
    return Math.round((a / (a + b)) * 100);
}

function calculateMomentum() {
    let gain = percent(match.gainlinePlus, match.gainlineMinus);
    let tackle = percent(match.domTackPlus, match.domTackMinus);
    let quick = percent(match.quickBallPlus, match.quickBallMinus);

    let score = gain + tackle + quick - (match.penalties * 5) - (match.turnoverLost * 3);

    let momentumText = "Neutral";

    if (score > 150) momentumText = "🟢 Strong";
    else if (score > 80) momentumText = "🟡 Even";
    else momentumText = "🔴 Under Pressure";

    document.getElementById("momentum").innerText = "Momentum: " + momentumText;
}

function displayStats() {

    let gainTotal = match.gainlinePlus + match.gainlineMinus;
    let tackleTotal = match.domTackPlus + match.domTackMinus;
    let quickTotal = match.quickBallPlus + match.quickBallMinus;

    document.getElementById("statsOutput").innerHTML =
        "Gainline: " + percent(match.gainlinePlus, match.gainlineMinus) + "% (" 
        + match.gainlinePlus + "/" + gainTotal + ")<br>" +

        "Tackle Dominance: " + percent(match.domTackPlus, match.domTackMinus) + "% (" 
        + match.domTackPlus + "/" + tackleTotal + ")<br>" +

        "Quick Ball: " + percent(match.quickBallPlus, match.quickBallMinus) + "% (" 
        + match.quickBallPlus + "/" + quickTotal + ")<br>" +

        "Turnovers Won: " + match.turnoverWon + "<br>" +
        "Turnovers Lost: " + match.turnoverLost + "<br>" +
        "Penalties: " + match.penalties;
}}
function resetMatch() {
    localStorage.removeItem("sidelineMatch");
    location.reload();
}
// LOAD DATA WHEN PAGE OPENS
window.onload = function() {
    displayStats();
    calculateMomentum();
};