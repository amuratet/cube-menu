function tournerCubeBibi() {
    leCube.style.transform = "translateZ(450px)";
}

function tournerCubeCecile() {
    leCube.style.transform = "rotate3d(-0.15, -1, 0.15, 75deg)";
}

function tournerCubeDevon() {
    leCube.style.transform = "rotate3d(-0.1, 1, -0.1, 105deg)";
}

function tournerCubeJoyce() {
    leCube.style.transform = "rotate3d(1, 0.15, -0.15, 105deg)";
}

function tournerCubeMathieu() {
    leCube.style.transform = "rotate3d(-0, 1, -0.1, 195deg)";
    // leCube.style.transform = "rotate3d(0, 1, 0, 180deg)";
}

function tournerCubeMorghan() {
    leCube.style.transform = "rotate3d(-1, -0.15, -0.15, 105deg)";
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




// function tournerCubeMorghan() {
//     melange();
//     leCube.style.transform = "rotate3d(-1, 0, 0, 90deg)";
// }