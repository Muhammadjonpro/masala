let users = [
    {
        name: "Avazbek",
        age: "25"
    },
    {
        name: "Umid",
        age: "21"
    },
    {
        name: "O'ktam",
        age: "22"
    },
    {
        name: "Valijon",
        age: "19"
    },
    {
        name: "Sarvar",
        age: "27"
    },
    {
        name: "Sardor",
        age: "17"
    },
    {
        name: "Toxir",
        age: "16"
    }
]


function ageGreaterThan(array, minAge) {
    let user = []

    array.forEach(gap => {
        if(gap.age >= minAge) {
            user.push(gap)
        }
    });


    return user
}


ageGreaterThan(users, 22);
console.log(ageGreaterThan(users, 25))

/* Sizga users array beriladi, siz funksiya yasaysiz, 
 u funksiyaga users arrayni va telefon nomer kiritaman. 
 Va u menga returnida shu nomer kimga tegishliligini 
 chiqarib beradi. Agar yo'q bo'lsa bo'sh string qaytaradi.
*/

let users1 = [
    {
        name: "Avazbek",
        telNumber: "998911645099"
    },
    {
        name: "Umid",
        telNumber: "998911758585"
    },
    {
        name: "O'ktam",
        telNumber: "998911777767"
    },
    {
        name: "Valijon",
        telNumber: "998917777777"
    },
    {
        name: "Sarvar",
        telNumber: "998911222222"
    },
    {
        name: "Sardor",
        telNumber: "998911222322"
    },
    {
        name: "Toxir",
        telNumber: "998911645022"
    }
]



function findUser(array, number) {
    let user1 = []
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    } (key =>{
        if (key.name = number) {
            user1.push(key)
        }
    })


    return user1
}


findUser(users, 998911645022)
console.log(findUser(users, 998911645022));

// Result
