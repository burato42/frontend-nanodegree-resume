
var work = {
	"jobs": [
	{
		"employer": "Sputnik",
		"title": "SDET",
		"location": "Moscow, Russia",
		"dates": "2014 - Current Time",
		"description": "Automation testing of web services"
	},
	{
		"employer": "Sbertech",
		"title": "Tester",
		"location": "Moscow, Russia",
		"dates": "2012 - 2014",
		"description": "Testing of the financial backoffice system"
	}]
};

var projects = {
	"projects": [
	{
		"title": "Cookies",
		"dates": "1970 - Current Time",
		"description": "Give me a cookie",
		"images": ["http://rack.2.mshcdn.com/media/ZgkyMDEzLzEwLzA3L2JmL0Nvb2tpZU1vbnN0LmE4NjZlLmpwZwpwCXRodW1iCTIwMHgxMTUjCmUJanBn/26cc40cf/9eb/CookieMonster.jpg"]
	}
	]
};

var bio = {
	"name": "Timur Makhmutov",
	"role": "SDET",
	"contacts": {
		"email": "burato42@yandex.ru",
		"mobile": "+79251111111",
		"github": "burato42",
		"twitter": "burato42",
		"location": "Moscow, Russia"
	},
	"image": "http://vignette2.wikia.nocookie.net/muppet/images/0/08/CookieMonsterWaving.jpg/revision/latest/scale-to-width/310?cb=20120128192952",
	"welcomeMessage": "I don't give a fuck",
	"skills": ["QA", "Python", "JavaScript"]
};

var education = {
	"schools": [
	{
		"name": "MIET",
		"location": "Moscow",
		"degree": "Specialist",
		"majors": ["microelectronics"],
		"dates": "2004 - 2012",
		"url": "http://www.miet.ru"
	}
	],
	"onlineCourses": [
	{
		"title": "Introduction to Computer Science and Programming",
		"school": "edX",
		"dates": "2012 - 2012",
		"url": "https://www.edx.org/"
	}, 
	{
		"title": "Introduction to Programming. Problem Solving with Java",
		"school": "Udacity",
		"dates": "2012 - 2013",
		"url": "https://www.udacity.com"
	}]
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.image));

if(bio.skills) {
	$("#header").append(HTMLskillsStart);
	//for(var i = 0; i < bio.skills.length; i++) {
	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
	
}


function displayWork(){
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + 
									HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));

	}
}

displayWork();

$("#main").append(internationalizeButton);

function inName(string) {
	var splitted = string.split(" ");
	splitted[0] = splitted[0].slice(0, 1).toUpperCase() + splitted[0].slice(1).toLowerCase();
	splitted[1] = splitted[1].toUpperCase();
	return splitted.join(" ");
}


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();