# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

A frontend mentor challenge to build an interactive comments section.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

Here's what it should look like on desktop:
![](./design/desktop-design.jpg)
And mobile:
![](./design/mobile-design.jpg)

Active states:
![](./design/active-states.jpg)

And an active modal:
![](./design/desktop-modal.jpg.jpg)
![](./design/mobile-modal.jpg)

### Links

- Solution URL: (https://mixchex.github.io/fementor-interactive-comments/)

## My process

- I setup a new React app. Often I setup Tailwind CSS, but this time I decided to leave it out and use the BEM class naming methodology.
- Then I added the data source, and created components that could be reused.
- Then focused on the visual side of the comments and responsiveness.
- Then I updated the parts of the components with real data.
- After building out the visual side, then I added the functions to add comments, reply and delete comments.
- Finally I added some simple and magical transitions and animations to add a little more personality to the interactive comments.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Interestingly I have not actively used the localstorage API before, but it was good to add this in to see the ways in which it could be used in cases like this.

I also realised that I enjoy adding fun animations and interactions to the products I work on and don't do it nearly enough.

## Author

- Website - Mike Cheshire (https://mikecheshire.com)
- Frontend Mentor - [@mixchez](https://www.frontendmentor.io/profile/mixchex)
- Twitter - [@mixchex](https://www.twitter.com/mixchex)
