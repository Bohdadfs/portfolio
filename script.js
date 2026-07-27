// ========================
// ELEMENTS
// ========================

const loader =
    document.querySelector(".loader");

const percent =
    document.querySelector(".loader-percent");

const progressLine =
    document.querySelector(".loader-line-progress");

const hero =
    document.querySelector(".hero");

const cursor =
    document.querySelector(".cursor");

const projectsSection =
    document.querySelector(".projects");



// ========================
// LOADER
// ========================

let progress = 0;


// Забороняємо скрол,
// поки працює loader

document.body.style.overflow = "hidden";


const loading = setInterval(() => {

    progress++;


    // Цифри

    percent.textContent =
        progress + "%";


    // Лінія

    progressLine.style.width =
        progress + "%";


    // Кінець завантаження

    if (progress >= 100) {

        clearInterval(loading);


        setTimeout(() => {


            // Loader їде вгору

            loader.style.transition =
                "transform 1s cubic-bezier(0.76, 0, 0.24, 1)";


            loader.style.transform =
                "translateY(-100%)";



            // Запускаємо HERO

            setTimeout(() => {

                hero.classList.add("show");

            }, 300);



            // Повертаємо скрол

            document.body.style.overflow =
                "auto";


        }, 500);

    }


}, 25);



// ========================
// CUSTOM CURSOR
// ========================

let mouseX = 0;

let mouseY = 0;

let cursorX = 0;

let cursorY = 0;



// Отримуємо позицію мишки

document.addEventListener(
    "mousemove",
    (event) => {

        mouseX = event.clientX;

        mouseY = event.clientY;

    }
);



// ========================
// SMOOTH CURSOR
// ========================

function animateCursor() {

    cursorX +=
        (mouseX - cursorX) * 0.15;


    cursorY +=
        (mouseY - cursorY) * 0.15;


    cursor.style.left =
        cursorX + "px";


    cursor.style.top =
        cursorY + "px";


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();



// ========================
// INTERACTIVE CURSOR
// ========================

const interactiveElements =
    document.querySelectorAll(
        "a, button, .project-card"
    );


interactiveElements.forEach(
    (element) => {


        element.addEventListener(
            "mouseenter",
            () => {

                cursor.classList.add(
                    "active"
                );

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursor.classList.remove(
                    "active"
                );

            }
        );


    }
);



// ========================
// WHITE CURSOR IN PROJECTS
// ========================

projectsSection.addEventListener(
    "mouseenter",
    () => {

        cursor.classList.add(
            "light"
        );

    }
);


projectsSection.addEventListener(
    "mouseleave",
    () => {

        cursor.classList.remove(
            "light"
        );

    }
);