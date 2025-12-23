const text = document.getElementById( "text" );

const roles = [
	"Frontend Developer",
	"Java Programmer",
	"C/C++ Programmer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect ()
{
	if ( !isDeleting && charIndex < roles[ index ].length )
	{
		currentText += roles[ index ].charAt( charIndex );
		charIndex++;
	}
	else if ( isDeleting && charIndex > 0 )
	{
		currentText = currentText.slice( 0, -1 );
		charIndex--;
	}
	else
	{
		isDeleting = !isDeleting;
		if ( !isDeleting ) index = ( index + 1 ) % roles.length;
	}

	text.textContent = currentText;
	setTimeout( typeEffect, isDeleting ? 60 : 120 );
}

typeEffect();
