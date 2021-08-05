"use strict";
$(document).ready(function(){
    let started = false;
    let boundry = $(".boundary");
    let maze = $("#maze");
    let start = $("#start");
    let end = $("#end");
    let time = $("#time");
    let hh = 0;
    let mm = 0;
    let ss = 0;
    let timer;
    function reset() {
        clearInterval(timer);
        hh = 0;
        mm = 0;
        ss = 0;
    }
    function displayTime(){
        time.html(`  ${hh} h ${mm} m ${ss} s`);
        timer = setInterval(increaseTime, 1000);
    }
    function increaseTime(){
        ++ss;
        if(ss > 60) {
            ss = 0;
            ++mm; 
        }
        if(mm > 60) {
            mm = 0;
            ++hh;
        }
        time.html(`  ${hh} h ${mm} m ${ss} s`);
    }
    boundry.mouseenter(function(){
        console.log('I am here');
        if(started){
            $(".boundary").addClass('youlose');
            reset();
            $("#status").html('Sorry! :( You loose. Click S to start the game again.');
        }
    });
    maze.mouseleave(function(){
        if(started) {
            boundry.addClass('youlose');
            reset();
        }
    });
    start.click(function(){
        $("#status").html('The game has started.');
        displayTime();
        if(boundry.hasClass('youlose'))
            boundry.removeClass('youlose');
            
        started = true;
    });
    end.mouseenter(function(){
        $("#status").html('Contratulations! You win. Click S to start the game again.');
        reset();
        started = false;
    });
});