## Database

#### Setup docker container
docker run --name some-mariadb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=test -e MYSQL_PASSWORD=test -d mariadb

#### Install Vocabulary database
Run Vocabulary.sql script