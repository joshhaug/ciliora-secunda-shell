#!/bin/bash


#======================================
#   Global Variables
#======================================
declare -a asset_dirs=( "background-assets"
                        "button-assets"
                        "menu-icons"
                        "misc-assets"
                        "overview-assets"
                        "panel-assets"
                        "widget-assets" )

tmp_dir=".tmp"

css_file="gnome-shell.css"

gresource_dest="../../gnome-shell-theme.gresource"


#======================================
#   Copy all assets into tmp_dir
#
#   Gresource doesn't seem to work well
#   when the assets aren't in one dir
#======================================

trap 'rm -rf $tmp_dir; exit' INT TERM EXIT

mkdir -p "$tmp_dir"

find "${asset_dirs[@]}" -type f -execdir cp -f {} "${PWD}/${tmp_dir}/" \;


#======================================
#   Modify urls in css file
#======================================

#
# Patterns
#
printf -v regex "%s\\|" "${asset_dirs[@]}"

regex=${regex%\\|}  # remove trailing "\|"

replace="resource\:\/\/\/org\/gnome\/shell\/theme"

#
# Create modified gnome-shell.css file
#
sed "s/${regex}/${replace}/" "$css_file" > ${tmp_dir}/gnome-shell.css


#======================================
#   Create gresource.xml file
#======================================

#
# Add header
#
echo "<?xml version='1.0' encoding='UTF-8'?><gresources><gresource prefix='/org/gnome/shell/theme'>" \
     > "${tmp_dir}"/gnome-shell-theme.gresource.xml

#
# Append the files to the xml file
#
for i in "${tmp_dir}"/*; do

    # Only loop over png's & svg's
    if [ "${i##*.}" != "svg" ] && \
       [ "${i##*.}" != "png" ]; then continue; fi

    echo "<file preprocess='to-pixdata'>${i##*/}</file>" >> "${tmp_dir}"/gnome-shell-theme.gresource.xml
done

#
# Close outer tags
#
echo "<file>gnome-shell.css</file></gresource></gresources>" >> "${tmp_dir}"/gnome-shell-theme.gresource.xml


#======================================
#   Create gresource file
#======================================

glib-compile-resources --sourcedir="$tmp_dir" \
                       --target="$gresource_dest" \
                       "${tmp_dir}"/gnome-shell-theme.gresource.xml


exit
