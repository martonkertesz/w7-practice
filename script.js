const data = [
    {
        name: "Kovács Péter",
        age: 15,
        pets: ["Csudi", "Cinnamon", "Mirci"],
        mostRecentPurchase: {
            price: 12000,
            color: "blue"
        }
    },
    {
        name: "Nagy Attila",
        age: 40,
        pets: ["Sanyi", "Morzsi", "Leonard"],
        mostRecentPurchase: {
            price: 30000,
            color: "yellow"
        }
    },
    {
        name: "Kiss Manó",
        age: 25,
        pets: ["Jerry", "Cirmi", "Bundás"],
        mostRecentPurchase: {
            price: 20000,
            color: "brown"
        }
    },
    {
        name: "Tóth Imre",
        age: 64,
        pets: ["Manyi", "Gizi", "Laszti"],
        mostRecentPurchase: {
            price: 23000,
            color: "green"
        }
    },
    {
        name: "Lakatos Levente",
        age: 76,
        pets: ["Röfi", "Tivadar", "Jónás"],
        mostRecentPurchase: {
            price: 8000,
            color: "gray"
        }
    },
    {
        name: "Juhász Renáta",
        age: 22,
        pets: ["Nyufi", "Munyi", "Cuki"],
        mostRecentPurchase: {
            price: 60000,
            color: "red"
        }
    },
    {
        name: "Mészáros Márta",
        age: 53,
        pets: ["Harmat", "Cili", "Enci"],
        mostRecentPurchase: {
            price: 24500,
            color: "purple"
        }
    },
    {
        name: "Magyar Erzsébet",
        age: 75,
        pets: ["Matyi", "Beni", "Lufi"],
        mostRecentPurchase: {
            price: 6000,
            color: "pink"
        }
    },
    {
        name: "Szabó Alexandra",
        age: 32,
        pets: ["Vau", "Miau", "Mú"],
        mostRecentPurchase: {
            price: 46000,
            color: "orange"
        }
    },
    {
        name: "Kertész Noémi",
        age: 31,
        pets: ["Alma", "Banán", "Ananász"],
        mostRecentPurchase: {
            price: 22000,
            color: "black"
        }
    }
]

//FOR CIKLUS    
/* for (let i = 0; i < data.length; i++) {
    if (data[i].age >= 60 && data[i].mostRecentPurchase.price >= 20000)
    console.log(data[i])
} */


//UGYANAZ, CSAK FUNCTIONNEL
function addTwoNumbers(number1, number2) {
    let result = number1 + number2

    return result // return ad vissza erteket egy fuggvenybol!!!
} 
const addTwoNumbersResult = addTwoNumbers(1, 2)
// console.log("addTwoNumbers: ", addTwoNumbersResult)

// CALLBACK FUGGVENY FOREACHEL, AMI VISSZAAD EGY ARRAYT, VISSZATER ES OSSZEFUZI OKET
function concatenateArray(array) {
    let result = ""
    array.forEach((string) => {
       result += string //result = result + string
    })

    return result 

    // let result = array.join("") //UGYANAZ, CSAK JOINNAL
}

const arrayOfStrings = ["kismacska", "codecool", "javascript", "wednesday", "exam"]
const concatArrayResult = concatenateArray(arrayOfStrings)
// console.log("concatArray: ", concatArrayResult)



function getOldPeople(arrayOfPeople, minimumAge) {
    arrayOfPeople.map((person) => {         //szurni!!!!
        if (person.age >= minimumAge) {
            return getOldPeople
        }
    })
}

getOldPeople(data, 40)


// szurni!!
function getRichPeople(arrayOfPeople, minimumValue) {
    let result = []
    result = arrayOfPeople.filter((person) => person.mostRecentPurchase.price > minimumValue)
    return result
}

const richPeople = getRichPeople(data,22000)
console.log(richPeople)




// uj offer jo ajanlas -e
function goodRecommendationFor(arrayOfPeople, newOffer) {
    let result = []

    for (let i = 0; i < arrayOfPeople.length; i++) {
    // console.log(arrayOfPeople[i].mostRecentPurchase)

    if (arrayOfPeople[i].mostRecentPurchase.color === newOffer.color && arrayOfPeople[i].mostRecentPurchase.price > newOffer.price) {
        result.push(arrayOfPeople[i].name)
        console.log(arrayOfPeople[i].name, "egyezik a color")
    } 
    result = arrayOfPeople.filter((person) => person.mostRecentPurchase.color === newOffer.color && person.mostRecentPurchase.price > newOffer.price)

    

    return result   
    }
}

const newOffer1 = {
    color: "black",
    price: 8000
}

const newOffer2 = {
    color: "yellow",
    price: 14000
}
const goodRecommendations = goodRecommendationFor(data, newOffer1)
console.log(goodRecommendations)




//for loop helyett
result = arrayOfPeople.filter((person) => person.mostRecentPurchase.color === newOffer.color && person.mostRecentPurchase.price > newOffer.price)

return result 
