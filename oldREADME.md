# FrontierMediaWebsite

## Codebase holding all content for the Frontier Media Website

Consists of HTML, JS, CSS. Built from Scratch, because Adobe Muse is now deprecated from the Adobe CC.
Modelled after the given Adobe Muse theme that was pre-built, however the cross-bar animation has been removed to reduce website lag. (Might end up remodelling it with Anime.js).

# There was an 82% file size reduction from the Adobe Muse template to my code.

## Youtube Video showing current progress just in case you don't want to mess with github and setting up the site

- Current Iteration: [v_3](https://www.youtube.com/watch?v=wPpUmSpcw-s&feature=youtu.be);
- Old Iteration: [v_2](https://youtu.be/riF0PuFMPIA);
- Old Iteration: [v_1](https://www.youtube.com/watch?v=w-Len1zu1A8&feature=youtu.be).
- Old Iteration From Adobe Muse : [Old (ADOBE MUSE)](https://www.youtube.com/watch?v=4EKCu1gtZpI&feature=youtu.be).

# CURRENT BUG LIST/IMPLEMENTATIONS LEFT

- ✔️IMPLEMENTATION: Get all content down, then style
- ✔️IMPLEMENTATION: Create Landing Page
- ✔️IMPLEMENTATION: Make Landing Page fully responsive
- ✔️IMPLEMENTATION: Create NAV Desktop
- ✔️IMPLEMENTATION: Make NAV Desktop fully responsive
- ✔️IMPLEMENTATION: Create NAV Mobile
- ✔️IMPLEMENTATION: Create Stats Section about the channels
- ✔️IMPLEMENTATION: Make Stats Section fully responsive
- ✔️IMPLEMENTATION: Photoshop Headshot photos of team members to be consistent
- ✔️IMPLEMENTATION: Create Who We Are Section
- ✔️IMPLEMENTATION: Make Who We Are Section fully responsive
- ✔️IMPLEMENTATION: Create What We Offer Section
- ✔️IMPLEMENTATION: Make What We Offer Section fully responsive
- ✔️IMPLEMENTATION: Create Meet The Team Section
- ✔️IMPLEMENTATION: Make Meet The Team Section fully responsive
- ✔️IMPLEMENTATION: Contact Us Section
- ✔️IMPLEMENTATION: Make Contact Us Section fully responsive
- ✔️IMPLEMENTATION: Format all text on each media break point for responsiveness
- ✔️IMPLEMENTATION: Animate each section
- ✔️IMPLEMENTATION: Create comments to guide Cameron through code

### Cameron, here are the instructions for if you want to see the website before you host it on your hosting service.

1. Install Visual Studio Code from Microsoft [VSC](https://code.visualstudio.com/download).
2. Once opened, find the extensions tab on the left (If you don't see it hit CTRL + B. This will slide out the tab bar on the left).
3. Search up live server in the extension market and install the one from Ritwick Dey
4. Once that's installed it should enable it.
5. Hit the terminal tab on the top and use the terminal to clone the repository on [Github](https://github.com/Wundrfull/FrontierMediaWebsite). (You can also download the ZIP file)
6. Once you've downloaded the website, right click on the index.html file and there should now be an option to "Open live server".
7. This will open in your default broswer (You might have to set this up, but most likely it will already be set).
8. This will preview the website on your computer :) Then you can take pictures and send me updates/changes that need to be made.

### Code General Explanation:

Overall the main page is "index.html". There are Javascript and CSS files attached to this html file. Javascript helps animate different parts of the web page. The CSS files add "style" to the web page. Under the folder "style" there are two other folders, one for CSS and one for SCSS. SCSS is basically CSS, but formatted nicer. SCSS transform into CSS and that CSS file is attached to the "index.html" file.

Comments in html are formatted like this: <!-- ->
Comments in CSS are formatted like this: /\*\* \*/

The main html file is broken down into sections marked with the "<section>" tag. Each section has a attribute called a "class" with a name. The descriptive class names match the sections on the web page.

The term, "card" refers to a very common design technique that makes things look like playing cards on a website. They most things have wrappers, which is another set of code that contains the card code. This is so you can style the cards as a whole and the inner card code separately.

### Code Snippet Explanation:

1. data-aos stuff inside <div> tags are animation settings from animate on scroll library. You can find out more options from here: [AOS](http://michalsnik.github.io/aos/).

2. odometer stuff for the statistics is found here: [odometer](https://github.hubspot.com/odometer/docs/welcome/). If you want to change the number manually you need to go to the file "odometerTrigger.js" (NOT "odometer.js") under the folder "js". If you change it on the html file, it won't do anything because the script changes it manually. I've written notes in that file too.

If you want the statistics to be live, that can be done. However I would need you to sign up for youtube api feature. Then you/I could write a script that sums up the numbers across all the different channels that we are support and add them.

### JAVASCRIPT FILE GUIDE

- main (Allows the mobile side nav to pop-out)
- odometerTrigger.js (Where you update the statistic numbers on the web page).

- plugins.js (Don't need to worry about)
- odometer.js (Don't need to worry about)
- jquery-3.4.1.min.js (Don't need to worry about)
- modernizr-3.8.0.min.js (Don't need to worry about)

### CSS & SASS/SCSS FILE GUIDE

I've written some notes in the SCSS. If you want to change the styling, you can either navigate through the .css files. If you go this route (it's tougher because its auto generated from SCSS) then you will want to look at primary.css only. I would suggest styling through the SCSS, because it's what I've coded and I have written notes for you. The only down side to the SCSS, is that you need to compile it. If you're not afraid of the terminal, you can go here to learn more about [SASS/SCSS](https://sass-lang.com/). SCSS helps format CSS and much more.

The styling is compact, so everything is contained within itself. The best way for me to explain it is for me to have you look at the html code and scss code side by side. They are coded very similarly, so there will be a section tag, then there will be a container and within that container is the content.

Classes: class in html with be formatted like this: class="testClass", this can be found in the scss/css as ".testClass"
ID's: id's in html will be formatted like this: id="testId", this can be found in the scss/css as "#testClass"

So in the SCSS, "primary.scss" is the main file. The other files with underscores, example:"\_section.scss" are called partials. These are linked to the "primary.scss" file and when the primary file is compiled, all of the partials are compiled too. The variables file contains stuff about colors. If you find the variables with "$" in front of them, example "$offWhite", then the partial file called "\_variables.scss" is where it's coming from.

\_section.scss is the main styling file you should be looking at. It's broken down into similar sections like the index.html file, so that it's easy to understand what style code is affecting which html code.

@media (min-width: XXXpx) - These are to make the website responsive. So the first styling is coded for mobile first. Then it goes up to tablet, example "@media (min-width: 768px)". This means anything with a minimum width of 768px (ipad size and above) will be styled this way (code in this section). Then it goes up to 1000px, and anything that's 1000px and above, style it this way (code in this section).

### HOPE THIS HELPS :) IF YOU NEED HELP, DISCORD DM ME
