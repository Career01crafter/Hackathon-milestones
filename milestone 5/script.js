//Code for the resume to display!
var form = document.getElementById('form');
var resumeDisplayElement = document.getElementById('displayed-resume');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('pdf-download');
//Form Submission!
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevention of page reload
    //input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var contactno = document.getElementById('contact-no').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Save from data in localstorage with key of username
    var resumeData = {
        name: name,
        contactno: contactno,
        email: email,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); //data save locally
    //Dynamically generated resume
    var HtmlResume = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Contactno:</b><span contenteditable=\"true\">").concat(contactno, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\"><b>Education:</b>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\"><b>Experience:</b>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\"><b>Skills:</b>").concat(skills, "</p>\n    ");
    //Display the generated resume
    resumeDisplayElement.innerHTML = HtmlResume;
    //Generate a shareable URL with username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
//Handle PDF Download
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
//prefill the form based on the username in url
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        //Autofill form if data is found in localstorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('contact-no').value = resumeData.contactno;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
