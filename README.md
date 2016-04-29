## Setup

Install ruby then:

```sh
gem install jekyll
```

And from within this project's directory:

```sh
jekyll server
```

And the site should then be running on `localhost:4000`

## Deploy

Run `./deploy.sh $REMOTE`. This will build the site and commit it
on the `gh-pages` branch, then push that to `$REMOTE`, where Github
will pick up the content. This will usually be:

`./deploy.sh git@github.com:richardbatty/good-technology-project.git`
