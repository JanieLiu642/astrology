$(function() {
    const shuffle = () => {
        const planet = Math.floor(Math.random() * 10)
        const sign = Math.floor(Math.random() * 12)
        const house = Math.floor(Math.random() * 12)
        return [planet, sign, house]
    }
    const planet = (p) => {
        const name = planets[p].name.toLowerCase()
        const color = '--' + planets[p].element
        return `<div class="card" style="border-top:10px solid var(${color});">
            <div class="card-header"><img src="${name}.svg" alt="${name}"><p style="color:var(${color});">${planets[p].name}</p>
            </div><p>${planets[p].desc}</p></div>`
    }
    const sign = (s) => {
        const name = signs[s].name.toLowerCase()
        const color = '--' + signs[s].element
        return `<div class="card" style="border-top:10px solid var(${color});">
            <div class="card-header"><img src="${name}.svg" alt="${name}"><p style="color:var(${color});">${signs[s].name}</p>
            </div><p>${signs[s].desc}</p></div>`
    }
    const house = (h) => {
        const name = 'House ' + (h + 1)
        const color = '--' + signs[h].element
        return `<div class="card" style="border-top:10px solid var(${color});">
            <div class="card-header"><p style="color:var(${color});">${name}</p>
            </div><p>${signs[h].house}</p></div>`
    }
    $('#question').on('submit', function(e){
        e.preventDefault()
        if ($('#question input').val().trim() !== '') {
            const n = shuffle()
            $('#answer label').text($('#question input').val().trim())
            $('#cards').empty().append(planet(n[0]) + sign(n[1]) + house(n[2]))
            $('#dialogue').css({
                opacity:0,
                transform: "translate(-50%, 10px)"
            })
            $('#house').addClass('fast-house')
            $('#sign').addClass('fast-sign')
            $('#planet').addClass('fast-planet')
            const houseRotate = `translate(-50%, 0) rotate(${(-n[2]-9)*30}deg)`
            const signRotate = `translate(-50%, 0) rotate(${(-n[1]-9)*30}deg)`
            const planetRotate = `translate(-50%, 0) rotate(${(-n[0]-8)*36}deg)`
            setTimeout(() => {
                $('.plate-img:not(:last-child)').addClass('stop-animation')
                $('#question').css('display','none')
                $('#answer').css('display', 'flex')
                $('#dialogue').css({
                    opacity:1,
                    top:"8%",
                    transform: "translate(-50%, 0)"
                })
                $('#house').css('transform', houseRotate)
                $('#sign').css('transform', signRotate)
                $('#planet').css('transform', planetRotate)
            }, 3000)
        }
    })
    $('#answer').on('submit', function(e) {
        e.preventDefault()
        $('#house').removeClass('fast-house','house-target')
        $('#sign').removeClass('fast-sign')
        $('#planet').removeClass('fast-planet')
        $('.plate-img').removeClass('stop-animation')
        $('#dialogue').css('top','22%')
        $('#answer').css('display', 'none')
        $('#question input').val('')
        $('#question').css('display','flex')
    })
})
