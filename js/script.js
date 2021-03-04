
async function f() {
    let myKey = '0b5edc7455a336d544760ce639198bc9';
    let idCity = 524894;
    let url = `http://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=${myKey}&units=metric`;

    try{
        let response = await fetch(url);
        let commits = await response.json();

        console.log(commits);

    } catch(err) {
        alert(err);
    }
};

function addNewCity(city='Moscow') {
    let list = document.querySelector('.favorites');
    let newFavorite = document.createElement('li');
    newFavorite.getAttribute('class');
    newFavorite.setAttribute('class', 'favorite');
    let newH3 = document.createElement('h3');
    let newSpan = document.createElement('span');
    newSpan.getAttribute('class');
    newSpan.setAttribute('class', 'temperature');
    let newImg = document.createElement('img');
    newImg.getAttribute('src');
    newImg.setAttribute('src', 'images/weather.png');
    let newButton = document.createElement('button');
    newButton.getAttribute('type');
    newButton.getAttribute('class');
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('class', 'delete');
    // нужно будет добавить onclick
    let newUl = document.createElement('ul');
    newUl.getAttribute('class');
    newUl.setAttribute('class', 'weather');

    let newLi1 = document.createElement('li');
    let newSpanBold1 = document.createElement('span');
    newSpanBold1.getAttribute('class');
    newSpanBold1.setAttribute('class', 'bold');
    let newSpanNormal1 = document.createElement('span');
    newSpanNormal1.getAttribute('class');
    newSpanNormal1.setAttribute('class', 'normal');
    newLi1.appendChild(newSpanBold1);
    newLi1.appendChild(newSpanNormal1);

    let newLi2 = document.createElement('li');
    let newSpanBold2 = document.createElement('span');
    newSpanBold2.getAttribute('class');
    newSpanBold2.setAttribute('class', 'bold');
    let newSpanNormal2 = document.createElement('span');
    newSpanNormal2.getAttribute('class');
    newSpanNormal2.setAttribute('class', 'normal');
    newLi2.appendChild(newSpanBold2);
    newLi2.appendChild(newSpanNormal2);

    let newLi3 = document.createElement('li');
    let newSpanBold3 = document.createElement('span');
    newSpanBold3.getAttribute('class');
    newSpanBold3.setAttribute('class', 'bold');
    let newSpanNormal3 = document.createElement('span');
    newSpanNormal3.getAttribute('class');
    newSpanNormal3.setAttribute('class', 'normal');
    newLi3.appendChild(newSpanBold3);
    newLi3.appendChild(newSpanNormal3);

    let newLi4 = document.createElement('li');
    let newSpanBold4 = document.createElement('span');
    newSpanBold4.getAttribute('class');
    newSpanBold4.setAttribute('class', 'bold');
    let newSpanNormal4 = document.createElement('span');
    newSpanNormal4.getAttribute('class');
    newSpanNormal4.setAttribute('class', 'normal');
    newLi4.appendChild(newSpanBold4);
    newLi4.appendChild(newSpanNormal4);

    let newLi5 = document.createElement('li');
    let newSpanBold5 = document.createElement('span');
    newSpanBold5.getAttribute('class');
    newSpanBold5.setAttribute('class', 'bold');
    let newSpanNormal5 = document.createElement('span');
    newSpanNormal5.getAttribute('class');
    newSpanNormal5.setAttribute('class', 'normal');
    newLi5.appendChild(newSpanBold5);
    newLi5.appendChild(newSpanNormal5);

    newUl.appendChild(newLi1);
    newUl.appendChild(newLi2);
    newUl.appendChild(newLi3);
    newUl.appendChild(newLi4);
    newUl.appendChild(newLi5);

    newFavorite.appendChild(newH3);
    newFavorite.appendChild(newSpan);
    newFavorite.appendChild(newImg);
    newFavorite.appendChild(newButton);
    newFavorite.appendChild(newUl);

    list.appendChild(newFavorite);

    console.log(list);
}