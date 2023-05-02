# Tailwind Dark Mode Theme Switcher

Basic demo on how to switch styles with Tailwind, handy for dark mode type purposes. 

Live preview: https://tailwind-theme-switcher.netlify.app/

This is a mashup of Adam Wathan's [Theming Tailwind Demo](https://github.com/adamwathan/theming-tailwind-demo), [Hella Simple Eleventy + Tailwind CSS Starter](https://github.com/huphtur/hella-simple-eleventy-tailwind-starter), and Katie Ball's [Quick switch Themes with javascript](https://gist.github.com/roachhd/698db516c17bb130c495/).

## To get started

1. Clone the repository:

    ```bash
    git clone https://github.com/huphtur/tailwind-theme-switcher

    cd tailwind-theme-switcher
    ```

2. Install the dependencies:

    ```bash
    # Using npm
    npm install

    # Using Yarn
    yarn
    ```

3. Start the development server:

    ```bash
    # Using npm
    npm run serve

    # Using Yarn
    yarn serve
    ```

    Now you should be able to see the project running at localhost:8080

## Building for production

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run build

# Using Yarn
yarn build
```

After that's done, check out `./_site/styles.css` to see the optimized output.