
//VARIABLES
const ml_one = document.getElementById('ml_id1');
const ml_two = document.getElementById('ml_id2');
const ml_three = document.getElementById('ml_id3');

const dir = "images/";

let b_one = false;
let b_two = false;
let b_three = false;

let interval_background_change;

let myObj = "";
let years_list = [];

//add event listener to the year input field
document.getElementById("car_year_input").addEventListener('mouseover', populate_year_list);


//ONLOAD
window.onload = function() {
    //first setup the car database
    car_make_list();
    //call init function to setup images for preload
    init();

};

// INIT
function init(){
    //check that the tree images for the mid_left changer div are loaded or not
    image_loader_one();
    image_loader_two();
    image_loader_three();
}

//FUNCTIONS

//home page left side image one loader
function image_loader_one() {
    let mid_left_img_one = new Image();
    mid_left_img_one.onload = function(){
        ml_one.style.backgroundImage = this.src;
        console.log("Image one loaded!");

        b_one = true;
        image_loader_all_checker();
    };
    mid_left_img_one.src = dir + '001_m.jpg';
}

//home page left side image two loader
function image_loader_two() {
    let mid_left_img_two = new Image();
    mid_left_img_two.onload = function(){
        ml_two.style.backgroundImage = this.src;
        b_two = true;
        console.log("Image two loaded!");
        image_loader_all_checker();
    };
    mid_left_img_two.src = dir + '002_m.jpg';
}

//home page left side image three loader
function image_loader_three() {
    let mid_left_img_three = new Image();
    mid_left_img_three.onload = function(){
        ml_three.style.backgroundImage = this.src;
        b_three = true;
        console.log("Image three loaded!");
        image_loader_all_checker();
    };
    mid_left_img_three.src = dir + '003_m.jpg';
}

//check home page left side all of the tree image is loaded (use booleans)
function image_loader_all_checker() {

    let button_holder = document.getElementsByClassName('mid_left_one_buttons');

    if(b_one === true && b_two === true && b_three === true){
        console.log("All div-adds images loaded!");

        for(let i=0; i<button_holder.length; i++){
            button_holder[i].style.display = '-webkit-flex'; //for Safari browser
            button_holder[i].style.display = 'flex';
        }

        ml_one.style.backgroundSize = 'cover';
        ml_one.style.backgroundImage = 'url("'+ dir + '001_m.jpg' + '")';

        interval_background_change = window.setInterval(background_div_changer, 4500);

    }else{
        console.log("Images not loaded!");
    }
}

//function to change the home page left side 'div-adds' repeatedly
function background_div_changer() {
    //div one
    if(ml_one.className === 'mid_left_active middle'){
        ml_one.className = 'mid_left_one middle';
        ml_one.style.display = 'none';
    }
    else if(ml_one.className === 'mid_left_one middle'){
        ml_one.className = 'mid_left_two middle';
        ml_one.style.display = 'none';
    }
    else{
        ml_one.className = 'mid_left_active middle';
        ml_one.style.display = 'block';
        ml_one.style.backgroundSize = 'cover';
        ml_one.style.backgroundImage = 'url("'+ dir + '001_m.jpg' + '")';
       }
    //div two
    if(ml_two.className === 'mid_left_active middle'){
        ml_two.className = 'mid_left_one middle';
        ml_two.style.display = 'none';
    }
    else if(ml_two.className === 'mid_left_one middle'){
        ml_two.className = 'mid_left_two middle';
        ml_two.style.display = 'none';
    }
    else{
        ml_two.className = 'mid_left_active middle';
        ml_two.style.display = 'block';
        ml_two.style.backgroundSize = 'cover';
        ml_two.style.backgroundImage = 'url("'+ dir + '003_m.jpg' + '")';
    }
    //div three
    if(ml_three.className === 'mid_left_active middle'){
        ml_three.className = 'mid_left_one middle';
        ml_three.style.display = 'none';
    }
    else if(ml_three.className === 'mid_left_one middle'){
        ml_three.className = 'mid_left_two middle';
        ml_three.style.display = 'none';
    }
    else{
        ml_three.className = 'mid_left_active middle';
        ml_three.style.display = 'block';
        ml_three.style.backgroundSize = 'cover';
        ml_three.style.backgroundImage = 'url("'+ dir + '002_m.jpg' + '")';
    }
}

