// Smooth scroll and basic interactivity
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// For gallery upload simulation
function uploadImage() {
    const fileInput = document.getElementById('imageUpload');
    const gallery = document.getElementById('galleryGrid');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100%';
            const div = document.createElement('div');
            div.className = 'gallery-item';
            div.appendChild(img);
            gallery.appendChild(div);
        };
        reader.readAsDataURL(file);
    }
}

// For login 
const correctUser = "admin";
const correctPassHash = "cGFzc3dvcmQ="; // base64 of "password"

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Convert entered password to base64
    let enteredPassHash = btoa(pass);

    if (user === correctUser && enteredPassHash === correctPassHash) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
}
