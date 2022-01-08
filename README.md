# suninthesky.github.io

Build the site in the `source` branch...

```
git checkout source
[make changes...]
JEKYLL_ENV=production bundle exec jekyll build
```

Then copy the files into the `build` branch...

```
git checkout build
cp -r _site/* . && rm -rf _site/
```

...and commit then push.

> Note: This approach is taken to use custom plugins, which are not currently supported by GitHub Pages.
