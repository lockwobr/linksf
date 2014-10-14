#!/bin/sh



sudo mv index.html index-old.html 

sudo cp ./index.html /usr/share/nginx/html
sudo cp ./admin.html  /usr/share/nginx/html

sudo cp -R ./build/ /usr/share/nginx/html
sudo cp -R ./img/ /usr/share/nginx/html

