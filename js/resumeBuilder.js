var bio = {
  "name": "Bruno G. Tavares",
  "role": "Full Stack Junior Web Developer",
  "contacts": {
    "mobile": "347-927-1307",
    "github": "bruno78",
    "email": "me@brunogtavares.com",
    "webpage": "http://brunogtavares.com",
    "location": "Brooklyn NY"
  },
  "bioPic": "images/fry.jpg",
  "welcomeMessage": "Full stack junior web developer. Experienced in creating beautiful, interactive, multi-functional and responsive sites with simplistic layouts for the best user experience. Committed to continuous learning and researching solutions to resolve problems.",
  "skills": [
    "Ruby", "Python", "JavaScript", "HTML5", "SASS", "CSS3", "Bootstrap", "R", "MySQL", "SQL"
  ]
}

var work = {
  "jobs":[{
    "title": "Assistant",
    "employer": "Art Bridge Architecture PLLC",
    "dates": "2009-Present",
    "location": "Brooklyn, NY",
    "description": "Produces videos, composes soundtrack, edits and films, drafts and currently working on company's webpage"
  },
  {
    "title": "Brazilian Music History and Portuguese Teacher",
    "employer": "Brazil Station Inc.",
    "dates": "2008-2011",
    "location": "Manhattan, NY",
    "description": "Developed syllabus on Brazilian Music History for the school and taught Portuguese"
  },
  {
    "title": "Freelance Draftsperson",
    "employer": "Freelance",
    "dates": "2006-2008",
    "location": "Manhattan, NY",
    "description": "Draft 2D projects on AutoCAD, "
  }]
};

var education = {
  "schools": [
    {
      "name": "IEC - Pontificia Universidade Católica - MG",
      "location": "Belo Horizonte, MG - Brazil",
      "degree": "Post-Bachelors",
      "majors": "Cinema",
      "date": 2003,
      "url": "http://www.pucminas.br/iec/destaques.php"
    },

    {
      "name": "Pontificia Universidade Católica - MG",
      "location": "Belo Horizonte, MG - Brazil",
      "degree": "Bachelors",
      "majors": "Psychology",
      "date": 2002,
      "url": "http://www.pucminas.br/destaques/destaques.php"
    }
  ],

  "onlineCourses": [
     {
       "title": "Python for Everybody",
       "school" : "University of Michigan - Coursera",
       "dates": 2016,
       "specialization": "https://www.coursera.org/account/accomplishments/specialization/34A6VHCWGN7C",
       "url": "https://www.coursera.org/specializations/python"
     },

     {
       "title": "Rais with Active Record and Action Pack",
       "school" : "John Hopkins University - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/4WJFUPYM7T6N",
       "url": "https://www.coursera.org/learn/rails-with-active-record/"
     },

     {
       "title": "HTML, CSS, and JavaScript for Web Developers",
       "school" : "John Hopkins University - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/HMT8AWHRTT4U",
       "url": "https://www.coursera.org/learn/html-css-javascript-for-web-developers/"
     },

     {
       "title": "Database Management Essentials",
       "school" : "University of Colorado - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/A329L8LNUUCU",
       "url": "https://www.coursera.org/learn/database-management"
     },

     {
       "title": "Getting and Cleaning Data",
       "school" : "John Hopkins University - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/HMT8AWHRTT4U",
       "url": "https://www.coursera.org/learn/data-cleaning"
     },

     {
       "title": "Inferential Statistics",
       "school" : "University of Amsterdam - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/3844HR2T63DZ",
       "url": "https://www.coursera.org/learn/inferential-statistics"
     },

     {
       "title": "Basic Statistics",
       "school" : "University of Amsterdam - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/28G9KY6T7REW",
       "url": "https://www.coursera.org/learn/basic-statistics"
     },

     {
       "title": "The Data Scientist's Toolbox",
       "school" : "John Hopkins University - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/NCTP6QVGW4PN",
       "url": "https://www.coursera.org/learn/data-scientists-tools"
     },

     {
       "title": "R Programming",
       "school" : "John Hopkins University - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/Q8SZKM92GA9K",
       "url": "https://www.coursera.org/learn/r-programming"
     },

     {
       "title": "Ruby on Rails: An Introduction",
       "school" : "John Hopkins University - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/YD3GADQ3J9DF",
       "url": "https://www.coursera.org/learn/ruby-on-rails-intro"
     },

     {
       "title": "An Introduction to Interactive Programming in Python (Part 1)",
       "school" : "Rice University - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/RJMY7YSBTCSG",
       "url": "https://www.coursera.org/learn/interactive-python-1"
     },

     {
       "title": "HTML, CSS and JavaScript",
       "school" : "The Hong Kong University of Science and Technology - Coursera",
       "dates": 2016,
       "certificate": "https://www.coursera.org/account/accomplishments/certificate/C43853F3AQ4V",
       "url": "https://www.coursera.org/learn/html-css-javascript"
     }
   ],
}

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedJob = HTMLheaderRole.replace("%data%", bio.role);
  var formattedNameRole = (formattedName + formattedJob);
  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

  /* to and footer contacts */

  var formattedContactInfo = [];
  formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
  formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
  formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.webpage));
  formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

  $("#header").prepend(formattedNameRole);
  $("#header").append(formattedPic);
  $("#header").append(formattedWelcome);

  /* for loop */

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkill);
    }
  }

  for (var info=0; info<formattedContactInfo.length; info++) {
    $("#topContacts").append(formattedContactInfo[info]);
  }
}

bio.display();

education.display = function() {
  for (edu in education.schools) {
    $('#education').append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
    var formattedNameAndDegree = formattedName + formattedDegree;
    var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);

    $(".education-entry:last").append(formattedNameAndDegree);
    $(".education-entry:last").append(formattedDate);
    $(".education-entry:last").append(formattedLocation);

    if (education.schools[edu].majors.length > 0) {
      for (major in education.school[edu].majors) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]);
        $(".education-entry:last").append(formattedMajor);
      }
    }
  }

  //online classes
  $('#education').append(HTMLonlineClasses)
  for (online in education.onlineCourses) {
    $('#education').append(HTMLschoolStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
    var formattedTitleAndSchool = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedDate);
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
    $(".education-entry:last").append(formattedURL);
  }
}

education.display();
