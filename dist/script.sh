#!/bin/bash

css_file=./atenas-compatible-variables.css

# I will suppose that each variable definition is alone on one line

for color_code_pair in $(grep '^ *--[a-zA-Z]*:' $css_file |
  sed -e 's/^ *--//' -e 's/; *$//' -e 's/: *//') ;
do
  color=${color_code_pair%#*}       # remove '#' and everything after
  code=${color_code_pair#*#}        # remove '#' and everything before

  # I will suppose the css lines have a similar structure

  # sed command below changes the color name into the hexadecimal code 
  sed -i "s/var(--$color)/#$code/" $css_file

  # sed command below deletes the variable definition 
  sed -i "/^ *--$color:/d" $css_file

done
