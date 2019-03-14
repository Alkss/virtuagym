var exerciseDay = 1;

var numberOfExercisesOnMonday = 0;
var numberOfExercisesOnTuesday = 0;
var numberOfExercisesOnWednesday = 0;
var numberOfExercisesOnThursday = 0;
var numberOfExercisesOnFriday = 0;
var numberOfExercisesOnSaturday = 0;
var numberOfExercisesOnSunday = 0;

$(document).ready(function () {
    refresh();
    checkAddDayBtn();

    //Add a new exercise to an existing day
    $(document).on('click', '.addExerciseBtn', function () {
        var entryDay = $(this).attr('data-exercise_day');
        addExerciseToDay(entryDay);
    });

    //Add a new day of exercise to an existing planing day
    $('.addNewDayOfExercise').click(function () {
        addDayOfExercise();
        checkAddDayBtn();
    });

    //Remove the selected exercise from an existing day
    $(document).on('click', '.removeBtn', function () {
        if (confirm('Are you sure?')) {
            var entryExercise = $(this).attr('data-current_exercise');
            var entryDay = $(this).attr('data-exercise_day');
            $("#exerciseNumber_" + entryExercise + "_dayNumber_" + entryDay).remove();
            updateExercisePerDay(entryDay, "minus");
        }
    });

    //Remove the selected day of exercise from an existing planing day
    $(document).on('click', '.removeDayBtn', function () {
        if (confirm('Are you sure?')) {
            var entryDay = $(this).attr('data-exercise_day');
            $("#dayOfExercise_" + entryDay).remove();
            exerciseDay--;
            checkAddDayBtn();
        }
    });
});

function refresh() {
    var workout;
    $.ajax({
            type: 'POST',
            url: '/control/get-exercises.php',
            data: workout,
            success: function (returnedData) {
                $('.exercises').html(returnedData);
            }
        }
    );
}

function addDayOfExercise() {
    exerciseDay++;
    var nameOfTheDay;

    switch (exerciseDay) {
        case 1:
            nameOfTheDay = "Monday";
            break;
        case 2:
            nameOfTheDay = "Tuesday";
            break;
        case 3:
            nameOfTheDay = "Wednesday";
            break;
        case 4:
            nameOfTheDay = "Thursday";
            break;
        case 5:
            nameOfTheDay = "Friday";
            break;
        case 6:
            nameOfTheDay = "Saturday";
            break;
        case 7:
            nameOfTheDay = "Sunday";
            break;
        default:
            nameOfTheDay = "Not found";
            break;
    }

    $('.dayOfExercise').append(
        '<div class="col-lg-12" id="dayOfExercise_' + exerciseDay + '">\n' +
        '    <section class="panel">\n' +
        '        <header class="panel-heading text-center">\n' +
        '            ' + nameOfTheDay + '\n' +
        '<button type="button" data-exercise_day="' + exerciseDay + '" class="btn btn-danger                                                removeDayBtn">Remove\n' +
        '                         </button>\n' +
        '        </header>\n' +
        '        <div class="addedExercises_' + exerciseDay + '">\n' +
        '        </div>\n' +
        '        <div class="panel-body">\n' +
        '            <div class="form-group">\n' +
        '                <div class="col-lg-12">\n' +
        '                    <label class="col-sm-2 control-label">Select one exercise</label>\n' +
        '                    <div class="col-sm-3">\n' +
        '                        <select class="form-control exercises" id="exercisesDay_' + exerciseDay + '"\n' +
        '                                required="required">\n' +
        '                        </select>\n' +
        '                    </div>\n' +
        '                    <div class="col-sm-2">\n' +
        '                        <button type="button" data-exercise_day="' + exerciseDay + '" class="btn btn-primary addExerciseBtn">Add</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </section>\n' +
        '</div>'
    );
    refresh();
}

function checkAddDayBtn() {
    if (exerciseDay >= 7) {
        $('.addNewDayOfExercise').prop('disabled', true);
    } else {
        $('.addNewDayOfExercise').prop('disabled', false);
    }
}

function updateExercisePerDay(dayToBeChecked, operation) {
    switch (operation) {
        case "plus":
            switch (dayToBeChecked) {
                case '1':
                    return ++numberOfExercisesOnMonday;
                case '2':
                    return ++numberOfExercisesOnTuesday;
                case '3':
                    return ++numberOfExercisesOnWednesday;
                case '4':
                    return ++numberOfExercisesOnThursday;
                case '5':
                    return ++numberOfExercisesOnFriday;
                case '6':
                    return ++numberOfExercisesOnSaturday;
                case '7':
                    return ++numberOfExercisesOnSunday;
                default:
                    alert("Error: Please reload the page and try again!");
                    break;

            }
            break;
        case "minus":
            switch (dayToBeChecked) {
                case '1':
                    return --numberOfExercisesOnMonday;
                case '2':
                    return --numberOfExercisesOnTuesday;
                case '3':
                    return --numberOfExercisesOnWednesday;
                case '4':
                    return --numberOfExercisesOnThursday;
                case '5':
                    return --numberOfExercisesOnFriday;
                case '6':
                    return --numberOfExercisesOnSaturday;
                case '7':
                    return --numberOfExercisesOnSunday;
                default:
                    alert("Error: Please reload the page and try again!");
                    break;
            }
            break;
    }


}

function addExerciseToDay(dayToBeAdded) {
    var currentDay = dayToBeAdded;

    var idExercise = $('#exercisesDay_' + currentDay).val();
    var nameExercise = $('#exercisesDay_' + currentDay + ' option:selected').text();

    var exerciseNumber = updateExercisePerDay(currentDay, "plus");
    $('.addedExercises_' + currentDay).append(
        ' <div class="panel-body" id="exerciseNumber_' + exerciseNumber + '_dayNumber_' + currentDay + '">\n' +
        '     <div class="form-group">\n' +
        '         <input type="hidden" name="exercise[' + currentDay + '][' + exerciseNumber + '][id]" value="' + idExercise + '">' +
        '         <input type="hidden" class="exerciseDay" name="exercise[' + currentDay + '][' + exerciseNumber + '][day]" value="' + currentDay + '">' +
        '         <div class="col-lg-12">\n' +
        '             <span class="text-center col-sm-2">' + nameExercise + '</span>\n' +
        '             <label class="col-sm-2 control-label">\n' +
        '                 Duration (in seconds)\n' +
        '             </label>\n' +
        '             <div class="col-sm-2">\n' +
        '                 <input required="required" name="exercise[' + currentDay + '][' + exerciseNumber + '][duration]" type="number" class="form-control">\n' +
        '             </div>\n' +
        '             <label class="col-sm-2 control-label">\n' +
        '                 Order\n' +
        '             </label>\n' +
        '             <div class="col-sm-2">\n' +
        '                 <input required="required" name="exercise[' + currentDay + '][' + exerciseNumber + '][order]" type="number" class="form-control">\n' +
        '             </div>\n' +
        '             <button type="button" data-exercise_day="' + currentDay + '" data-current_exercise="' + exerciseNumber + '" class="btn btn-danger removeBtn">Remove\n' +
        '             </button>\n' +
        '         </div>\n' +
        '     </div>\n' +
        ' </div>'
    );
}
