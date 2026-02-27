let match = JSON.parse(localStorage.getItem("sidelineMatch")) || {
    gainlinePlus: 0,
    gainlineMinus: 0,
    domTackPlus: 0,
    domTackMinus: 0,
    quickBallPlus: 0,
    quickBallMinus: 0,
    turnoverWon: 0,
    turnoverLost: 0,
    penalties: 0,
    scrumWon: 0,
    scrumLost: 0,
    tightheadWon: 0,
    lineoutWon: 0,
    lineoutLost: 0
};

function saveData() {
    localStorage.setItem("sidelineMatch", JSON.stringify(match));
}

function updateStat(stat) {
    match[stat]++;
    saveData();
    displayStats();
}

function percent(a, b) {
    if ((a + b) === 0) return 0;
    return Math.round((a / (a + b)) * 100);
}

function displayStats() {

    let gainTotal = match.gainlinePlus + match.gainlineMinus;
    let tackleTotal = match.domTackPlus + match.domTackMinus;
    let quickTotal = match.quickBallPlus + match.quickBallMinus;
    let scrumTotal = match.scrumWon + match.scrumLost;
    let lineoutTotal = match.lineoutWon + match.lineoutLost;

    document.getElementById("statsOutput").innerHTML =
        "<strong>Collision</strong><br>" +
        "Gainline: " + percent(match.gainlinePlus, match.gainlineMinus) + "% (" + match.gainlinePlus + "/" + gainTotal + ")<br>" +
        "Tackle Dom: " + percent(match.domTackPlus, match.domTackMinus) + "% (" + match.domTackPlus + "/" + tackleTotal + ")<br><br>" +

        "<strong>Breakdown</strong><br>" +
        "Quick Ball: " + percent(match.quickBallPlus, match.quickBallMinus) + "% (" + match.quickBallPlus + "/" + quickTotal + ")<br><br>" +

        "<strong>Set Piece</strong><br>" +
        "Scrums: " + percent(match.scrumWon, match.scrumLost) + "% (" + match.scrumWon + "/" + scrumTotal + ")<br>" +
        "Tightheads Won: " + match.tightheadWon + "<br>" +
        "Lineouts: " + percent(match.lineoutWon, match.lineoutLost) + "% (" + match.lineoutWon + "/" + lineoutTotal + ")<br><br>" +

        "<strong>Discipline</strong><br>" +
        "Turnovers Won: " + match.turnoverWon + "<br>" +
        "Turnovers Lost: " + match.turnoverLost + "<br>" +
        "Penalties: " + match.penalties;
}

function resetMatch() {
    localStorage.removeItem("sidelineMatch");
    location.reload();
}

displayStats();