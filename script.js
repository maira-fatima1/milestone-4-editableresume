var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //Profile Picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n    <h2>Your Resume </h2>\n      <div>\n        <img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\" />\n    </div>\n    <p><strong>Name:</strong><span id=\"edit-name\" class=\"editable\"> ").concat(name_1, "</span></p>\n    <p><strong>email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span></p>\n    <p><strong>phone:</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditTable();
        }
    }
    else {
        console.log("one or more form elements are missing or empty");
    }
});
function makeEditTable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // Replace:
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var Input_1 = document.createElement("Input");
                Input_1.type = 'text';
                Input_1.value = currentValue;
                Input_1.classList.add("editing Input");
                Input_1.addEventListener('blur', function () {
                    currentElement.textContent = Input_1.value;
                    currentElement.style.display = 'inline';
                    Input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(Input_1, currentElement);
                Input_1.focus();
            }
        });
    });
}
