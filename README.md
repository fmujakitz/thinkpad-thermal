![ThinkPad Thermal GNOME Shell Extension](images/screen.png)
![Panel indicator, Dropdown menu, Quick settings fan control](images/screens.png)

# ThinkPad Thermal GNOME Shell Extension
<b>Extension that displays thermal and fan status on ThinkPads</b>

## Requirements
- [thinkpad-acpi](https://www.kernel.org/doc/Documentation/laptops/thinkpad-acpi.txt), check contents of `/proc/acpi/ibm/thermal` and `/proc/acpi/ibm/fan`
- [lm-sensors](https://github.com/lm-sensors/lm-sensors), make sure to run `sensors-detect`
- `lscpu`
- `lsblk`

> [!IMPORTANT]
> `lm-sensors` is a hard dependency. If the `sensors` binary is missing the
> extension fails to enable with `Error: Util sensors not found` and shows up in
> the **ERROR** state. Install it first:
>
> | Distro | Command |
> | --- | --- |
> | Fedora | `sudo dnf install lm_sensors` |
> | Debian/Ubuntu | `sudo apt install lm-sensors` |
> | Arch | `sudo pacman -S lm_sensors` |
>
> Then run `sudo sensors-detect` once.


## Install

### GNOME Extensions Website

This extension is available on [GNOME Extensions Website](https://extensions.gnome.org/extension/986/thinkpad-thermal/).

[![ThinkPad Thermal on extensions.gnome.org](images/ego.svg)](https://extensions.gnome.org/extension/986/thinkpad-thermal/)


### Manually

You can clone this repo and build the extension manually with `yarn build:package`, and extract the generated archive from `dist` to your extensions path, ie. `~/.local/share/gnome-shell/extensions/`.


## Troubleshooting

- Make sure you have the required dependencies installed and configured
- **`Error: Util sensors not found` / extension stuck in `ERROR` state** — the
  `sensors` binary (lm-sensors) is not installed or not in `PATH`. Install
  `lm-sensors` (see [Requirements](#requirements)), run `sudo sensors-detect`,
  then re-enable the extension. The same applies if `lscpu` or `lsblk` are
  missing.
- Run `./run-log.sh` and check the generated logs `hw.log, err.log`
- Clone the repo, install dependencies, `yarn dev` and `./run-nested-shell.sh`


## Todo
  - [x] thinkpad-acpi
  - [x] lm-sensors
  - [x] lscpu
  - [x] lsblk
  - [x] Fan speed control
  - [x] Settings dialog
  - [ ] Multilang
