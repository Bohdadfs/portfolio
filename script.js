// ==================================================
// WAIT
// ==================================================

function wait(ms) {

    return new Promise((resolve) => {

        setTimeout(resolve, ms);

    });
}


// ==================================================
// ELEMENTS
// ==================================================

const loader =
    document.querySelector(".loader");

const loaderStatus =
    document.querySelector(".loader-status");

const loaderStep =
    document.querySelector(".loader-step");

const progressFill =
    document.querySelector(".loader-progress-fill");

const hero =
    document.querySelector(".hero");

const cursor =
    document.querySelector(".cursor");

const pageTransition =
    document.querySelector(".page-transition");


// ==================================================
// PROGRESS
// ==================================================

function setProgress(value) {

    if (progressFill) {

        progressFill.style.width =
            value + "%";
    }
}


// ==================================================
// TEXT
// ==================================================

function setStep(text) {

    if (loaderStep) {

        loaderStep.textContent =
            text;
    }
}


// ==================================================
// START LOADER
// ==================================================

async function startLoader() {

    if (!loader) {

        if (hero) {

            hero.classList.add("show");
        }

        return;
    }


    // Lock page

    document.body.style.overflow =
        "hidden";


    // ==================================================
    // START
    // ==================================================

    setProgress(0);

    setStep(
        "01 / STRUCTURE"
    );


    await wait(250);


    // ==================================================
    // STAGE 1
    // ROOM STRUCTURE
    // ==================================================

    loader.classList.add(
        "stage-1"
    );

    setProgress(15);


    await wait(500);


    // ==================================================
    // STAGE 2
    // ART / POSTERS
    // ==================================================

    setStep(
        "02 / ART"
    );

    loader.classList.add(
        "stage-2"
    );

    setProgress(32);


    await wait(520);


    // ==================================================
    // STAGE 3
    // MAIN FURNITURE
    // ==================================================

    setStep(
        "03 / FURNITURE"
    );

    loader.classList.add(
        "stage-3"
    );

    setProgress(55);


    await wait(600);


    // ==================================================
    // STAGE 4
    // CHAIRS
    // ==================================================

    setStep(
        "04 / OBJECTS"
    );

    loader.classList.add(
        "stage-4"
    );

    setProgress(72);


    await wait(500);


    // ==================================================
    // STAGE 5
    // DETAILS
    // ==================================================

    setStep(
        "05 / DETAILS"
    );

    loader.classList.add(
        "stage-5"
    );

    setProgress(88);


    // Даємо оригінальним лініям
    // повністю домалюватися

    await wait(600);


    // ==================================================
    // COMPLETE
    // ==================================================

    setProgress(100);

    setStep(
        "06 / COMPLETE"
    );


    if (loaderStatus) {

        loaderStatus.textContent =
            "SPACE COMPLETE";
    }


    // Дуже коротко бачимо
    // повністю готове креслення

    await wait(180);


    // ==================================================
    // HERO START
    // ==================================================

    if (hero) {

        hero.classList.add(
            "show"
        );
    }


    // ==================================================
    // LOADER FADE OUT
    // ==================================================

    // Ніякого фото.
    // Ніякого flash.
    // Ніякого руху вверх.
    //
    // Весь старий малюнок просто
    // плавно стає прозорим.

    loader.classList.add(
        "exit"
    );


    document.body.style.overflow =
        "auto";


    await wait(450);


    // ==================================================
    // REMOVE LOADER
    // ==================================================

    loader.style.display =
        "none";
}


// ==================================================
// START WHEN EVERYTHING IS LOADED
// ==================================================

window.addEventListener(
    "load",
    () => {

        startLoader();

    }
);


// ==================================================
// CUSTOM CURSOR
// ==================================================

if (cursor) {

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;


    document.addEventListener(
        "mousemove",
        (event) => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;

        }
    );


    function animateCursor() {

        cursorX +=
            (
                mouseX -
                cursorX
            ) * 0.2;


        cursorY +=
            (
                mouseY -
                cursorY
            ) * 0.2;


        cursor.style.left =
            cursorX + "px";


        cursor.style.top =
            cursorY + "px";


        requestAnimationFrame(
            animateCursor
        );
    }


    animateCursor();


    // ==================================================
    // HOVER
    // ==================================================

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


    // ==================================================
    // WHITE CURSOR ON DARK AREAS
    // ==================================================

    const darkSections =
        document.querySelectorAll(
            ".loader, .projects"
        );


    darkSections.forEach(
        (section) => {

            section.addEventListener(
                "mouseenter",
                () => {

                    cursor.classList.add(
                        "light"
                    );

                }
            );


            section.addEventListener(
                "mouseleave",
                () => {

                    cursor.classList.remove(
                        "light"
                    );

                }
            );

        }
    );
}


// ==================================================
// PROJECT TRANSITION
// ==================================================

const projectLinks =
    document.querySelectorAll(
        ".project-link"
    );


projectLinks.forEach(
    (project) => {

        project.addEventListener(
            "click",
            async () => {

                const url =
                    project.dataset.project;


                const title =
                    project.dataset.title;


                if (!url) {
                    return;
                }


                const transitionTitle =
                    document.querySelector(
                        ".transition-content h2"
                    );


                if (
                    transitionTitle &&
                    title
                ) {

                    transitionTitle.textContent =
                        title;
                }


                if (pageTransition) {

                    pageTransition.classList.add(
                        "active"
                    );


                    await wait(750);
                }


                window.location.href =
                    url;

            }
        );

    }
);