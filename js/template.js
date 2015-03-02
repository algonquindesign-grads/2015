var template = Handlebars.compile($('#template').html());
var rendered = template(people);
$('.student').html(rendered);

$('.student').append('<img class="teachers" src="http://grads.images.algonquindesign.ca/2015/homepage/teachers.jpg">');
