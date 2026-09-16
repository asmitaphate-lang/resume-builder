function generateResume() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let objective = document.getElementById("objective").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let projects = document.getElementById("projects").value;

    document.getElementById("rname").innerText = name;

    document.getElementById("rcontact").innerText =
        email + " | " + phone;

    document.getElementById("raddress").innerText =
        address;

    document.getElementById("robjective").innerText =
        objective;

    document.getElementById("reducation").innerText =
        education;

    document.getElementById("rskills").innerText =
        skills;

    document.getElementById("rprojects").innerText =
        projects;
}
