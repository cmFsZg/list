## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/cmFsZg/list/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown


# BuHu
## Header 2
### Header 3

- Bulleted
- List

1. https://user-portal.hub.ose.db.de/ 
2. List

**Bold** and _Italic_ and `Code` text

[BuHu User Portal](https://user-portal.hub.ose.db.de/) 


![Image](src)

# J I R A 

* [goBusinessHub JIRA](https://businesshub.jaas.service.deutschebahn.com/login.jsp)
* [bahn bonus service JIRA](https://corporate.jaas.service.deutschebahn.com)
* [goBusinessHub JIRA](https://businesshub.jaas.service.deutschebahn.com/login.jsp)


For more details see .

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/cmFsZg/list/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

# Onboarding 

* [PX proxy](https://github.com/genotrance/px)
* [keePass & keeAgent](https://github.com/mendhak/keepass-and-keeagent-setup)
* [Markdown] (https://guides.github.com/features/mastering-markdown/)

Dates
{{ bookmark | jsonify }}

{{ page.date | date: "%b %d, %Y" }}

# Data
see [data](https://jekyllrb.com/docs/datafiles/)

<ul>
{% for bookmark in site.data.bookmarks.children %}


  <li>
    <a href="{{ bookmark.typeCode }}">
      {{ bookmark.root }}
    </a>
  </li>
  
  {% for bookmark in bookmark.children %}

  <li>
    <a href="{{ bookmark.typeCode }}">
      {{ bookmark.root }}
    </a>
  </li>
{% endfor %}

  
{% endfor %}
</ul>

