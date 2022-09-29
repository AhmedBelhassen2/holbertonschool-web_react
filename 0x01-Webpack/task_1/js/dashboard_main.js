const $ = require('jquery');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<p>Copyright - Holberton School</p>');
$('body').append('<button>Click here to get started</buttton>');
$('body').append("<p id='count'></p>");

var count = 0;
const updateCounter = _.debounce(() => {
    count++;
    $("#count").text(`${count} clicks on the button`);
});
$('button').on('click', updateCounter);