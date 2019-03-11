var exerciseDay = 1;
var exerciseNumber = 1;

$(document).ready(function () {
    refresh();

    //Add a new exercise to an existing day
    $('.addExerciseBtn').click(function () {
        addExerciseToDay();
    });

    //Remove the selected exercise from an existing day
    $(document).on('click', '.removeBtn', function () {
        if (confirm('Are you sure?')) {
            var entryDay = $(this).attr('data-exercise_day');
            $("#exerciseNumber_" + entryDay).remove();
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

}


function addExerciseToDay() {
    var idExercise = $('#exercises').val();
    var nameExercise = $('#exercises option:selected').text();

    $('#addedExercises').append(
        ' <div class="panel-body" id="exerciseNumber_' + exerciseNumber + '">\n' +
        '     <div class="form-group">\n' +
        '         <input type="hidden" name="exercise['+exerciseDay+']['+exerciseNumber+'][id]" value="' + idExercise + '">' +
        '         <input type="hidden" name="exercise['+exerciseDay+']['+exerciseNumber+'][day]" value="' + exerciseDay + '">' +
        '         <div class="col-lg-12">\n' +
        '             <span class="text-center col-sm-2">' + nameExercise + '</span>\n' +
        '             <label class="col-sm-2 control-label">\n' +
        '                 Duration (in seconds)\n' +
        '             </label>\n' +
        '             <div class="col-sm-2">\n' +
        '                 <input name="exercise['+exerciseDay+']['+exerciseNumber+'][duration]" type="number" class="form-control">\n' +
        '             </div>\n' +
        '             <label class="col-sm-2 control-label">\n' +
        '                 Order\n' +
        '             </label>\n' +
        '             <div class="col-sm-2">\n' +
        '                 <input name="exercise['+exerciseDay+']['+exerciseNumber+'][order]" type="number" class="form-control">\n' +
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