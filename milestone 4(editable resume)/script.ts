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
    <h2>Editable Resume</h2>
    <h3>Personal Information</h3>

    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Contact-No:</b><span contenteditable="true">${contactno}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>

    <h3>Education</h3>
    <p contenteditable="true"><b>Education:</b> ${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true"><b>Experience:</b>${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true"><b>Skills:</b>${skills}</p>
    `;

    //Final display
    if(resumeDisplayElement) {
        resumeDisplayElement.innerHTML = HtmlResume
    } else {
        console.error('Something was incorrect!');
    }
});