//function to change the div-adds (depends on which button was pressed)
function changeAdds(x){
    let btn_class = x.className;
    let parent_of_parent_class_name = x.parentNode.parentNode.className;

    //stop the background changer function
    stopInterval();

    if(btn_class === 'gl_button prev_button'){

        ml_one.className = 'mid_left_active middle';
        ml_one.style.display = 'block';
        ml_one.style.backgroundSize = 'cover';
        ml_one.style.backgroundImage = 'url("'+ dir + '001_m.jpg' + '")';

        ml_two.className = 'mid_left_two middle';
        ml_two.style.display = 'none';

        ml_three.className = 'mid_left_one middle';
        ml_three.style.display = 'none';
    }
    if(btn_class === 'gl_button actual_button'){

        ml_one.className = 'mid_left_two middle';
        ml_one.style.display = 'none';

        ml_two.className = 'mid_left_active middle';
        ml_two.style.display = 'block';
        ml_two.style.backgroundSize = 'cover';
        ml_two.style.backgroundImage = 'url("'+ dir + '003_m.jpg' + '")';

        ml_three.className = 'mid_left_one middle';
        ml_three.style.display = 'none';
    }
    if(btn_class === 'gl_button next_button'){

        ml_one.className = 'mid_left_two middle';
        ml_one.style.display = 'none';

        ml_two.className = 'mid_left_one middle';
        ml_two.style.display = 'none';

        ml_three.className = 'mid_left_active middle';
        ml_three.style.display = 'block';
        ml_three.style.backgroundSize = 'cover';
        ml_three.style.backgroundImage = 'url("'+ dir + '002_m.jpg' + '")';
    }

    console.log(parent_of_parent_class_name);
    //start the background changer function 5 sec later
    //window.setTimeout(window.setInterval(background_div_changer, 5000), 5000);
}

//stop the background changer function cycle
function stopInterval() {
    clearInterval(interval_background_change);
}

//drop-down menu for mobile version (below 680px)
function drop_down_Menu(){
    var x = document.getElementById("drop_down_Click");
    /*change top_nav to top_nav.responsive*/
    if(x.className === "top_nav"){
        x.className += " responsive";
        console.log("changed");

    }else{
        x.className = "top_nav";
    }
}

//   ----- A. J. A. X. -----
//AJAX JSON FILE HANDLING
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

//add or remove datalist to/from the car make input field (depends it exist or not)
function car_make_list() {

    //create the myObj from JSON here, before I add the event listener (mouseover) to the car make input field
    readTextFile("cars_data.json", function(text){
        myObj = JSON.parse(text);
    });
    //image_loader_all_checker that the datalist is exist or not
    let elem_exist = document.getElementById("car_make_list");
    //if not exist then create that
    if(elem_exist === null){
        console.log("car make list does not exist");
        document.getElementById("car_make_input").addEventListener('mouseover', add_car_make_datalist);
    }
    //if exist then remove the old ones
    else{
        console.log("car make list was created earlier");
        document.getElementById("car_make_list").remove();
        console.log("car make list deleted");
        document.getElementById("car_make_input").addEventListener('mouseover', add_car_make_datalist);
    }
}

//generate list for the car input field from the myOBJ (which was created from a JSON file) and populate them into html datalist
function add_car_make_datalist(){

    //do this double check on the element exist to make sure not create duplication in DOM
    if(document.getElementById("car_make_list") === null) {

        let datalist_make_tag = document.createElement("DATALIST");
        datalist_make_tag.setAttribute("id", "car_make_list");
        document.getElementById("div_car_make").appendChild(datalist_make_tag);

        let makeData = "";
        for (let i = 0; i < myObj.cars.length; i++) {
            let make_name = myObj.cars[i].make.toString();
            makeData += "<option>" + make_name + "</option>";
        }
        document.getElementById("car_make_list").innerHTML = makeData;
        // event listener
        document.getElementById("car_make_input").addEventListener('input', add_car_model_datalist);

        //add a mouse-leave and on-focus-out event listeners to the make input field with an inner function
        document.getElementById("car_make_input").addEventListener('mouseleave', car_model_clear_and_disable);
        document.getElementById("car_make_input").addEventListener('focusout', car_model_clear_and_disable);

        //if the make field is empty when the mouse is leave that, then clear and disable the model input field
        function car_model_clear_and_disable() {
            if(document.getElementById("car_make_input").value === ""){
                document.getElementById("car_model_input").value = "";
                document.getElementById("car_model_input").disabled = true;
            }
        }
    }
}

