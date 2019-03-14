$(document).ready(function () {
    refreshUser();
    refreshPlan();
});



function refreshUser() {
    $.ajax({
        url: '/control/get-users_plan.php',
        success: function (returnedData) {
            // $("#test").html(returnedData);
            $("#selectUser").html(returnedData);
        }
    })
}

function refreshPlan() {
    $.ajax({
        url: '/control/get-plans.php',
        success: function (returnedData) {
            $("#selectPlan").html(returnedData);
        }
    })
}
