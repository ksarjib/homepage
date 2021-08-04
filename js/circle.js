"use strict";

$(document).ready(function(){
        var timer;
        const addition = parseInt($("#growth").val());
    
      $("form").submit(function(e){
        e.preventDefault();
        const initialSize = parseInt($("#size").val());
        const numberOfCircles =  parseInt($("#num").val());
        let containerWidth = parseInt($("#circle-container").width());
        let containerHeight = parseInt($("#circle-container").height());

        for(let i=0; i < numberOfCircles; i++) {
            $("#circle-container").append($("<div>",{
                "class": "circle",
                "css":{
                    "width": initialSize,
                    "height": initialSize,
                    "top": getRandomValue(containerHeight - initialSize),
                    "left": getRandomValue(containerWidth - initialSize),
                    "border-radius": '50%',
                    "background-color": getRandomColor()
                },
                "click": function() {
                    this.remove();
                }
            }));
        }
        increaseCircle();
      });

      function getRandomValue(max) {
          console.log("maxxx" + max);
          console.log(Math.floor(Math.random() * max));
          return Math.floor(Math.random() * max);
      }

    function increaseCircle(){   
        const interval =  parseInt($("#interval").val());             
        timer = setInterval(function(){
            const size = parseInt($(".circle").css("width"));
            const newSize = size + addition + "px";
            console.log(newSize);
            $(".circle").css("width", newSize);
            $(".circle").css("height", newSize);
        }, interval);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});