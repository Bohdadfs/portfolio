// =========================================
// ELEMENTS
// =========================================

const loader =
    document.querySelector(".loader");

const percent =
    document.querySelector(".loader-percent");

const loaderStatus =
    document.querySelector(".loader-status");

const hero =
    document.querySelector(".hero");

const builder =
    document.querySelector(".builder");

const builderLetter =
    document.querySelector(".builder-letter");

const letters =
    document.querySelectorAll(".build-letter");

const buildStage =
    document.querySelector(".build-stage");

const cursor =
    document.querySelector(".cursor");

const projectsSection =
    document.querySelector(".projects");



// =========================================
// LOCK SCROLL
// =========================================

document.body.style.overflow = "hidden";



// =========================================
// WAIT FUNCTION
// =========================================

function wait(time) {

    return new Promise((resolve) => {

        setTimeout(resolve, time);

    });

}



// =========================================
// MOVE BUILDER TO LETTER
// =========================================

function moveBuilderToLetter(letter) {

    const stageRect =
        buildStage.getBoundingClientRect();


    const letterRect =
        letter.getBoundingClientRect();


    // Горизонтальна позиція букви

    const x =
        letterRect.left
        - stageRect.left
        + letterRect.width / 2;


    // Чоловічок стоїть трохи нижче букви

    const y =
        letterRect.bottom
        - stageRect.top
        + 38;


    builder.style.left =
        x + "px";


    builder.style.top =
        y + "px";

}



// =========================================
// BUILD TEXT
// =========================================

async function buildText() {

    const totalLetters =
        letters.length;


    for (
        let index = 0;
        index < totalLetters;
        index++
    ) {

        const letter =
            letters[index];


        const letterValue =
            letter.textContent;



        // =================================
        // TAKE LETTER
        // =================================

        builderLetter.textContent =
            letterValue;


        builder.classList.add(
            "carrying"
        );



        // =================================
        // START WALKING
        // =================================

        builder.classList.add(
            "walking"
        );



        // =================================
        // MOVE TO LETTER POSITION
        // =================================

        moveBuilderToLetter(
            letter
        );


        await wait(380);



        // =================================
        // STOP WALKING
        // =================================

        builder.classList.remove(
            "walking"
        );


        await wait(80);



        // =================================
        // DROP / PLACE LETTER
        // =================================

        builder.classList.remove(
            "carrying"
        );


        letter.classList.add(
            "placed"
        );



        // =================================
        // WORKING / HAMMER
        // =================================

        builder.classList.add(
            "working"
        );


        letter.classList.add(
            "hit"
        );


        await wait(350);



        // =================================
        // STOP WORKING
        // =================================

        builder.classList.remove(
            "working"
        );


        letter.classList.remove(
            "hit"
        );



        // =================================
        // UPDATE PROGRESS
        // =================================

        const progress =
            Math.round(
                (
                    (index + 1)
                    / totalLetters
                )
                * 100
            );


        percent.textContent =
            progress + "%";


        await wait(80);

    }



    // =====================================
    // EVERYTHING IS BUILT
    // =====================================

    percent.textContent =
        "100%";


    loaderStatus.textContent =
        "COMPLETE";


    loader.classList.add(
        "finished"
    );



    // =====================================
    // WAIT SO USER CAN SEE RESULT
    // =====================================

    await wait(1200);



    // =====================================
    // CLOSE LOADER
    // =====================================

    loader.style.transition =
        "transform 1s cubic-bezier(0.76, 0, 0.24, 1)";


    loader.style.transform =
        "translateY(-100%)";



    // =====================================
    // HERO ANIMATION
    // =====================================

    await wait(300);


    hero.classList.add(
        "show"
    );



    // =====================================
    // ENABLE SCROLL
    // =====================================

    document.body.style.overflow =
        "auto";



    // =====================================
    // REMOVE LOADER AFTER ANIMATION
    // =====================================

    await wait(1000);


    loader.style.display =
        "none";

}



// =========================================
// START LOADER
// =========================================

window.addEventListener(
    "load",
    async () => {

        await wait(500);


        buildText();

    }
);



// =========================================
// CUSTOM CURSOR
// =========================================

let mouseX = 0;

let mouseY = 0;

let cursorX = 0;

let cursorY = 0;



// =========================================
// GET MOUSE POSITION
// =========================================

document.addEventListener(
    "mousemove",
    (event) => {

        mouseX =
            event.clientX;


        mouseY =
            event.clientY;

    }
);



// =========================================
// SMOOTH CURSOR
// =========================================

function animateCursor() {

    cursorX +=
        (
            mouseX
            - cursorX
        )
        * 0.15;


    cursorY +=
        (
            mouseY
            - cursorY
        )
        * 0.15;



    cursor.style.left =
        cursorX + "px";


    cursor.style.top =
        cursorY + "px";



    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();



// =========================================
// INTERACTIVE CURSOR
// =========================================

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



// =========================================
// WHITE CURSOR IN PROJECTS
// =========================================

if (projectsSection) {


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


}
