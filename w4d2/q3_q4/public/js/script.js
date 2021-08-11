$(() => {
    $(".addToCart").submit(function() {
        const data = {id : this.id.value};
        $.post({
            url: '/addToCart',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done((data) => {
            console.log('response data.number' + data.total);
            $('#cart').html(data.total);
        }).fail(() => {
            console.log('Server Error');
        });
        return false;
    });
});