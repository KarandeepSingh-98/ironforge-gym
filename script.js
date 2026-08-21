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


/* =========================================
   MEMBERSHIP DETAILS
========================================= */

const membershipPlans = {

    basic: {
        title: "Basic",

        description:
            "Everything you need to build a consistent fitness routine and get started with your training.",

        price: "₹1,499",

        features: [
            "Gym access",
            "Locker access",
            "Basic equipment"
        ]
    },

    pro: {
        title: "Pro",

        description:
            "The complete gym experience for serious and consistent training, with additional support and group sessions.",

        price: "₹2,499",

        features: [
            "Full gym access",
            "Group classes",
            "Fitness assessment",
            "Locker access"
        ]
    },

    elite: {
        title: "Elite",

        description:
            "Premium support and personalized guidance designed for members who want a more complete training experience.",

        price: "₹4,999",

        features: [
            "Everything in Pro",
            "Personal training",
            "Nutrition guidance",
            "Priority booking"
        ]
    }

};


const membershipModal =
    document.getElementById("membershipModal");

const membershipModalClose =
    document.getElementById("membershipModalClose");

const membershipModalTitle =
    document.getElementById("membershipModalTitle");

const membershipModalDescription =
    document.getElementById("membershipModalDescription");

const membershipModalPrice =
    document.getElementById("membershipModalPrice");

const membershipModalFeatures =
    document.getElementById("membershipModalFeatures");


function openMembershipDetails(planName) {

    const plan = membershipPlans[planName];

    if (!plan || !membershipModal) {
        return;
    }

    membershipModalTitle.textContent = plan.title;

    membershipModalDescription.textContent =
        plan.description;

    membershipModalPrice.textContent =
        plan.price;


    membershipModalFeatures.innerHTML = "";


    plan.features.forEach((feature) => {

        const li = document.createElement("li");

        li.textContent = feature;

        membershipModalFeatures.appendChild(li);

    });


    membershipModal.classList.add("active");

    membershipModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeMembershipDetails() {

    if (!membershipModal) {
        return;
    }

    membershipModal.classList.remove("active");

    membershipModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


/* CTA buttons */

document
    .querySelectorAll(".membership-cta")
    .forEach((button) => {

        button.addEventListener("click", () => {

            const planName =
                button.dataset.plan;

            openMembershipDetails(planName);

        });

    });


/* Close button */

membershipModalClose?.addEventListener(
    "click",
    closeMembershipDetails
);


/* Click outside */

membershipModal?.addEventListener(
    "click",
    (event) => {

        if (
            event.target === membershipModal
        ) {
            closeMembershipDetails();
        }

    }
);


/* Escape */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            membershipModal?.classList.contains("active")
        ) {
            closeMembershipDetails();
        }

    }
);

/* =========================================
   BMI CALCULATOR
========================================= */

const bmiHeight =
    document.getElementById("bmiHeight");

const bmiWeight =
    document.getElementById("bmiWeight");

const calculateBmi =
    document.getElementById("calculateBmi");

const bmiValue =
    document.getElementById("bmiValue");

const bmiCategory =
    document.getElementById("bmiCategory");

const bmiError =
    document.getElementById("bmiError");


calculateBmi?.addEventListener("click", () => {

    const height =
        Number(bmiHeight.value);

    const weight =
        Number(bmiWeight.value);


    /* Validation */

    if (
        bmiHeight.value.trim() === "" ||
        bmiWeight.value.trim() === ""
    ) {
        bmiError.textContent =
            "Please enter both your height and weight.";

        return;
    }


    if (
        !Number.isFinite(height) ||
        !Number.isFinite(weight)
    ) {
        bmiError.textContent =
            "Please enter valid numbers.";

        return;
    }


    if (height <= 0 || weight <= 0) {
        bmiError.textContent =
            "Height and weight must be greater than zero.";

        return;
    }


    if (height < 50 || height > 250) {
        bmiError.textContent =
            "Please enter a realistic height between 50 cm and 250 cm.";

        return;
    }


    if (weight < 10 || weight > 300) {
        bmiError.textContent =
            "Please enter a realistic weight between 10 kg and 300 kg.";

        return;
    }


    /* Clear error */

    bmiError.textContent = "";


    /* Convert cm to meters */

    const heightInMeters =
        height / 100;


    /* BMI formula */

    const bmi =
        weight /
        (heightInMeters * heightInMeters);


    const roundedBmi =
        bmi.toFixed(1);


    let category = "";


    if (bmi < 18.5) {

        category = "Underweight";

    } else if (bmi < 25) {

        category = "Normal";

    } else if (bmi < 30) {

        category = "Overweight";

    } else {

        category = "Obese";

    }


    bmiValue.textContent =
        roundedBmi;

    bmiCategory.textContent =
        category;

});