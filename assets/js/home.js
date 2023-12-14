//data for loop news
const newsData ={
    1 : {
        'image' : 'thumbnail1',
        'title' : 'KNIGHT OF LIQUID',
        'text' : 'Stronger than ever.',
        'buttonText' : 'Watch Now →'
    },
    2 : {
        'image' : 'thumbnail2',
        'title' : 'ROCKET LEAGUE FAREWELL FOR NOW',
        'text' : 'Today Team Liquid is say goodbye to the Rocket League Champion Series and Rocket League eSports (though, hopefully not forever).',
        'buttonText' : 'Read More →'
    },
    3 : {
        'image' : 'thumbnail3',
        'title' : 'WELCOME CADIAN ',
        'text' : 'CS2 Roster Annoucement',
        'buttonText' : 'Watch Now →'
    },
    4 : {
        'image' : 'thumbnail4',
        'title' : 'CATS OF TEAM LIQUID',
        'text' : 'Meet the friendly little felines who really run things there at Team Liquid - in trading card form',
        'buttonText' : 'Look At Our Cats '
    },
    5 : {
        'image' : 'thumbnail5',
        'title' : 'STAR WARS COLLECTION',
        'text' : "It's time to suit up and fulfill your destiny with the new STAR WAR | TEAM LIQUID Apparel Collection! Take your place and live your story!",
        'buttonText' : 'Shop Now →'
    }
    
}

//set header shadow when scroll to down 
const header = document.querySelector('.nav-header');

window.addEventListener('scroll', ()=>{
    const scrollHeigth = window.pageYOffset;
    if (scrollHeigth > 70){
        header.classList.add('trans-header');
    } else {
        header.classList.remove('trans-header');
    }
})

//get data from new Data
