# How to import back up to local database
## Before you start
1. Install [Mamp](https://www.mamp.info/en/downloads/) on your computer
2. Move folder you download from this github into mamp root folder. It shoud be in Applications ▹ MAMP ▹ htdocs by defult.
*you can't change any folder name or this won't work
## Import Database using phpMyAdmin
1. Open __Mamp__

2. Click start
<img width="648" alt="Screen Shot 2566-01-26 at 17 43 15" src="https://user-images.githubusercontent.com/122365726/214816748-104b50d9-ce02-4d15-852b-e604d2321022.png">

3. Go to Webstart that'll open automaticlly or click WebStart button

4. Click tools then go to __phpMyAdmin__

5. Go to Databases Section

6. Create new database, the database name must be the same name as the .sql file in this project

7. Click __Create__
<img width="1142" alt="Screen Shot 2566-01-26 at 17 52 32" src="https://user-images.githubusercontent.com/122365726/214818411-e2ade1fc-d775-436c-8083-2631b53c61b0.png">

8. Go to databases you created by clicking it's name on the left tab.

9. Click Import

10. Click upload a file then choose [DatabaseName].sql file in here
If you have porblem with file size follow the instrustion [here](http://localhost:8888/phpMyAdmin5/doc/html/faq.html#faq1-16)

11. If the upload is successful it'll show something like this.
[Uploading Screen Shot 2566-01-26 at 18.02.54.png…]()

12.Go to __Webstart__ page again. Click on __My Website__ then click on Project folder name. You should be able to access website and wordpress backend now.


