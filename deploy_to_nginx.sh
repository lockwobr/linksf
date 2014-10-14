#!/bin/sh
	
# clean up

sudo rm -rf /usr/share/nginx/htmlbuild/
sudo rm -rf /usr/share/nginx/htmlimg/
sudo rm -rf /usr/share/nginx/htmlindex
sudo rm -rf /usr/share/nginx/htmlindex.html 
sudo rm -rf /usr/share/nginx/htmladmin.html 

#deploy

sudo cp ./index.html /usr/share/nginx/html
sudo cp ./admin.html  /usr/share/nginx/html

sudo cp -R ./build/ /usr/share/nginx/html
sudo cp -R ./img/ /usr/share/nginx/html

