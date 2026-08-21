document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    if (hamburgerMenu && navbarMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });

        navbarMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                navbarMenu.classList.remove('active');
            }
        });
    } else {
        console.error('Hamburger menu or navbar menu element not found.');
    }
});


/* ================================
   SMOOTH SCROLLING
================================ */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');

        if (!targetId || targetId === '#') {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


/* =========================================
   PROGRAM DETAILS
   ========================================= */

const programDetailPages = {

    "01": {
        title: "Strength Training",

        description:
            "Build raw strength, improve stability, and develop functional power through progressive resistance training designed to make you stronger and more capable.",

        focus: "Strength & Power",
        level: "Beginner to Advanced",
        format: "Individual & Group",
        duration: "12 Weeks",
        price: "₹2,999 / month",

        included: [
            "Personalized strength training plan",
            "Progressive resistance training",
            "Trainer guidance",
            "Progress tracking"
        ]
    },

    "02": {
        title: "Muscle Building",

        description:
            "Follow structured training designed to build lean muscle, improve strength, and maximize your physical development through progressive training.",

        focus: "Muscle Growth",
        level: "Beginner to Advanced",
        format: "Individual & Group",
        duration: "12 Weeks",
        price: "₹3,499 / month",

        included: [
            "Muscle-building workout plan",
            "Progressive overload programming",
            "Training guidance",
            "Progress tracking"
        ]
    },

    "03": {
        title: "Weight Loss",

        description:
            "Improve your fitness, burn calories, and develop sustainable training habits through structured workouts designed around your weight-loss goals.",

        focus: "Fat Loss & Fitness",
        level: "All Levels",
        format: "Individual & Group",
        duration: "12 Weeks",
        price: "₹2,499 / month",

        included: [
            "Goal-based workout plan",
            "Cardio and conditioning sessions",
            "Trainer guidance",
            "Progress tracking"
        ]
    },

    "04": {
        title: "Personal Training",

        description:
            "Get one-on-one coaching from an experienced trainer. Your workouts, progression, and training strategy are tailored specifically around your goals.",

        focus: "Personal Coaching",
        level: "All Levels",
        format: "One-on-One",
        duration: "12 Weeks",
        price: "₹4,999 / month",

        included: [
            "Personalized workout plan",
            "One-on-one trainer guidance",
            "Exercise technique guidance",
            "Progress tracking"
        ]
    },

    "05": {
    title: "HIIT",

    description:
        "Push your limits with high-intensity interval training designed to improve cardiovascular fitness, endurance, speed, and overall conditioning.",

    focus: "Conditioning & Endurance",
    level: "Intermediate",
    format: "Group & Individual",
    duration: "12 Weeks",
    price: "₹2,999 / month",

    included: [
        "High-intensity interval workouts",
        "Cardio and conditioning training",
        "Endurance development",
        "Progress tracking"
    ]
},

    "06": {
        title: "Functional Training",

        description:
            "Improve movement, mobility, balance, and everyday performance through practical full-body training designed to make you stronger and more capable.",

        focus: "Movement & Mobility",
        level: "All Levels",
        format: "Individual & Group",
        duration: "12 Weeks",
        price: "₹2,999 / month",

        included: [
            "Full-body functional workouts",
            "Mobility and movement training",
            "Balance and stability work",
            "Progress tracking"
        ]
    }

};


/* Elements */

const programDetailsModal =
    document.getElementById("programDetailsModal");

const programDetailsClose =
    document.getElementById("programDetailsClose");

const detailsNumber =
    document.getElementById("detailsNumber");

const detailsTitle =
    document.getElementById("detailsTitle");

const detailsDescription =
    document.getElementById("detailsDescription");

const detailsFocus =
    document.getElementById("detailsFocus");

const detailsLevel =
    document.getElementById("detailsLevel");

const detailsFormat =
    document.getElementById("detailsFormat");

const detailsDuration =
    document.getElementById("detailsDuration");

const detailsPrice =
    document.getElementById("detailsPrice");

const detailsIncluded =
    document.getElementById("detailsIncluded");


/* Open details */

function openProgramDetails(programNumber) {

    const program = programDetailPages[programNumber];

    if (!program || !programDetailsModal) {
        return;
    }

    detailsNumber.textContent = programNumber;
    detailsTitle.textContent = program.title;
    detailsDescription.textContent = program.description;

    detailsFocus.textContent = program.focus;
    detailsLevel.textContent = program.level;
    detailsFormat.textContent = program.format;
    detailsDuration.textContent = program.duration;

    detailsPrice.textContent = program.price;


    detailsIncluded.innerHTML = "";

    program.included.forEach((item) => {

        const li = document.createElement("li");

        li.textContent = item;

        detailsIncluded.appendChild(li);

    });


    programDetailsModal.classList.add("active");

    programDetailsModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


/* Close details */

function closeProgramDetails() {

    if (!programDetailsModal) {
        return;
    }

    programDetailsModal.classList.remove("active");

    programDetailsModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


/* Learn More buttons */

/* =========================================
   LEARN MORE BUTTONS
   ========================================= */

document.querySelectorAll(".program-card .program-link").forEach((button) => {

    button.addEventListener("click", () => {

        const programCard = button.closest(".program-card");

        const programNumber = programCard?.dataset.program;

        if (programNumber) {
            openProgramDetails(programNumber);
        }

    });

});


/* Close button */

programDetailsClose?.addEventListener(
    "click",
    closeProgramDetails
);


/* Click outside */

programDetailsModal?.addEventListener("click", (event) => {

    if (event.target === programDetailsModal) {
        closeProgramDetails();
    }

});


/* Escape key */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        programDetailsModal?.classList.contains("active")
    ) {
        closeProgramDetails();
    }

});