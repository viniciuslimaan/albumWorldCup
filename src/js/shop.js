// Get
const getPackages = () => JSON.parse(localStorage.getItem('packages')) || 0
const getCards = () => JSON.parse(localStorage.getItem('cards')) || []

// Set
const setPackages = package => {
    localStorage.setItem('packages', JSON.stringify(package))
    
    setPackagesDisplay(getPackages())
}
const setCards = card => localStorage.setItem('cards', JSON.stringify(card))
const setPackagesDisplay = value => packagesDisplay.innerHTML = value

// Get html
const packagesDisplay = document.querySelector('#packages')
const playersDisplay = document.querySelector('#players')
const btnBuyPackage = document.querySelector('#buyPackage')
const btnOpenPackage = document.querySelector('#openPackage')

// Code
const init = () => {
    setPackagesDisplay(getPackages())
}

// Buy package
const buyPackage = () => {
    let packages = getPackages()

    packages === 0 ? packages = 1 : packages++

    setPackages(packages)
}

// Open package
const openPackage = () => {
    let packages = getPackages()
    
    if (packages > 0) {
        packages--
        
        setPackages(packages)
        generateCards()
    } else {
        alert('Você precisa comprar mais pacotes para abrir!')
    }
}

// Generating cards and placing them on the page
const generateCards = () => {
    playersDisplay.innerHTML = ''
    let cards = []
    let savedCards = getCards()

    for (i = 1; i <= 4; i++) {
        let team = teams[Math.floor(Math.random() * teams.length)]
        let player = team.players[Math.floor(Math.random() * 12)]

        playersDisplay.innerHTML += `
            <div class="card" ${player.id === 0 ? specialColor : ''}>
                <div class="info">
                    <img src="../assets/flags/${team.flag}" alt="Imagem da bandeira do(a) ${team.name}">
                    <p>${player.position}</p>
                </div>
                <img src="../assets/player.png">
                <p>${player.name}</p>
            </div>
        `

        savedCards = saveCards(team, player, savedCards)
        cards.push(player)
    }
    setCards(savedCards)
}

// Saving cards on localStorage
const saveCards = (team, player, savedCards) => {
    
    let newPlayer = {
        teamInitials: team.initials,
        playerId: player.id,
        quantity: 1
    }
    
    if (savedCards.length === 0) {
        savedCards.push(newPlayer)
    } else {
        let saved = false

        savedCards.forEach(card => {
            if (!saved) {
                if (team.initials === card.teamInitials && player.id === card.playerId) {
                    card.quantity += 1
                    saved = true
                }
            }
        })

        if (!saved) savedCards.push(newPlayer)
    }

    return savedCards
}

init()

// Button events
btnBuyPackage.addEventListener('click', () => buyPackage())
btnOpenPackage.addEventListener('click', () => openPackage())