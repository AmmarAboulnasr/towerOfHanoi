
'use strict';

$(document).ready(init);

function init() {
	console.log("Ready!");
  $("#startButton").click(startButtonClicked);
  $(".tower").click(towerClicked);
}

function startButtonClicked() {
  generateDisks($("#diskCountField").val());
  $("#startButton").remove();
}
function generateDisks(diskCount) {
	if(diskCount < 3) {
    diskCount = 3;
  }
  var $disk;
	for(var i = diskCount; i > 0; i--) {
		$disk = $("<div>");
		$disk.addClass("disk");
		$disk.attr("id", "disk"+i);
		$disk.attr("data-size", i);
		$disk.css("width", (i*100)/3);
		$("#firstTower").append($disk);
	}
}

function towerClicked(event) {
  console.log("tower clicked: ", event);

  if($(".tower").hasClass("selected")) {
    if($(".selected").find(":last-child").data('size') < $(this).find(":last-child").data('size') || !$(this).children().hasClass("disk")) {
      $(this).append($(".selected").find(":last-child"));
      $(".tower").removeClass("selected");
    
      console.log($("#secondTower").is(":empty"));
      if($("#secondTower").is(":empty") && $("#firstTower").is(":empty")) {
        $(".tower").remove();
        $("#label").remove();
        $("#diskCountField").remove();
        var $win = $("<div>");
        $win.addClass("win");
        $win.text("YOU WIN!");
        console.log($win.text());
        $("body").append($win);
      }
    } else {
      $(".tower").removeClass("selected");
    }
  } else if ($(this).children().hasClass("disk")) {
        $(this).addClass("selected");
    }
}

