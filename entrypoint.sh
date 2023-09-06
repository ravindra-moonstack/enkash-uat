#!/bin/bash
#cd /root/enkash-website-v2.0
nginx -g daemon off
pm2 start yarn --name app1 -- start -p 3000