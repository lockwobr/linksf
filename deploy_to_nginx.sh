#!/bin/sh
	
# clean up

sudo rm -rf build/
sudo rm -rf img/
sudo rm -rf index
sudo rm -rf index.html 
sudo rm -rf admin.html 

#deploy

sudo cp ./app/index.html /usr/share/nginx/html
sudo cp ./admin/admin.html  /usr/share/nginx/html

sudo cp -R ./build/ /usr/share/nginx/html
sudo cp -R ./img/ /usr/share/nginx/html

