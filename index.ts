function generateResume() {
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value.trim();
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value.trim();
    const title = (document.getElementById('title') as HTMLInputElement).value.trim();
    const description = (document.getElementById('description') as HTMLTextAreaElement).value.trim();
    const location = (document.getElementById('location') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLInputElement).value.trim();
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.trim();

    // Validate required fields
    if (!firstName || !lastName || !title || !description || !location || !phone || !email || !skills || !education || !experience) {
        alert('Please fill out all required fields.');
        return; // Stop execution if validation fails
    }

    const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

    // Generate resume HTML
    resumeOutput.innerHTML = `
        <div class="container">
            <div class="profile">
                <h1 class="profile_name">
                    <span class="profile_name_firstName">${firstName}</span>
                    <span class="profile_name_lastName">${lastName}</span>
                </h1>
                <p class="profile_title">${title}</p>
                <p class="description profile_description">${description}</p>
            </div>
            <div class="contact">
                <h3 class="title">Contact</h3>
                <p class="description">${location}</p>
                <p class="description">${phone}</p>
                <p class="description">${email}</p>
            </div>
            <div class="skills">
                <h3 class="title">Skills</h3>
                <ul class="skills_list">
                    ${skills.split(', ').map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
            <div class="education">
                <h3 class="title">Education</h3>
                ${education.split('\n').map(line => `<p>${line}</p>`).join('')}
            </div>
            <div class="experience">
                <h3 class="title">Experience</h3>
                ${experience.split('\n').map(line => `<p>${line}</p>`).join('')}
            </div>
        </div>
    `;

    // Clear the input fields
    const fields = ['firstName', 'lastName', 'title', 'description', 'location', 'phone', 'email', 'skills', 'education', 'experience'];
    fields.forEach(id => {
        const element = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
        if (element) {
            element.value = '';
        }
    });
}
