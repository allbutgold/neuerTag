const example = document.querySelectorAll('.example');

function myFunction() {   
    example.forEach((element) => {
        element.classList.toggle('background');
        })
};
