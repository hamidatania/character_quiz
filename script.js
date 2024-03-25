$(document).ready(function() {
  let quizCounter = 0;

  $("#submitBtn").click(function() {
    const answer1 = $("input[name='activity']:checked").val();
    const answer2 = parseInt($("#answer2").val());
    const answer3 = $("#answer3").val();

    let characterResult;
    let characterMessage;
    let characterImage; 
    
    if (answer1 === "singing") {
      characterResult = "Elsa";
      characterMessage = "You have a voice as powerful as Elsa's magic! Embrace your singing talents and let it go!";
      characterImage = "elsa.png"; 
    } else if (answer1 === "exploring") {
      characterResult = "Simba";
      characterMessage = "Just like Simba, you love to explore and discover new things. Your adventurous spirit is truly inspiring!";
      characterImage = "simba.png";
    } else if (answer1 === "making new friends") {
      characterResult = "Mickey Mouse";
      characterMessage = "You're a social butterfly like Mickey Mouse! Your ability to make new friends is truly magical.";
      characterImage = "mm.png"; 
    } else if (answer1 === "solving mysteries") {
      characterResult = "Belle";
      characterMessage = "Similar to Belle, you have a curious mind and enjoy solving mysteries. Your love for books and knowledge is remarkable!";
      characterImage = "belle.png"; 
    }

    if (isNaN(answer2) || answer2 < 1 || answer2 > 10) {
      $("#error").text("ERROR: Please choose a number within the range of 1 to 10 for question 2.").show();
      $("#result").empty();
    } else {
      $("#error").hide();

      $(".container").css("background-color", "#f8f8f8");
      $("#submitBtn").css("background-color", "#555");

      $("#result").empty();
      $("#result").append(`
        <img src="${characterImage}" alt="${characterResult}" class="character-image"> <!-- Add this line for the image -->
        <p class="result-text">Your Disney character match is ${characterResult}! ${characterMessage}</p>
      `);

      $("#result").append(`<p class="quiz-counter">Quiz taken ${++quizCounter} times.</p>`);

      $("#result p").addClass("show");

      setTimeout(function() {
        $("#submitBtn").css("background-color", "#6f328f");
      }, 2000);
    }
  });
});
