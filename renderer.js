
  $('.leftmenutrigger').on('click', function (e) {
    $('.side-nav').toggleClass("open");
    $('#wrapper').toggleClass("open");
    e.preventDefault();
  });



  $.viewTrades = {
    '0' : $([]),
    'Plumbing' : $('#showmeplumbing'),
    'Heating' : $('#showmeheating'),
    'view3' : $('#view3')
  };

  $('#trades').change(function() {
    // hide all
    $.each($.viewTrades, function() { this.hide(); });
    // show current
    $.viewTrades[$(this).val()].show();
  });



// Plumbing Problem text box input
var placeholderPlumbing = {
    "Blockage": "What is blocked?",
    "Burst Pipe": "Where is the burst pipe?"
};

$("#showmeplumbing").on("change", function () {

    if (this.value != -1) {
        $("#plumbingInput").val(placeholderPlumbing[$("#showmeplumbing option:selected").text()]);
    } else {
        $("#plumbingInput").val("");
    }

});
// Plumbing Problem text box input end

// Heating Problem text box input
var placeholderHeating = {
    "Gas Leak": "Where is the Gas Leak?",
    "Gas Certificate": "How many are required?"
};

$("#showmeheating").on("change", function () {

    if (this.value != -1) {
        $("#heatingInput").val(placeholderHeating[$("#showmeheating option:selected").text()]);
    } else {
        $("#heatingInput").val("");
    }

});
// Heating Problem text box input end



