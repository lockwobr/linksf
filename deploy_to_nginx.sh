#!/bin/sh
	
# clean up

sudo rm -rf /usr/share/nginx/html/build/
sudo rm -rf /usr/share/nginx/html/img/
sudo rm -rf /usr/share/nginx/html/index
sudo rm -rf /usr/share/nginx/html/index.html 
sudo rm -rf /usr/share/nginx/html/admin.html 

sudo rm -rf usr/share/nginx/html/vendor


#deploy

sudo cp ./index.html /usr/share/nginx/html
sudo cp ./admin.html  /usr/share/nginx/html

sudo cp -R ./build/ /usr/share/nginx/html
sudo cp -R ./img/ /usr/share/nginx/html

mkdir -p  usr/share/nginx/html/vender/font
sudo cp -R ./vendor/font usr/share/nginx/html/fvender/ont
