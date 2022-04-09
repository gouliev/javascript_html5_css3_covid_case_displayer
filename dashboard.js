const url =
  /* Deconstructing, i.e. we are pulling the url file   
  const url = url[base = the json query])
  This returns a newly created url representing the parameter inside  */
  "https://services-eu1.arcgis.com/z6bHNio59iTqqSUY/arcgis/rest/services/COVID19_Weekly_Vaccination_Figures/FeatureServer/0/query?where=1%3D1&outFields=Week,TotalweeklyVaccines,Moderna,Pfizer,Janssen,AstraZeneca,Fully_Age10to19,Fully_Age20to29,Fully_Age30to39,Fully_Age40to49,Fully_Age50to59,Fully_Age60to69,Fully_Age70to79,Fully_Age80_,FullyCum_Age10to19,FullyCum_Age20to29,FullyCum_Age30to39,FullyCum_Age40to49,FullyCum_Age50to59,FullyCum_Age60to69,FullyCum_Age70to79,FullyCum_80_,FullyPer_Age10to19,FullyPer_Age20to29,FullyPer_Age30to39,FullyPer_Age40to49,FullyPer_Age50to59,FullyPer_Age60to69,FullyPer_Age70to79,FullyPer_80_&outSR=4326&f=json";

let vaccinationData = [];
/*  The [] creates an empty array
https://www.w3schools.com/js/js_es6.asp */

const TotalDividerRightSide = document.querySelector(".the_total_right_side");
const DropDownBoxForTotal = document.querySelector(
  ".drop-down_box_total_right_side"
);
const TheTotalWeeklyNumbers = document.querySelector(".total-weekly-numbers");
const TheAgeGroups = document.querySelector(".the_age_groups");
const DropDownForCounties = document.querySelectorAll(".county-drop-down");
const CountyDivsForDropBoxes = document.querySelectorAll(".county-data");

/* This DOM (document object model) method returns the first e (element) within the document
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector  */

DropDownBoxForTotal.addEventListener("change", (covid_result) => {
  console.log(covid_result.target.value);
  /* The change event is fired for <input>, <select>, and <textarea> 
  elements when an alteration to the element's value is committed by the user 
  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event */
  //fıind returns fırst one that matches
  const NewCovidData = vaccinationData.find(
    (item) => item.attributes.Week === covid_result.target.value
  ); // The element 'covid_result' is the parameter, it can be changed to anything, i, j, k, e

  const {
    FullyCum_80_,
    FullyCum_Age20to29,
    FullyCum_Age30to39,
    FullyCum_Age40to49,
    FullyCum_Age50to59,
    FullyCum_Age60to69,
    FullyCum_Age70to79,
    TotalweeklyVaccines,
    Pfizer,
    Moderna,
    Janssen,
    AstraZeneca,
  } = NewCovidData.attributes;
  /* I am creating 'NewCovidData' to show the attributes from the properties */
  console.log(NewCovidData);
  TheAgeGroups.innerHTML = `<p>Age 80+ : ${FullyCum_80_} </p>
  <p>Age 70 to 79 : ${FullyCum_Age70to79} </p>
  <p>Age 60 to 69 : ${FullyCum_Age60to69} </p>
  <p>Age 50 to 59 : ${FullyCum_Age50to59} </p>
  <p>Age 40 to 49 : ${FullyCum_Age40to49} </p>
  <p>Age 30 to 39 : ${FullyCum_Age30to39} </p>
  <p>Age 20 to 29 : ${FullyCum_Age20to29} </p>
  <p>Age 10 to 19 : ${FullyCum_Age20to29} </p>
  `;
  TheTotalWeeklyNumbers.innerHTML = `<p> The total numbers for the week are :  ${TotalweeklyVaccines}</p> <p>Pfizer is: ${Pfizer}</p> <p>Moderna is ${Moderna}</p><p>AstraZeneca is ${AstraZeneca}</p><p>Janssen is ${Janssen}</p>`;
}); /* The backticks, (`) are formatted string literals, similar to f strings in python 
https://cito.github.io/blog/f-strings/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals */

