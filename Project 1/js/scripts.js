var watch = 'Watch on ';

var platformNetflix = 'Netflix';
var platMessageNetflix = watch + platformNetflix;
var platMessageElsNetflix = document.getElementsByClassName('netflix');

for (var i = 0; i < platMessageElsNetflix.length; i++) {
    platMessageElsNetflix[i].textContent = platMessageNetflix;
}

var platformYoutube = 'Youtube';
var platMessageYoutube = watch + platformYoutube;
var platMessageElsYoutube = document.getElementsByClassName('youtube');

for (var i = 0; i < platMessageElsYoutube.length; i++) {
    platMessageElsYoutube[i].textContent = platMessageYoutube;
}

var platformAmazon = 'Amazon';
var platMessageAmazon = watch + platformAmazon;
var platMessageElsAmazon = document.getElementsByClassName('amazon');

for (var i = 0; i < platMessageElsAmazon.length; i++) {
    platMessageElsAmazon[i].textContent = platMessageAmazon;
}

var platformApple = 'Apple';
var platMessageApple = watch + platformApple;
var platMessageElsApple = document.getElementsByClassName('apple');

for (var i = 0; i < platMessageElsApple.length; i++) {
    platMessageElsApple[i].textContent = platMessageApple;
}

var ratingMessageGood = ': )';
var ratingElsGood = document.getElementsByClassName('good');

for (var i = 0; i < ratingElsGood.length; i++) {
    ratingElsGood[i].textContent = ratingMessageGood;
}

var ratingMessageBad = ': (';
var ratingElsBad = document.getElementsByClassName('bad');

for (var i = 0; i < ratingElsBad.length; i++) {
    ratingElsBad[i].textContent = ratingMessageBad;
}