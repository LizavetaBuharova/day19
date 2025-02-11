let saveLocal = document.getElementById('saveLocal');
let saveSession = document.getElementById('saveSession');

saveLocal.addEventListener('click', () => {
    localStorage.setItem('username', 'HarryPotter');
    console.log('Данные успешно сохранены в хранилище!');
    alert("Успешное сохранение!");
})

saveSession.addEventListener('click', () => {
    sessionStorage.setItem('tokin', 'qwredtg')
    console.log('Данные успешно сохранены в временное хранилище!')
    alert("Успешное сохранение!");
})

