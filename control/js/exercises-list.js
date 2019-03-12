var exerciseDay = 1;
var exerciseNumber = 1;

$(document).ready(function () {
    refresh();
    checkAddDayBtn();

    //Add a new exercise to an existing day
    $('.addExerciseBtn').click(function () {
        addExerciseToDay();
    });

    //Add a new day of exercise to an existing planing day
    $('.addNewDayOfExercise').click(function () {
        addDayOfExercise();
        checkAddDayBtn();
    });

    //Remove the selected exercise from an existing day
    $(document).on('click', '.removeBtn', function () {
        if (confirm('Are you sure?')) {
            var entryDay = $(this).attr('data-exercise_day');
            $("#exerciseNumber_" + entryDay).remove();
        }
    });

    //Remove the selected day of exercise from an existing planing day
    $(document).on('click', '.removeDayBtn', function () {
        if (confirm('Are you sure?')) {
            var entryDay = $(this).attr('data-exercise_day');
            $("#dayOfExercise_" + entryDay).remove();
            exerciseDay--;
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
                $('#exercises').html(returnedData);
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
        '        <div class="addedExercises">\n' +
        '        </div>\n' +
        '        <div class="panel-body">\n' +
        '            <div class="form-group">\n' +
        '                <div class="col-lg-12">\n' +
        '                    <label class="col-sm-2 control-label">Select one exercise</label>\n' +
        '                    <div class="col-sm-3">\n' +
        '                        <select class="form-control" id="exercises"\n' +
        '                                required="required">\n' +
        '                        </select>\n' +
        '                    </div>\n' +
        '                    <div class="col-sm-2">\n' +
        '                        <button type="button" class="btn btn-primary addExerciseBtn">Add</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </section>\n' +
        '</div>'
    );
}

function checkAddDayBtn() {
    if (exerciseDay >= 7) {
        $('.addNewDayOfExercise').prop('disabled', true);
    } else {
        $('.addNewDayOfExercise').prop('disabled', false);
    }
}

function addExerciseToDay() {
    var idExercise = $('#exercises').val();
    var nameExercise = $('#exercises option:selected').text();

    $('.addedExercises').append(
        ' <div class="panel-body" id="exerciseNumber_' + exerciseNumber + '">\n' +
        '     <div class="form-group">\n' +
        '         <input type="hidden" name="exercise[' + exerciseDay + '][' + exerciseNumber + '][id]" value="' + idExercise + '">' +
        '         <input type="hidden" name="exercise[' + exerciseDay + '][' + exerciseNumber + '][day]" value="' + exerciseDay + '">' +
        '         <div class="col-lg-12">\n' +
        '             <span class="text-center col-sm-2">' + nameExercise + '</span>\n' +
        '             <label class="col-sm-2 control-label">\n' +
        '                 Duration (in seconds)\n' +
        '             </label>\n' +
        '             <div class="col-sm-2">\n' +
        '                 <input name="exercise[' + exerciseDay + '][' + exerciseNumber + '][duration]" type="number" class="form-control">\n' +
        '             </div>\n' +
        '             <label class="col-sm-2 control-label">\n' +
        '                 Order\n' +
        '             </label>\n' +
        '             <div class="col-sm-2">\n' +
        '                 <input name="exercise[' + exerciseDay + '][' + exerciseNumber + '][order]" type="number" class="form-control">\n' +
        '             </div>\n' +
        '             <button type="button" data-exercise_day="' + exerciseNumber + '" class="btn btn-danger removeBtn">Remove\n' +
        '             </button>\n' +
        '         </div>\n' +
        '     </div>\n' +
        ' </div>'
    );
    exerciseNumber++;
}


var exercise_array = [];

var post_data = {
    "plans_name": $("input[name=plans-name]").val(),
    "plans_desc": $("input[name=plans-desc]").val(),
    "plans_difficulty": $("input[name=plans-diff]").val(),

};