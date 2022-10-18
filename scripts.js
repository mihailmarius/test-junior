// products for test
const products = [
    {
        'img': 'https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg',
        'nume': 'Fiesta',
        'tip': 'Piept de pui, mozzarella, ceapă roșie, ardei gras, rosii proaspete, salam chorizo, sos chipotle, sos ranch, usturoi granulat',
        'pret': 29.9
    },
    {
        'img': 'https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg',
        'nume': 'Margherita Classic',
        'continut': 'Mozzarella, sos de roșii',
        'pret': 29.9
    },
    {
        'img': 'https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg',
        'nume': 'Dracula',
        'continut': 'Sos de roșii, salam chorizo, ardei jalapeno, salam pepperoni, mozzarella, sos chipotle',
        'pret': 29.9
    },
    {
        'img': 'https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg',
        'nume': 'Rustica',
        'continut': 'Piept de pui, suncă, ceapă roșie, mozzarella, ardei gras, sos de roșii, porumb',
        'pret': 29.9
    }
];

// set variables
var openCart = document.getElementById("open-cart");
var popbtn = document.getElementById("close-popup");
var sidebarpop = document.getElementById("sidebar");
var populateDiv = document.getElementById("populate");
var sectionTitle = document.getElementById("section-title");
var totalSection = document.getElementById("total-section");
var populateBtn = document.getElementById("populate-prods");
var emptyCart = document.getElementsByClassName("empty-cart");
var count = 0;
var totalPrice = 0;

// close pop-up function
var togglePop = () => {
    sidebarpop.style.display = "none";
    populateDiv.innerHTML = "";
    sectionTitle.style.display = "none";
    totalSection.style.display = "none";
    emptyCart[0].style.display = "flex";

}

// add event for button
popbtn.addEventListener("click", togglePop);


/* 
 * another whey
 * show pop-up function 
 */
openCart.addEventListener("click", () => {
    sidebarpop.style.display = "flex";
});

// featureTest
var featuretest = () =>{

    for (i = 1; i <= count; i++) {
        let parentProduct = document.getElementById("parent-product" + i);
        let closeBtn = document.getElementById("close-product" + i);
        let price = document.getElementById("pret-product" + i).innerText;
    
        closeBtn.addEventListener("click", () => {
            parentProduct.style.display = "none";
            totalPrice -= price;
            count -=1;
    
            if (totalPrice <= 0) {
                togglePop();
            } else {
                totalPrice = totalPrice.toFixed(2);
                // update vars
                document.getElementById("total-prod").innerText = count;
                document.getElementById("total-prod2").innerText = count;
                document.getElementById("total-price-down").innerText = totalPrice + ' Lei';
                document.getElementById("total-price-right").innerText = totalPrice + ' Lei';
                document.getElementById("total-price-right2").innerText = totalPrice + ' Lei';
            }
        });
    }
    
    
    }

// populate products function
var populateProducts = products => {

    products.forEach(prod => {
        // testare validitate date pentru continut
        var con = (prod.continut) ? prod.continut : prod.tip;
        count += 1;
        totalPrice += prod.pret;

        populateDiv.innerHTML += ` 
            <div class="section-product" id="parent-product`+ count + `">
                <div class="section-cart">
                    <img src="`+ prod.img + `" class="product-img" alt="` + prod.nume + `" />
                    <div class="text-cart">
                        <h2 class="product-title">`+ prod.nume + `</h2>
                        <p class="product-cant">`+ con + `</p>
                    </div>
                    <span class="delete-product" id="close-product`+ count + `">X</span>
                </div>
                <hr />
                <div class="total-price">
                    <p class="text-price"><span id="pret-product`+ count + `">` + prod.pret + `</span> lei</p>
                </div>
            </div>`;
    });

    // display sections
    sectionTitle.style.display = "block";
    totalSection.style.display = "flex";

    // hide the dog
    emptyCart[0].style.display = "none";

    totalPrice = totalPrice.toFixed(2);
    // update vars
    document.getElementById("total-prod").innerText = count;
    document.getElementById("total-prod2").innerText = count;
    document.getElementById("total-price-down").innerText = totalPrice + ' Lei';
    document.getElementById("total-price-right").innerText = totalPrice + ' Lei';
    document.getElementById("total-price-right2").innerText = totalPrice + ' Lei';
};

// populate products button 

populateBtn.addEventListener("click", () => {
    populateProducts(products);
    featuretest();
});




/*
var parentProduct = document.getElementById("parent-product1");
var closeBtn = document.getElementById("close-product1");

closeBtn.addEventListener("click", ()=>{
    parentProduct.style.display = "none";
});

*/
