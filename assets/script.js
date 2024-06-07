const jokeBox = document.$('#')

dialog = $("#dialog-form").dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      "Choose a joke type:": addUser,
      Cancel: function() {
        dialog.dialog("close");
      }
    },
    close: function() {
      form[ 0 ].reset();
      allFields.removeClass("ui-state-error");
    }
  });

  form = dialog.find("form").on("submit", function( event ) {
    event.preventDefault();
    addUser();
  });

  $("#create-user").button().on("click", function() {
    dialog.dialog("open");
  });
