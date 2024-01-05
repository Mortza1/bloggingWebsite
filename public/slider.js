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

let login = document.getElementById("login-image");
login.addEventListener('click', ()=> {
  window.location.href = "/login";
})

function openBlogPage() {
  fetch('/blog', {
      method: 'GET',
      headers: {
          'Authorization': `{localStorage.getItem('authToken')` // Include the user's token if available
      }
  })
  .then(response => {
      if (response.ok) {
          // Blog page can be opened
          window.location.href = '/blog'; // Redirect to the blog page
      } else if (response.status === 401) {
          // Unauthorized: Handle as needed (e.g., user not logged in)
          console.log('User is not authenticated');
          window.location.href = '/login';
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

