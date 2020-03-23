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
function buyClickUpgrade(upgrade) {
    let item = clickUpgrades[upgrade];
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

// Auto Upgrade Purchases
function buyAutoUpgrade(upgrade) {
    let item = autoUpgrades[upgrade];
        if (totalCatnip >= item.price){
            totalCatnip -= item.price
            item.price = (item.price * 2)
            item.quantity++
            harvest += item.multiplyer
            updateCatnip()
            startInterval()
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


// random event
function randomEvent() {
    let randomNumber = Math.floor((Math.random() * 7) + 1);
    if (totalCatnip >= 10){
    switch (randomNumber) {
        case 1:
            if (autoUpgrades.cat.quantity >= 1) {
            document.getElementById("astrocat-count").innerHTML = (autoUpgrades.cat.quantity = (autoUpgrades.cat.quantity - 1)).toString()
            alert("You have lost a AstroCat!")
            } else (totalCatnip >= 20)
                totalCatnip = (totalCatnip - 20)
                alert("Jerry did 20cn!")
        break;
        case 2:
            totalCatnip = (totalCatnip - 45)
            alert("I think we need to have an intervention... Jerry did 45cn")
        break;
        case 3: 
            totalCatnip = (totalCatnip + 45)
            alert("A couple of AstroCats used some catnip giving them A burst of energy and found 50cn!")
        break;
        case 4:
            totalCatnip = (totalCatnip - 30)
            alert("-30cn | We need to stop getting high on our own supply Captain...")
        break;
        case 5:
            alert("Not this time Captain!, You need to take a break.")
        break;
        case 6:
            if (autoUpgrades.human.quantity >= 1) {
                document.getElementById("astronaut-count").innerHTML = (autoUpgrades.human.quantity = (autoUpgrades.human.quantity - 1)).toString()
                alert("You have lost a Human because Jerry fell asleep!")
                } else {
                    totalCatnip = (totalCatnip + 500)
                    alert("While high off his paws, Jerry discovered a stash of 500cn.")
                }
        break;
        case 7:
            totalCatnip = (totalCatnip - 100)
            alert("Nyan Cat stole 100cn before dying in a firey blaze!")
        break;
        default:
            alert("We have none left!")
            break;
    }
}
    updateCatnip()
}
