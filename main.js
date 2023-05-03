let hamburgerMenuDiv = document.querySelector('.hamburger-menu');
let hamburgerMenuItems = document.querySelectorAll('.hamburger-menu-item');
let btnHamburgerMenu = document.getElementById('btn-hamburger-menu');
let menuSection = document.getElementById("section-2");


// Hamburger menu
btnHamburgerMenu.addEventListener("click", addOrRemoveActivClass);

hamburgerMenuItems.forEach(link => {
    link.addEventListener("click", addOrRemoveActivClass)
});

function addOrRemoveActivClass() {
    if (hamburgerMenuDiv.classList.contains('hamburger-menu-active')) {
        hamburgerMenuDiv.classList.remove('hamburger-menu-active')
        hamburgerMenuDiv.classList.add('hamburger-menu-deactive');
        return;
    }
    if (hamburgerMenuDiv.classList.contains('hamburger-menu-deactive')) {
        hamburgerMenuDiv.classList.remove('hamburger-menu-deactive')
        hamburgerMenuDiv.classList.add('hamburger-menu-active');
        return;
    }

}

// Menu builder
let serverData = [
    {
        id: "price-1",
        title: "CLASSIC BURGER",
        price: 2290,
        priceCurrency: "Ft",
        details: 'házi buci, házi hambiszósz, marhahús pogácsa, jégsali, paradicsom, hagyma',
        isMenuAvailable: true,
        menuPrice: 3290,
        imagePath: "images/hambi_4.jpg"
    },
    {
        id: "price-2",
        title: "CHEESE BURGER",
        price: 2390,
        priceCurrency: "Ft",
        details: 'házi buci, házi hambiszósz, marhahús pogácsa, jégsali, cheddar sajt, marinált hagyma',
        isMenuAvailable: true,
        menuPrice: 3390,
        imagePath: "images/hambi_2.jpg"
    },
    {
        id: "price-3",
        title: "Double CheeseMoo'S BURGER",
        price: 3290,
        priceCurrency: "Ft",
        details: 'házi buci, házi hambiszósz, dupla marhahús pogácsa, jégsali, cheddar sajt, marinált hagyma',
        isMenuAvailable: true,
        menuPrice: 4290,
        imagePath: "images/hambi_3.jpg"
    },
    {
        id: "price-4",
        title: "BACON CHESSE BURGER",
        price: 2490,
        priceCurrency: "Ft",
        details: 'házi buci, házi hambiszósz, marhahús pogácsa, jégsali, cheddar sajt, bacon, marinált hagyma',
        isMenuAvailable: true,
        menuPrice: 3490,
        imagePath: "images/hambi_1.jpg"
    },
    {
        id: "price-5",
        title: "Xtra BACON CHESSE BURGER",
        price: 2790,
        priceCurrency: "Ft",
        details: 'házi buci, házi hambiszósz, marhahús pogácsa, jégsali, dupla cheddar sajt, dupla bacon, marinált hagyma',
        isMenuAvailable: true,
        menuPrice: 3790,
        imagePath: "images/hambi_5.jpg"
    },
    {
        id: "price-6",
        title: "BETTIMOO'S BURGER",
        price: 2690,
        priceCurrency: "Ft",
        details: 'házi buci, házi hambiszósz, marhahús pogácsa, grillezett camambert, pikáns hagymalekvár, rukkola, feketeerdei sonka',
        isMenuAvailable: true,
        menuPrice: 3690,
        imagePath: "images/hambi_6.jpg"
    },
    {
        id: "price-7",
        title: "Black BURGER",
        price: 2690,
        priceCurrency: "Ft",
        details: 'fekete buci, fokhagymás PinkMayo, jégsali, marhahús pogácsa, cheddar, paradicsom, rántott hagymakarika',
        isMenuAvailable: true,
        menuPrice: 3690,
        imagePath: "images/hambi_7.jpg"
    },
    {
        id: "price-8",
        title: "SmokyBBQ",
        price: 2390,
        priceCurrency: "Ft",
        details: 'házi buci, bbq szósz, marhahús pogácsa, cheddar, csem.ubi, bacon chips, marinált hagyma',
        isMenuAvailable: true,
        menuPrice: 3390,
        imagePath: "images/hambi_1.jpg"
    },
];



function createCard(serverData) {
    for (let i = 0; i < serverData.length; i++) {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        //title
        let titleText = document.createElement("p");
        titleText.classList.add("text-title");
        titleText.innerHTML = serverData[i].title;
        cardDiv.appendChild(titleText);

        //details
        let details = document.createElement("p");
        details.classList.add("details");
        details.innerHTML = serverData[i].details;
        cardDiv.appendChild(details);
        //price-section
        let priceDiv = document.createElement("div");
        priceDiv.classList.add("price");

        // normal price       
        let priceSpan = document.createElement("span");
        priceSpan.classList.add("normal-price");

        let priceIco = document.createElement("div");
        priceIco.classList.add("normal-price-ico");
        priceSpan.appendChild(priceIco);

        let priceText = document.createElement("p");
        priceText.classList.add("price-text");
        priceText.innerHTML = serverData[i].price
            .toLocaleString("en-US")
            .replace(/,/g, ".");
        priceSpan.appendChild(priceText);

        let priceCurrencyText = document.createElement("p");
        priceCurrencyText.classList.add("price-currency");
        priceCurrencyText.innerHTML = serverData[i].priceCurrency;

        priceSpan.appendChild(priceCurrencyText);
        priceDiv.appendChild(priceSpan);

        //menu price
        if (serverData[i].isMenuAvailable) {

            let menuPriceSpan = document.createElement("span");
            menuPriceSpan.classList.add("menu-price")

            let menuPriceIco = document.createElement("div");
            menuPriceIco.classList.add("menu-price-ico-1");
            menuPriceSpan.appendChild(menuPriceIco);

            let menuPriceIco2 = document.createElement("div");
            menuPriceIco2.classList.add("menu-price-ico-2");
            menuPriceSpan.appendChild(menuPriceIco2);


            let menuPriceIco3 = document.createElement("div");
            menuPriceIco3.classList.add("menu-price-ico-3");
            menuPriceSpan.appendChild(menuPriceIco3);

            let menupriceText = document.createElement("p");
            menupriceText.classList.add("price-text");
            menupriceText.innerHTML = serverData[i].menuPrice
                .toLocaleString("en-US")
                .replace(/,/g, ".");
            menuPriceSpan.appendChild(menupriceText);

            let menuPriceCurrencyText = document.createElement("p");
            menuPriceCurrencyText.classList.add("price-currency");
            menuPriceCurrencyText.innerHTML = serverData[i].priceCurrency;

            menuPriceSpan.appendChild(menuPriceCurrencyText);
            priceDiv.appendChild(menuPriceSpan);

        }
        //add to container
        cardDiv.appendChild(priceDiv);

        //image
        if (serverData[i].imagePath) {
            let image = document.createElement('img');
            image.classList.add("card-image");
            image.src = serverData[i].imagePath;
            image.alt = serverData[i].title;
            cardDiv.appendChild(image);
        }
        menuSection.appendChild(cardDiv);
    }
}

function discount(discountPercentage) {
    let discount = (100 - discountPercentage) / 100;
    for (let i = 0; i < serverData.length; i++) {
        serverData[i].price = serverData[i].price * discount;
    }
}
discount(0);
createCard(serverData);
