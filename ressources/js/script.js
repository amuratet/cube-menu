function tournerCubeBibi() {
    positionActuelle = 0;
    leCube.style.transform = "translateZ(450px)";
}


function tournerCubeDevon() {
    positionActuelle = 1;
    leCube.style.transform = "rotate3d(-0.1, 1, -0.1, 105deg)";
}
function tournerCubeCecile() {
    positionActuelle = 2;
    leCube.style.transform = "rotate3d(-0.15, -1, 0.15, 75deg)";
    clicCubeCecile()
}

function tournerCubeMorghan() {
    positionActuelle = 3;
    leCube.style.transform = "rotate3d(-1, -0.15, -0.15, 105deg)";
}

function tournerCubeJoyce() {
    positionActuelle = 4;
    leCube.style.transform = "rotate3d(1, 0.15, -0.15, 105deg)";
}

function tournerCubeMathieu() {
    positionActuelle = 5;
    leCube.style.transform = "rotate3d(-0, 1, -0.1, 195deg)";
    // leCube.style.transform = "rotate3d(0, 1, 0, 180deg)";
}



cecile.addEventListener('click', clicCubeCecile);
function clicCubeCecile() {
    leCube.style.transform = "rotate3d(0, -1, 0, 90deg)  translateX(450px)";
}

devon.addEventListener('click', clicCubeDevon);
function clicCubeDevon() {
    leCube.style.transform = "rotate3d(0, 1, 0, 90deg) translateX(-450px)";
}

joyce.addEventListener('click', clicCubeJoyce);
function clicCubeJoyce() {
    leCube.style.transform = "rotate3d(1, 0, 0, 90deg) translateY(450px)";
}

mathieu.addEventListener('click', clicCubeMathieu);
function clicCubeMathieu() {
    leCube.style.transform = "rotate3d(0, 1, 0, 180deg) translateZ(-450px)";
}

morghan.addEventListener('click', clicCubeMorgan);
function clicCubeMorgan() {
    leCube.style.transform = "rotate3d(-1, 0, 0, 90deg) translateY(-450px)";
}

///////////////////////////////////////////////////

function site_cecile() {
    window.location.assign("https://mii-mi.github.io/revolution/");
}

function site_devon() {
    window.location.assign("https://cubikbank.netlify.com/");
}

function site_joyce() {
    window.location.assign("https://jflorent9.github.io/agence-voyage/");
}

function site_mathieu() {
    window.location.assign("https://arvolleyv4.netlify.com/");
}

function site_morghan() {
    window.location.assign("http://192.168.1.86/linux-powah/linux-temp1.0/linux-template1.0/");
}




// function tournerCubeMorghan() {
//     melange();
//     leCube.style.transform = "rotate3d(-1, 0, 0, 90deg)";
// }