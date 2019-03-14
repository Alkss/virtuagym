$(document).ready(function () {
    fillFields();
});

function fillFields() {
    var id = $('#userId').val();
    $.ajax({
        type: 'POST',
        url: '/control/get-user-info.php',
        data: {id: id},
        success: function (returnedData) {
            $("#fillInfo").html(returnedData);
        }
    })
}