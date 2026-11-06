const review = document.querySelectorAll(".review");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentReview = 0;

nextBtn.addEventListener("click", function () {
    review[currentReview].classList.remove("active");

    currentReview++;

    if (currentReview >= review.length) {
        currentReview = 0;
    }

    review[currentReview].classList.add("active");
});

prevBtn.addEventListener("click", function () {
    review[currentReview].classList.remove("active");

    currentReview--;

    if (currentReview < 0) {
        currentReview = review.length - 1;
    }

    review[currentReview].classList.add("active");
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (fullName === "") {
        formMessage.textContent = "please enter your fullname";
        return;
    }
    if (email === "") {
        formMessage.textContent = "please enter your email";
        return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }
    
    if (subject === "") {
        formMessage.textContent = "please enter your project";
        return;
    }
    
    if (message === "") {
        formMessage.textContent = "please enter your message";
        return;
    }
    
    console.log("full name:", fullName);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("message:", message);
    
    formMessage.textContent = "Your message has been validated successfully";
    formMessage.style.color = "green";
    formMessage.style.display = "block";
    formMessage.style.fontSize = "16px";
    
    contactForm.reset();
        
});

const serviceLinks = document.getElementById("serviceLinks");
serviceLinks.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("services").scrollIntoView ( {
        behavior: "smooth"
    });
});

const projectLinks = document.getElementById("projectLinks");
projectLinks.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("projects").scrollIntoView ({
        behavior: "smooth"
    });
});

const reviewLinks = document.getElementById("reviewLinks");
reviewLinks.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("reviews").scrollIntoView ({
        behavior: "smooth"
    });
});

const aboutLinks = document.getElementById("aboutLinks");
aboutLinks.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("about").scrollIntoView ({
        behavior: "smooth"
    });
});

const blogLinks = document.getElementById("blogLinks");
blogLinks.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("blog").scrollIntoView ({
        behavior: "smooth"
        
    });
});

const contactLinks = document.getElementById("contactLinks");
contactLinks.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("contact").scrollIntoView ({
        behavior: "smooth"
    });
});

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
document.body.classList.toggle("dark-mode");


if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "☀️";
} else {
    themeButton.textContent = "🌙";
}
});

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
navLinks.classList.toggle("show");

if (navLinks.classList.contains("show")) {
    menuButton.textContent = "✕";
} else {
    menuButton.textContent = "☰";
}

});

const filterButtons = document.querySelectorAll(".filter-button");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

    
        const selectedFilter = button.dataset.filter;

    
        projectCards.forEach(function (card) {

            const cardCategory = card.dataset.category;

            if (selectedFilter === "all" || selectedFilter === cardCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        filterButtons.forEach(function (filterButton) {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

    });

});

const projectSearch = document.getElementById("projectSearch");
const noResults = document.getElementById("noResults");

const projectCards1 = document.querySelectorAll(".project-card");

projectSearch.addEventListener("input", function() {

    const searchText = projectSearch.value.toLowerCase();
    let matchingProjects = 0;

    projectCards1.forEach(function(card) {

        const projectName = card.querySelector("h3").textContent.toLowerCase();

        if (projectName.includes(searchText)) {
            card.style.display = "";
            matchingProjects++;
        } else {
            card.style.display = "none";
        }
        if (matchingProjects === 0) {
        noResults.style.display = "block";
        } else {
        noResults.style.display = "none";
        }

    });

});

const detailsButtons = document.querySelectorAll(".detailsBtn");

detailsButtons.forEach(function(button) {
button.addEventListener("click", function() {
const projectDetails = button.nextElementSibling;

    if (projectDetails.style.display === "none") {
        projectDetails.style.display = "block";
        button.textContent = "Hide Details";
    } else {
        projectDetails.style.display = "none";
        button.textContent = "View Details";
    }
});

});
