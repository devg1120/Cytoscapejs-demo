#node ./bin/cyto-nodejs.js -s demo/g1.json -d demo/g1.svg

for file in demo/*.json; do
	out=$(echo "$file" | sed "s/json/svg/g")
	echo "$file"
	echo "$out"
        node ./bin/cyto-nodejs.js -s $file -d $out
done

