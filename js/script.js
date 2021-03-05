if (localStorage.getItem('globalId') == null)
    localStorage.setItem('globalId', '0');

loadFavoriteCity();

function getId() {
    return globalId++;
}

function loadFavoriteCity() {
    for (let i = 0; i < Number.parseInt(localStorage.getItem('globalId')); i++)
        addNewCity(localStorage.getItem('id' + i.toString()), true, 'id' + i.toString());
}

async function addNewCity(nameCity = undefined, load=false, id='id-1') {
    console.log(nameCity, ' ', id);

    if (nameCity === null)
        return;

    let myKey = '0b5edc7455a336d544760ce639198bc9';
    let input_city = document.getElementById('add_city');

    if (!load){
        nameCity = input_city.value;
        input_city.value = '';
    }

    if (nameCity === "")
        return;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${myKey}&units=metric&lang=ru`;

    if (load)
    {
        createEmptyElement(nameCity, id);
    }

    let response = await fetch(url);
    let commits = await response.json();

    console.log(commits);

    if (commits.cod === "401"){
        alert('Извиние, то у вас проблемы с ключом');
        return;
    }

    if (commits.cod === "404"){
        alert('Нет информации об этом городе');
        return;
    }

    if (commits.cod === "429"){
        alert('Запросы в минуту превышают лимит бесплатного аккаунта');
        return;
    }

    if (!load){
        let l = localStorage.getItem('globalId');
        l = Number.parseInt(l);
        localStorage.setItem('id' + l, nameCity);
        localStorage.setItem('globalId', (l + 1).toString());
        id = 'id' + l;
    }

    let temp = ~~commits.main.temp;
    let img = commits.weather[0].icon + '.png';
    let wind = commits.wind.speed;
    let cloud = commits.weather[0].description;
    let press = commits.main.pressure;
    let hum = commits.main.humidity;
    let x = commits.coord.lon.toFixed(1);
    let y = commits.coord.lat.toFixed(1);

    createNewElement(nameCity, temp, img, wind, cloud, press, hum, x, y, id);
}


function createNewElement(city='Moscow', temperature=5, img='weather.png',
                    wind=6.0, cloud='Сloudy', pressure=1013,
                    humidity=52, x=59.88, y=30.42, id='id-1') {
    let list = document.querySelector('.favorites');
    let newFavorite = document.createElement('li');
    newFavorite.setAttribute('class', 'favorite');
    newFavorite.setAttribute('id', id);
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

function createEmptyElement(city='Moscow', id='id-1') {
    let list = document.querySelector('.favorites');

    let newFavorite = document.createElement('li');
    newFavorite.setAttribute('class', 'favorite');
    newFavorite.setAttribute('id', id);
    let newH3 = document.createElement('h3');
    newH3.textContent = city;

    let newSpan = document.createElement('span');
    newSpan.setAttribute('class', 'temperature');
    let newImg = document.createElement('img');
    newImg.setAttribute('src', 'images/unknown.png');
    let newButton = document.createElement('button');
    newButton.setAttribute('type', 'button');
    newButton.setAttribute('class', 'delete');
    newButton.setAttribute('onclick', "del('" + newFavorite.getAttribute('id') + "')");

    let newUl = document.createElement('ul');
    newUl.setAttribute('class', 'weather');

    let newLi1 = document.createElement('li');
    let newSpanBold1 = document.createElement('span');
    newSpanBold1.setAttribute('class', 'bold');

    let newSpanNormal1 = document.createElement('span');
    newSpanNormal1.setAttribute('class', 'normal');

    newLi1.appendChild(newSpanBold1);
    newLi1.appendChild(newSpanNormal1);

    let newLi2 = document.createElement('li');
    let newSpanBold2 = document.createElement('span');
    newSpanBold2.setAttribute('class', 'bold');

    let newSpanNormal2 = document.createElement('span');
    newSpanNormal2.setAttribute('class', 'normal');

    newLi2.appendChild(newSpanBold2);
    newLi2.appendChild(newSpanNormal2);

    let newLi3 = document.createElement('li');
    let newSpanBold3 = document.createElement('span');
    newSpanBold3.setAttribute('class', 'bold');

    let newSpanNormal3 = document.createElement('span');
    newSpanNormal3.setAttribute('class', 'normal');

    newLi3.appendChild(newSpanBold3);
    newLi3.appendChild(newSpanNormal3);

    let newLi4 = document.createElement('li');
    let newSpanBold4 = document.createElement('span');
    newSpanBold4.setAttribute('class', 'bold');

    let newSpanNormal4 = document.createElement('span');
    newSpanNormal4.setAttribute('class', 'normal');

    newLi4.appendChild(newSpanBold4);
    newLi4.appendChild(newSpanNormal4);

    let newLi5 = document.createElement('li');
    let newSpanBold5 = document.createElement('span');
    newSpanBold5.setAttribute('class', 'bold');

    let newSpanNormal5 = document.createElement('span');

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
}

function del(idCity) {
    console.log(document.getElementById(idCity).style.display);
    document.getElementById(idCity).style.display = "none";
    localStorage.removeItem(idCity);
}