# suninthesky.github.io

My personal website

## Deployment

Build the site in the `source` branch...

```
JEKYLL_ENV=production bundle exec jekyll build
```

Then copy the files into the `main` branch...

```
cp -r _site/* . && rm -rf _site/
```

...and commit then push.

Note: This approach is taken to use custom plugins, which are not currently supported by GitHub Pages.
