$(document).ready(function () {
      $("#regForm").submit(function (event) {

            /* stop form from submitting normally */
            event.preventDefault();

            /* get the action attribute from the <form action=""> element */
            var $form = $(this),
              url = $form.attr('action');

            /* Send the data using post with element id name and name2*/
            var posting = $.post(url, {
              firstName: $('#firstName').val(),
              lastName: $('#lastName').val(),
              userName: $('#userName').val(),
              password: $('#password').val(),
              email: $('#email').val(),


            });

            /* Alerts the results */
            posting.done(function (data) {
              alert('success');
            });
      });
});
