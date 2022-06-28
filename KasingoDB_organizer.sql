CREATE DATABASE IF NOT EXISTS Kasingodb
CREATE TABLE Kasingodb.UserAccount(
    userId int unique Auto_Increment primary key,
    phoneNumber varchar(20) not null,
    userName varchar(250),
    accountBalance money default 0,
    Accountpassword varchar(250),
    validCode varchar(10) default null,
)

ALTER TABLE Kasingodb.UserAccount Auto_Increment = 1;