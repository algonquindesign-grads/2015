var template = Handlebars.compile($('#template').html());
var rendered = template(people);
$('.student').html(rendered);
