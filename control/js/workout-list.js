$(document).ready(function () {
    refresh();

    $(document).on('click', '.removeBtn', function () {
        if (confirm("Are you sure?")) {
            var id = $(this).attr('data-id');
            deleteWorkout(id);
        }
    })

});

function deleteWorkout(id) {
    $.ajax({
        type: 'POST',
        url: '/control/delete-workout-plan.php',
        data: {id: id},
        success: function (data) {
            $('#workout_' + id).remove();
        }
    })
}

function refresh() {
    $.ajax({
            type: 'POST',
            url: '/control/get-workout-plan.php',
            success: function (returnedData) {
                $('#workoutList').html(returnedData);
            }
        }
    );
}