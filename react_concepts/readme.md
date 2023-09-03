1- Intro:
1. build process
2. React JS vs Vanilla JS
3. React projects using create react app/ vite

2- JS refresher:
1. ES6

3- Basic React concepts:
1. props
2. JSX
3. try to create reusable components

4- States
1. events, event handlers
2. useState hook (ALl React hooks works only inside functional components)
3. Adding forms, listening to user inputs
4. two way binding 
5. working with multiple states (with object)
6. update state based on prevState
7. child to parent (bottom-up)/ lifting the state up
8. derived and computed state
9. presentational (dumb, stateless) and non-presentational (smart, stateful) components
10. controlled and uncontrolled components

5- Conditional Contents
1. keys
2. using state to display conditional contents

6- Debugging
1. check console errors
2. browser breakpoints
3. react dev tools

7- Styling
1. styled components
2. css modules

8- Fragments, portals, refs
1. JSX component - should be wrapped in single element/ array(but with keys)/ fragments (preferred) (React Fragment logic - can create a component which returns props.children and use that also)
2. Portals
3. refs- helps in accessing other DOM elements & work with them.
Mostly used in i/p elements, but can be used for any HTML element 
we can get access to real DOM node (it is suggested that we don't manipulate DOM, we can read data though)
For read-only refs are best, if e have a case to change values state is better
4. state - controlled components (i/p in our case) as internal state is controlled by react
5. refs - uncontrolled components (i/p in our case) as internal state is not controlled by react
we are only using a regular DOM API to make changes in DOM node but with a react feature 'refs'