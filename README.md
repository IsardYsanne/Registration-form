# Registration-form
This is registration and authentication forms written in PHP, JQuery
<br>
Each file is:
<br>
header.php - html-file for links "Главная", "Регистрация", "Вход", "Выход", and links to handlers, respectively.
<br>
<br>
reg.php - error and success messages + registration form.
<br>
<br>
index.php - main content 
<br>
<br>
dbconnect.php - database connection
<br>
<br>
registration.php - As part of the session, we process the data entered by the user. If this user is not yet registered, we send his data to the database using SQL query.(rus: В рамках сессии мы обрабатываем данные, введенные пользователем. Если этот пользователь еще не зарегистрирован, мы отправляем его данные в базу данных с помощью SQL-запроса.)
<br>
<br>
captcha.php - generates a captcha and displays an image
<br>
<br>
script.js - Checking the validity of the entered data (password and mail) on the browser side
<br>
<br>
logout.php - Logout button handler and clearing session with mail and password
<br>
<br>
![login1](https://user-images.githubusercontent.com/78618492/134232179-7ee8fd46-e632-4517-9eaf-698db610d532.jpg)
<br>
<br>
![phpmyadmin](https://user-images.githubusercontent.com/78618492/134232215-ad5d8565-8d9b-46a4-9a3a-c70b9c596924.jpg)
<br>
(В результате, введенные пользователем данные окажутся здесь.) As a result, the data entered by the user will be here.
