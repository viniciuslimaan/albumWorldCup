// Params
const urlParams = new URLSearchParams(window.location.search)
const param = urlParams.get('team') || 'ale'

// Get
const getCards = () => {
    let cardsHeHas = JSON.parse(localStorage.getItem('cards')) || []
    let cardsFromThisTeam = []

    if (cardsHeHas.length > 0) {
        cardsHeHas.forEach(card => {
            if (card.teamInitials === param) cardsFromThisTeam.push(card)
        })
    }

    return cardsFromThisTeam
}

// Set
const setCards = card => localStorage.setItem('cards', JSON.stringify(card))

// Displays
const flagDisplay = document.querySelector('#flag')
const teamNameDisplay = document.querySelector('#teamName')
const coachDisplay = document.querySelector('#coach')
const cupsDisplay = document.querySelector('#cups')
const playersDisplay = document.querySelector('#players')
const buttonsDisplay = document.querySelector('#buttons')

// Change Color
const coachCC = document.querySelector('#coachCC')

// Buttons
const btnPrev = document.querySelector('#navgation-prev')
const btnNext = document.querySelector('#navgation-next')

// Init
const init = param => {
    if (!teams.find(team => team.initials === param)) 
        window.location.href = '../../index.html'

    teams.forEach(team => team.initials === param.toLocaleLowerCase() && putOnPage(team))
}

// Put data on page
const putOnPage = team => {
    putHeaderContent(team)
    putButtons(team)

    let teamColor = `style="background: ${team.color}"`

    if (getCards().length === 0) {
        team.players.forEach(player => {
            playersDisplay.innerHTML += `
                <div class="card" ${player.id === 0 ? specialColor : teamColor}>
                    <h3>${player.id}</h3>
                    <p>${player.name}</p>
                </div>
            `
        })
    } else {
        team.players.forEach(player => {
            if (verifyIfHeHasTheCard(player.id)) {
                playersDisplay.innerHTML += `
                    <div class="card-exist" ${player.id === 0 ? specialColor : ''}>
                        <div class="info">
                            <img src="../assets/flags/${team.flag}" alt="Imagem da bandeira do(a) ${team.name}">
                            <p>${player.position}</p>
                        </div>
                        <img src="../assets/player.png">
                        <p>${player.name}</p>
                    </div>
                `
            } else {
                playersDisplay.innerHTML += `
                    <div class="card" ${player.id === 0 ? specialColor : teamColor}>
                        <h3>${player.id}</h3>
                        <p>${player.name}</p>
                    </div>
                `
            }
        })
    }
}

const verifyIfHeHasTheCard = playerId => {
    let heHas = false

    getCards().forEach(card => {
        if (card.playerId === playerId) heHas = true
    })

    return heHas
}

// Header content
const putHeaderContent = team => {
    flagDisplay.innerHTML = `
        <img src="./../assets/flags/${team.flag}" alt="Bandeira do(a) ${team.name}">
    `
    teamNameDisplay.innerHTML = team.name
    coachDisplay.innerHTML = team.coach
    coachCC.style.background = team.color
    
    for (let i = 1; i <= team.cups; i++)
        cupsDisplay.innerHTML += '<iconify-icon inline icon="emojione:star"></iconify-icon>'
}

// Navigation buttons
const putButtons = team => {
    let prev = teams.find(teamPrev => teamPrev.id === (team.id -1))
    let next = teams.find(teamPrev => teamPrev.id === (team.id +1))
    
    // Back
    if (prev === undefined)
        buttonsDisplay.innerHTML += `
        <a href="#" class="btn-navigation disable">
            <iconify-icon inline icon="bx:left-arrow"></iconify-icon>
        </a>`
    else
        buttonsDisplay.innerHTML += `
        <a href="?team=${prev.initials}" class="btn-navigation">
            <iconify-icon inline icon="bx:left-arrow"></iconify-icon>
        </a>`

    // Next
    if (next === undefined)
        buttonsDisplay.innerHTML += `
        <a href="#" class="btn-navigation disable">
            <iconify-icon inline icon="bx:right-arrow"></iconify-icon>
        </a>`
    else
        buttonsDisplay.innerHTML += `
        <a href="?team=${next.initials}" class="btn-navigation">
            <iconify-icon inline icon="bx:right-arrow"></iconify-icon>
        </a>`
}

init(param)