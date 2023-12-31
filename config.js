const config = {
    name: "John Doe",
    currentJob: "Software Engineer",
    location: "Milan, Lombardy, Italy",
    about: "I'm a cool surfer duder with a cool attituder",
    pastJobs: [
        "Web Developer at XYZ Company",
        "Intern at ABC Corporation"
    ],
    certifications: [
        "Certified Web Developer",
        "AWS Certified Developer",
        "Scrum Master Certification"
    ],
    skills: [
     "Microsoft Excel",
     "Microsoft Access",
     "Microsoft Bob",
     "Doom"
    ], 
    recommendations: [
        {
            name: "Jane Smith",
            position: "Manager at XYZ Company",
            content: "John is a highly skilled professional and a great team player."
        },
        {
            name: "Michael Johnson",
            position: "Senior Developer at ABC Corporation",
            content: "John's problem-solving skills are exceptional, and he always delivers high-quality work."
        }
    ],
    interests: [
	 "Snowboarding",
	 "Baseball", 
	 "PokemonGO"
    ]
};

// Banner and User Icon Images
window.addEventListener('DOMContentLoaded', () => {
  const bannerImg = document.querySelector('.banner img');
  const userIconImg = document.querySelector('.user-icon img');
  
  // Check if banner.png exists
  fetch('images/banner.png')
    .then(response => {
      if (response.ok) {
        bannerImg.src = 'images/banner.png'; // Set the banner image source
        bannerImg.style.display = 'block';
      } else {
        bannerImg.style.display = 'none'; // Hide the banner image
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // Check if user.png exists
  fetch('images/user.png')
    .then(response => {
      if (response.ok) {
        userIconImg.src = 'images/user.png'; // Set the user icon image source
        userIconImg.style.display = 'block';
      } else {
        userIconImg.style.display = 'none'; // Hide the user icon image
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// Access config data and update the HTML elements accordingly
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("profile").innerHTML = `
        <br></br>
        <h1>${config.name}</h1>
        <h2>${config.currentJob}</h2>
        ${config.location}
    `;

    document.getElementById("about").innerHTML = `
        <h2>About</h2>
        <p>${config.about}</p>
    `;

    document.getElementById("experience").innerHTML = `
        <h2>Experience</h2>
        <ul>
            ${config.pastJobs.map(job => `<li>${job}</li>`).join("")}
        </ul>
    `;

    document.getElementById("certifications").innerHTML = `
        <h2>Licenses & Certifications</h2>
        <ul>
            ${config.certifications.map(certification => `<li>${certification}</li>`).join("")}
        </ul>
    `;


    document.getElementById("skills").innerHTML = `
        <h2>Skills</h2>
        <ul>
            ${config.skills.map(skill => `
               <li>
                   <p>${skill}</p>
               </li>
            `).join("")}
        </ul>
    `;

    document.getElementById("recommendations").innerHTML = `
        <h2>Recommendations</h2>
        <ul>
            ${config.recommendations.map(recommendation => `
                <li>
                    <h3>${recommendation.name}</h3>
                    <p>${recommendation.position}</p>
                    <p>${recommendation.content}</p>
                </li>
            `).join("")}
        </ul>
    `;

    document.getElementById("interests").innerHTML = `
        <h2>Interests</h2>
    	<ul>
    	    ${config.interests.map(interest => `
    	       <li>
    	           <p>${interest}</p>
    	       </li>
    	    `).join("")}
    	</ul>
    `;

});
