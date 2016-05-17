var big = Snap('.logo-big svg');
var small = Snap('.logo-small svg')
var bigPatterns = big.selectAll('pattern')
var smallPatterns = small.selectAll('pattern')

var moveX = function () {
    smallPatterns[2].attr({ x: 0 })
    smallPatterns[2].animate({ x: 8000 }, 80000, function () {
        moveX();
    });
    bigPatterns[2].attr({ x: 0 })
    bigPatterns[2].animate({ x: 8000 }, 80000, function () {
        moveX();
    });
}
var moveY = function () {
    smallPatterns[0].attr({ y: 0 })
    smallPatterns[0].animate({ y: -5800 }, 200000, function () {
        moveY();
    });
    bigPatterns[0].attr({ y: 0 })
    bigPatterns[0].animate({ y: -5800 }, 200000, function () {
        moveY();
    });
}

var moveYReverse = function () {
    smallPatterns[1].attr({ y: 0 })
    smallPatterns[1].animate({ y: 5500 }, 100000, function () {
        moveYReverse();
    });
    bigPatterns[1].attr({ y: 0 })
    bigPatterns[1].animate({ y: 5500 }, 100000, function () {
        moveYReverse();
    });
}

moveX();
moveY();
moveYReverse();