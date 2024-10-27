const form = document.getElementById('form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('displayed-resume') as HTMLDivElement;

// Form Submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Input values
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const contactno = (document.getElementById('contact-no') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const education = (document.getElementById('education') as HTMLInputElement).value.trim();
    const experience = (document.getElementById('experience') as HTMLInputElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLInputElement).value.trim();

    // Validate input values
    if (!name || !contactno || !email || !education || !experience || !skills) {
        alert('Please fill in all fields.');
        return;
    }

    // Dynamically generated resume
    const HtmlResume = `
    <h2>Resume</h2>

    <fieldset>
    <legend><h3>Personal Information</h3></legend>

    <p><strong>Name: </strong> ${name}</p>
    <p><strong>Contact No: </strong> ${contactno}</p>
    <p><strong>Email: </strong> ${email}</p>

    </fieldset>

    <fieldset>
    <legend><h3>Education</h3></legend>

    <strong>Education: </strong>${education}

    </fieldset>

    <fieldset>
    <legend><h3>Experience</h3></legend>

    <p><strong>Experience: </strong>${experience}</p>

    </fieldset>

    <fieldset>
    <legend><h3>Skills</h3></legend>

    <p><strong>Skills: </strong>${skills}</p>

    </fieldset>
    
    `;

    // Final display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = HtmlResume;
    } else {
        console.error('Error: Resume display element not found!');
    }
});
