OutputFolder = docs
rmCommand = rmdir /S /Q
copyFiles =
copyCommand = xcopy /-I

build: clean
	mkdir $(OutputFolder)
	pandoc --standalone -f markdown md/page.md  -o $(OutputFolder)/page.html  --metadata title:Page
	pandoc --standalone -f markdown md/index.md -o $(OutputFolder)/index.html --metadata title:"Jackson Schuster"
	$(copyCommand) .well-known\microsoft-identity-association.json $(OutputFolder)\.well-known\microsoft-identity-association.json


clean:
	$(rmCommand) $(OutputFolder)