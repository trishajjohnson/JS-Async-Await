let ul1 = $("#fav-num-fact");
let ul2 = $("#num-facts");
let ul3 = $("#mult-facts");


async function getLuckyFact() {
    
    try {
        const url = "http://numbersapi.com/";
        let res = await axios.get(`${url}11?json`);
        ul1.append(ul1.append(`<li>${res.data.text}</li>`));
    }

    catch (e) {
        console.log("Rejected", e);
    }
}

getLuckyFact();



let num1 = 25;
let num2 = 32;
let num3 = 47;
let num4 = 21;
let num5 = 83;

async function getMultNumFacts() {
    
    try {
        const url = "http://numbersapi.com/";
        let res = await axios.get(`${url}${num1},${num2},${num3},${num4},${num5}?json`);
        for(let fact in res.data){
            ul2.append(`<li>${res.data[fact]}</li>`);
        }
    }
    
    catch (e) {
        console.log("Rejected", e);
    }
    
}

getMultNumFacts();

async function getFourFavNumFacts() {
    try {
        const url = "http://numbersapi.com/";
        let facts = await Promise.all([
            await axios.get(`${url}35?json`),
            await axios.get(`${url}35?json`),
            await axios.get(`${url}35?json`),
            await axios.get(`${url}35?json`)
        ]);
        
        for(let res in facts) {
            ul3.append(`<li>${facts[res].data.text}</li>`)
        }
    }
    catch (e) {
        console.log("Rejected", e);
    }
}

getFourFavNumFacts();
