




function updatePrice(){
  let currentdate = new Date();
  $.ajax({
    type:"GET",
    url:"https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
    success: function(data) {
      //var priceData = JSON.stringify(data)
        $('.text').append('<p>' + data.symbol + " $" + data.price +" as of " + currentdate + '</p>');
      },
    dataType: 'json',
  });
}
