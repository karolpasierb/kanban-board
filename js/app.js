var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '1912',
  'X-Auth-Token': '7f70086ba4b6c3056ec6ffed74d0ec80'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});


function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
        function setupCards(col, cards) {
			cards.forEach(function (card) {
        		var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    			col.createCard(card);
  			})
		}
    });
}

