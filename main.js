let totalCatnip = 0;
let harvest = 1;
let collectionInterval = 0;

let clickUpgrades = {
    clawndoms:{
        // price 50
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
    totalCatnip = totalCatnip + harvest;
    console.log("nip");
    updateCatnip()
}

// Click Upgrade Purchases
function buyCatTreat() {
    if (totalCatnip >= clickUpgrades.catTreats.price){
        clickUpgrades.catTreats.quantity++
        harvest += clickUpgrades.catTreats.multiplyer
    } else {
        alert("You do not have enought Catnip!")
    }
updateCatnip()
}

function buyClawndom() {
    if (totalCatnip >= clickUpgrades.clawndoms.price){
        clickUpgrades.clawndoms.quantity++
        harvest += clickUpgrades.clawndoms.multiplyer
    } else {
     alert("You do not have enought Catnip!")   
    }
}

function buyClickUpgrade(upgrade) {
    let item = clickUpgrades[upgrade];
        if (totalCatnip >= item.price){
          totalCatnip -= item.price
          item.price = (item.price * 1.5)
          item.quantity++
          harvest += item.multiplyer
          updateCatnip()

        } else {
           alert("You do not have enought Catnip!")
          }
          
}

// Auto Upgrade Purchases
function buyAstroCat() {
    if (totalCatnip >= autoUpgrades.cat.price){
        autoUpgrades.cat.quantity++
    } else {
        alert("You do not have enought Catnip!")        
    }
}

function buyHuman() {
    if (totalCatnip >= autoUpgrades.human.price){
        autoUpgrades.human.quantity++
            } else {
                alert("You do not have enought Catnip!")   
            }
}

function buyAutoUpgrade(upgrade) {
    let item = autoUpgrades[upgrade];
        if (totalCatnip >= item.price){
            totalCatnip -= item.price
            item.price = (item.price * 2)
            item.quantity++
            harvest += item.multiplyer
            updateCatnip()
        } else {
            alert("You do not have enought Catnip!")
        }
              
}

// A setinterval for autoupgrades
function collectAutoUpgrades() {
    for (let i = 0; i < autoUpgrades.length; i++) {
        collectionInterval = (autoUpgrades.cat.quantity * autoUpgrades.cat.multiplyer + totalCatnip)
    }
    totalCatnip = (totalCatnip + collectionInterval);
    updateCatnip()   
}

function startInterval() {

    collectionInterval = setInterval(collectAutoUpgrades, 3000) 
}

// Functions for drawing Items to screen
function updateCatnip() {
    document.getElementById("catnip-count").innerHTML = totalCatnip.toString();
}

function drawClickUpgrades(drawUpgrade) {
    let drawItem = clickUpgrades[drawUpgrade];
    if (drawUpgrade === "catTreats"){
        document.getElementById("treat-count").innerHTML = drawItem.quantity
        document.getElementById("cat-treat-price").innerHTML = ("Price: " + drawItem.price + "cn")

    } else if (drawUpgrade === "clawndoms") {
        document.getElementById("claw-cap-count").innerHTML = drawItem.quantity
        document.getElementById("claw-cap-price").innerHTML = ("Price: " + drawItem.price + "cn")
    }
}

function drawAutoUpgrades(drawUpgrade) {
    let drawItem = autoUpgrades[drawUpgrade];
    if (drawUpgrade === "cat"){
        document.getElementById("astrocat-count").innerHTML = drawItem.quantity
        document.getElementById("astro-cat-price").innerHTML = ("Price: " + drawItem.price + "cn")

    } else if (drawUpgrade === 'human') {
        document.getElementById("astronaut-count").innerHTML = drawItem.quantity
        document.getElementById("human-price").innerHTML = ("Price: " + drawItem.price + "cn")
    }
}

// hidden elements
