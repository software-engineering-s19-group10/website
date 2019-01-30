====================================
Project Idea: git Repository Hosting
====================================

.. meta::
  :viewport: width=device-width, initial-scale=1.0

The git Frontend idea revolves around creating a GitHub-esque service where
developers are able to access their project repositories remotely.

Base Features
-------------

* An intuitive interface to access files, commits, issues, wikis

  * Mobile-friendly towards certain features like viewing commits and files
  * A mobile-friendsly rendering of the README file
  * Easy access to repository settings

* A well-configured databse containing users, projects, issues, etc.

Novel Features
--------------

With this project, I would like to focus on adding features which intend to
improve the life of the developer and attract more contributors through
automation.

* Suggest possible "pain points" of the project based on issues

  * This is probably the most ambitious of the ideas, in that it may require delving into machine learning and/or natural language processing
  * Generate wikis when a topic is discussed
  * Allow issues to be linked to wikis using keywords

* Generate a method of discourse which blends well with bug tracking but
  allows discussion of features and habilitate brainstorming

  * Possibly creating a way to flow-chart ideas before working on them?

Technical Inspiration
---------------------

To act as starting points, I have found some open source web-based hosting
services which can help us get going.

`cgit`_
  web interface (cgi) for Git repositories, written in C

`klaus`_
  the first Git web viewer that Just Works™, written in Python

`gogs`_
  A painless self-hosted Git service, written in Go

.. _`cgit`: https://git.zx2c4.com/cgit/about/
.. _`klaus`: https://github.com/jonashaag/klaus
.. _`gogs`: https://gogs.io/

Libraries
---------

As it turns out, there is already a library which can be used to access
information about git repositories called `libgit2`_. As can be seen on
the right side of the homepage, there are bindings available to many
different languages. It is also used by two of the largest players in
git web hosting: GitHub and GitLab.

I have experimented with the Python binding for libgit2 called `pygit2`_ and
it is relatively straight-forward. The website documents the API quite well.

Alternatively, the web frontend klaus uses a Python library called `Dulwich`_
which completes a similar job as pygit2 but in pure Python.

.. _`Dulwich`: https://www.dulwich.io/
.. _`libgit2`: https://libgit2.org/
.. _`pygit2`: https://www.pygit2.org/

