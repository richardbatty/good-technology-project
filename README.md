## Setup

Install ruby then:

```sh
gem install bundler
bundle install # Installs gems from the Gemfile
```

And from within this project's directory:

```sh
jekyll server
```

And the site should then be running on `localhost:4000`

### Alternative: setup with [Nix](http://nixos.org/nix/)

```sh
nix-shell -A env shell.nix
```

will launch a shell with all the dependencies available.

## New post or page

We're using [Jekyll Compose](https://github.com/jekyll/jekyll-compose)

You can the following commands:

```sh
draft      # Creates a new draft post with the given NAME
post       # Creates a new post with the given NAME
publish    # Moves a draft into the _posts directory and sets the date
unpublish  # Moves a post back into the _drafts directory
page       # Creates a new page with the given NAME
```

Like this:

```sh
jekyll page 'My new page'
```

## Deploy

Run `./deploy.sh $REMOTE`. This will build the site and commit it
on the `gh-pages` branch, then push that to `$REMOTE`, where Github
will pick up the content. This will usually be:

`./deploy.sh git@github.com:richardbatty/good-technology-project.git`
