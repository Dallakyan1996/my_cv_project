var $plusEducation = $("#plus_p");
var $plusLanguage = $("#language_add");
var $plusExparience = $("#exparience_plus");
var $plusSkills = $("#skills_plus");
var $plusInterest = $("#interest_plus");
var $educationList = $(".education_item");
var $languageList = $(".language_item");
var $exparienceList = $(".exparience_item");
var $interestList = $(".interest_item");
var $skillsList = $(".skillsItem");
var $educationDiv = document.getElementsByClassName("education_div");
var $languageDiv = document.getElementsByClassName("language_wrapper");
var $exparienceDiv = document.getElementsByClassName("exparience_wrapper");
var $interestDiv = document.getElementsByClassName("interest_content");
var $skillsDiv = document.getElementsByClassName("skills_wrapper");

$plusEducation.on("click", function () {
 $($educationDiv[0]).after('<div class="education_div"><div class="education_item"><div class="remove_wrapper"><p class="remove_education">-</p><input type="text" class="eduaction_date form__field" value="2013-2017"></input> </div><input type="text" class="education_content form__field"value="Master Degree in Computer Science"></input><input type="text" class="university_p form__field" value="University Name"></input></div>')
    // $educationDiv[0].appendChild('div')
    $educationList = $(".education_item");
  removeEducationFn();
});
$plusInterest.on("click", function () {
 $($interestDiv[0]).after('<div class="interest_item"><div><div class="circle_div"></div><input type="text" class="form__field exparience_position" value="Gaming"></input></div></div>')

});
$plusLanguage.on("click", function () {
  $($languageDiv[0]).after('<div class="contacts_item language_item"><div class="language_remove_wrapper"><span class="language_remove">-</span>    <input type="text" class="language_input eduaction_date form__field" value="English"></input></div><input class="language_progress progress_interest" type="range" /></div>')
  $languageList = $(".language_item");
  removeLanguageFn();
});
$plusExparience.on("click", function () {
  $($exparienceDiv[0]).after('<div class="exparience_item"><div class="date_exparience"><span class="exparience_remove">-</span><div><input type="text" class="form__field exparience_input"value="2019-PRESENT"></input><input type="text" class="form__field exparience_input"value="COMPANY-NAME"></input></div></div><div class="exparience_description"><input type="text" class="form__field exparience_position"value="WEB DEVELOPER"></input><textarea>I am an enthusiastic, self-motivated, reliable, responsible and hard working person.</textarea></div></div>')
  $exparienceList = $(".exparience_item");
  removeExparienceFn();
});

$plusSkills.on("click", function () {
  $($skillsDiv[0]).after('<div class="skillsItem interest_div"><div class="remove_wrapper"><span class="skills_remove">-</span><input type="text" class="form__field exparience_position" value="HTML"></input><input class="progress_interest" type="range" /></div></div>')
  $skillsList = $(".skillsItem");
  removeSkillsFn();
});

function removeEducationFn() {
  var $educationList = $(".education_item");

  $educationList.on("click", ".remove_education", function (e) {
    e.delegateTarget.remove();
  });
}
function removeSkillsFn() {
  var $skillsList = $(".skillsItem");
  $skillsList.on("click", ".skills_remove", function (e) {
    e.delegateTarget.remove();
  });
}
function removeExparienceFn() {
  var $exparienceList = $(".exparience_item");
  $exparienceList.on("click", ".exparience_remove", function (e) {
    e.delegateTarget.remove();
  });
}
function removeLanguageFn() {
  var $languageList = $(".language_item");

  $languageList.on("click", ".language_remove", function (e) {
    e.delegateTarget.remove();
  });
}
removeExparienceFn();
removeSkillsFn();
removeLanguageFn();
removeEducationFn();
