// Download PDF for each appointment
document.querySelectorAll(".downloadBtn").forEach(button => {

    button.addEventListener("click", function () {

        // Get the appointment card
        const card = this.closest(".card");

        // Get information from the selected card
        const professor = card.querySelector(".professorname").textContent;
        const name = card.querySelector(".name").textContent;
        const date = card.querySelector(".date").textContent;
        const time = card.querySelector(".time").textContent;
        const topic = card.querySelector(".topic").textContent;

        // Create PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();



        // Set Times New Roman font
        doc.setFont("times", "normal");

        // Header
        doc.setFont("times", "bold");
        doc.setFontSize(20);

        doc.text("COLLEGE OF COMPUTER STUDIES", 105, 20, {
            align: "center"
        });

        doc.setFont("times", "normal");
        doc.setFontSize(10);

        doc.text("STUDENT-FACULTY CONSULTATION SCHEDULING SYSTEM", 105, 28, {
            align: "center"
        });

        // Divider
        doc.line(20, 35, 190, 35);

        // Student Information
        doc.setFont("times", "bold");
        doc.setFontSize(13);

        doc.text("CONSULTATION INFORMATION", 10, 50);

        doc.setFont("times", "normal");
        doc.setFontSize(12);


        doc.text("Student Name: " + name, 25, 60);
        doc.text("Professor Name: " + professor, 25, 70);
        doc.text("Date: " + date, 25, 80);
        doc.text("Time: " + time, 25, 90);
        doc.text("Topic: " + topic, 25, 100);

        // Footer
        doc.line(20, 265, 190, 265);

        doc.setFontSize(10);

        doc.text(
            "Consultation University",
            105, 273,
            { align: "center" }
        );


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
