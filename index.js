function generateResume() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var title = document.getElementById('title').value.trim();
    var description = document.getElementById('description').value.trim();
    var location = document.getElementById('location').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var skills = document.getElementById('skills').value.trim();
    var education = document.getElementById('education').value.trim();
    var experience = document.getElementById('experience').value.trim();
    // Validate required fields
    if (!firstName || !lastName || !title || !description || !location || !phone || !email || !skills || !education || !experience) {
        alert('Please fill out all required fields.');
        return; // Stop execution if validation fails
    }
    var resumeOutput = document.getElementById('resumeOutput');
    // Generate resume HTML
    resumeOutput.innerHTML = "\n        <div class=\"container\">\n            <div class=\"profile\">\n                <h1 class=\"profile_name\">\n                    <span class=\"profile_name_firstName\">".concat(firstName, "</span>\n                    <span class=\"profile_name_lastName\">").concat(lastName, "</span>\n                </h1>\n                <p class=\"profile_title\">").concat(title, "</p>\n                <p class=\"description profile_description\">").concat(description, "</p>\n            </div>\n            <div class=\"contact\">\n                <h3 class=\"title\">Contact</h3>\n                <p class=\"description\">").concat(location, "</p>\n                <p class=\"description\">").concat(phone, "</p>\n                <p class=\"description\">").concat(email, "</p>\n            </div>\n            <div class=\"skills\">\n                <h3 class=\"title\">Skills</h3>\n                <ul class=\"skills_list\">\n                    ").concat(skills.split(', ').map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                </ul>\n            </div>\n            <div class=\"education\">\n                <h3 class=\"title\">Education</h3>\n                ").concat(education.split('\n').map(function (line) { return "<p>".concat(line, "</p>"); }).join(''), "\n            </div>\n            <div class=\"experience\">\n                <h3 class=\"title\">Experience</h3>\n                ").concat(experience.split('\n').map(function (line) { return "<p>".concat(line, "</p>"); }).join(''), "\n            </div>\n        </div>\n    ");
    // Clear the input fields
    var fields = ['firstName', 'lastName', 'title', 'description', 'location', 'phone', 'email', 'skills', 'education', 'experience'];
    fields.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            element.value = '';
        }
    });
}
