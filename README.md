# Section 5 – Refactoring Code Smells in Practice

This is a CMPM 121 activity for practicing refactoring. I went through the code in `src/main.ts` and cleaned it up a bit.

## What I Found

So I looked at the code and there were a few issues. First off, the variables were pretty hard to read - like single letter variables `c`, `a`, `b`, `h` which you have to figure out what they mean, and shortened names like `bI`, `bD`, `bR`, `ctr` that aren't really clear either. 

Also there was a lot of repeated code in those three event listeners. All three of them (increment, decrement, reset) were doing the exact same thing - updating the counter display, changing the title, and switching the background color. Just copied and pasted three times basically.

The colors "pink" and "lightblue" were just sitting there in the code which isn't great if you want to change them later. And there was this `start()` function that literally just called `setup()` - totally pointless.

## What I Did

I renamed all those variables to something actually readable. So `c` became `counter`, `a` became `INCREMENT_BUTTON_ID`, stuff like that. And `bI` became `incrementButton` which makes way more sense.

I pulled out all that duplicate code into a function called `updateCounterDisplay()` so now all three event listeners just call that one function instead of repeating the same logic three times. Way cleaner.

I also extracted those color strings into constants - `ODD_COLOR` and `EVEN_COLOR` - so if you want to change the colors you just change it in one place.

Oh and I got rid of that unnecessary `start()` function since it wasn't doing anything useful, just called `setup()` directly instead.

The code does exactly the same thing as before, just way easier to read and work with now.

## Getting Started

If you're using Codespaces just run `deno task dev` and you're good to go.

If you're working locally, you'll need to install Deno first from the [official site](https://docs.deno.com/runtime/getting_started/installation/), then grab the Deno VS Code extension (do this after installing Deno though). Run `./setup-hooks.sh` to set up the pre-commit checks, then `deno task dev` to start the dev server.

The setup script sets up git hooks so it'll automatically format and lint your code before you commit, which is nice.

## Deployment

This is set up to automatically deploy to GitHub Pages when you push to main. Just go to your repo Settings → Pages and select GitHub Actions as the source. Then whenever you push to main it'll deploy automatically and you can see it at `https://<your-github-username>.github.io/<repository-name>/`
