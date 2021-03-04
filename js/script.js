
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
    list.appendChild('')
    console.log(list);
}