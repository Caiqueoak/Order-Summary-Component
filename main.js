/* TODO: 
- Apply button animation
- Add responsiveness to the main container's components
- Add background images 
- Add media queries */

// VARIABLES
const BrightBlue = 'hsl(245, 75%, 52%)';
const DarkBlue = 'hsl(223, 47%, 23%)';
const DesaturatedBlue = 'hsl(224, 23%, 55%)';
const PaleBlue = 'hsl(225, 100%, 94%)';
const VeryPaleBlue = 'hsl(225, 100%, 98%)';

// MOBILE RESOLUTION

// RESET ALL ELEMENTS
const allElements = document.querySelectorAll('*');

for (let i = 0; i < allElements.length; i++) {
    let elements = allElements[i];
    elements.style.margin = '0';
    elements.style.padding = '0';
    // - Weights: 500, 700, 900
    elements.style.fontFamily = 'Red Hat Display, sans-serif';
}

// BODY
const body = document.body;
body.style.display = 'flex';
body.style.alignItems = 'center'; 
body.style.justifyContent = 'center'; 
body.style.backgroundColor = PaleBlue;
body.style.height = '120vh';

//  BODY\MAIN CONTAINER
const mainContainer = document.createElement('main');
body.append(mainContainer);
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.alignItems = 'center';
mainContainer.style.width = '90%';
mainContainer.style.maxWidth = '400px';
mainContainer.style.borderRadius = '10px';
mainContainer.style.boxShadow = '0 1px 10px -3px black';
mainContainer.style.backgroundColor = VeryPaleBlue;

// MAIN CONTAINER\FIRST SECTION
const firstSection = document.createElement('section');
mainContainer.append(firstSection);
firstSection.style.width = '100%';

// FIRST SECTION\IMAGE
const image = document.createElement('img');
firstSection.append(image);
image.src = './images/illustration-hero.svg';
image.style.width = '100%';
image.style.height = '100%';
image.style.borderRadius = '10px 10px 0 0';

// MAIN CONTAINER\SECOND SECTION
const secondSection = document.createElement('section');
mainContainer.append(secondSection);
secondSection.style.display = 'flex';
secondSection.style.justifyContent = 'center';
secondSection.style.alignItems = 'center';
secondSection.style.flexDirection = 'column';
secondSection.style.textAlign = 'center';
secondSection.style.width = '80%';
secondSection.style.padding = '7px 0 30px';

// SECOND SECTION\H1
const h1 = document.createElement('h1');
secondSection.append(h1);
h1.style.fontWeight = 900;
h1.style.color = DarkBlue;
h1.innerText = 'Order Summary';

// SECOND SECTION\P
const p = document.createElement('p');
secondSection.append(p);
p.style.margin = '0 0 30px';
p.style.color = DesaturatedBlue;
p.innerText = 
'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!';

// SECOND SECTION\PLAN CONTAINER
const planContainer = document.createElement('article');
secondSection.append(planContainer);
planContainer.style.width = '100%';
planContainer.style.display = 'flex';
planContainer.style.alignItems = 'center';
planContainer.style.columnGap = '20px';

// PLAN CONTAINER\ICON
const icon = document.createElement('img');
planContainer.append(icon);
icon.src = './images/icon-music.svg'
icon.alt = 'music icon';
icon.style.height = 'fit-content';

// PLAN CONTAINER\PLAN TEXT
const planText = document.createElement('p');
planContainer.append(planText);
planText.innerText = 'Annual Plan';
planText.style.display = 'flex';
planText.style.flexDirection = 'column';
planText.style.alignItems = 'center';
planText.style.justifyContent = 'center';
planText.style.fontWeight = 900;
planText.style.color = DarkBlue;

// PLAN TEXT\PLAN PRICE 
const planPrice = document.createElement('p');
planText.append(planPrice);
planPrice.style.color = DesaturatedBlue;
planPrice.style.fontWeight = 500;
planPrice.innerText = '$59.99/year';
planPrice.style.margin = '0';

// PLAN CONTAINER\ CHANGE BUTTON
const changeButton = document.createElement('a');
planContainer.append(changeButton)
changeButton.setAttribute('href', '#');
changeButton.innerText = 'change';
changeButton.style.paddingLeft = '25px';
changeButton.style.color = BrightBlue;
changeButton.style.fontWeight = 700;

// SECOND SECTION\PAYMENT BUTTON
const payButton = document.createElement('a');
secondSection.append(payButton);
payButton.style.width = '110%';
payButton.style.padding = '0.75rem 0';
payButton.style.margin = '1.5rem 0 1rem';
payButton.style.color = 'white';
payButton.style.backgroundColor = BrightBlue;
payButton.style.borderRadius = '7px';
payButton.style.boxShadow = 
'0 20px 5px -3px hsl(225, 100%, 94%)';
payButton.style.fontWeight = 700;
payButton.innerText = 'Proceed to Payment';

// SECOND SECTION\CANCEL BUTTON
const cancelButton = document.createElement('a');
secondSection.append(cancelButton);
cancelButton.style.color = DesaturatedBlue;
cancelButton.style.fontWeight = 700;
cancelButton.innerText = 'Cancel Order';

// DESKTOP RESOLUTION

// BACKGROUND IMAGES