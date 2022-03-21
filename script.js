const game = {
    whoPlays: 'x',
    xComb: new Set(),
    oComb: new Set(),
    winningCombinations: [
        ['0', '1', '2'],
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'],
        ['2', '4', '6']
    ],
    counter: 0,
}

document.addEventListener('click', event => {
    const target = event.target
    const isCell = target.classList.contains('grid-cell')
    const isMarked = target.classList.contains('disabled')
    if (isCell && !isMarked) {
        const cellID = target.dataset.value
        if (game.whoPlays == 'x') {
            game.xComb.add(cellID)
            target.classList.add('disabled')
            target.classList.add('x')
            game.whoPlays = 'o'
            if (game.xComb.size > 2) {
                game.winningCombinations.forEach(winningComb => {
                    if (game.xComb.has(winningComb[0]) && game.xComb.has(winningComb[1]) && game.xComb.has(winningComb[2])) {
                        document.querySelectorAll('.grid-cell').forEach(cell => cell.classList.add('disabled'))
                        document.querySelector('.game-over').classList.add('visible')
                        document.querySelector('.game-over-text').textContent = 'X wins'
                    }
                })
            }
        } else {
            game.oComb.add(cellID)
            target.classList.add('disabled')
            target.classList.add('o')
            game.whoPlays = 'x'
            if (game.oComb.size > 2) {
                game.winningCombinations.forEach(winningComb => {
                    if (game.oComb.has(winningComb[0]) && game.oComb.has(winningComb[1]) && game.oComb.has(winningComb[2])) {
                        document.querySelectorAll('.grid-cell').forEach(cell => cell.classList.add('disabled'))
                        document.querySelector('.game-over').classList.add('visible')
                        document.querySelector('.game-over-text').textContent = 'O wins'
                    }
                })
            }
        }
        
        game.counter++
        if (game.counter == 9) {
            document.querySelector('.game-over').classList.add('visible')
            document.querySelector('.game-over-text').textContent = 'Draw'
        }
    }
})

document.querySelector('.restart').addEventListener('click', () => {
    document.querySelector('.game-over').classList.remove('visible')
    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.classList.remove('disabled', 'x', 'o')
    })

    game.counter=0
    game.whoPlays = 'x'
    game.xComb = new Set()
    game.oComb = new Set()
})