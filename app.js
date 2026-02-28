// ===== MATCH DATA =====
let match = {
    gainlinePlus: 0,
    gainlineMinus: 0,
    domTackPlus: 0,
    domTackMinus: 0,
    quickBallPlus: 0,
    quickBallMinus: 0,
    scrumWon: 0,
    scrumLost: 0,
    tightheadWon: 0,
    lineoutWon: 0,
    lineoutLost: 0,
    maulPlus: 0,
    maulMinus: 0,
    turnoverWon: 0,
    turnoverLost: 0,
    penalties: 0,
    knockOn: 0
};

let currentQuarter = 1;

// ===== UPDATE STAT =====
function updateStat(stat) {
    match[stat]++;
    displayStats();
}

// ===== PERCENTAGE FUNCTION =====
function percent(a, b) {
    if ((a + b) === 0) return 0;
    return Math.round((a / (a + b)) * 100);
}

// ===== DISPLAY STATS =====
function displayStats() {

    let gainTotal = match.gainlinePlus + match.gainlineMinus;
    let tackleTotal = match.domTackPlus + match.domTackMinus;
    let quickTotal = match.quickBallPlus + match.quickBallMinus;
    let scrumTotal = match.scrumWon + match.scrumLost;
    let lineoutTotal = match.lineoutWon + match.lineoutLost;
    let maulTotal = match.maulPlus + match.maulMinus;

    document.getElementById("statsOutput").innerHTML =
        "<strong>Collision</strong><br>" +
        "Gainline: " + percent(match.gainlinePlus, match.gainlineMinus) + "% (" + match.gainlinePlus + "/" + gainTotal + ")<br>" +
        "Tackle: " + percent(match.domTackPlus, match.domTackMinus) + "% (" + match.domTackPlus + "/" + tackleTotal + ")<br><br>" +

        "<strong>Breakdown</strong><br>" +
        "Quick Ball: " + percent(match.quickBallPlus, match.quickBallMinus) + "% (" + match.quickBallPlus + "/" + quickTotal + ")<br><br>" +

        "<strong>Set Piece</strong><br>" +
        "Scrums: " + percent(match.scrumWon, match.scrumLost) + "% (" + match.scrumWon + "/" + scrumTotal + ")<br>" +
        "Tightheads: " + match.tightheadWon + "<br>" +
        "Lineouts: " + percent(match.lineoutWon, match.lineoutLost) + "% (" + match.lineoutWon + "/" + lineoutTotal + ")<br>" +
        "Mauls: " + percent(match.maulPlus, match.maulMinus) + "% (" + match.maulPlus + "/" + maulTotal + ")<br><br>" +

        "<strong>Discipline</strong><br>" +
        "Turnovers Won: " + match.turnoverWon + "<br>" +
        "Turnovers Lost: " + match.turnoverLost + "<br>" +
        "Penalties: " + match.penalties + "<br>" +
        "Knock Ons: " + match.knockOn;
}

// ===== RESET MATCH =====
function resetMatch() {
    location.reload();
}

// ===== QUARTER CONTROL =====
function nextQuarter() {
    if (currentQuarter < 4) {
        currentQuarter++;
        document.getElementById("quarterDisplay").innerText =
            "Quarter " + currentQuarter;
    } else {
        alert("Match Finished");
    }
}

// Initial display
displayStats();