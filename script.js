document.addEventListener("DOMContentLoaded", function () {
    // ፎርሙን እና በተኖችን ማግኘት
    const bookingSection = document.getElementById("get-in-touch");
    const allBookingButtons = document.querySelectorAll(".trigger-booking");
    const serviceDropdown = document.getElementById("service-dropdown");
    const selectedServiceText = document.getElementById("selected-service-text");

    // ለእያንዳንዱ "Book Now" ወይም "አሁን ይጀምሩ" በተን ክሊክ ሲደረግ
    allBookingButtons.forEach(button => {
        button.addEventListener("click", function () {
            // 1. መጀመሪያ የተደበቀውን ፎርም እንዲታይ ማድረግ
            bookingSection.classList.add("show-form");

            // 2. የትኛው ሰርቪስ በተን እንደተጫነ ማረጋገጥ እና ድሮፕዳውኑን በራስ-ሰር መምረጥ
            const specificService = this.getAttribute("data-service");
            if (specificService) {
                serviceDropdown.value = specificService;
                selectedServiceText.innerText = specificService;
            }

            // 3. ገጹን በለስላሳ አኒሜሽን ወደ መመዝገቢያ ፎርሙ ማውረድ
            setTimeout(() => {
                bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        });
    });
});
