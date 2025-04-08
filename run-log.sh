#!/bin/sh

{
  echo -e "\n========== $(date) =========="
  echo -e "\n=== acpi ==="
  cat /proc/acpi/ibm/thermal /proc/acpi/ibm/fan
  echo -e "\n=== sensors ==="
  sensors -A -j
  echo -e "\n=== cpu ==="
  lscpu -e=MODELNAME,SOCKET -J
  echo -e "\n=== disk ==="
  lsblk -o HCTL,MODEL,NAME,TRAN -dnJ
  echo -e "\n=== by path ==="
  ls -l /dev/disk/by-path
} >> hw.log 2>> err.log
