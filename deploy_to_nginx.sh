#!/bin/sh

cd /usr/share/nginx/html

sudo mv index.html index-old.html 

sudo cp ~/linksf/index.html .
sudo cp ~/linksf/admin.html  .

sudo cp -R ~/linksf/build/ .
sudo cp -R ~/linksf/img/ .

