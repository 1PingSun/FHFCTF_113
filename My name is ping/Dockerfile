FROM php:7.4-apache

RUN apt-get update && apt-get install -y iputils-ping
COPY src/ /var/www/html/

EXPOSE 80