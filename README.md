# ruchristiansoncampus.github.io

## Development

1. Make sure Ruby and Gem and C / C++ are installed in your Development environment: https://jekyllrb.com/docs/installation/
2. Run `gem install jekyll bundler`
3. Run `bundle install`
4. Run `bundle exec jekyll serve --livereload`
5. Develop!

## Updating the Carousel Images

1. Upload the images you want in the carousel to the `img/carousel/` directory.
     - Try to make the name `*****` unique by adding the Semester and Year, e.g. `*****-Spring-2022`.
2. Move the images you do not want in the carousel anymore to the `img/archive/` directory.
    - If there is a name clash, you may need to rename the image.
3. Update the Carousel Entry Images:
    - Go to the `en/index.html` file
    - Go to the Carousel Entries Images section
        - The section will start with the comment `<!-- START: Carousel Entries Images -->`
        - The section will end with the comment `<!-- END: Carousel Entries Images -->`
    - Add / Edit / Remove a Carousel Image Entry
        - The `active` class should only be on the first carousel image
        - The `href` attribute defines the URL you will go to if the image is clicked.
            - If there is no URL you want to set, just remove the `href` attribute line completely.
        - The `src` attribute defines the path to the carousel image
    - The basic format of a Carousel Entry Image is this:
```html
<!-- The active class should only be on the first carousel image -->
<div class="item active"> 
  <!--
    The href attribute defines the URL you will go to if the image is clicked. 
    If there is no URL you want to set, just remove the href attribute line completely.
  -->
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSeZWd23I1_F21akaeOXzvV67uyW73Ts7l78rpp3XjWfqsallQ/viewform"
    target="_blank" rel="noopener noreferrer">
    <!-- The src attribute defines the path to the carousel image -->
    <img src="/img/carousel/Welcome-Spring-2022.png" class="main_img">
  </a>
</div>
```
4. Update the Carousel Entry Buttons:
    - Go to the `en/index.html` file
    - Go to the Carousel Entries Buttons section
        - The section will start with the comment `<!-- START: Carousel Entries Buttons -->`
        - The section will end with the comment `<!-- END: Carousel Entries Buttons -->`
    - Add / Remove Buttons `<li data-target="#index-carousel" data-slide-to="*"></li>` to the section so that the number of Buttons is the number of Images (notice the `*` that needs to be replaces)
        - The first entry starts at 0 and counts up, replace the `*` with the number entry it is in the list
        - Make sure the number of `<li data-target="#index-carousel" data-slide-to="*"></li>` entries match the number of carousel images
        - Make sure the first `<li data-target="#index-carousel" data-slide-to="*"></li>` entry has `class="active"`
    - The basic format of a Carousel Entry Button is this:
```html
<!-- The active class should only be on the first carousel button -->
<!-- The number in the `data-slide-to` attribute counts up from 0 -->
<li data-target="#index-carousel" data-slide-to="0" class="active"></li>
```
