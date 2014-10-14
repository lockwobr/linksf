#!/bin/sh

# install rake, assumes ruby is installed
gem install rake

# install node and npm
sudo yum install nodejs npm --enablerepo=epel -y

#install grunt
npm install grunt@v0.4.5

#install sass
gem install sass -v 3.4.3

# update python to 2.7 for parse
# http://www.lecloud.net/post/61401763496/install-update-to-python-2-7-and-latest-pip-on-ec2

sudo yum install python27 -y

# upgrading python 2.6 to 2.7

sudo mv /usr/bin/python /usr/bin/python.old
sudo ln -s /usr/bin/python2.7 /usr/bin/python
sudo cp /usr/bin/yum /usr/bin/_yum_before_27 
sudo sed -i s/python/python2.6/g /usr/bin/yum 
sudo sed -i s/python2.6/python2.6/g /usr/bin/yum 


#install parse

curl -s https://www.parse.com/downloads/cloud_code/installer.sh | sudo /bin/bash

# install bundler

gem install bundler

#install s3cmd

sudo yum --enablerepo epel-testing install s3cmd -y

git clone https://github.com/zendesk/linksf.git

cd linksf

cp .env.example .env

echo "edit .env with keys"

npm install

sudo npm install -g grunt-cli

bundle

grunt

cd server && parse deploy && cd ..

