let myForm = document.getElementById('myForm')

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(myForm);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        body: form
    }).then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
})

