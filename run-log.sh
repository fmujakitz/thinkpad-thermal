#!/bin/sh

dmi=(
  sys_vendor
  product_version
  product_name
  ec_firmware_release
  bios_release
  bios_date
  bios_version
)

{
  echo -e "\n========== $(date) =========="
  # driver
  journalctl -k -b | grep thinkpad_
  echo "=========="
  ls /proc/acpi/ibm -l
  # info
  echo -e "\n=== dmi ==="
  for file in "${dmi[@]}"
  do
    cat "/sys/devices/virtual/dmi/id/$file"
  done
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
