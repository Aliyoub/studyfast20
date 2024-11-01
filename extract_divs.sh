#!/bin/bash

# Input HTML file
input_file="input.html"

# Directory to store the output files
output_dir="div_output"
mkdir -p "$output_dir"

# Initialize a counter for naming the output files
counter=1

# Use awk to extract the content between each <div>...</div>
awk 'BEGIN{ RS="</div>" ; FS="<div[^>]*>"; } 
     NF>1 { print "<div>"$2"</div>" > "'$output_dir'/div_" "'$counter'" ".html"; '$counter++' }' "$input_file"
    #  NF>1 { print "<div" "'$2'" "</div>" > "'$output_dir'/div_" "'$counter'" ".html"; counter++ }' "$input_file"

echo "Extraction complete. Check the $output_dir directory."
