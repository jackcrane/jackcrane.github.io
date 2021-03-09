let app = document.getElementById('rep')

let typewriter = new Typewriter(app, {
    loop: false
});

typewriter.typeString('Burgers')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Fish')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Dogs')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Chicken')
    .pauseFor(1000)
    .deleteAll()
    .typeString('<b>Americana</b>')
    .pauseFor(1000)
    .start();
