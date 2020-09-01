# GlazingOfBalconies-js
Glazing of balconies poject classic javascript style


RUS


Проект реализован в классическом стиле написания JS кода. Структура проекта модульная. Функционал разбит по отдельным файлам с соответствующими названиями в папке src/js/modules 

Реализованы следующие задачи:


МОДАЛЬНЫЕ ОКНА:

Задача 1. При клике на кнопку "Вызвать замерщика" в шапке сайта: 
Должно вызываться модальное окно (класс popup_engineer)
При клике на крестик или подложку - исчезать.

Задача 2. При клике на надписи “Заказать обратный звонок” в шапке и “Спросите у нашего специалиста” в предпоследнем блоке:
Должно вызываться модальное окно (класс popup)
При клике на крестик или подложку - исчезать

Задача 3. Если пользователь на странице больше 60 секунд - должно появится модальное окно (popup). При нажатии на крестик или подложку окно исчезает. 

Решение: Реализация данного функционала представлена в модуле modals.js. Задача 3 решена с помощю функции: showModalByTime. Все модальные окна на странице вызваны внутри модуля. Функция модального окна: bindModal(triggerSelector, modalSelector, closeSelector, closeClckOverlay = true)
Параметры: triggerSelector - триггер (сюда передаём класс кнопки, при нажатии на котрую окно открывается), modalSelector - модальное окно, closeSelector - селектор кнопки закрытия окна, closeClckOverlay - параметр для контроля закрытия окна при нажатии на подложку. 



ФОРМЫ:

Задача 1. Внутри всех модальных окон есть форма. Она должна отправляться посредством ajax(без перезагрузки страницы) и захватывать все введенные данные. Также необходимо оповестить пользователя о состоянии отправки (идет отправка, отправлено, ошибка). В поле с телефоном можно вводить только цифры.

Задача 2. На странице есть 6 одинаковых форм обратной связи. Все они должны отправляться посредством ajax(без перезагрузки страницы) и захватывать все введенные данные. Также необходимо оповестить пользователя о состоянии отправки (идет отправка, отправлено, ошибка). В поле с телефоном можно вводить только цифры.

Решение: Реализация данного функционала представлена в модуле forms.js. Пункт с проверкой ввода номера телефона реализован в модуле checkNumInputs с помощью метода replace, и импортирован в модуль form.js Отправка формы реализована посредством Fetch API в функции postData. Объект message создан и используется с целью оповещения пользователя о состоянии отправки. Функция clearInputs очищает инпуты после отправки формы.



ТАБЫ:

Задача 1. Должны быть реализованы табы в блоке "ОСТЕКЛЕНИЕ БАЛКОНОВ И ЛОДЖИЙ" Так же идет переключение активного таба и его стиля. (класс active)
Пользователь может кликнуть и на надпись и на картинку

Задача 2. Реализация табов в блоке "ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!" Так же идет переключение активного таба и его стиля. (класс after_click)

Решение: Реализация данного функционала представлена в модуле tabs.js. Функция tabs принимает параматры: headerSelector - селектор родительского блока табов, tabSelector - таб, contentSelector - контент, activeClass - класс активности, display = 'block' - параметр по умолчанию для типа отображения. 
Внутренние функции: hideContent - скрывает контент, showContent - отображает контент.



ТАЙМЕР

Задача 1. Реализация таймера: 
Дедлайн пока выставляйте любой.

Решение: Реализация данного функционала представлена в модуле timer.js. Фукция timer принимает параметры: timerId - id таймера, deadline - дату окончания в виде строки.
Функция setClock принимает 2 параметра переданные в timer и запускает его. Обновление таймера происходит посредством внутренней функции updateClock. Функция getTimeRemaining принимает дату окончания в виде строки, парсит её, достаёт необходимые временные интервалы и возвращает объект с этими интервалами. Функция checkDigit проверяет если цифра меньше 10, то добалвяет слева 0. 



ГАЛЕРЕЯ

Задача: При клике на любую из восьми картинок - она открывается на весь экран с полупрозрачной, темной подложкой.
При клике на подложку - все исчезает.
Здесь много вариантов реализации. Верстка отдельных блоков запрещена. Реализация на ваше усмотрение, но все делать через JS.

Решение: Реализация данного функционала представлена в модуле images.js.



МОДАЛЬНОЕ ОКНО + ТАБЫ + ФОРМЫ

Задача. Внутри всех табов в блоке "ОСТЕКЛЕНИЕ БАЛКОНОВ И ЛОДЖИЙ" есть кнопки “Рассчитать стоимость”
При клике на них должно появляться модальное окно с классом popup_calc 

Основная задача: при клике на маленькие превью (4 в ряд сверху) эта превьюшка(картинка) становится несколько больше. Под ними показывается картинка-аналог активной превью. При выборе другой - аналогичная логика. В верстке все готово - нужно только прописать логику.

В поля “ширина” и “высота” можно вписать только цифры.
При клике на кнопку “Далее” данное модальное окно скрывается. Появляется popup_calc_profile 
На этом окне реализовать, что можно выбрать только 1 профиль. Или холодное или теплое.
При клике на кнопку “Далее” данное модальное окно скрывается. Появляется popup_calc_end 
Здесь требования точно такие же как и в других формах. НО! Все данные, что отметил или выбрал человек должны быть переданы вместе с формой.

