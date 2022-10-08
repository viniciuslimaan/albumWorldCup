// Get
const getCards = () => {
    let allCards = JSON.parse(localStorage.getItem('cards')) || []
    let repeatedCards = []

    allCards.forEach(card => {
        if (card.quantity > 1) {
            card.quantity -= 1
            repeatedCards.push(card)
        }
    })

    return repeatedCards
}

// Set
const setCards = card => localStorage.setItem('cards', JSON.stringify(card))

// Displays
const displayRepeatedPlayers = document.querySelector('#repeatedPlayers')

// Init
const init = () => {
    if (getCards().length > 0) {
        teams.forEach(team => {
            team.players.forEach(player => {
                let quantity = numberOfRepeated(team.initials, player.id)

                if (quantity > 0) {
                    displayRepeatedPlayers.innerHTML += `
                        <div class="card" ${player.id === 0 ? specialColor : ''}>
                            <div class="quantity">${quantity}x</div>
                            <div class="info">
                                <img src="../assets/flags/${team.flag}" alt="Imagem da bandeira do(a) ${team.name}">
                                <p>${player.position}</p>
                            </div>
                            <img src="../assets/player.png">
                            <p>${player.name}</p>
                        </div>
                    `
                }
            })
        })
    } else {
        displayRepeatedPlayers.innerHTML += `
        <div class="empty">
            <span>
                <iconify-icon inline icon="line-md:coffee-half-empty-twotone-loop"></iconify-icon>
            </span>
            <p>Você não tem cartas sobrando.</p>
        <div>
        `
    }
}

// Show number of repeated cards
const numberOfRepeated = (teamInitials, playerId) => {
    let quantity = 0

    getCards().forEach(card => {
        if (card.teamInitials === teamInitials && card.playerId === playerId) quantity = card.quantity
    })

    return quantity
}

init()