//Code for the resume to display!
const form = document.getElementById('form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('displayed-resume') as HTMLDivElement
const  shareableLinkContainer= document.getElementById('shareable-link-container') as HTMLDivElement
const  shareableLinkElement= document.getElementById('shareable-link') as HTMLAnchorElement
const  downloadPdfButton= document.getElementById('pdf-download') as HTMLButtonElement

//Form Submission!
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();       //prevention of page reload

    //input values
    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const contactno = (document.getElementById('contact-no') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //Save from data in localstorage with key of username
    const resumeData = {
        name,
        contactno,
        email,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));  //data save locally

    //Dynamically generated resume
    const HtmlResume = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Contactno:</b><span contenteditable="true">${contactno}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>

    <h3>Education</h3>
    <p contenteditable="true"><b>Education:</b>${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true"><b>Experience:</b>${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true"><b>Skills:</b>${skills}</p>
    `;

    //Display the generated resume
    resumeDisplayElement.innerHTML = HtmlResume;

    //Generate a shareable URL with username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    //Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

//Handle PDF Download
downloadPdfButton.addEventListener('click', ()=> {
    window.print();
});

//prefill the form based on the username in url
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if(username) {
        //Autofill form if data is found in localstorage
        const savedResumeData = localStorage.getItem(username);
        if(savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('contact-no') as HTMLInputElement).value = resumeData.contactno;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('education') as HTMLInputElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;
        }
    }
});