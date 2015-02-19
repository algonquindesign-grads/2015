var template = $('#template').html();
Mustache.parse(template);
var rendered = Mustache.render(template, people);
$('.student').html(rendered);
