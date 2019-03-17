#!/bin/bash
if [ ! -d /sys/class/gpio/gpio$1 ] ;then
  echo $1 > /sys/class/gpio/export
fi
echo out > /sys/class/gpio/gpio$1/direction
echo $2 > /sys/class/gpio/gpio$1/value