// add or change the car model input datalist (the data is depends on which car make was selected)
function add_car_model_datalist() {

    //enable the model field
    document.getElementById("car_model_input").disabled = false;

    let elem_exist = document.getElementById("car_model_list");

    if(elem_exist === null){
        console.log("car model list does not exist");
    }else{
        console.log("car model list was created earlier");
        document.getElementById("car_model_list").remove();
        console.log("car model list deleted");
    }
    let z="";
    for(let i = 0; i < myObj.cars.length; i++){
        // console.log(x);
        for (let j = 0; j < myObj.cars[i].models.length; j++) {
            if(document.getElementById("car_make_input").value === myObj.cars[i].make){
                console.log("Make:" + document.getElementById("car_make_input").value);

                //make sure no duplication in DOM
                if(document.getElementById("car_model_list") !== null){
                    document.getElementById("car_model_list").remove();
                }

                //add the new list to the datalist depends on make selection
                var datalist_tag = document.createElement("DATALIST");
                datalist_tag.setAttribute("id", "car_model_list");
                document.getElementById("div_car_model").appendChild(datalist_tag);

                document.getElementById("car_model_input").value = "";

                        z +=  "<option>" + myObj.cars[i].models[j] + "</option>";

                document.getElementById("car_model_list").innerHTML = z;
            }else{
                console.log("else:" + document.getElementById("car_model_input").value);
            }
        }
    }
}

//generate numbers between 2000 and 2018 and push them into the car year input datalist
function populate_year_list() {

    if(document.getElementById("car_year_input").value === "") {

        console.log("year input field is empty");

        let elem_exist = document.getElementById("car_year_list");

        if (elem_exist === null) {
            console.log("car year list does not exist");
        } else {
            console.log("car year list was created earlier so remove that now");
            document.getElementById("car_year_list").remove();
            console.log("car year list deleted");

            var datalist_tag = document.createElement("DATALIST");
            datalist_tag.setAttribute("id", "car_year_list");
            document.getElementById("div_car_year").appendChild(datalist_tag);
            console.log("car year list created");

            let array_pos = 0;
            let year_opt = "";
            //populate the year_list array with numbers from 2000 to 2018
            do{
                for (let y = 2000; y < 2019; y++) {
                    years_list[array_pos] = y;
                    array_pos++;
                }
            }
            while (years_list.length === 20);

            console.log("list of years: " + years_list);

            for(let i=0; i<years_list.length; i++){

                document.getElementById("car_year_input").value = "";
                year_opt +=  "<option>" + years_list[i] + "</option>";
                document.getElementById("car_year_list").innerHTML = year_opt;
            }
        }
    }else{
        console.log(document.getElementById("car_year_input").value);
    }
}


//function for random car section on Home page
function change_randCar_mainImage_to_selectedImage(x) {
    let small_Img_id = x.id;
    let big_Img_id = document.getElementById("smallCar_First");
    let big_Img_Zoom_id = document.getElementById("smallCar_First_big");
    console.log(small_Img_id);

    let selectedIMG_src = x.src
    // document.getElementById("car_thumb_one").style.background = "images/used_car_example/ford_focus_2011_front_left.jpg";
    console.log("background source:"+ selectedIMG_src);
    big_Img_id.src = x.src;
    big_Img_Zoom_id.src = x.src;


}


// Resources:
//http://blog.teamtreehouse.com/learn-asynchronous-image-loading-javascript


