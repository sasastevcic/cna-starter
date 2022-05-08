#!/bin/bash
clear
echo "Starting Script now....."

# save stdout to fd 3; redirect fd 1 to sprite.svg
exec 3>&1 >public/sprite.svg


echo "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewbox=\"0 0 24 24\">"
for i in ./components/atoms/Icon/svg/*.svg ; do
		echo "<symbol id=\"ico-$(basename ${i%.*})\">"
    echo "$(sed -e 's/^[[:space:]]*//'<<<"$(cat $i)")" | sed -e 's/<svg[^>]*>//g' -e 's/<\/svg>//g'
		echo "</symbol>"
done
echo "</svg>"

# Remove SVG
# echo "$(cat $i)" | sed -e 's/<svg[^>]*>//g' -e 's/<\/svg>//g'

# Remove and trim
# echo "$(sed -e 's/^[[:space:]]*//'<<<"$(cat $i)")" | sed -e 's/<svg[^>]*>//g' -e 's/<\/svg>//g'

# restore original stdout to fd 1
exec >&3-


echo "Sprite is generated"
