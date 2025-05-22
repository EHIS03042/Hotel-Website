document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu && closeMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        closeMenu.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    }
});
const whyContainer = [
    { 
        Image2: "images/ellipse_icon.svg",
        Image: "images/payment-method-icon.svg",
        title: "Payment methods",
        description: "We have a lot of them, from cryptocurrencies to barter for potatoes",
    },
    { 
        Image2: "images/ellipse_icon.svg",
        Image: "images/search_icon.svg",
        title: "Simple search process",
        description: "We checked it out, even the kid did it, <br> but it was my mom's friend's son",
    },
    { 
        Image2: "images/ellipse_icon.svg",
        Image: "images/support-icon.svg",
        title: "24/7 Support",
        description: "Is there something you don't<br>understand? Feel free to call us. <br> Phone number in the footer",
    },
    { 
        Image2: "images/ellipse_icon.svg",
        Image: "images/nice_cat_icon.svg",
        title: "We are nice",
        description: "Fantasy is over, there will be something really convincing here",
    },

];

const renderProduct = whyContainer => {
    const container = document.getElementById('whyContainer');
    whyContainer.forEach(whyContainer => {
        container.innerHTML += `
        <div>
                    <img src="${whyContainer.Image2}" class="blue-ellipse" alt="">
                    <img src="${whyContainer.Image}" class="payment" alt="">
                    <h3>${whyContainer.title}</h3>
                    <p>${whyContainer.description}</p>
                </div>
        `;
    });
}

renderProduct(whyContainer);

const offersContainer = [
    {
        image1: "images/room1.png",
        image2: "images/rating-star-icon.svg",
        image3: "images/favorite-heart.svg",
        title: "Wilderness Club at Big Ceddar",
        description1: "28 October - 1 November",
        description2: `<span class="price">$2016</span><span class="night"> /6 night</span>`
    },
    {
        image1: "images/room2.png",
        image2: "images/rating-star-icon.svg",
        image3: "images/favorite-heart.svg",
        title: "Wilderness Club at Big Ceddar",
        description1: "28 October - 1 November",
        description2: `<span class="price">$2016</span><span class="night"> /6 night</span>`
    },
    {
        image1: "images/room3.png",
        image2: "images/rating-star-icon.svg",
        image3: "images/favorite-heart.svg",
        title: "Wilderness Club at Big Ceddar",
        description1: "28 October - 1 November",
        description2: `<span class="price">$2016</span><span class="night"> /6 night</span>`
    },
]

const renderContainer = offersContainer => {
    const container = document.getElementById('offersContainer');
    offersContainer.forEach(offersContainer => {
        container.innerHTML += `
        <div>
                    <img src="${offersContainer.image1}" alt="" class="room-1">
                    <img src="${offersContainer.image2}" alt="" class="rating">
                    <img src="${offersContainer.image3}" alt="" class="heart">
        </div>
                <div>
                    <h3 class="wilderness">${offersContainer.title}</h3>
                    <p>${offersContainer.description1}</p>
                    <p class="dollar">${offersContainer.description2}</p>
                </div>
        `
    });
}
renderContainer(offersContainer);

const moreContainer = [
    { 
        Image: "images/jannike borg.png",
        description1: " I quickly found the right tour for me, <br> but I had a few questions about the <br> hotel, I wrote to tech support and they <br> answered all my questions within an <br> hour. The vacation itself was perfect. <br> Thank you very much. I will come back <br> again and again.",
        description2: "<strong>Jannike Borg,</strong>Publisher",
    },
    { 
        Image: "images/lebron_durant.png",
        description1: "I quickly found the right tour for me, <br> but I had a few questions about the <br> hotel, I wrote to tech support and they <br> answered all my questions within an <br> hour. The vacation itself was perfect. <br> Thank you very much. I will come back <br> again and again.",
        description2: "<strong> LeBron Durant,</strong> Flight attendant",
    },
    { 
        Image: "images/kaarel_piho.png",
        description1: "I quickly found the right tour for me, <br> but I had a few questions about the <br> hotel, I wrote to tech support and they <br> answered all my questions within an <br> hour. The vacation itself was perfect. <br> Thank you very much. I will come back <br> again and again.",
        description2: "<strong>Kaarel Piho,</strong> Chiropodist",
    },

];

const renderReview = moreContainer => {
    const container = document.getElementById('moreContainer');
    moreContainer.forEach(moreContainer => {
        container.innerHTML += `
        <div>
                    <img src="${moreContainer.Image}" class="review1" alt="review1">
                        <p>${moreContainer.description1}</p>
                    <p class="borg"> ${moreContainer.description2}</p>
        </div>
        `;
    });
}

renderReview(moreContainer);

const postContainer = [
    { 
        image1: "images/athens.png",
        description1: "May 23, 2022",
        image2: "images/time-five-icon.svg",
        image3: "images/5_minutes_icon.svg",
        title: "My trip to Athens",
        description2: "It would seem that in a city where Theseus,<br> Plato and Epicurus once walked,<br> the very idea of the subway is alien to the city, but already...",
    },
    { 
        image1: "images/vilnius-resort.png",
        description1: "May 22, 2022",
        image2: "images/time-five-icon.svg",
        image3: "images/1_minute_icon.svg",
        title: "Vilnius resorts",
        description2: "I haven't seen any resorts in Vilnius,<br>but there are wonderful people and pubs",
    },
    { 
        image1: "images/plane-flying.png",
        description1: "May 22, 2022",
        image2: "images/time-five-icon.svg",
        image3: "images/15_minutes_icon.svg",
        title: "Tips for flying on a plane",
        description2: "If you have a fear of flying, here's a <br> helpful tip: bring your co-pilot so you can <br>take a nap while he steers the plane for <br> you",
    },

];

const renderPost = postContainer => {
    const container = document.getElementById('postContainer');
    postContainer.forEach(postContainer => {
    container.innerHTML += `
            <div>
                <img src="${postContainer.image1}" alt="" class="athens">
                        <p class="date1">${postContainer.description1}</p> 
                        <img src="${postContainer.image2}" alt="clock" class="clock">
                        <img src="${postContainer.image3}" class="five-mins" alt="five-mins">
                        <h3>${postContainer.title}</h3>
                        <p class="para">${postContainer.description2}</p>

            </div>
        `;
    });
}

renderPost(postContainer);