fetch(url) /* This is a 'promise', and in python this is asyncio
Fetch is essentially a request, it returns a promise and the code is read.
This is asynchronous, it runs line by line. It runs in the last part of the code. Last in the call stack or near the last
https://www.youtube.com/watch?v=drK6mdA9d_M 
https://developer.mozilla.org/en-US/docs/Web.right_side/JavaScript/Reference/Global_Objects/Promise */
  .then((grab_result) => grab_result.json()) // This method is to get the parsable data to JS from JSON
  .then((data_result) => {
    // JSON convert to the object JSON string
    // The method taught in class was var obj = JSON.parse(text)
    // We can then get the JS object by object name by using document.getElementbyID*id

    vaccinationData = data_result.features.slice(
      1,
      data_result.features.length
    );
    console.log("DATA", vaccinationData);
    const lastWeekData = vaccinationData[vaccinationData.length - 1].attributes;
    /*   Simply slicing the data to show us from len of array to the final index (i.e., all the data attributes -1)   */
    const {
      FullyCum_80_,
      FullyCum_Age10to19,
      FullyCum_Age20to29,
      FullyCum_Age30to39,
      FullyCum_Age40to49,
      FullyCum_Age50to59,
      FullyCum_Age60to69,
      FullyCum_Age70to79,
      FullyPer_Age10to19,
      TotalweeklyVaccines,
      Pfizer,
      Moderna,
      Janssen,
      AstraZeneca,
    } = lastWeekData; /*  Getting total and labelling it lastWeekData  */

    const totalVaccineNumbers =
      FullyCum_80_ +
      FullyCum_Age10to19 +
      FullyCum_Age20to29 +
      FullyCum_Age30to39 +
      FullyCum_Age40to49 +
      FullyCum_Age50to59 +
      FullyCum_Age60to69 +
      FullyCum_Age70to79; /*  Creating a sum and equalling it to TotalVaccineNumbers   */

    TheAgeGroups.innerHTML = `<p>Age 80+ : ${FullyCum_80_} </p>
    <p>Age 70 to 79 : ${FullyCum_Age70to79} </p>
    <p>Age 60 to 69 : ${FullyCum_Age60to69} </p>
    <p>Age 50 to 59 : ${FullyCum_Age50to59} </p>
    <p>Age 40 to 49 : ${FullyCum_Age40to49} </p>
    <p>Age 30 to 39 : ${FullyCum_Age30to39} </p>
    <p>Age 20 to 29 : ${FullyCum_Age20to29} </p>
    <p>Age 10 to 19 : ${FullyPer_Age10to19} </p>
    `;
    TotalDividerRightSide.innerHTML = `<p> The total vaccination numbers for Covid-19 in Ireland:  ${totalVaccineNumbers}</p>`; /*  Total vaccine numbers  */
    console.log(lastWeekData); /* Displaying total vaccine numbers   */
    TheTotalWeeklyNumbers.innerHTML = `<p> The total numbers for the week are :  ${TotalweeklyVaccines}</p> <p>Pfizer is: ${Pfizer}</p> <p>Moderna is ${Moderna}</p><p>AstraZeneca is ${AstraZeneca}</p><p>Janssen is ${Janssen}</p>`; /* Displaying each of the vaccine provider total numbers. */
    let weekValues = []; /* Empty array   */

    for (let i = 0; i < vaccinationData.length; i++) {
      /* Initializing a counter, similar commands, could be done in Python by int = int + 1 or int += int, in this case i++  */
      weekValues.push(vaccinationData[i].attributes.Week);
      /*  The push() method adds new items to the end of an array. push() 
      changes the length of the array and returns the new length.
      https://www.w3schools.com/jsref/jsref_push.asp#:~:text=The%20push()%20method%20adds,an%20array%2C%20use%20unshift()%20. 
      */
    }

    weekValues.forEach((value, index) => {
      /*  https://www.w3schools.com/jsref/jsref_foreach.asp
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
      This is similar to a for loop iteration in Python, we could also use the for-in loop in JS  */
      DropDownBoxForTotal.insertAdjacentHTML(
        /*  
        https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp 
        https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
        The insertAdjacentHTML() method of the Element interface parses the specified text as HTML
        This essentially is initiating the drop down, we also set it so it commands from last week first, e.g. Week 43 instead of starting from Week 1
        This is standard on any website, you get the current week...
        */
        "afterbegin",
        `<option value=${value}> <p> SELECT a week: Week </p> ${
          index + 1 /* Giving user the option to select a week, afterbegin  */
        } </option>`
      );
    });

    DropDownBoxForTotal.value =
      lastWeekData.Week; /* Set from last week, i.e. backwards, Week: 42..41..40 etc   */
  });

const county_url =
  /* Create a var for the second API, county data  */
  "https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Covid19CountyStatisticsHPSCIrelandOpenData/FeatureServer/0/query?where=1%3D1&outFields=CountyName,PopulationCensus16,ConfirmedCovidCases,PopulationProportionCovidCases&outSR=4326&f=json";

let CountyCovidData = []; /* An empty array gen  */
fetch(county_url) //Getting the array
  .then((county_data_result) => county_data_result.json()) //This method is to get the parsable data to JS from JSON
  .then((data) => {
    console.log("County Data", data.features);
    CountyCovidData = data.features;
    DropDownForCounties.forEach((DropDownBox) => {
      data.features.forEach((CountyCovidData) => {
        DropDownBox.insertAdjacentHTML(
          "afterbegin",
          `<option value=${CountyCovidData.attributes.CountyName}> ${CountyCovidData.attributes.CountyName} </option>` /* Grabbing the attribute for County Name  */
        );
      });
    });
  });

DropDownForCounties.forEach((CountyDropBox, index) => {
  CountyDropBox.addEventListener("change", (e) => {
    const CountyNewCovidData = CountyCovidData.find(
      (data) => data.attributes.CountyName === e.target.value
    ); /* e is the parameter here, and similarly to left side of website we are just returning the data for county name  */
    CountyDivsForDropBoxes[
      index
    ].innerHTML = `<p>Data for County: ${CountyNewCovidData.attributes.CountyName}</p>`; /* Grabbing the attribute for County Name, this will let it populate automatically in our drop down box   */
  });
});
/* Similar method for both dropdown options above and below. Using forEach statement and then an addEventListener, see above for reference on how I implemented this  */
DropDownForCounties.forEach((CountyDropBox, index) => {
  CountyDropBox.addEventListener("change", (e) => {
    const ConfirmedCasesCovidData = CountyCovidData.find(
      (data) => data.attributes.CountyName === e.target.value
    ); /* Similarly to above but returning the confirmed cases, as can be seen by the named variable */
    CountyDivsForDropBoxes[
      index
    ].innerHTML = `<p>Number of Cases in selected county: ${ConfirmedCasesCovidData.attributes.ConfirmedCovidCases}</p>`; /* Grabbing the attribute for Covid Cases per County, this will let it show when our user selects a county in our drop down box   */
  });
});
//Confirmed covid cases is the same number as the covid per 100k, and so I did not include it, I left one
