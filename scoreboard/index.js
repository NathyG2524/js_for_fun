let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0

function add1() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

function add2() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

function add3() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

let guestScore = 0
function gadd1() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
}

function gadd2() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
}

function gadd3() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
}