let totalCatnip = 0;

let clickUpgrades = {
    clawndoms:{
        price: 50,
        quantity: 0,
        multiplyer: 5,
    },

    catTreats: {
        price: 25,
        quantity: 0,
        multiplyer: 2,
    }
}

let autoUpgrades = {
    human: {
        price: 750,
        quantity: 0,
        multiplyer: 25,
    },
    cat: {
        price: 100,
        quantity: 0,
        multiplyer: 10,
    }
}

// A function that will increase catnip count on click
function mine() {
    ++totalCatnip
    console.log("nip");
    updateCatnip()
}

// a function to update the displayed catnip count
function updateCatnip(mine) {
    document.getElementById("catnip-count").innerHTML = totalCatnip.toString();
}

