// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#burger-input").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/create_burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(function () {
    $(".eat").on("click", function (event) {
      const id = $(this).data("id");
      console.log(id)

      const newEatState = {
        is_eaten: 1
      };

      // Send the PUT request.
      $.ajax("/api/update_burger/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function () {
          console.log("changed burger to", newEatState);
          // Reload the page to get the updated list
          location.reload();
        })
    });
  });


  $(".trash").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/delete_burger/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

