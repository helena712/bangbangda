
$(function(){
    var members = [
        {name: 'AAA', rate: '40'},
        {name: 'BBB', rate: '60'},
        {name: 'CCC', rate: '30'},
        {name: 'DDD', rate: '56'},
        {name: 'EEE', rate: '76'},
        {name: 'FFF', rate: '88'}
    ];

    var results = [];
    members.forEach(function(person){
        if (person.rate >= 50 && person.rate < 80) {
            results.push(person);
        }
    });


    var $tableBody = $('<tbody></tbody>');
    for (var i = 0; i < results.length; i++) {
        var person = results[i];
        var $row = $('<tr></tr>');
        $row.append($('<td></td>').text(person.name));
        $row.append($('<td></td>').text(person.rate));
        $tableBody.append($row);
    }
    $('thead').after($tableBody);
});