Решение: Переключение маленьких превью и показ картинки-аналога реализовано с помощю табов из tabs.js. Все данные полученные из форм сохраняются в специальный объект. Изначально в main.js создаётся пустой объект. Этот объект передаётся в качестве параметра для функции changeModalState из модуля changeModalState.js в которой описана логика сбора информации из цепочки форм. Далее объект передаётся в качестве параметра в функцию формы и отправляется на сервер. 
Данные испозуемые в функции changeModalState:
windowForm - форма окна,
windowWidth - ширина окна,
windowHeight - высота окна,
windowType - тип остекления,
windowProfile -профиль (тёплое/холодное)







ENG


The project is implemented in the classic style of writing JS code. The project structure is modular. The functionality is split into separate files with corresponding names in the src / js / modules folder

The following tasks have been implemented:


MODAL WINDOWS:

Task 1. When you click on the "Call the measurer" button in the site header:
The modal window should be called (class popup_engineer)
When you click on a cross or background - disappear.

Task 2. When you click on the inscription “Request a call back” in the header and “Ask our specialist” in the penultimate block:
Modal window should be called (popup class)
When you click on a cross or background - disappear

Task 3. If the user is on the page for more than 60 seconds, a modal window (popup) should appear. When you click on the cross or background, the window disappears.

Solution: The implementation of this functionality is presented in the modals.js module. Problem 3 was solved using the function showModalByTime. All modals on the page are called inside the module. Modal window function: bindModal (triggerSelector, modalSelector, closeSelector, closeClckOverlay = true)
Parameters: triggerSelector - trigger (here we pass the class of the button, when clicking on which the window opens), modalSelector - modal window, closeSelector - selector of the window close button, closeClckOverlay - parameter for controlling the window closing when clicking on the background.



FORMS:

Problem 1. There is a form inside all modal windows. It should be sent via ajax (without reloading the page) and capture all the input. It is also necessary to notify the user about the sending status (sending, sent, error). Only numbers can be entered in the telephone field.

Task 2. There are 6 identical feedback forms on the page. All of them should be sent via ajax (without page reloading) and capture all the entered data. It is also necessary to notify the user about the sending status (sending, sent, error). Only numbers can be entered in the telephone field.

Solution: This functionality is implemented in the forms.js module. The item with checking the phone number input is implemented in the checkNumInputs module using the replace method, and imported into the form.js module. Form submission is implemented using the Fetch API in the postData function. The message object is created and is used to notify the user about the send status. The clearInputs function clears the inputs after submitting the form.



TABA:

Task 1. Tabs in the "BALCONY GLAZING AND LOGGY" block should be implemented. The active tab and its style are also switched. (class active)
The user can click on both the inscription and the picture

Task 2. Implementation of tabs in the block "ORDER BALCONY FINISHING WITH 60% DISCOUNT!" Also, there is a switching of the active tab and its style. (after_click class)

Solution: The implementation of this functionality is presented in the tabs.js module. The tabs function accepts parameters: headerSelector - the selector of the parent block of tabs, tabSelector - the tab, contentSelector - the content, activeClass - the activity class, display = 'block' - the default parameter for the display type.
Internal functions: hideContent - hides content, showContent - displays content.



TIMER

Task 1. Implementation of the timer:
Any deadline for now.

Solution: The implementation of this functionality is presented in the timer.js module. The timer function takes parameters: timerId - timer id, deadline - end date as a string.
The setClock function takes 2 parameters passed to timer and starts it. The timer is updated through the internal function updateClock. The getTimeRemaining function takes the end date as a string, parses it, retrieves the required time intervals, and returns an object at these intervals. The checkDigit function checks if the digit is less than 10, then adds 0 to the left.



GALLERY

Task: When you click on any of the eight pictures, it opens to full screen with a semi-transparent, dark background.
When you click on the background, everything disappears.
There are many implementation options here. Layout of individual blocks is prohibited. Implementation at your discretion, but do everything through JS.

Solution: The implementation of this functionality is presented in the images.js module.



MODAL WINDOW + TABS + SHAPES

Task: Inside all the tabs in the "BALCONY GLAZING AND LOGGY" block there are "Calculate cost" buttons
When you click on them, a modal window with the popup_calc class should appear

The main task: when you click on small previews (4 in a row from the top), this preview (picture) becomes slightly larger. A picture analogous to the active preview is shown below them. When choosing another - similar logic. Everything is ready in the layout - you just need to write the logic.

Only numbers can be entered in the “width” and “height” fields.
When you click on the "Next" button, this modal window is hidden. Popup_calc_profile appears
On this window, realize that you can select only 1 profile. Either cold or warm.
When you click on the "Next" button, this modal window is hidden. Popup_calc_end appears
The requirements here are exactly the same as in other forms. BUT! All data that has been noted or chosen by the person must be transmitted along with the form.

Solution: Switching small previews and displaying an analogue picture is implemented using tabs from tabs.js. All data received from forms are saved in a special object. Initially, an empty object is created in main.js. This object is passed as a parameter to the changeModalState function from the changeModalState.js module, which describes the logic for collecting information from the form chain. Next, the object is passed as a parameter to the form function and sent to the server.
Data used in the changeModalState function:
windowForm - window form,
windowWidth - window width,
windowHeight - window height,
windowType - type of glazing,
windowProfile - profile (warm / cold)


