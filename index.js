const database = [
    {
        title: 'Mona Lisa',
        attribute: 'Leonardo da Vinci',
        date: '1503-1506',
        img: './img/src/monalisa.jpeg',
        text: `The painting is probably of the Italian noblewoman Lisa Gherardini, 
        the wife of Francesco del Giocondo, and is in oil on a white Lombardy poplar 
        panel. It had been believed to have been painted between 1503 and 1506; 
        however, Leonardo may have continued working on it as late as 1517. It was 
        acquired by King Francis I of France and is now the property of the French 
        Republic itself, on permanent display at the Louvre, Paris since 1797.`
    }
]


// Generates page content from database
function generateContent() {
    
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('class', 'container')
    document.body.appendChild(contentContainer)

    for (i = 0; i < database.length; i++) {
        
        // Generates Image
        const img = document.createElement('img');
        img.setAttribute('src', database[i].img);
        img.setAttribute('class', 'img');
        contentContainer.appendChild(img);
        
        // Generates Title
        const title = document.createElement('h2');
        title.innerHTML = database[i].title;
        title.setAttribute('class', 'title');
        contentContainer.appendChild(title);

        // Generates Attribute
        const attribute = document.createElement('h4');
        attribute.innerHTML = database[i].attribute;
        attribute.setAttribute('class', 'attribute');
        contentContainer.appendChild(attribute);

        // Generates Date
        const date = document.createElement('h4');
        date.innerHTML = database[i].date;
        date.setAttribute('class', 'date');
        contentContainer.appendChild(date);
        
        // Generates Text Content
        const text = document.createElement('p');
        text.innerHTML = database[i].text;
        text.setAttribute('class', 'text');
        contentContainer.appendChild(text);   
    }
}

// Sticky Nav
$(window).on('scroll', () => {
    const navbar = $('.navbar');
    const logo = $('.navbar-logo');
    const pos = $(window).scrollTop();
    console.log(pos);
    if (pos > 415) {
        navbar.addClass('navbar-scroll');
        logo.addClass('navbar-logo-scroll');
    } else if (pos <= 415) {
        navbar.removeClass('navbar-scroll');
        logo.removeClass('navbar-logo-scroll');
    }
   


});

generateContent();
