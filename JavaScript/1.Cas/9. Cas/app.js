/* 
for(let i = 1; i<6; i++){
    console.log(i);
} 
*/



// While petlja se takodje koristi za iteraciju kroz neko objekat i
// izvrsavanje odredjenog koda 

let i = 1
while (i <6) {
    console.log(i);
    i++;
}

/* Do while petlja se koristi za iteraciju kroz neki objekat, s tim sto u
ovakvoj petlji imamo prvo izvrsavanje koda pa tek onda ispitivanje uslova */
let k = 5;
do {
    console.log(k);
    k++;
} while(k <= 10);

let broj = 15;
do {
    console.log(broj);
    broj++;
} while(broj <= 10);


// traziti od korisnika da unese broj.na osnovu unetog broja izvrsiti ispis kvadrata brojva od 1 do tog broja

const broj2 = +prompt("Unesite neki broj: ")
let iterator = 1
while(iterator <= broj2){
    console.log(iterator **2);
    iterator++
}

//traziti od korisnika unos brojea sve dok ne unese nulu
let vrednost = 1 // Sve sem nule
while (vrednost !== 0 ) {
    vrednost = +prompt("Unesite neku vrednost: ")
}