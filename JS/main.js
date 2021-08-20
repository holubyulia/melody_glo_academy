$(document).ready(function () {
    var currentFloor = 2; /* переменная где хранится текущий этаж */
    var floorPath = $(".home_img path"); /* отдельный этаж в SVG*/
    var counterUp = $(".counter-up"); /* кнопка увеличения этажа */ 
    var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");
    
    //функция при наведении мышкой на этаж
    floorPath.on('mouseover', function () {
     floorPath.removeClass('current-floor'); //удаляем активный клас этажей
     currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
     $(".counter").text(currentFloor); // записываем значение этажа в счетчик
    });

    floorPath.on("click", toggleModal);
    modalCloseButton.on("click", toggleModal);
    viewFlatsButton.on("click", toggleModal);


    counterUp.on("click", function () { //отслеживаем клик по кнопке вверх
        if (currentFloor < 18) { //проверяем значение этажа
            currentFloor++; // прибавляем 1 этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
            useGrouping: false }); // форматируем переменную с этажом чтобы было не 2, а 02
            $(".counter").text(usCurrentFloor); // записываем значение этажа в счетчик
            floorPath.removeClass("current-floor"); //удаляем активный клас этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвечиваем текущий этаж
        }
    });

    counterDown.on("click", function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false });
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
    function toggleModal() {
        modal.toggleClass("is.open");
     }

});