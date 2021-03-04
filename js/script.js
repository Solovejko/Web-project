let globalId = 7;

function getId() {
    return globalId++;
}

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

function addNewCity(city='Moscow', temperature=5, img='weather.png',
                    wind=6.0, cloud='Сloudy', pressure=1013,
                    humidity=52, x=59.88, y=30.42) {
    let list = document.querySelector('.favorites');
    let newFavorite = document.createElement('li');
    newFavorite.setAttribute('class', 'favorite');
    newFavorite.setAttribute('id', 'id' + getId().toString());
    let newH3 = document.createElement('h3');
    newH3.textContent = city;
    let newSpan = document.createElement('span');
    newSpan.setAttribute('class', 'temperature');
    newSpan.textContent = temperature.toString()+'°C';
    let newImg = document.createElement('img');
    newImg.setAttribute('src', 'images/' + img);
    let newButton = document.createElement('button');
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('class', 'delete');
    newButton.setAttribute('onclick', "del('" + newFavorite.getAttribute('id') + "')");
    // нужно будет добавить onclick

    let newUl = document.createElement('ul');
    newUl.setAttribute('class', 'weather');

    let newLi1 = document.createElement('li');
    let newSpanBold1 = document.createElement('span');
    newSpanBold1.setAttribute('class', 'bold');
    newSpanBold1.textContent = 'Ветер';
    let newSpanNormal1 = document.createElement('span');
    newSpanNormal1.setAttribute('class', 'normal');
    newSpanNormal1.textContent = wind.toString() + ' m/s';
    newLi1.appendChild(newSpanBold1);
    newLi1.appendChild(newSpanNormal1);

    let newLi2 = document.createElement('li');
    let newSpanBold2 = document.createElement('span');
    newSpanBold2.setAttribute('class', 'bold');
    newSpanBold2.textContent = 'Облачность';
    let newSpanNormal2 = document.createElement('span');
    newSpanNormal2.setAttribute('class', 'normal');
    newSpanNormal2.textContent = cloud;
    newLi2.appendChild(newSpanBold2);
    newLi2.appendChild(newSpanNormal2);

    let newLi3 = document.createElement('li');
    let newSpanBold3 = document.createElement('span');
    newSpanBold3.setAttribute('class', 'bold');
    newSpanBold3.textContent = 'Давление';
    let newSpanNormal3 = document.createElement('span');
    newSpanNormal3.setAttribute('class', 'normal');
    newSpanNormal3.textContent = pressure.toString() + ' hpa';
    newLi3.appendChild(newSpanBold3);
    newLi3.appendChild(newSpanNormal3);

    let newLi4 = document.createElement('li');
    let newSpanBold4 = document.createElement('span');
    newSpanBold4.setAttribute('class', 'bold');
    newSpanBold4.textContent = 'Влажность';
    let newSpanNormal4 = document.createElement('span');
    newSpanNormal4.setAttribute('class', 'normal');
    newSpanNormal4.textContent = humidity.toString() + '%';
    newLi4.appendChild(newSpanBold4);
    newLi4.appendChild(newSpanNormal4);

    let newLi5 = document.createElement('li');
    let newSpanBold5 = document.createElement('span');
    newSpanBold5.setAttribute('class', 'bold');
    newSpanBold5.textContent = 'Координаты';
    let newSpanNormal5 = document.createElement('span');
    newSpanNormal5.setAttribute('class', 'normal');
    newSpanNormal5.textContent = '[' + x.toString() + ', ' + y.toString() +']';
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

function del(idCity) {
    //idCity = 'id1';
    console.log(document.getElementById(idCity).style.display);
    document.getElementById(idCity).style.display = "none";
    console.log(document.getElementById(idCity).style.display);
}