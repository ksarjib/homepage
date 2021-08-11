$(()=> {

    const noSuccess = () => {
        $("#question").text("Unable to reach server");
    }

    $("#submit").submit(() => {
        const data = {
            question : $("#question").val()
        };
        $.post({
            url:'/ask',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(function( data ) {
            $("#question").val(data.ans);
            console.log(data.ans);
            $("#question").select();
          })
          .fail(noSuccess);
          return false;
    });
});