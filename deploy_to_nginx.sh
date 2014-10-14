#!/bin/sh

sudo cp ./app/index.html /usr/share/nginx/html
sudo cp ./admin/admin.html  /usr/share/nginx/html

sudo cp -R ./build/ /usr/share/nginx/html
sudo cp -R ./img/ /usr/share/nginx/html

