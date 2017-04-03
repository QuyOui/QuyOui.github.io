var year;
var description;
$('.step').hover(
	function(){
		year = parseInt($(this).find(':nth-child(2)').html());
			if (year === 2012){
				description = 'Graduated Souderton Area High School<br>Started Montgomery County Community College<br>Major: Education'
			}
			else if (year === 2013){
				description = 'Transferred to Drexel University<br>Major: Mathematics';
			}
			else if (year === 2014){
				description = 'Transferred back to Montgomery County Community College<br>Major: Business Administration';
			}
			else if (year === 2015){
				description = 'Finished Associate of Science in Business Administration<br>Graduated Magna Cum Laude<br>Transferred to Temple University<br>Major: Management Information Systems';
			}
			else if (year === 2016){
				description = 'Worked at Ridge-Spur Media as Jr. Front-End Web Developer<br>Worked at Temple University as Teaching Assistant<br>Worked at Temple University as Web Administrator & Program Support';
			}
			else if (year === 2017){
				description = 'Finished Bachelor of Business Administration in Management Information Systems<br>Graduated Magna Cum Laude<br>Working at Unisys as Cloud & Infrastructure Consultant';

			}
			else{
				description = '<p>Hover to find out more!</p>';
			}
		$('.step-description').html('<p>'+description+'</p>')
	},
	function(){
		$('.step-description').html('<p>Hover to find out more!</p>')
	});

if ($(window).width() < 678){
	$('.step-description').html('<p>Please use a larger screen to view my Education Timeline!</p>');
}
else {
	$('.step-description').html('<p>Hover to find out more!</p>');
}