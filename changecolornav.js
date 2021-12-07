


const pageAtual = window.location.href.split('/')[8]; // Here it takes the address of the page and separates it into smaller pieces where there is "/". To select just the filename of the current page, count your address and change the number.


const page = document.querySelector(`[href="${pageAtual}"]`) // Here it selects the href whose value is the name of the current page.

page.style.color="#f2cb05"; // Here it changes the color property.

