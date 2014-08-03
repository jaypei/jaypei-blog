EMACS=emacs
SVN_DIR=~/work/sae_jaypei/1

.PHONY: build

clean:
	rm -f jekyll/_posts/*.html

build: clean
	${EMACS} -nw --kill --eval "(org-publish \"jaypei-blog\" t)"

sync: build
	@if [ ! -d ${SVN_DIR} ]; \
	then echo "No such svn directory ${SVN_DIR}."; exit 1; \
	fi
	rsync -av --delete jekyll/_site/* ${SVN_DIR}/
