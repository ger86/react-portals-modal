# ⛩ React Portal: Modal

## Description

In this project I want to show you how we could use the **API Portals** of React to create modal windows over our applications.

**React Portals** provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

As the documentations states, React Portals could be useful when a parent component has an overflow: hidden or z-index style, but you need the child to visually “break out” of its container. For example, dialogs, hovercards, and tooltips.

## You will learn

- How to create a modal using `ReactDOM.createPortal`

- Seeing how the events propagate to the parent component that creates the portal although the DOM hierarchy was different because of the portal. 

## Run the project

Use `yarn start` to run the app in the development mode and open http://localhost:3000 to view it in the browser.

## To read more

- [React Portals documentation](https://reactjs.org/docs/portals.html)
- [React Portals. Una introducción](https://medium.com/@ger86/react-portals-una-introduccion-29c296324334)

