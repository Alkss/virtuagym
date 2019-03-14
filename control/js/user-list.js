$(document).ready(function () {
    refresh();

    $(document).on('click', '.removeBtn', function () {
        if (confirm("Are you sure?")) {
            var id = $(this).attr('data-id');
            deleteUser(id);
        }
    });


});

function deleteUser(id) {
    $.ajax({
        type: 'POST',
        url: '/control/delete-user.php',
        data: {id: id},
        success: function () {
            $('#user_' + id).remove();
        }
    })
}

function refresh() {
    $.ajax({
            type: 'POST',
            url: '/control/get-users.php',
            success: function (returnedData) {
                $('#userList').html(returnedData);
            }
        }
    );
}