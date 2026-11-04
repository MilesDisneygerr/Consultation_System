// Download PDF for each appointment
document.querySelectorAll(".downloadBtn").forEach(button => {

    button.addEventListener("click", function() {

        // Get the appointment card
        const card = this.closest(".card");

        // Get information from the selected card
        const professor = card.querySelector(".professorname").textContent;
        const name = card.querySelector(".name").textContent;
        const course = card.querySelector(".course").textContent;
        const date = card.querySelector(".date").textContent;
        const time = card.querySelector(".time").textContent;
        const school = card.querySelector(".school").textContent;
        const topic = card.querySelector(".topic").textContent;

        // Create PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // PDF Content
        doc.setFontSize(18);
        doc.text("Appointment Details", 20, 20);

        doc.setFontSize(12);
        doc.text("Professor Name: " + professor, 20, 40);
        doc.text("Student Name: " + name, 20, 45);
        doc.text("Course: " + course, 20, 50);
        doc.text("Date: " + date, 20, 55);
        doc.text("Time: " + time, 20, 60);
        doc.text("School: " + school, 20, 65);
        doc.text("Consultation Topic: " + topic, 20, 70);

        // Download PDF
        doc.save("Past Appointment_" + professor + "_" + date + ".pdf");

    });

});


// Function to toggle  slide-out sidebar menu on mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    if (sidebar) {
        sidebar.classList.toggle('open');
    }

    if (overlay) {
        overlay.classList.toggle('active');
    }
}
