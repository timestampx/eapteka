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

<b>ИНСТРУКЦИЯ:<b>

В первую очередь установите ПО необходимое для копирования и запуска тестов
1. Git - для клонирования репозитория с тестами
   Скачать и установить можно по ссылке
   https://git-scm.com/download/mac
    
2. Node.js и менеджер пакетов npm
   Инструкция по установке https://nodejs.org/ru/download/package-manager/#macos
   Или можно скачать установочный файл по ссылке https://nodejs.org/en/download/

3. Docker - ПО для автоматизации развертывания приложений (в нашем случае контейнера с браузерами). Скачать и установить можно по ссылке:
   https://www.docker.com/get-started
   
   рекомендации по настройке запуска
   
   sudo systemctl start docker
   
   sudo systemctl enable docker
   
   sudo usermod -aG docker SOMEUSERNAME // "SOMEUSERNAME" Изменить на свой username пользователя системы
   
4. Selenoid - ПО для запуска браузеров в контейнерах Docker. 
   Подробная инструкция по установке, настройке и запуску: https://aerokube.com/selenoid/latest/
   
   Основное:
   
   4.1. Docker должен быть установлен
   
   4.2. Скачать менеджер конфигурации для автоматической настройки Selenoid
   
   https://github.com/aerokube/cm/releases/tag/1.8.1
   либо скачать последний релиз по ссылке: https://aerokube.com/cm/latest/
   
   4.3. Меняем права доступа к файлу менеджера конфигурации
   
   chmod +x cm
   
   4.4. Запускаем Selenoid и Selenoid UI
   
   для загрузки изображений с сервера VNC (чтобы увидеть экран браузера в реальном времени) используется --vnc флаг
   
   /cm selenoid start --vnc
   
   /cm selenoid-ui start
   
   Selenoid http://localhost:4444/
   
   Selenoid UI http://localhost:8080/
   
5. Клонируем репозиторий с тестами https://github.com/timestampx/eapteka
   
   git clone https://github.com/timestampx/eapteka.git
   
6. В каталоге с тестами выполнить
   
   npm install
   для загрузки node_modules

7. Запустить все тесты проекта командой
   npx wdio run ./wdio.conf.js

8. Allure - для генерации и просмотра результатов тестирования.
   
   Установите инструмент командной строки, инструкция:
   https://www.npmjs.com/package/allure-commandline
   
   Продублирую:
   
   8.1. Установить Java https://www.java.com/ru/download/help/mac_install.html
   
   8.2. Выполните команду, которая сгенерирует отчет и откроет его в браузере
   
   npm install -g allure-commandline --save-dev
   
   в последствии генерировать отчет можно командой
   allure generate [allure_output_dir] && allure open
   
   Настроить под свои нужды отчет можно с помощью методов и апи, подробнее по ссылке:
   https://webdriver.io/docs/allure-reporter/