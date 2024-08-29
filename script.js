document.addEventListener('DOMContentLoaded', (event) => {

    const yesBtn = document.querySelector('.yesBtn');
    const noBtn = document.querySelector('.noBtn');
    const yesSpn = document.querySelector('.yesSpn');

    noBtn.addEventListener('click', () => {
        const currentWidth = yesBtn.offsetWidth;
        const currentHeight = yesBtn.offsetHeight;

        yesBtn.style.width = currentWidth * 1.1 + 'px';
        yesBtn.style.height = currentHeight * 1.1 + 'px';

        const currentFontSize = window.getComputedStyle(yesSpn).fontSize;
        yesSpn.style.fontSize = parseFloat(currentFontSize) * 1.1 + 'px';

        const currentBorderRadius = window.getComputedStyle(yesBtn).borderRadius;
        yesBtn.style.borderRadius = parseFloat(currentBorderRadius) * 1.1 + 'px';
    }),

    yesBtn.addEventListener('click', () => {
        Swal.fire({
            title: "¡Vivan los novioz!",
            text: "Gracias por disculparme amorcito",
            imageUrl: "https://i.redd.it/11zsr036iw191.jpg",
            imageWidth: 352,
            imageHeight: 276,
            imageAlt: "Custom image"
          });
    });

});