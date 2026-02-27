let match = {
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

function updateStat(stat) {
    match[stat]++;
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
    document.getElementById("statsOutput").innerHTML =
        "Gainline: " + percent(match.gainlinePlus, match.gainlineMinus) + "%<br>" +
        "Tackle Dominance: " + percent(match.domTackPlus, match.domTackMinus) + "%<br>" +
        "Quick Ball: " + percent(match.quickBallPlus, match.quickBallMinus) + "%<br>" +
        "Turnovers Won: " + match.turnoverWon + "<br>" +
        "Turnovers Lost: " + match.turnoverLost + "<br>" +
        "Penalties: " + match.penalties;
}