# Тестовое задание: для Правого Полушария Интроверта

В данном тестовом задании я реализовал одностраничное приложение, используя `React`, `Redux Toolkit`,`Ant Design`, `React Router DOM`. С использованием API `JSONPlaceholder`. Так же позволил, себе использовать `axios` и `zod`.

GitHub Pages: <https://rudinmaxim.github.io/right-hemisphere/>

Приложение позволяет:

- Просматривать 10 первых пользователей из `JSONPlaceholder Users`.
- При клике на пользователя отобразить модальное окно, где отображается список его постов из `JSONPlaceholder Posts`.
- Переходить на страницу поста (/message/:id пользователя) при клике на пост. На этой странице:
  - Отображается сам пост.
  - Присутствует инпут для редактирования заголовка поста.
  - Отображаются комментарии к посту из `JSONPlaceholder Comments`.

> Типизировал входные данные, это поможет сразу увидеть ошибки, если в API изменится структура критических данных. Такая практика, поможет защитить от человеческого фактора на бэке. (а если честно, я очень люблю zod 😊)

> Добавил защиту от Межсайтового скриптинга (XSS), при вводе в инпут для изменения заголовка поста.

Спасибо, что уделили время, моему тестовому заданию. Буду рад присоединиться к комадне!
