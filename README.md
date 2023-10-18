# Animal Scramble Word Game

![animal-scramble-word-game](<div align="center" video src=https://github.com/jeskodes/word-scramble/assets/86005120/2d755b80-05f5-4926-a310-b45db6c5571d></div>)

![animal_scramble_game2](https://github.com/jeskodes/word-scramble/assets/86005120/0aa9cb85-7f77-4769-bf94-7ad4ed7d64f4)

<img src="https://github.com/jeskodes/word-scramble/blob/main/assets/images/animal-scramble-word-game.gif">


[Pen B Wildlife Photography Workshops](https://jeskodes.github.io/milestone-project-1-jesk/) is a business website offering photography workshops in the New Forest, Hampshire, UK. The two main workshops offered are half day and full day walking photography workshops, where the customer joins a small group and they receive a tour of a specific area of the New Forest, Hampshire. The chosen tour area will have been selected to provide the best opportunities to photograph specific wildlife and/or landscapes. This will focus on opportunities to photograph:

- Deer, ponies, donkeys, pigs (all allowed to roam wild in the area).
- Flora and fauna.
- Birds, insects.
- Landscapes - woods, lakes, rivers.
- Seasonal events, such as deer rutting season or the yearly drift where ponies are rounded up so they can be health checked.

The main target audience will be amateur photographers, keen walkers and holiday-makers as the New Forest is a popular tourist destination in the UK.

The site can be accessed from this [link](https://jeskodes.github.io/milestone-project-1-jesk/).

## Design

### Research

- I carried out research into similar photography websites offering wildlife photography courses, workshops or safaris to get ideas for layout, functionality and styles.
- I carried out research into independent artist's websites to get an idea of how they showcased their art.
- I carried out research into website layouts that emphasised the use of images.
- I discussed the project with the photographer to get ideas for the content of the photography workshops.

##### Initial Findings:

- A carousel hero image is popular as this provides greater opportunies to showcase wildlife photos.
- Lots of websites provide an initial short summary of the workshop/courses on cards. There are links to see the full details of the course.
- Social proof in the form of reviews is popular - usually nearer the end of the page.
- Styling tends to be minimal with:
  - Black, white and one additonal colour scheme.
  - Crisp edges, or sometimes shadowing on cards.
  - There is minimal use of thick borders or border radius.
  - Serif fonts are currently preferred and provide a clean, low key but high quality overall feel to the design.

In the first stages of the design I knew that images would form a particularly important part of the site, as they were showcasing the photographer's work. It was important to decide on which images to use and then how to ensure that they could be inserted into the code causing the least issues with responsiveness, especially in terms of sizing. I have used and resized the real photographer's images with her permission. I aimed to keep things simple to reduce bugs with the images. I therefore have mainly resized the images to 500x500px for the main section and resized the hero images to 1268x512px. I chose the size of the main section images following research into the best sizes for images, see for example [tiny-img.com](https://tiny-img.com/blog/best-image-size-for-website/).

Starting with a Bootstrap 5 carousel template, I used Chrome dev tools to get the size of hero image and resized the images I would use to 1268x512px.

### Design

- The design to give both information about the product and to showcase the photographer's work.
- Black/dark grey and white/off-white colour palette. Good contrast for readability.
- No thick borders and minimal use of border radius; simplistic, clutter-free styling.
- Typeface for main text: a serif font - this is currently trending and there is also [guidance](https://www.siteimprove.com/glossary/accessible-fonts/#:~:text=These%20font%20types%20are%20mostly,decision%20is%20up%20to%20you.) that it is more accessible for those with dyslexia as the letters are more easily distinguishable.
- Typeface for navigating site: a sans serif font such as Tahoma or Verdana which are also rated as having good accessibility.
- Text: clear and concise with only necessary links.
- Images to be a large feature of the site.

#### Wireframes

I initially planned to start design from a desktop first approach. However, as the project developed it became clear I was working towards a mobile first approach. This is reflective in the media queries - most are `min-width` but some are `max-width`. Part of the reason this became mobile first was using Bootstrap carousel and navbar templates which are designed to be mobile first. In the future, I would be much more conscious of mobile first vs desktop first and would design based on a mobile first approach.

Wireframes can be found [here](https://github.com/jeskodes/milestone-project-1-jesk/tree/main/documentation/wireframes)

I have noted the main changes from the wireframes as the project was developed in the course of this readme and in commenting the actual code.

## User Stories and Features

#### User Story 1a:

1. As an amateur photographper.
2. I want to to be able to carry out a general search.
3. So that I can find companies offering Wildlife Photography Workshops.

#### User Story 1b:

1. As a holiday-maker visiting the New Forest.
2. I want to know what activities are available.
3. So that I can plan my holiday.

##### User Steps:

General search: SEO tags - photography, courses, wildlife, horses, nature, workshops, safari, Hampshire, Dorset, Wiltshire, New Forest, techniques, learn, holiday, groups, social, landscape photography, forests , woods, birds, deer, rut.

##### Features/Acceptance Criteria:

The website will have the above tags so that it can be found in searches.

#### User Story 2

1. As an amateur photographer
2. I want a choice of photography workshops.
3. So that I can decide if I want more information.

##### User Steps:

Easily navigate to product on page (workshops). Easily find more information on the workshops. Easily fill in a short form for more information.

##### Features/Acceptance Criteria:

There are links to the products (workshops) from the start of the webpage in the navbar then in the:

- Hero image.
- Introduction section
- Main section
- Click in and out of different workshops to compare.
- There is a quick and simple form where the user can provide their name and email and request more information.

#### User Story 3

1. As a customer considering buying a photography workshop.
2. I want to know more about the photographer and their work.
3. So that I can decide if I want to take part in a course.

##### User Steps:

Easily navigate to a section about the photographer. Easily navigate to a section or link showcasing the photographer's work.

##### Features/Acceptance Criteria:

- There is an about link in the navbar.
- The first section contains a picture of the photographer and a summary of who they are.
- There is a link to "find out more" where I can read more about the photographer's background and work.
- There is a link in the navbar that takes me to examples of the photographer's work.

#### User Story 4

1. As a customer with an interest in photography workshops.
2. I want more specific information about the workshops.
3. So that I can decide if I want to book/request more information.

##### User Steps:

Easily navigate to an overview of the workshops available. Easily navigate to more information about each workshop. Social proof in the form of the reviews from previous customers.

##### Features/Acceptance Criteria:

- There are reviews from previous customers.
- There are cards with brief summaries of the workshops available.
- There are links on the cards to find out more.
- There is a more detailed section about each workshop which includes:
- Duration of workshop.
- Examples of photographic opportunities.
- Price per person.
- If there are group reductions.
- Number of people per group.
- Transport.
- Food.
- Clothing and equipment needed.

## Technologies Used

- html and css
- VScode - Coding Editor.
- Chrome Dev tools
- [fontawesome](https://fontawesome.com/) for social media icons.
- [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/) for carousel and navbar templates.
- [github](https://github.com/) version control.
- [Repl:it](https://replit.com/) for initial code design.
- [Axe dev tools](https://www.deque.com/axe/devtools/) to test accessibility.
- [Webaim](https://wave.webaim.org/) WCAG Contrast checker.
- [W3C CSS Validation Service](https://wave.webaim.org/) to validate css.
- [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input) to validate html.
- [YouTube](https://www.youtube.com/) html and css tutorials.
- [postimg](https://postimg.cc/) for image hosting.

## Current Features

### Navigation Bar

Responsive, fixed navbar with links, initially to home, workshops, and prints/gallery of photographers work. The design changed over the course of development, and now includes links to Workshops, Contact, About and Social Media as these are more relevant to this product. The design of the navbar is slightly different on the sign-up form page and the response page to provide a button to go back to "Home".
The navbar is fixed and mirrored, with minor changes across all three html files, in this way the user doesn't need to click back to return to each page and can easily navigate to their desired section of the webpage. The navbar theme and hamburger menu are from a Bootstrap template. The following modifications have been made:

- The font color on the navbar has been changed so that all elements are the same colour, rather than one being initially in bold and selected.
- The links have been styled - see links section below.
- The text on the navbar is hidden on smaller screens and replaced with a hamburger menu.
- The search box has been removed.
- A social media link has been added with a dropdown menu.
- The buttons have been removed.

### The Hero Image

The Hero Image is a carousel, showcasing three of the photographer's photos. The carousel was chosen because research into similar photography workshop or photography safari webpages showed that there was often a carousel with images and this is a good opportunity to immediately present the user with ideas of the types of things they could photograph.
There is text overlaying the images providing basic information about the website:

1. What: Wildlife Photography Workhsops.
2. Where: The New Forest, Hampshire, UK.
3. Who: Pen B Photography.

In order to be responsive, the carousel text and images have been hidden using Bootstrap `d-sm-none` (≥576px and up) and replaced with a background image and text overlay. This has been done by adding an additional section which is hidden on all but xs <576px screens.

```
  <section class="d-block d-sm-none section--image">
    <div class="hero__text__sm">
      <h1 class="d-block d-sm-none header__text__sm">Wildlife Photography Workshops</h1>
    </div>
  </section>
```

Below are screenshots of the hero image on extra small and small screens and up.

![xs screens](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/hero_image_xs_screens400x628.png)
![sm screens and up](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/hero_image_sm_upwards400x587.png)

A Bootstrap carousel template was chosen for two reasons: firstly, it requires javascript which I am not proficient in and secondly because part of my aim with this project was to develop knowledge and skills using and modifying Bootstrap. The challenges of using a Bootstrap template carousel have been:

- I don't fully understand the inner workings of the carousel.
- Modifying parts of the carousel took some time and effort and often had knock-on effects on other aspects of the carousel that were unexpected.
- I initially started using a carousel template that used svg files rather than img files; this was problematic and after research and trial and error I eventually found an earlier version of the template which used img instead of SVG.
- I've noted in the code where I have modified the template, the main changes/addtions are:
  - Adding images and styling to make them responsive and scale correctly.
  - Stopping the carousel from scrolling immediately as the webpage loads as this was distracting.
  - Vertically and horizontally aligninig the positon of the text overlay and changing the colour and font.
  - Changing the top margin so that the images fit.
  - Removing the caption text.
  - Removing buttons.

##### Comparison of the original Bootstrap Carousel with Wildlife Photography Worskhops Carousel and navbar

![Bootstrap 5 carousel](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/bootstrap_5_original_template700x258.png)

![Modified Carousel](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/example_edited_bs_carousel_img700.png)

I initially modified the bootstrap template by hiding the text on xs and sm screens, however despite the images being responsive and scaling, they looked a bit narrow.
I then made a separate hero image with text overlay to be displayed just for xs screens, and hid the carousel entirely. In this way, just the main product headline of the site - "Wildlife Photography Workshops" is shown.

1. [Carousel Template](https://getbootstrap.com/docs/4.5/components/carousel/): Bootstrap 5 - with src SVG.
2. [Carousel Template](https://getbootstrap.com/docs/4.5/components/carousel/): Bootstrap 4.5 - with src img instead of SVG.

### Welcome Section

This section provides a photo and a brief introduction to the photographer, Penny; this was kept short as the webpage needed to be responsive so it would have taken up too much space on smaller screens. It was also kept short as the user's main objective visitng the site is to find out about the workshops being offered. There is a link to "read more" at the end of the introduction to the photographer which takes the user to the "About the Photographer" Section if they would like to read more.
This section is responsive and I initially styled it with flex to `flex-direction: row;` on larger screens and `flex-direction:column;` on smaller screens. In the end, the design of the section looked better as just `flex-direction: column;` so I targeted the responsiveness with padding and margins.

Below is the welcome card which the user first comes to, followed by the Meet the Photographer card which contains more information and is navigated to via a link from the welcome card or by scrolling past the information on the workshops.

![welcome section](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/bio__img_1_500x234.png)
![meet the photographer](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/bio__img500x227.png)

### Workshops Cards Section

This section has 4 cards each with a brief overview of the different workshops available. Each card has a different image which is taken by the photographer. The cards are also links which take the user to the main "Workshops" section. My research showed that cards are a popular feature to use to give the user information. The cards also presented an opportunity to learn more about and experiment with both grid and flex. I initially started off with a [youtube tutorial](https://www.youtube.com/watch?v=Aje9cXDzklk) on how to make cards using grid (credits below) - however, I found that for my purposes and the way I wanted the cards to respond, I eventually went from using grid to flex. This meant that the cards would wrap responsively without media queries. Challenges I found here were keeping a track of which element was the flex parent and which the flex child. I also found the cards were bigger than I wanted so I experimented with changing the height, font size, margins and padding to get them to a size I wanted. The cards are still bigger than aimed for and this is something that could be worked on in the future.

![workshop cards](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/workshop_cards.png)

### Workshops Details Section

- 4 simple full page cards composed of image h3 and p and centered text which list the features of the each workshop based on the user stories for the workshops.
- Internal links from the workshop cards to these section and links in this section to the register form page and back to the Workshops Cards.
- The design of this section was relatively simple and uses `flex-direction: column;` for all screen sizes.
- The responsiveness and layout of the text was the main development and design focus of this section.
- Devtools were frequently used to check and edit the margins of the longer text for different screen sizes.
- The main text was originally designed to for `text-align: center;` however, in practice it looked and read more easily as `text-align: right;`.

### About the Photographer Section

- Simple card with image of the photographer and information about: who the photographer is, their experience, knowledge and skills. More information about how the workshops are run and why the photographer runs the workshops.
- External links (in new tabs) to the photographer's youtube channel, flickr and the contact form.

### Embedded Youtube Clip

A youtube clip was embedded at the end of the page to give the user more insight into the area, the photographer and a general feel for the how the workshops will operate. This also provides the photographer with opportunities to showcase their knowledge and skills further. Having embedded Youtube clips once before, I was concerned about the sizing and positioning of the `<iframe>`; I was initially going to use flex to contain the youtube clip. However, following some research and with some trial and erro, I wrapped the clip in two divs; I was aware I needed to have a space for the clip to fit into and for it's sizing to be relative to in order to keep it under control. By using vw, percentages and auto I hoped this would keep the clip responsive - which it did. Note the `padding-bottom: 56.25%;` of the second div below - this is a code snipped I had used before and it worked and is from [stackoverflow](https://stackoverflow.com/questions/15844500/shrink-a-youtube-video-to-responsive-width).

```
/* Embedded Youtube */

.youtube__outer__box {
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;
}

.youtube--container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  width: 100%;
}

.iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.p__youtube {
  padding-top: 0.75rem;
  padding-bottom: 1rem;
  text-align: center;
}
```

### Register Page

Short, simple form where the user is required to input their name and email address and select from a drop down menu which workshop they are interested in. The form is overlayed on another example of the photographer's wildlife photos. The input boxes are styled to be transparent; Axe devtools were used to check the contrast is accessible. The name and email input boxes have `required` set so the form can't be submitted without them being filled in accurately.
When the user clicks submit they are taken to a response.html page which is almost identically coded to the register page, but with a different background image and the button is a link back to the main page.

![contact form image](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/contact_form_pg1000x464.png)

This was developed by styling the section using `display: grid` and the form `display: flex`. There was a bug where the form's edges were cut off on landscape smartphones at 650px. My initial fix was to add `height: 100vh` to the grid container then adjust the `margin-top` and `margin-bottom` properties by trial and error. This was finally redundant, as the grid container and flex container had been missing the `align-content: center;` styling and the grid container's margins weren't properly specified.

### The Footer

- Copyright information.
- Links to the photographer's social media sites (in new tabs).
- Link to the contact form.
- Link to workshops.

The footer was designed to be fully responsive, with a `flex-direction:row;` layout for desktops and a `flex-direction:column` layout for mobiles. In the end, due to time constraints, it follows just a `flex-direction:row;` format. It's fully responsive and this doesn't impact significantly on the final desktop rendering.

The original desktop mockup made on [repl:it](https://replit.com/@JessicaClark6/footer)

![Desktop Layout Design ](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/desktop_layout_footer_design.png)

The final rendering of the footer:

![Final footer layout](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/final_footer_layout.png)

### Additional Features

#### Internal Links

- Initially all links were styled as:

```
a:hover {
color: white;
text-decoration: none;
font-weight: bold;
}
```

This styling caused many design/UX issues; when hovering over the text, the links would enlarge and shift everything next to them.
Therefore, I began styling the links in groups.

In future I would carefully plan how I want the anchor links to be styled to keep there from being too many separate anchor link classes.

##### Nav Links and Footer Links a:hover:

- Styled to change color to white on hover.
- It was a little more difficult changing the nav links as they initially came with a Bootstrap navbar template.
- In future I would not use a Bootstrap template.
- Colour selection was important as the links were white on a dark background; it was important for accessibility
  to select another initial colour that had a high enough contrast and fit with the overall design.

##### Workshop Card Links:

- I made the whole cards into links, so that the user can click anywhere to be taken to the selected workshop.
- This intiially caused issues with the cards expanding and contracting when hovered over.
- I styled the button only and styled the actual whole card link to `text-decoration: none;`. This fixed this issue.  
   `:hover {
                                font-weight: bold;
                                }
                             `

##### Bio Sections and Detailed Workshop Sections:

- Here, I removed the hover effect for a more subtle, understated quality. The links are not as essential as in the other sections and I didn't want
  to bombard the user with more links than necessary.

### Additional Features/Modifications that could be added in the future:

- A responsive image gallery using either grid or flex; in this way images of varying sizes could be used.
- Making the workshop cards smaller.
- Social proof in the form of reviews: (<asides>) with images with reviews overlayed at the top or bottom of each section.
- A section where the photographer's prints can be purchased or links to an online shop to buy prints.
- The css classes became confusing as there were a lot of classes with the word "workshop" in them as well as lots of classes with "title" or "text"; I would simplify the classes using the BEM conventions.
- In the future I will continue to aime to follow the [BEM](https://css-tricks.com/bem-101/) (Block, Element, Modifier) naming conventions. Before beginning a new project I would read/watch more tutorials on naming classes.
- Greater use of flexbox; with more knowledge I would use flexbox to streamline the coding of the project.
- The Workshops cards could be made smaller to fit four onto 1200px screen.

## Testing

### Verification

### Responsiveness

The pages were tested for responsiveness across different devices using Chrome DevTools. Overall responsiveness is good from mobile devices up to desktops.

![Responsiveness grid](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/responsiveness_grid.png)

![Mobile](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/responsiveness%20iphonexr_ipadair.png)

![Desktop](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/desktop_responsiveness.png)

##### The pages were tested on a real iphone Air and iphoneSE.

- iphoneSE BUG: The bottom of the contact form was cut off in landscape mode.

![Bug landscape iphone SE](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/iphonese_landscape.png)

---

### Lighthouse

![Lighthouse score](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/lighthouse_score.png)

#### The site scored well on accessibility. It scored lowest on performance with concerns about lazy loading and the deprecating of images.

![](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/lighthouse_performance_score.png)

---

### Axe Chrome DevTools

![axe devtools](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/axe_devtools_report.png)

##### Axe DevTools highlighted 5 serious issues; these were all with the colour contrast of the links in the main section of the webpage.

##### These were fixed using the [webaim](https://wave.webaim.org/) WCAG Contrast checker.

![webaim contrast checker](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/webaim_contrast_passed_links.png)

---

### W3C Validation Services

![Validation results](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/W3C_validations_box.png)

## W3C CSS Validation Service

The [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) found 8 warnings and 1 syntax error.

The syntax error was: `flex-wrap:no-wrap`; this was changed to `flex-wrap:nowrap`.

The warnings were all for vendor extensions, e.g. -webkit-transform. I checked stack overflow and found that these are not classed as syntax errors. They will not affect the code and there is a lot of discussion about whether they should show up in a css validator. I checked the css and found that all of the warnings were linked to the carousel code snippet that I had used. I have not removed these in case there are knock on effects. I have taken into account the warnings.

![css validator](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/warnings_jigsaw_vendor_extensions.png)

## W3C Markup Validation Service

##### The [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input) was used to validate the html.

There were 5 warnings and 21 errors on index.html file.

These warnings were all _The document is not mappable to XML 1.0 due to two consecutive hyphens in a comment_, and were because I had used the BEM (Bock, Element, Modifier) naming conventions for classes, e.g. `class="workshop--section"`. I'm still grasping the syntax of the naming conventions, but had followed the guidance on [CSS Tricks](https://css-tricks.com/bem-101/). Having checked stack overflow I realised that the classes were in bits of code that I had commented out, and this was the cause of the warnings. I deleted the commented out code and fixed these warnings.

##### The errors included:

- _Bad value button for attribute type on element a: Subtype missing._
- Stray end tag.
- Unclosed element.
- Space in the path of a img src.
- _The element button must not appear as a descendant of the a element._
- _The frameborder attribute on the iframe element is obsolete. Use CSS instead._

##### Fixes:

- I changed the names of the jpg files with spaces in their names and updated the html.
- I deleted unusued commented out code that was not needed.
- I closed the element without a closing tag.

##### The error with the `a` tag wrapping a `<button>` element was in the workshops cards section:

```
     <div class="workshops--grid--wrapper">
       <div class="workshops--card">
         <a href="#workshop__custom-tours" class="workshop__card__content">
           <div class="img--card--autumn"></div>
           <h3 class="workshop--title">Create <br> Custom Tours</h3>
           <button class="btn--workshops" type="button" aria-label="button learn more"><span class="btn__ws__hover">Learn more</span></button>
         </a>
       </div>
     </div>
```

I attempted to change this, but it broke the structure of the cards. I have left this error in and this is something that I would fix in the future.

##### _The frameborder attribute on the iframe element is obsolete. Use CSS instead._

```
          <div class="youtube--container"><iframe class="iframe" width="560" height="315"
              src="https://www.youtube.com/embed/IfgwoXY5NnI" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              aria-label="Pen B video link relaxing woodland landscapes" allowfullscreen>
            </iframe></div>
```

The above error came from the pre-written code when copying the link from YouTube. At this stage the video works. I have left this error in and in the future would investigate how to use CSS instead of the `frameborder` attribute.

##### _Bad value button for attribute type on element a: Subtype missing._

```<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" type="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
```

This is the Bootstrap code for the carousel controls. I have not changed this as the controls work and I would be concerned about breaking the controls. In future I would learn how to add carousel controls from scratch.

##### Retest index.html using [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input):

After fixing the errors I could and leaving the errors discussed above the retest results were 7 errors, these were:

- The buttons wrapped in an `a` tag.
- The issue with the `frameborder` in the `<iframe>`.

---

## Features Testing

There was a bug during development where the internal links jumped to near the intended section, but it was not central on the screen.
Fixed: Added `html {scroll-padding-top: 5rem;}` to offset the space taken up by the fixed navbar.

The colour of the links in the main section had already been changed to meet accessibility contrast. In terms of useability they then became too dark and have now been changed again after checking the contrast with [Webaim](https://wave.webaim.org/) WCAG Contrast checker.

The `home` link from the footer was not working. Querying whether this could be linked to the added `scroll-padding-top`; this required further investigation.
Changed link to `<a href="index.html#home"></a>`; this worked then broke. Changed the home link to `index.html` and this worked. Query whether this relates to there being footers on the register and response pages also and `id="home"` on those pages too.

See results tables below.

![Features testing main page](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/test_features.png)

![Features testing contact form](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/contact_form_test.png)

---

## User Stories

The user stories for the workshops have been tested and overall, the webpage meets the acceptance criteria.

Please see user story validation below.

![user story 2 validation](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/user_story_2.png)

![user story 3 validation](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/user_story_3.png)

![user story 4 validation](https://github.com/jeskodes/milestone-project-1-jesk/blob/main/documentation/readmeimages/user_story_4.png)

## Deployment

This site was deployed using git, github and vscode. I chose to use vscode in order to become proficient using it.

I set up this project first setting up the folder and files using the command line on my laptop. I created an identically named repository on github.

I wanted to learn how to work with vs code and local and remote git repositories and followed this [freecodecamp tutorial](https://www.freecodecamp.org/news/create-and-sync-git-and-github-repositories/#scenario-2-remote-first) on syncing local and remote repositories using vs code.
Throughout the project I then used git push and and git pull commands to keep both repositories in sync after git status and git add.
I mainly synced repositories using vs code. I deployed the site here on github through the actions tab.

Please access the site on the following link [Pen B Wildlife Photography Workshops](https://jeskodes.github.io/milestone-project-1-jesk/)

## Credits

### Images

All images are copyrighted to Pen B Photos 2023 and used with full permission.

#### Content

![]()
![]()

Initial Bootstrap 5 Carousel Basic Template and rough plan for layout of page:
https://getbootstrap.com/docs/5.0/examples/carousel/

Bootstrap 4 Carousel Template - with captions - which I modified:
https://getbootstrap.com/docs/4.0/components/carousel/

Positioning of Text on Carousel - which I modified - code from:
https://forum.bootstrapstudio.io/t/positioning-of-carousel-caption/4727/2

Choice of typeface - accessibility:
https://fonts.google.com/knowledge/readability_and_accessibility/introducing_accessibility_in_typography

Choice of typeface - accessibility:
https://www.siteimprove.com

Choice of typeface - dyslexia:
https://medium.com/the-readability-group/a-guide-to-understanding-what-makes-a-typeface-accessible-and-how-to-make-informed-decisions-9e5c0b9040a0
_Serif style typefaces can enable more fluid readability for advanced readers due to the additional disambiguated letter shaping_

Checking contrast of text:
https://webaim.org/resources/contrastchecker/

BEM
https://css-tricks.com/bem-101/

Flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Table of Best Image Sizes (px) for website:
https://tiny-img.com/blog/best-image-size-for-website/

Optimising Images for websites:
https://www.jimdo.com/blog/optimize-website-images-for-better-design-seo/

Uploading and linking images:
https://postimg.cc/VS2WqNmn

Tutorial on using Flexbox to create card design layout (Welcome card)
https://getflywheel.com/layout/flexbox-create-modern-card-design-layout/

Youtube tutorial on creating responsive profile cards using grid:
https://www.youtube.com/watch?v=Aje9cXDzklk

Youtube tutorial on creating responsive profile cards using flexbox:
https://www.youtube.com/watch?v=LQojwgg11z4&t=197s

Freecodecamp article on web layouts using CSS and Grid:
https://www.freecodecamp.org/news/web-layouts-use-css-grid-and-flex-to-create-responsive-webpages/

Tutorial on aligning text and image side by side:
https://www.youtube.com/watch?v=Q0KNxDpt71c&list=WL&index=2&t=101s

Tutorial on creating a responsive registration form:
https://www.youtube.com/watch?v=okbByPWS1Xc

Guidance on how to resize and make responsive embed youtube:
https://stackoverflow.com/questions/15844500/shrink-a-youtube-video-to-responsive-width

Tutorial on how to make a youtube video responsive:
https://www.youtube.com/watch?v=9YffrCViTVk

Tutorial on CSS Aspect Ratio video:
https://blog.webdevsimplified.com/2020-12/responsive-css-video

Guidance on adding scroll-padding-top property to offset fixed navbar:
https://getpublii.com/blog/one-line-css-solution-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header.html

Tuturial on creating a responsive footer:
https://www.youtube.com/watch?v=qA6Yvu41dpo

Tutorial on how to create and sync git and github repositories:
https://www.freecodecamp.org/news/create-and-sync-git-and-github-repositories/#scenario-2-remote-first

### Command line:

https://www.theodinproject.com/lessons/foundations-git-basics

### Credits

- [JavaScript Create 5 Fun Word Games by Laurence Svekis](https://www.udemy.com/course/javascript-games/learn/lecture/22686281?start=120#content)
- [Word Scramble Game Youtube Tutorial by Coding Nepal](https://www.youtube.com/watch?v=4-s3g_fU7Vg&t=992s)
- [Word Scramble Game Tutorial by Coding Nepal](https://www.codingnepalweb.com/word-scramble-game-html-javascript/)

- [Youtube Tutorial: 3 Ways to code Rock Paper Scissors with Ania Kubow](https://www.youtube.com/watch?v=RwFeg0cEZvQ)

- [Git Hub Repo - Learning how to add reset button and replay](https://github.com/mariaalouisaa/pokemon-top-trumps/blob/main/index.html)

- [Tic Tac Toe Tutorial - Research how to refresh game](https://www.youtube.com/watch?v=JsErMawwdOw)
- [W3 Explanation of keyboard and mouse events: w3.org](https://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-TECHS-20071102/SCR20.html)

- [JavaScript Keyboard Events Tutorial: the keyup and keydown Event Listeners](https://www.youtube.com/watch?v=OiYmhhe6Inc)

- [Youtube Tutorial Event Handlers and Event Listeners](https://www.youtube.com/watch?v=xogpUfUL5kY)

- [Tutorial Listening to Multiple Events in Vanilla JS](https://gomakethings.com/listening-to-multiple-events-in-vanilla-js/)

- [Animals Array](https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a)

- [Colour Palettes and Hex Codes: coolor.co](https://coolors.co/)

- [Background Image from iStockPhoto.com](https://www.istockphoto.com/)

- [Make Reload of Page Smoother with CSS Animation and @keyframes: geeksforgeeks.org](https://www.geeksforgeeks.org/how-to-create-fade-in-effect-on-page-load-using-css/)

- [JSON Formatter - Convert Array to JSON](https://jsonformatter.curiousconcept.com/#)

- [Create new button from tutorial: www.3schools.in](<https://www.3schools.in/2022/08/how-to-create-button-with-id-js.html#:~:text=Use%20the%20createElement()%20method%20and%20set%20in%20a%20variable,an%20id%20to%20that%20button>)

- [Hex Colors from Background Image: imagecolorpicker.com](https://imagecolorpicker.com/)

- [Validating JSON Object: jsonlint.com](https://jsonlint.com/)

- [Favicon Icons: favicon.io](favicon.io)

- [JavaScript Linting: jshint.com](https://jshint.com/)
