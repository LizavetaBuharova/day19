let setCookie = document.getElementById('setCookie');

setCookie,addEventListener('click', () => {
    document.cookie = "username=JohnDoe; expires=Date; path=/";
    console.log("Установка прошла успешно");
    alert('Cookie установлено: username=JohnDoe');
})

