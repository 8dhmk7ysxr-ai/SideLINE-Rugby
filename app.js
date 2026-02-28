// ===== MATCH DATA =====
let match = {
    gainlinePlus: 0,
    gainlineMinus: 0,
    domTackPlus: 0,
    domTackMinus: 0,
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

// ===== UPDATE STAT =====
function updateStat(stat) {
    match[stat]++;
    displayStats();
}

// ===== PERCENT FUNCTION =====
function percent(a, b) {
    if ((a + b) === 0) return 0;
    return Math.round((a / (a + b)) * 100);
}

// ===== DISPLAY STATS =====
function displayStats() {

    let gainTotal = match.gainlinePlus + match.gainlineMinus;
    let tackleTotal = match.domTackPlus + match.domTackMinus;
    let scrumTotal = match.scrumWon + match.scrumLost;
    let lineoutTotal = match.lineoutWon + match.lineoutLost;
    let maulTotal = match.maulPlus + match.maulMinus;

    document.getElementById("statsOutput").innerHTML =
        "<strong>Collision</strong><br>" +
        "Gainline: " + percent(match.gainlinePlus, match.gainlineMinus) +
        "% (" + match.gainlinePlus + "/" + gainTotal + ")<br>" +
        "Tackle: " + percent(match.domTackPlus, match.domTackMinus) +
        "% (" + match.domTackPlus + "/" + tackleTotal + ")<br><br>" +

        "<strong>Set Piece</strong><br>" +
        "Scrums: " + percent(match.scrumWon, match.scrumLost) +
        "% (" + match.scrumWon + "/" + scrumTotal + ")<br>" +
        "Tightheads: " + match.tightheadWon + "<br>" +
        "Lineouts: " + percent(match.lineoutWon, match.lineoutLost) +
        "% (" + match.lineoutWon + "/" + lineoutTotal + ")<br>" +
        "Mauls: " + percent(match.maulPlus, match.maulMinus) +
        "% (" + match.maulPlus + "/" + maulTotal + ")<br><br>" +

        "<strong>Discipline</strong><br>" +
        "Turnovers Won: " + match.turnoverWon + "<br>" +
        "Turnovers Lost: " + match.turnoverLost + "<br>" +
        "Penalties: " + match.penalties + "<br>" +
        "Knock Ons: " + match.knockOn;
}

// ===== RESET =====
function resetMatch() {
    location.reload();
}

// Initial display
displayStats();
