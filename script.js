let input = document.querySelector('.input');
let buttom = document.querySelector('.button');

let person = document.querySelector('.person')
let bicycle = document.querySelector('.bicycle')
let car = document.querySelector('.car  ')
let airplane = document.querySelector('.airplane')

const personSpeed = 3.6;
const bicycleSpeed = 20.1;
const carSpeed = 70;
const plainSpeed = 800;

buttom.addEventListener('click', function() {
    
    const space = input.value;

    let personTime =  parseInt(space) / 3.6;
    let personHour = Math.floor(personTime);
    let personTotalMinutes = personTime - personHour; 
    let personMinutes = Math.floor(personTotalMinutes * 60);

    let bicycleTime =  parseInt(space) / 20.1;
    let bicycleHour = Math.floor(bicycleTime);
    let bicycleTotalMinutes = bicycleTime - bicycleHour; 
    let bicycleMinutes = Math.floor(bicycleTotalMinutes * 60);

    
    let carTime =  parseInt(space) / 70;
    let carHour = Math.floor(carTime);
    let carTotalMinutes = carTime - carHour; 
    let carMinutes = Math.floor(carTotalMinutes * 60);

    
    let plainTime =  parseInt(space) / 800;
    let plainHour = Math.floor(plainTime);
    let plainTotalMinutes = plainTime - plainHour; 
    let plainMinutes = Math.floor(plainTotalMinutes * 60);


    person.textContent = `soat ${personHour} minut ${personMinutes}`;

    bicycle.textContent = `soat ${bicycleHour} minut ${bicycleMinutes}`;
    
    car.textContent = `soat ${carHour} minut ${carMinutes}`;
    
    airplane.textContent = `soat ${plainHour} minut ${plainMinutes}`;

    input.value = "";   
})

