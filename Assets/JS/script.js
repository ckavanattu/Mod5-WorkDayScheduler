var timeBlock = document.querySelector(".container");
var date = document.querySelector("#currentDay");
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentHour = moment().format("HH");

date.innerText = currentDate

console.dir(date);
console.log(date.innerText);
console.log(currentDate);
console.log(currentHour)
console.log(timeBlock)

var hours = [ "9:00 AM", "10:00 AM", "11:00 AM", "12:OO AM", "1:OO PM", "2:OO PM", "3:00 PM", "4:OO PM", "5:00 PM",]







var createTimeBlocks = function() {
    for (var i=0; i < hours.length; i++ ){
        // using create element as $("<div>") returns an object not HTML element...
        var timeSlot = document.createElement("div")
        timeSlot.classList = ("row time-block")

        var slotTime = document.createElement("div")
        slotTime.classList = ("hour col-2 center")
        slotTime.innerText = (hours[i])

        var editTask = document.createElement("textarea")
        editTask.classList = ("text-area col-9");

        var saveTask = document.createElement("button")
        saveTask.classList = ("saveBtn col-1 ")
        saveTask.innerText = ("save")

        timeSlot.append(slotTime, editTask, saveTask)
        timeBlock.append(timeSlot)

        // var timeSlot = $("<div>").addClass("row time-block ")
        // var slotTime = $("<div>").addClass("hour col-1 center").text(hours[i])
        // var editTask = $("<textarea>").addClass("text-area col-10");
        // var saveTask = $("<button>").addClass("saveBtn col-1 ")

        
      
        console.log(timeSlot)
        

        

    }
}


createTimeBlocks();