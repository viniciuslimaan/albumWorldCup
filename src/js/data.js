// Special Color
const specialColor = 'style="background: linear-gradient(to top, #C69320, #FCC201);"'

let numberId = 0

// Cards data
const teams = 
[
    { 
        id: ++numberId,
        initials: 'ale',
        name: 'Alemanha',
        coach: 'Hans-Dieter Flick',
        cups: 4,
        flag: 'germany.png',
        color: '#ff5b64',
        players: [
            { id: 0, name: 'Gerd Muller', position: 'Ata' },
            { id: 1, name: 'Manuel Neuer', position: 'Gol' },
            { id: 2, name: 'Thilo Kehrer', position: 'Zag' },
            { id: 3, name: 'David Raum', position: 'Zag' },
            { id: 4, name: 'Antonio Rudiger', position: 'Zag' },
            { id: 5, name: 'Niklas Sule', position: 'Zag' },
            { id: 6, name: 'Leon Goretzka', position: 'Mei' },
            { id: 7, name: 'Kai Havertz', position: 'Mei' },
            { id: 8, name: 'Joshua Kimmich', position: 'Mei' },
            { id: 9, name: 'Serge Gnabry', position: 'Ata' },
            { id: 10, name: 'Thomas Muller', position: 'Ata' },
            { id: 11, name: 'Timo Werner', position: 'Ata' },
        ]
    },
    { 
        id: ++numberId,
        initials: 'arg',
        name: 'Argentina',
        coach: 'Lionel Scaloni',
        cups: 2,
        flag: 'argentina.png',
        color: '#b8d2ff',
        players: [
            { id: 0, name: 'Maradona', position: 'Ata' },
            { id: 1, name: 'Emiliano Martínez', position: 'Gol' },
            { id: 2, name: 'Marcos Acuña', position: 'Zag' },
            { id: 3, name: 'Nahuel Molina', position: 'Zag' },
            { id: 4, name: 'Nicolás Otamendi', position: 'Zag' },
            { id: 5, name: 'Cristian Romero', position: 'Zag' },
            { id: 6, name: 'Rodrigo de Paul', position: 'Mei' },
            { id: 7, name: 'Di Maria', position: 'Mei' },
            { id: 8, name: 'Giovani Lo Celso', position: 'Mei' },
            { id: 9, name: 'Paredes', position: 'Ata' },
            { id: 10, name: 'Lautaro Martínez', position: 'Ata' },
            { id: 11, name: 'Lionel Messi', position: 'Ata' },
        ]
    },
    { 
        id: ++numberId,
        initials: 'bra',
        name: 'Brasil',
        coach: 'Tite',
        cups: 5,
        flag: 'brazil.png',
        color: '#ffe15a',
        players: [
            { id: 0, name: 'Pelé', position: 'Ata' },
            { id: 1, name: 'Alison', position: 'Gol' },
            { id: 2, name: 'Alex Sandro', position: 'Zag' },
            { id: 3, name: 'Danilo', position: 'Zag' },
            { id: 4, name: 'Marquinhos', position: 'Zag' },
            { id: 5, name: 'Thiago Silva', position: 'Zag' },
            { id: 6, name: 'Casemiro', position: 'Mei' },
            { id: 7, name: 'Fred', position: 'Mei' },
            { id: 8, name: 'Lucas Paquetá', position: 'Mei' },
            { id: 9, name: 'Gabriel Jesus', position: 'Ata' },
            { id: 10, name: 'Neymar Jr', position: 'Ata' },
            { id: 11, name: 'Vinícius Jr', position: 'Ata' },
        ]
    },
    { 
        id: ++numberId,
        initials: 'esp',
        name: 'Espanha',
        coach: 'Luis Enrique',
        cups: 1,
        flag: 'spain.png',
        color: '#ffcd3c',
        players: [
            { id: 0, name: 'Andres Iniesta', position: 'Ata' },
            { id: 1, name: 'Unai Simón', position: 'Gol' },
            { id: 2, name: 'César Azpilicueta', position: 'Zag' },
            { id: 3, name: 'Eric Gargía', position: 'Zag' },
            { id: 4, name: 'Jordi Alba', position: 'Zag' },
            { id: 5, name: 'Aymeric Laporte', position: 'Zag' },
            { id: 6, name: 'Gavi', position: 'Mei' },
            { id: 7, name: 'Pedri', position: 'Mei' },
            { id: 8, name: 'Sergio Busquets', position: 'Mei' },
            { id: 9, name: 'Dani Olmo', position: 'Ata' },
            { id: 10, name: 'Ferran Torres', position: 'Ata' },
            { id: 11, name: 'Álvaro Morata', position: 'Ata' },
        ]
    },
    { 
        id: ++numberId,
        initials: 'fra',
        name: 'França',
        coach: 'Didier Deschamps',
        cups: 2,
        flag: 'france.png',
        color: '#b2b7ff',
        players: [
            { id: 0, name: 'Zinedine Zidane', position: 'Ata' },
            { id: 1, name: 'Hugo Llorris', position: 'Gol' },
            { id: 2, name: 'Theo Hernandez', position: 'Zag' },
            { id: 3, name: 'Kimpembe', position: 'Zag' },
            { id: 4, name: 'Jules Koundé', position: 'Zag' },
            { id: 5, name: 'Raphael Varane', position: 'Zag' },
            { id: 6, name: 'NGolo Kanté', position: 'Mei' },
            { id: 7, name: 'Paul Pogba', position: 'Mei' },
            { id: 8, name: 'Adrien Rabiot', position: 'Mei' },
            { id: 9, name: 'Karim Benzema', position: 'Ata' },
            { id: 10, name: 'Antonie Griezmann', position: 'Ata' },
            { id: 11, name: 'Kylian Mbappé', position: 'Ata' },
        ]
    },
    { 
        id: ++numberId,
        initials: 'por',
        name: 'Portugal',
        coach: 'Fernando Santos',
        cups: 0,
        flag: 'portugal.png',
        color: '#ff9298',
        players: [
            { id: 0, name: 'Cristiano Ronaldo', position: 'Ata' },
            { id: 1, name: 'Diogo Costa', position: 'Gol' },
            { id: 2, name: 'João Cancelo', position: 'Zag' },
            { id: 3, name: 'Pepe', position: 'Zag' },
            { id: 4, name: 'Raphael Guerreiro', position: 'Zag' },
            { id: 5, name: 'Rúben Dias', position: 'Zag' },
            { id: 6, name: 'Bernardo Silva', position: 'Mei' },
            { id: 7, name: 'Bruno Fernandes', position: 'Mei' },
            { id: 8, name: 'Danilo Pereira', position: 'Mei' },
            { id: 9, name: 'João Moutinho', position: 'Ata' },
            { id: 10, name: 'Cristiano Ronaldo', position: 'Ata' },
            { id: 11, name: 'Diogo Jota', position: 'Ata' },
        ]
    },
]