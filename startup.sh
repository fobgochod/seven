#!/bin/sh
# build image
docker build -t fobgochod/fobgochod:1.0.0 .

# run container
docker rm -f fobgochod
docker run -idt --restart=always --privileged=true --name fobgochod \
-p 7001:80 \
fobgochod/fobgochod:1.0.0