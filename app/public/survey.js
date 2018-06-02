console.log("sanity");

$(document).ready(function () {
  $('.dropdown-toggle').dropdown()
  // var score=[];
  var answers = {}
  $("li").on("click", function () {
    for (let i = 1; i < 11; i++) {
      if ($(this).parent().attr("id") === "question" + i) {
        answers["answer" + i] = $(this).val();
      }
    }
    console.log(answers);
  });
  $("form").on("submit", function () {
    var photo = $("#photo").val();
    var name = $("#name").val();
    var data = {
      answers: answers,
      photo: photo,
      name: name
    }
    $.post("/survey", data).then(function (response) {
      console.log(response)
    })
  })
});

// add new friend to data/friends.js
// compare new friends to old friends and who is a match
// cycle thru answer1 to answer1 to other friend, absolute value of the difference, sum total score = match score
// compare all match scores


{/* <script type="text/javascript">

  $(".submit").on("click", function(event) {
    event.preventDefault();

  var newReservation = {
    name: $("#name").val().trim(),
  phoneNumber: $("#reserve-phone").val().trim(),
  customerEmail: $("#reserve-email").val().trim(),
  customerID: $("#reserve-unique-id").val().trim()
};

console.log(newFriend);

$.post("/api/Routes", newFriend,
        function(data) {

          if (data) {
    alert("Yay! You are officially booked!");
  }
          else {
    alert("Sorry you are on the wait list");
  }

  // Clear the form when submitting
  $("#reserve-name").val("");
  $("#reserve-phone").val("");
  $("#reserve-email").val("");
  $("#reserve-unique-id").val("");

});

});

</script> */}
