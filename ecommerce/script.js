
// alert("test if they are linked");
// step1: we test if HTML is linked with JS
// console.log("they are linked");


const btnPlus = document.querySelectorAll(".fa-plus");
const qtes = document.querySelectorAll(".quantity");
const btnMinus = document.querySelectorAll(".fa-minus");
const btnDelete = document.querySelectorAll(".fa-trash");
const fav = document.querySelectorAll(".fa-star");

        
// const newprice = document.querySelectorAll("#price");
// const prixUnitaire= document.querySelectorAll(".prixUnitaire")

// console.log(qte)

// Calcul de la somme au rafraichissement de la page
totale();


// Bouton plus + augmentation prix en temps réel

for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", function () {
        //     alert("test");
        // console.log("they are linked");
        
        //     // qte.innerHTML = +qte.innerHTML + 1;
        // quantity[i].innerHTML++;
        btnPlus[i].previousElementSibling.innerHTML++  
            
        totale();
        });   
        
        
    
}

// Bouton moins
for (let i = 0; i < btnMinus.length; i++) {
    btnMinus[i].addEventListener("click", function () {
        //     alert("test");
        // console.log("they are linked");
        
        //     // qte.innerHTML = +qte.innerHTML + 1;
        // quantity[i].innerHTML++;
        if (btnMinus[i].nextElementSibling.innerHTML > 1) {
            btnMinus[i].nextElementSibling.innerHTML--
            totale();
        }  
        
        });
    
}

// Bouton Delete
for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", function() {
        btnDelete[i].parentElement.parentElement.remove()
        totale();
        
    })
    
}

// Bouton favoris

for (let i = 0; i < fav.length; i++) {
    fav[i].addEventListener("click", function () {
        // if (like[i].style.color == "red") {
        //   like[i].style.color = "black";
        // } else {
        //   like[i].style.color = "red";
        // }
        // -----------------------------
        // or
        fav[i].classList.toggle("fa-star-yellow");
      });
    }
    
    function totale() {
        // calcul total price
        // prices=[10,20,30,40]
        // qtes=[2,5,1,3]
        // totalPrice= 10*2+20*5+30*1+3*40
        const totalPrice = document.getElementById("prix-total");
        const qtes = document.querySelectorAll(".quantity");
        const prix = document.getElementsByClassName("prx");
        
        let somme = 0;
        for (let i = 0; i < prix.length; i++) {
          somme = somme + prix[i].innerHTML * qtes[i].innerHTML;
        }
        
        totalPrice.innerHTML = somme;
      }
     

    