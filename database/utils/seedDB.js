/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		imageUrl: "https://www.hunter.cuny.edu/admissions/repository/images/classic-hunter-nyc-cabs.jpg",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		imageUrl: "https://macaulay.cuny.edu/wp-content/uploads/2016/07/qc10_bg_000056-1920x1080.jpg",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		imageUrl: "http://www.brooklyn.cuny.edu/web/com_socialImages/BrooklynCollegeLibrary_1200x628.jpg",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York."
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      lastname: "Smith",
	  email: "joesmith@cuny.hunter.edu",
	  imageUrl: "https://thumbs.dreamstime.com/b/college-boy-holding-books-blurred-students-park-portrait-standing-35784618.jpg",
	  gpa: 2.9
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      lastname: "Johnson",
	  email: "maryjohnson@cuny.queens.edu",
	  imageUrl: "https://media.istockphoto.com/photos/student-going-for-the-lecture-picture-id966521024?k=20&m=966521024&s=612x612&w=0&h=oEEwKKXL5QI44IfzssEekX26BaJORPOgLOf1wfQeo5w=",
	  gpa: 3.9
	});

	const dummy_student3 = await Student.create({
		firstname: "Jim",
      lastname: "Jhen",
	  email: "theJimJhen@cuny.hunter.edu",
	  imageUrl: "https://st.depositphotos.com/1597387/2407/i/950/depositphotos_24077379-stock-photo-young-asian-student.jpg",
	  gpa: 4.0
	});

	const dummy_student4 = await Student.create({
		firstname: "Dnomyar",
      lastname: "Kowk",
	  email: "DnomyarKowk@cuny.queens.edu",
	  imageUrl: "https://previews.123rf.com/images/tunagaga/tunagaga1209/tunagaga120900063/15335267-young-handsome-asian-student-thinking-and-smile-in-outdoor.jpg",
	  gpa: 3.2
	});

	const dummy_student5 = await Student.create({
		firstname: "Gwei",
      lastname: "Lo",
	  email: "gweilo@cuny.queens.edu",
	  imageUrl: "https://news.virginia.edu/sites/default/files/article_image/seas2.jpg",
	  gpa: 1.0
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
	await dummy_student3.setCampus(dummy_campus);
	await dummy_student4.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;