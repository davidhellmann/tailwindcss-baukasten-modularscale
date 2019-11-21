# TailwindCSS Modular Scale Plugin

Modular scale is used in typography as a sequence of text sizes are harmonious to each other.

[Here's an article that explains the Modular Scale far better than I ever will](https://alistapart.com/article/more-meaningful-typography)

## Installation

```sh
# NPM
npm install --save-dev tailwindcss-baukasten-modularscale

# Yarn
yarn add --dev tailwindcss-baukasten-modularscale
```

## Usage

### Default configuration.
```js
module.exports = {
  // ...

  plugins: [
    require('tailwindcss-baukasten-modularscale')()
  ],
}
```

The default configuration:
```js
{
  sizesMobile = [
      { size: '-2--mobile', value: -2 },
      { size: '-1--mobile', value: -1 },
      { size: '0--mobile', value: 0 },
      { size: '1--mobile', value: 1 },
      { size: '2--mobile', value: 2 },
      { size: '3--mobile', value: 3 },
      { size: '4--mobile', value: 4 },
      { size: '5--mobile', value: 5 },
      { size: '6--mobile', value: 6 },
      { size: '7--mobile', value: 7 },
      { size: '8--mobile', value: 8 },
      { size: '9--mobile', value: 9 },
  ],
  sizesDesktop = [
      { size: '-2', value: -2 },
      { size: '-1', value: -1 },
      { size: '0', value: 0 },
      { size: '1', value: 1 },
      { size: '2', value: 2 },
      { size: '3', value: 3 },
      { size: '4', value: 4 },
      { size: '5', value: 5 },
      { size: '6', value: 6 },
      { size: '7', value: 7 },
      { size: '8', value: 8 },
      { size: '9', value: 9 },
  ],
  baseMobile = 16,
  ratioMobile = 1.1,
  unitMobile = 'px',
  baseDesktop = 20,
  ratioDesktop = 1.25,
  unitDesktop = 'px',
}
```

The generated code will use `.ms-` to avoid conflicts with the `textSize` utilities.

```css
.ms--2--mobile      { font-size: 13px; }
.ms--1--mobile      { font-size: 15px; }
.ms-0--mobile       { font-size: 16px; }
.ms-1--mobile       { font-size: 18px; }
.ms-2--mobile       { font-size: 20px; }
.ms-3--mobile       { font-size: 22px; }
.ms-4--mobile       { font-size: 24px; }
.ms-5--mobile       { font-size: 27px; }
.ms-6--mobile       { font-size: 30px; }
.ms-7--mobile       { font-size: 33px; }
.ms-8--mobile       { font-size: 36px; }
.ms-9--mobile       { font-size: 40px; }


.ms--2      { font-size: 13px; }
.ms--1      { font-size: 16px; }
.ms-0       { font-size: 20px; }
.ms-1       { font-size: 25px; }
.ms-2       { font-size: 31px; }
.ms-3       { font-size: 39px; }
.ms-4       { font-size: 49px; }
.ms-5       { font-size: 61px; }
.ms-6       { font-size: 76px; }
.ms-7       { font-size: 95px; }
.ms-8       { font-size: 119px; }
.ms-9       { font-size: 148px; }
```

### Custom configuration
```js
module.exports = {
  // ...

  plugins: [
    require('tailwindcss-baukasten-modularscale')({
      sizesMobile: [],
      sizesDesktop: [],
      baseMobile:  1,
      ratioMobile: 1.2,
      unitMobile: 'rem',
      baseDesktop:  1,
      ratioDesktop: 1.2,
      unitDesktop: 'rem',
    })
  ],
}
```

### To add other variants of the font sizes
```js
module.exports = {
  // ...

  plugins: [
    require('tailwindcss-baukasten-modularscale')({
      baseMobile:     16,
      ratioMobile:    1.333,
      variants: ['responsive'],
    })
  ],
}
```
