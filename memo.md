nest g resource user --no-spec - генерирует компоненты приложения и убирает тесты
dto - data transfer object - некая типизация дли функции / типизация данных для сервиса entities
- таблица в бд app.
- enableCors() - включате CORS - (CORS) — это механизм, который поддерживает безопасные запросы и передачу данных
- из внешних источников CORS — это способ веб-серверов сказать «Принимать запросы кросс-источника из 
- этого источника» или «Не принимать запросы кросс-источника от этого источника». CORS — это протокол,
- определяющий ограничения запросов между источниками. npm install --save @nestjs/typeorm typeorm pg

useFactory: подключение к ORM (app.module)

// npm i --save @nestjs/config доступ к env

Связь между таблицами - реализуются в .entity https://typeorm.io/many-to-one-one-to-many-relations 
OneToMany - связь один ко многим ManyToOne - многие к одному

// Регистрация 