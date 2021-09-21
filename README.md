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
registration.php - As part of the session, we process the data entered by the user. If this user is not yet registered, we send his data to the database using SQL query.
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
