PY=python
PANDOC=pandoc

BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/source
OUTPUTDIR=$(BASEDIR)/output
TEMPLATEDIR=$(INPUTDIR)/templates
STYLEDIR=$(BASEDIR)/style
BIBFILE=$(INPUTDIR)/references.bib

help:
	@echo "                                                              "
	@echo "Usage:                                                        "
	@echo "   make html       generate a web version                     "
	@echo "   make pdf        generate a PDF file  	                     "
	@echo "   make docx	  generate a Docx file                       "
	@echo "   make tex	  generate a Latex file                      "
	@echo "                                                              "
	@echo " 			           	                     "
	@echo " 						             "
	@echo "get local templates with: pandoc -D latex/html/etc            "
	@echo "or generic ones from: https://github.com/jgm/pandoc-templates "

pdf:
	pandoc "$(INPUTDIR)"/*.md \
	-o "$(OUTPUTDIR)/tfm.pdf" \
	-H "$(STYLEDIR)/preamble.tex" \
	--template="$(STYLEDIR)/template.tex" \
	--bibliography="$(BIBFILE)" 2>pandoc.log \
	--csl="$(STYLEDIR)/ref_format.csl" \
	--highlight-style pygments \
	-V fontsize=12pt \
	-V papersize=a4paper \
	-V documentclass=report \
	-V lang=spanish \
	-N \
	--pdf-engine=xelatex \
	--verbose

tex:
	pandoc "$(INPUTDIR)"/*.md \
	-o "$(OUTPUTDIR)/tfm.tex" \
	-H "$(STYLEDIR)/preamble.tex" \
	--bibliography="$(BIBFILE)" \
	-V fontsize=12pt \
	-V papersize=a4paper \
	-V documentclass=report \
	-V lang=es \
	-N \
	--csl="$(STYLEDIR)/ref_format.csl" \
	--pdf-engine=xelatex

docx:
	pandoc "$(INPUTDIR)"/*.md \
	-o "$(OUTPUTDIR)/tfm.docx" \
	--bibliography="$(BIBFILE)" \
	--csl="$(STYLEDIR)/ref_format.csl" \
	--toc

html:
	pandoc "$(INPUTDIR)"/*.md \
	-o "$(OUTPUTDIR)/tfm.html" \
	--standalone \
	--template="$(STYLEDIR)/template.html" \
	--bibliography="$(BIBFILE)" \
	--csl="$(STYLEDIR)/ref_format.csl" \
	--include-in-header="$(STYLEDIR)/style.css" \
	--toc \
	--number-sections
	rm -rf "$(OUTPUTDIR)/source"
	mkdir "$(OUTPUTDIR)/source"
	cp -r "$(INPUTDIR)/figures" "$(OUTPUTDIR)/source/figures"

.PHONY: help pdf docx html tex
