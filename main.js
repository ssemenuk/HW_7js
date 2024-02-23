//строка
function Event1(event) {
    const inputText = event.target.value;

    const sanitizedText = inputText.replace(/\w|\d/g, '');

    event.target.value = sanitizedText;
}
//іконка
function ModelWindow() {
    document.getElementById
    ('Element').style.display = 'block';


    document.getElementById
    ('Ovpen').style.display = 'block';
}

function windowModal() {
    document.getElementById
('Element').style.display = 'none';

    document.getElementById
('Open').style.display = 'none';
}


//світлофор
const 

lights = ['red',
        'yellow',
        'green'];

let currentLightIndex = 0;

function ColorEvent() {
    for (let i = 0; i < lights.length; i++) {
        const light = document.getElementById(lights[i]);
        if (i === currentLightIndex) {
            light.style.backgroundColor = lights[i];
        } else {
            light.style.backgroundColor = 'gray';
        }
    }

    currentLightIndex = (currentLightIndex + 1) % lights.length;
}

//перемикання оранжевого
function Color(element) {
    let status = element.classList.
    contains('color1');

    document.querySelectorAll('ul li').
    forEach(function (item) 
    {
        item.classList.remove('color1');
    });

    if (!status) 
    {
        element.classList.add('color1');
    }
}
function  knopca(element, text) {
    let mess = document.createElement('div');
    mess.className = 'message';
    mess.innerHTML = text;

    let rect = element.getBoundingClientRect();
    let topPosition = rect.top - mess.offsetHeight - 5;

    if (topPosition < 15) {
        topPosition = rect.bottom + 5;
    }

    mess.style.left = rect.left + 'px';
    mess.style.top = topPosition + 'px';

    document.body.appendChild(mess);

    element.addEventListener('mouseout', function () {
        mess.remove();
    });
}



//6-7

