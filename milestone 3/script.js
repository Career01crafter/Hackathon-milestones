//Code for the resume to display!
var form = document.getElementById('form');
var resumeDisplayElement = document.getElementById('displayed-resume');
//Form Submission!
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevention of page reload
    //input values
    var name = document.getElementById('name').value;
    var contactno = document.getElementById('contact-no').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Dynamically generated resume
    var HtmlResume = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Contactno:</b>").concat(contactno, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //Final display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = HtmlResume;
    }
    else {
        console.error('Something was incorrect!');
    }
});
