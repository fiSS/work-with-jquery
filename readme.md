# HTML
Подключил библиотеку Jquery: <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>

# Jquery
Воспользовался $(document).ready устанавливает обработчик готовности дерева DOM.
Написал функцию, что при клике на “Выбрать тур”(main_btna) , “Получить консультацию”(main_ntn) или “Расписание туров” (a[href="#sheldure"]) подложка (класс overlay) медленно появлялась на странице (через прозрачность) $('.overlay').fadeIn с выдедержкой 1 секунда, а само модальное окно (класс modal) плавно выезжало сверху: $('.modal').slideDown. 

Написал функцию, что при клике на крестик(class="close" в HTML): подложка исчезает, модальное окно уезжало вверх: $('.close').click(function.
