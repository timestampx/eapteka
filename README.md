# eapteka
Тестовое задание JS + WebdriverIO + Selenoid

Шаги:
1. Открыть eapteka.ru.  
2. Ввести запрос “Фенибут” в поисковую строку. 
3. Нажать кнопку “Найти”.  
4. Выбрать любое лекарство, которое имеет плашку “Продажа строго по рецепту в аптеке”. 
5. Нажать на товар. 
6. На карточке товара убедиться, что открылся именно товар с тем же названием, по которому и был произведён клик в шаге 5. 

Основные критерии готовности: 
1. Проект оформлен по паттерну Page Object. 
2. Тесты запускаются в локальном Selenoid в браузере Google Chrome. 
3. К проекту приложена инструкция в readme, которая позволяет запустить тест человеку, у которого нет нужного ПО. Список необходимых программ, при необходимости инструкция по установке(предполагается, что запуск будет произведен на MacBook). 

Бонусные очки:
1. Подключен Allure отчет и добавлена информация по работе с ним в readme.md. 
2. Есть возможность запуска теста в десктоп режиме браузера и в режиме мобильной эмуляции, управление через флаг или переменную окружения в команде запуска (допустимо через useragent, без appium’а).

ИНСТРУКЦИЯ:
