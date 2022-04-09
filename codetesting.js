/* My initial plan was to make some sort of switch button where you can tab between percentages and total integer
This didn't work, I kept trying to do an if loop (switch loop) that would indicate orange if number integer
or red if not number integer */
<div class="switch"></div> //HTML

const switchButton = document.querySelector(".switch"); //Gen var


let switchValue = "num";

//Loop to get percentage, but first make some sort of switch button
switchButton.addEventListener("click", () => {
  if (switchValue === "num") {
    switchButton.style.backgroundColor = "orange"; //if it is a number
    switchValue = "numbertotalofcovid";
  } else {
    switchValue = "percentageofcovid";
    switchButton.style.backgroundColor = "red"; //if it is a percentage
  }
});

.switch { //CSS stylesheet
    width: 20px;
    border-radius: 999px;
    background-color: grey;
    border: "1px solid black";
    margin-bottom: 20px;
  }