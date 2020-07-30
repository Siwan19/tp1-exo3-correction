let ligne_inversée = 0
basic.forever(function () {
    if (true) {
        led.plot(0, 0)
        ligne_inversée = 0
    }
    basic.pause(500)
    for (let colonne = 0; colonne <= 4; colonne++) {
        for (let ligne = 0; ligne <= 4; ligne++) {
            ligne_inversée = 4 + ligne
            if (led.point(colonne, 0)) {
            	
            }
        }
    }
})
