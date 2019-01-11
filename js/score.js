var Score = (function() {
    var _score = 0;
 
    var setScore = function(score) {
        _score = score;
    };
 
    var getScore = function() {
        return _score;
    };

    var checkMaxScore = function(_score) {
        var maxScore = localStorage.getItem('cerosSkiMaxScore');
        if (maxScore) {
            if (_score > maxScore) {
                localStorage.setItem('cerosSkiMaxScore', _score);
            }
        } else {
            localStorage.setItem('cerosSkiMaxScore', _score);
        }
    };

    var updateScore = function() {
        localStorage.setItem('cerosSkiScore', _score);
        checkMaxScore(_score);
    };

    var getMaxScore = function() {
        var maxScore = localStorage.getItem('cerosSkiMaxScore');
        if (maxScore) {
            return maxScore;
        }   
        return 0; 
    };

    return {
        setScore: setScore,
        getScore: getScore,
        updateScore: updateScore,
        getMaxScore: getMaxScore
    };
})();