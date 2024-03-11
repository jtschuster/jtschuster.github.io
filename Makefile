build: clean
	pandoc --standalone -f markdown md/page.md  -o html/page.html  --metadata title:Page
	pandoc --standalone -f markdown md/index.md -o html/index.html --metadata title:"Jackson Schuster"

clean:
	rm -f html/page.html
	rm -f html/index.html