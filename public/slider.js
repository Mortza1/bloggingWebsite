let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
let profile = document.getElementById("profile-img");
let login = document.getElementById("login-image");
login.addEventListener('click', ()=> {
  window.location.href = "/login";
})
profile.addEventListener('click', ()=> {
  localStorage.removeItem('authToken');
  window.location.reload();
})



function openBlogPage() {
  let token = localStorage.getItem('authToken');
  console.log('the token is', token);
  fetch('/protected/blog', {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${token}`  // Include the user's token if available
      }
  })
  .then(response => {
      if (response.ok) {
          // Blog page can be opened
          console.log('ok this is working')
          window.location.href = 'blog.html'; // Redirect to the blog page
      } else if (response.status === 401) {
          // Unauthorized: Handle as needed (e.g., user not logged in)
          console.log('User is not authenticated');
          // window.location.href = '/login';
          // You can redirect the user to a login page or show a message
      } else {
          // Other errors: Handle accordingly
          console.error('Error:', response.statusText);
      }
  })
  .catch(error => {
      console.error('Fetch error:', error);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  let token = localStorage.getItem('authToken');
  if (token) {
    profile.style.display = "block";
    login.style.display = "none";

  }
});

