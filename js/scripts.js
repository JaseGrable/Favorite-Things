var form = document.getElementById('favoritesForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var favoriteArray = [
        document.getElementsByName('favorite1')[0].value,
        document.getElementsByName('favorite2')[0].value,
        document.getElementsByName('favorite3')[0].value,
        document.getElementsByName('favorite4')[0].value
    ];
    // accessing an specific element using square bracket
    var selectedArray = [
        favoriteArray[1],
        favoriteArray[0],
        favoriteArray[2]
    ];
    var ulElm = document.getElementById('favoriteList');
    selectedArray.forEach(function (element) {
        var liElm = document.createElement('li');
        liElm.textContent = element;
        ulElm.appendChild(liElm)
    });

});

