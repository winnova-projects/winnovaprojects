function toggleText(event) {
    // Empêche le comportement par défaut du lien
    event.preventDefault();
    
    // Sélection des éléments
    const moreText = document.getElementById("moreText");
    const readMoreBtn = document.getElementById("readMoreBtn");

    // Toggle l'affichage du texte
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        readMoreBtn.textContent = "Read less";
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read more";
    }
}
function toggleText(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const moreText = event.target.previousElementSibling; // Get the more text paragraph
    if (moreText.style.display === "none") {
        moreText.style.display = "block"; // Show the additional text
        event.target.textContent = "Read Less"; // Change link text to "Read Less"
    } else {
        moreText.style.display = "none"; // Hide the additional text
        event.target.textContent = "Read More"; // Change link text back to "Read More"
    }
}
function scrollTestimonials(direction) {
    const testimonialsBox = document.querySelector('.testimonials-box');
    const scrollAmount = 320; // Ajustez cette valeur pour modifier la distance de défilement

    if (direction === 'left') {
        testimonialsBox.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        testimonialsBox.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
});

document.querySelector(".contact input[type='button']").addEventListener("click", function() {
    const emailInput = document.querySelector(".contact input[type='text']");
    if (emailInput.value) {
        alert("Thank you for subscribing!");
        emailInput.value = ""; // Réinitialiser le champ
    } else {
        alert("Please enter a valid email address.");
    }
});
document.querySelectorAll(".projects-card img").forEach(img => {
    img.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseout", function() {
        this.style.transform = "scale(1)";
    });
});



const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); /* Affiche/masque le menu déroulant */
    });


    document.getElementById('subscribeBtn').addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default action (refresh or navigate)
        
        var email = document.getElementById('email').value.trim();  // Get the email input value
        
        // Validate the email
        if (email === "") {
            alert("Please enter a valid email address.");
            return;
        }

        // Simple email validation (basic check)
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Show success message
        alert("Thank you for subscribing!");

        // Optional: Here you can send the email to a server (via an AJAX request, for example)
        // Example using fetch (Note: Server-side script should handle this request):
        /*
        fetch('/submit-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Error:', error));
        */

        // Clear the input field after subscription
        document.getElementById('email').value = "";
    });



    // Fonction pour afficher ou masquer les détails du processus
function toggleProcessDetails(event) {
    const step = event.target.closest('.step');
    const details = step.querySelector('.step-details');

    // Basculer la visibilité des détails
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Ajouter un écouteur d'événements pour chaque étape
document.querySelectorAll('.step').forEach(function(step) {
    step.addEventListener('click', toggleProcessDetails);
});
//traduction //

