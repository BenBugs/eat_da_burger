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
      const eatStatus = $(this).data("is_eaten");

      console.log(id)
      console.log(eatStatus)

      // const newEatState = {
      //   is_eaten: 1
      // };

      // Send the PUT request.
      // $.ajax("/api/cats/" + id, {
      //   type: "PUT",
      //   data: newSleepState
      // }).then(
      //   function () {
      //     console.log("changed sleep to", newSleep);
      //     // Reload the page to get the updated list
      //     location.reload();
      //   }
    });
    });



    //     $(".delete-cat").on("click", function(event) {
    //       var id = $(this).data("id");

    //       // Send the DELETE request.
    //       $.ajax("/api/cats/" + id, {
    //         type: "DELETE"
    //       }).then(
    //         function() {
    //           console.log("deleted cat", id);
    //           // Reload the page to get the updated list
    //           location.reload();
    //         }
    //       );
    //     });
    //   });

  });
