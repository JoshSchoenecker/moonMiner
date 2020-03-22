let totalCatnip = 0;
let harvest = 1;
let collectionInterval = 0;

let clickUpgrades = {
    clawndoms:{
        // price 50
        price: 50,
        quantity: 0,
        multiplyer: 5,
        modifier1: function(){
            console.log(this.quantity * this.multiplyer + totalCatnip);
              
        },
    },

    catTreats: {
        // price 25
        price: 2,
        quantity: 0,
        multiplyer: 2,
        // modifier2: function(){
        //     if (this.quantity > 0){
            
        //     console.log(totalCatnip = (this.quantity * this.multiplyer + totalCatnip));
        //     }
              
        // },
    }
}

let autoUpgrades = {
    human: {
        // price 750
        price: 750,
        quantity: 0,
        multiplyer: 25,
    },
    cat: {
        // price 100
        price: 100,
        quantity: 2,
        multiplyer: 10,
    }
}

// A function that will increase catnip count on click
function mine() {
    totalCatnip = totalCatnip + harvest;
    console.log("nip");
    updateCatnip()
}
// A function to update the displayed catnip count
function updateCatnip(mine) {
    document.getElementById("catnip-count").innerHTML = totalCatnip.toString();
}

// Upgrade Purchases
function buyCatTreat() {
if (totalCatnip >= clickUpgrades.catTreats.price){
    
    document.getElementById("catnip-count").innerHTML = 
    (totalCatnip = (totalCatnip - clickUpgrades.catTreats.price)).toString()
    
    ++clickUpgrades.catTreats.quantity
    
    document.getElementById("treat-count").innerHTML =
    clickUpgrades.catTreats.quantity.toString()

    harvest = harvest + clickUpgrades.catTreats.multiplyer
} else {
    alert("You do not have enought Catnip!")
}
}

function buyClawndom() {
    if (totalCatnip >= clickUpgrades.clawndoms.price){
        document.getElementById("catnip-count").innerHTML = 
       (totalCatnip = (totalCatnip - clickUpgrades.clawndoms.price)).toString()
        ++clickUpgrades.clawndoms.quantity
        document.getElementById("claw-cap-count").innerHTML =
        clickUpgrades.clawndoms.quantity.toString()

        harvest = harvest + clickUpgrades.clawndoms.multiplyer
    } else {
     alert("You do not have enought Catnip!")   
    }
    }

function buyAstroCat() {
    if (totalCatnip >= autoUpgrades.cat.price){
            document.getElementById("catnip-count").innerHTML = 
           (totalCatnip = (totalCatnip - autoUpgrades.cat.price)).toString()
            ++autoUpgrades.cat.quantity
            document.getElementById("astrocat-count").innerHTML =
            autoUpgrades.cat.quantity.toString()
    } else {
    alert("You do not have enought Catnip!")        
    }
}

function buyHuman() {
            if (totalCatnip >= autoUpgrades.human.price){
                document.getElementById("catnip-count").innerHTML = 
               (totalCatnip = (totalCatnip - autoUpgrades.human.price)).toString()
                ++autoUpgrades.human.quantity
                document.getElementById("astronaut-count").innerHTML =
                autoUpgrades.human.quantity.toString()

            } else {
             alert("You do not have enought Catnip!")   
            }
        }

// Autoclicks
function collectAutoUpgrades() {
    for (let i = 0; i < autoUpgrades.length; i++) {
        collectionInterval = (autoUpgrades.cat.quantity * autoUpgrades.cat.multiplyer + totalCatnip)
    }
    totalCatnip = (totalCatnip + collectionInterval)
    
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000) 
}
startInterval()
