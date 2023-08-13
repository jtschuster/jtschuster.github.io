build: clean
	pandoc --standalone -f markdown md/page.md  -o page.html  --metadata title:Page
	pandoc --standalone -f markdown md/index.md -o index.html --metadata title:"Jackson Schuster"

clean:
	rm -f *.html