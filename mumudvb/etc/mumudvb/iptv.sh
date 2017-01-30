#!/bin/bash
wget -qO- http://192.168.128.10:474/playlist.m3u > /usr/share/nginx/html/iptv.m3u
wget -qO- http://192.168.128.10:482/playlist.m3u | grep -v EXTM3U >> /usr/share/nginx/html/iptv.m3u
wget -qO- http://192.168.128.10:490/playlist.m3u | grep -v EXTM3U >> /usr/share/nginx/html/iptv.m3u
wget -qO- http://192.168.128.10:498/playlist.m3u | grep -v EXTM3U >> /usr/share/nginx/html/iptv.m3u