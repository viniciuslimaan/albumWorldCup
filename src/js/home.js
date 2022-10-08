const teamsDisplay = document.querySelector('#teams')

teams.forEach(team => {
    teamsDisplay.innerHTML += `
        <a href="./src/view/album.html?team=${team.initials}">
            <img src="./src/assets/flags/${team.flag}" alt="Bandeira do(a) ${team.name}">
            <p>${team.name}</p>
        </a>
    `
})