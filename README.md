# gitlab_extension

Это [расширение для Google Chrome](https://developer.chrome.com/docs/extensions/) заменяет стартовую страницу gitlab. Приложение обращается к [API gitlab](https://docs.gitlab.com/ee/api/) используя текущую сессию страницы, поэтому не требует дополнительной авторизации и использования секретных ключей.


![image|320x271](https://user-images.githubusercontent.com/36767767/211028400-00e0e751-23cb-4f05-889e-065cf976ab0c.png)

## **Сборка расширения из исходников:**

1. Скачать архив и извлечь его содержимое или склонировать репозиторий
2. В корневой директории проекта создать файл `.env` с содержимым: 
    > GITLAB_URL=\<URL\>

   **`URL`**: URL-адрес gitlab
3. Установить зависимости проект:
    > npm install
4. Выполнить сборку:
    > npm run build

## **Установка расширения в *Google Chrome*:**

1. Открыть браузер и перейти на страницу расширений `chrome://extensions/`
2. Включить `Режим разработчика` (*eng.* `Developer mode`)
3. Нажать на кнопку `Загрузить распакованное расширение` (*eng.* `Load unpacked`) и указать путь до папки `build` в проекте

## **Обновление расширения:**
1. Загрузить последние обновления и выполнить 3-4 пункты из инструкции по сборке
2. В браузере открыть страницу с расширениями и нажать кнопку `Обновить` (*eng.* `Update`)
