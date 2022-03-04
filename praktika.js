function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

// Paspaudus mygtuką kiekvienam tagui sugeneruotkite rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant innerText() metodą. (4 taškai)

const mygtukas1 = document.querySelector('button');

mygtukas1.addEventListener("click", h2All);
function h2All(){
    const h2 = document.querySelectorAll('h2');
    h2.forEach(element => {
        element.innerText =  rand(1,6);
    })
    if(h2[0].innerHTML === h2[1].innerHTML){
        h2[0].style.color = 'red';
        h2[1].style.color = 'red';
    }else{
        h2[0].style.color = 'none';
        h2[1].style.color = 'none';
    }
    
}

//Paspaudus mygtuką skaičiai turi būti pergeneruojami iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai. (4 taškai)

// const h2 = document.querySelectorAll('h2');


// if(h2[0].innerHTML === h2[1].innerHTML){
//     h2[0].style.color = 'red';
//     h2[1].style.color = 'red';
// }else{
//     h2[0].style.color = 'none';
//     h2[1].style.color = 'none';
// }

//2. Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti. (2 taškai)
/*a. Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10. Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite konsolėle. (4 taškai)
b. <h3> tage skaičiuokite ir su innerText() metodu rašykite visų sugeneruotų skaičių sumą. (4 taškai) */

const mygtukas2 = document.querySelectorAll('button')[1];
const array = [];
let suma = 0;
mygtukas2.addEventListener("click", addTooArray);
function addTooArray(){
    const randNumber = rand(1,10);
    array.push(randNumber);
    const h3 = document.querySelector('h3');
    suma+=randNumber;
    h3.innerText = suma;
};


/*3. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai) //DONE
a. JS pagalba perskaitykite masyvą africa. (4 taškai)
b. Naudodami createElement() ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li> tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. (5 taškai)
c. Elementus su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite. (4 taškai)
 */

africa.forEach(element =>{
    if(element.length !==0){
        console.log(element);
    }
});

const ul1 = document.querySelector('ul');

africa.forEach(element =>{
    if(element.length !==0){
        const li = document.createElement('li');
        li.innerText = element;
        ul1.appendChild(li);
    }
});




/*5. Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą. (2 taškai)
a. JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus sudėkite į vieną bendrą stringą. (8 taškai)
b. Tą stringą naudodami innerHTML() metodą įdėkite į <ul> tago vidų. (5 taškai)
c. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai. (5 taškai)
 */

let text='';
const ul2 = document.querySelector('button + button + ul');

australia.forEach(element => {
    if(element ==='Dingo'){
    text+=`<li style="background-color: blue;">${element}</li>`;
    }
    else{
        text+=`<li>${element}</li>`;
    }
});

ul2.innerHTML = text;

