// Initialize AOS library for animations
AOS.init();

// Populate Core Competencies dynamically
const competencies = [
    "Project & Product Management",
    "Agile & Scrum Methodologies",
    "Incident & Escalation Management",
    "Stakeholder Engagement",
    "Operational Efficiency",
    "Data-Driven Decision Making",
    "Risk Management & Compliance",
    "Continuous Improvement"
];

const competenciesList = document.getElementById("competencies-list");
if (competenciesList) {
    competenciesList.innerHTML = competencies.map(item => `<li>${item}</li>`).join('');
}

// Lightbox functionality for project images
document.querySelectorAll(".lightbox").forEach(image => {
    image.addEventListener("click", event => {
        event.preventDefault();

        // Create lightbox overlay
        const overlay = document.createElement("div");
        overlay.classList.add("lightbox-overlay");

        // Create image container
        const lightboxImage = document.createElement("img");
        lightboxImage.src = image.href;
        lightboxImage.alt = image.title || "Project Image";
        overlay.appendChild(lightboxImage);

        // Close button
        const closeButton = document.createElement("span");
        closeButton.classList.add("lightbox-close");
        closeButton.textContent = "×";
        overlay.appendChild(closeButton);

        document.body.appendChild(overlay);

        // Close lightbox on click or escape key
        closeButton.addEventListener("click", () => overlay.remove());
        overlay.addEventListener("click", e => {
            if (e.target === overlay) overlay.remove();
        });

        document.addEventListener("keydown", e => {
            if (e.key === "Escape") overlay.remove();
        });
    });
});

// Mobile navigation toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Dynamic Testimonials Carousel
const testimonials = [
    {
        text: "Kamlesh's leadership and attention to detail helped our team achieve exceptional results. Highly recommended!",
        name: "John Doe",
        designation: "Senior Manager, XYZ Inc."
    },
    {
        text: "A true professional with a knack for solving complex operational challenges.",
        name: "Jane Smith",
        designation: "VP, Operations, ABC Corp."
    },
    {
        text: "Kamlesh has been instrumental in optimizing our processes and driving success.",
        name: "Michael Johnson",
        designation: "CEO, 123 Solutions"
    }
];

const testimonialContainer = document.querySelector(".testimonials-container");

if (testimonialContainer) {
    testimonialContainer.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial" style="display: ${index === 0 ? 'block' : 'none'};">
            <p class="testimonial-text">${testimonial.text}</p>
            <p class="testimonial-name">${testimonial.name}</p>
            <p class="testimonial-designation">${testimonial.designation}</p>
        </div>
    `).join('');

    const testimonialElements = document.querySelectorAll(".testimonial");
    let currentTestimonial = 0;

    setInterval(() => {
        testimonialElements[currentTestimonial].style.display = "none";
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonialElements[currentTestimonial].style.display = "block";
    }, 5000); // Rotate every 5 seconds
}

// Populate Certifications dynamically
const certifications = [
    {
        title: "Microsoft Copilot for Productivity",
        provider: "Microsoft and LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/dec55930d846d8fffdc427bd495c243ecb9f8cca1a3af07d03fac06d7b72e37a?trk=share_certificate"
    },
    {
        title: "Aha! Product Management Professional Certificate",
        provider: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/0a7163dbdc29d5fac1521f6258e89cbf7d3acba3409b2fab2c87635fd8e9a1c5?trk=share_certificate"
    },
    {
        title: "Atlassian Agile Project Management Professional Certificate",
        provider: "Atlassian and LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/8835adb150b800aa0ef21d1961f5c30bd110f8a130ef870a657e4fb1545a10e7"
    },
    {
        title: "Six Sigma: Green Belt",
        provider: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/0e8e417a4894b10b61877550d78d054f6fa14bbd6c2de7f4150455ad20c8dc63"
    },
    {
        title: "Agile Project Management with Jira Cloud: 1 Projects, Boards, and Issues",
        provider: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/72a6c5ca7d3cadd909d70a568609d4ebfd6fe752ec9f99008b1accbf9ab922d1"
    },
    {
        title: "Agile Project Management with Jira Cloud: 2 Lean and Agile Processes",
        provider: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/dad84eaa1772c5fbc6b9cf2a90f3696ee65aecc691b3b39a6f0f62eeec709cf0"
    },
    {
        title: "Introduction to Artificial Intelligence",
        provider: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/deeb902eed11a9dce32b73eef09dd7b1926c31b2717eb88664695a84c455a8e8"
    },
    {
        title: "Advanced Certified Scrum Product Owner (ACSPO)",
        provider: "LinkedIn",
        link: "https://www.linkedin.com/learning/certificates/eda3398faf21ec49cd99da3a59c114ad545e827e0fd40537fcdeddff61239c70"
    }
];

const certificationsContainer = document.getElementById("certifications-container");
if (certificationsContainer) {
    certificationsContainer.innerHTML = certifications.map(certification => `
        <div class="certification">
            <h4>${certification.title}</h4>
            <p><strong>Provider:</strong> ${certification.provider}</p>
            <a href="${certification.link}" target="_blank" class="certification-link">View Certificate</a>
        </div>
    `).join('');
}
