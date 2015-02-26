var template = Handlebars.compile($('#template').html());
var rendered = template(people);
$('.student').html(rendered);

$('.student').append('<img class="teachers" src="http://placehold.it/1400x400&text=Teachers">');
