var Skier = (function() {
    var _speed = 8;
 
    var setSpeed = function(speed) {
        _speed = speed;
    };
 
    var getSpeed = function() {
        increaseSpeed(Score.getScore());
        return _speed;
    };

    var increaseSpeed = function(score) {
        if (score >= 2000) {
            setSpeed(9);
        }
        if (score >= 5000) {
            setSpeed(10);
        }
        if (score >= 10000) {
            setSpeed(11);
        }
        if (score >= 50000) {
            setSpeed(12);
        }
        if (score >= 100000) {
            setSpeed(13);
        }
    };

    return {
        getSpeed: getSpeed
    };
})();