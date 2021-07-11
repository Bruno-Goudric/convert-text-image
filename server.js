const textToImage = require('text-to-image');

const texts = ['banana', 'maça', 'pera'];

texts.forEach(text => {
    const dataUri = textToImage.generate(text, {
        debug: true,
        maxWidth: 720,
        fontSize: 18,
        fontFamily: 'Arial',
        lineHeight: 30,
        margin: 5,
        bgColor: "transparent",
        textColor: "white",
        textAlign: "center",
    })
})






