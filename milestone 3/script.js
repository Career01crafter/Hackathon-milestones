var form = document.getElementById('form');
var resumeDisplayElement = document.getElementById('displayed-resume');
// Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Input values
    var name = document.getElementById('name').value.trim();
    var contactno = document.getElementById('contact-no').value.trim();
    var email = document.getElementById('email').value.trim();
    var education = document.getElementById('education').value.trim();
    var experience = document.getElementById('experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    // Validate input values
    if (!name || !contactno || !email || !education || !experience || !skills) {
        alert('Please fill in all fields.');
        return;
    }
    // Dynamically generated resume
    var HtmlResume = "\n    <h2>Resume</h2>\n\n    <fieldset>\n    <legend><h3>Personal Information</h3></legend>\n\n    <p><strong>Name: </strong> ".concat(name, "</p>\n    <p><strong>Contact No: </strong> ").concat(contactno, "</p>\n    <p><strong>Email: </strong> ").concat(email, "</p>\n\n    </fieldset>\n\n    <fieldset>\n    <legend><h3>Education</h3></legend>\n\n    <strong>Education: </strong>").concat(education, "\n\n    </fieldset>\n\n    <fieldset>\n    <legend><h3>Experience</h3></legend>\n\n    <p><strong>Experience: </strong>").concat(experience, "</p>\n\n    </fieldset>\n\n    <fieldset>\n    <legend><h3>Skills</h3></legend>\n\n    <p><strong>Skills: </strong>").concat(skills, "</p>\n\n    </fieldset>\n    \n    ");
    // Final display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = HtmlResume;
    }
    else {
        console.error('Error: Resume display element not found!');
    }
});
