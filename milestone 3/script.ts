//Code for the resume to display!
const form = document.getElementById('form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('displayed-resume') as HTMLDivElement

//Form Submission!
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();       //prevention of page reload

    //input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const contactno = (document.getElementById('contact-no') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //Dynamically generated resume
    const HtmlResume = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Contactno:</b>${contactno}</p>
    <p><b>Email:</b>${email}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    //Final display
    if(resumeDisplayElement) {
        resumeDisplayElement.innerHTML = HtmlResume
    } else {
        console.error('Something was incorrect!');
    }
});