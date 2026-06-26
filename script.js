const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Let's Build Together Modal Logic
console.log('script.js loaded');
document.addEventListener("DOMContentLoaded", function() {
  const letsBuildBtn = document.getElementById("letsBuildBtn");
  const startProjectBtn = document.getElementById("startProjectBtn");
  const letsBuildModal = document.getElementById("letsBuildModal");
  const closeModal = document.getElementById("closeModal");
  const quotationForm = document.getElementById("quotationForm");
  const confirmationMsg = document.getElementById("confirmationMsg");

  function openQuotationModal() {
    letsBuildModal.style.display = "flex";
    confirmationMsg.style.display = "none";
    quotationForm.style.display = "block";
  }

  if (letsBuildModal && closeModal && quotationForm && confirmationMsg) {
    if (letsBuildBtn) {
      letsBuildBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openQuotationModal();
      });
    }
    if (startProjectBtn) {
      startProjectBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openQuotationModal();
      });
    }

    closeModal.addEventListener("click", () => {
      letsBuildModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === letsBuildModal) {
        letsBuildModal.style.display = "none";
      }
    });

    quotationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      quotationForm.style.display = "none";
      confirmationMsg.style.display = "block";
      // Here you will add SMTP/email logic later
    });
  }
});
emailjs.init("WuIofZ-i5J7G6i3oW");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_2xozs6d",
        "template_hq7t6ut",
        this
    ).then(() => {
        alert("Email sent successfully!");
    }).catch((error) => {
        alert("Failed to send email.");
        console.log(error);
    });
});