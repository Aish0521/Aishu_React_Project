P - Practice projects

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
   related projects: expense_tracker_project, practice_project

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
    related projects: expense_tracker_project

5- Conditional Contents

1. keys
2. using state to display conditional contents
   related projects: expense_tracker_project

6- Debugging

1. check console errors
2. browser breakpoints
3. react dev tools
   related projects: course_goals_project_altered

7- Styling

1. styled components
2. css modules
   related projects: course_goals_project, investment_calculator_project (P), add_user_project (P)

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
   related projects: add_user_project

9 - Side effects/ effects using reducers / context API

1. ![Alt text](side_effect_defn.png)
2. useEffect - useEffect(() => {//function},[dependencies])- specified code in function runs only when dependencies change not when our component re render cycles
3. useEffect function runs after component re evaluation (render cycle) and also only if dependencies changes
4. so useEffect is helpful in data fetching which is also a side effect
5. can omit 'setFunctions' because it will stay the same in component re render cycles, but should add other var dependencies.
6. useEffect cleanup - can use this to cleanup the useEffect function before it starts running (eg) debouncing // this cleanup function only starts running from 2nd time, not on first side effect.
   cleanup runs when our componnet unmounts from DOM
7. useEffect(()=> {}) //rerenders on every time the component function re runs; useEffect(()=> {}, []) // will execute only on first time the component mounted; useEffect(()=> {},[dep]) // rerenders on the dependencies state changes; cleanup executed with empty dep array when component unmounts; cleanup executed with dep executes before useEffect function fro 2nd time
   depndencies - we can omit browser API values (setTimeout), state updating fns (setDemo)
   related projects: login_page_project
8. useReducer() - more powerful state mgmt

- complex states whicn belong together useReducer can be used
- when we update a state with the value of another state using useReducer is preferred
  (Note: if we need to update same state with prevState we can use function form ie,
  setsomeFunction((sameFunprevState)=>({ ...sameFunprevState})) )
  ![Alt text](useReducer_concept.png)
- reducer function can be created outside the component fun
- In useEffect try to give specific values as dependencies, Also in nested objs try to give specific values bcoz if we give whole obj it will re render for ANY property of someObject changes - not just the one property
  related projects: login_page_project_altered

9. React context: In Bigger apps sometimes we don't need a prop in a component but may need it, but we might need to pass prop anyways for forwarding the prop which is needed in different component thus leading us to create large prop chain, here react context can be used to avoid prop chaining/ prop drilling

- context - component wide state; context can be anything (eg string) but often we use objs
- We have to provide & consume it //after creating context
- providing - wrap components in which we need these context values //any components which are not wrapped cannot listen; after giving provider all children and children of children components will have access to the context
- listening/ consuming - there are 2 ways
  If there is a default value we don't even need a provider can consume it directly, but if have a changing value we need a provider
  (1) using <context.Consumer>{(ctx)=> {return <>{ctx.name}</>}}</context.Consumer>
  <context.Provider value={{name: 'aish'}}> </context.Provider>
  (2) useContext hook - const var = useContext(ContextName)
  can pass values/ functions also
- but can avoid using context to pass values to direct components
- for specific cases can use context
  ** should add all values initialising**
  we have limitations in context, context is great for state mgmt across apps/ components but for eg if we have a reusable btn for login and logout we cannot config a particular state like ogin or logout, only one values can be assigned using context, so in this configs case only props can be used
- its good for low freuency useCases like auth, but if state changes freuently ie eevrey 2-3 sec this is not optimised for that
  //In the end to avoid long prop chain this is worth to use
  related projects: login_page_project_altered

10. rules of hooks:
    ![Alt text](rule_of_hooks.png)

11. useRef and useImperativeHandler (not recommended but can be useful in controlling focus, scroll)(not making changes through state but through programmatically), forwardRef
    usecase - to focus a input when the field is invalid/ empty onclcik of something
    related projects: login_page_project_altered

10 - food order app project
bind mtd ensures pre configure what arg we are going to get when our function is executed, this is needed when we need to ensure we want to pass a particular value
related projects: food_order_app

11 - BTS of React & optimizations

1.  Virtual DOM diffing
    React - only cares about component (props, states, context) and lets Real DOM know if anything needs to be changed on screen
    React gives info on how the component tree looks like currently and how it should look like after state update to React DOM
    Now React DOM receives this differences and manipulates the real DOM so that it matches the virtual DOM / snapshot

2.  Re evaluating components !== re rendering DOM
    components - re render when there is changes in props, states, context
    real dom - re render when there is differences only in component tree b/w current and expected snapshot

3.  All the child components re renders by default if it's parent component re renders
    React.memo(componentName) can be helpful in optimizing renders, as memo checks the props of component given in argument and compares if the props changed from previous render and only if the value changes it re renders

    using 'memo' can itselff cause some performance hit sometimes as now react needs to store prev props value for comparison, so we should avoid using memo for all components and can use onlt if a component doesn't need more re renders or component which re renders more component tree

    There is a catch in memo, it only works properly for primitives ie for example if we consider a button component with 'onclick' prop which is a function (obj in js), so memo doesn't catch that function as same function ut will consider as different function which does the same thing

    Here we can use useCallback to save the objs in a react internal storage by below logic
    const obj1 = {}
    const obj2 = {}
    obj1 === obj2 //false
    obj2 = obj1
    Now obj1 === obj2 //true

    And now memo can do its work in objs too

    Dependencies in useCallback is needed because in case if we have closures we should add that value as dependencies so that useCallback will work as expected // if not added useCallback wil think there is no change in function and the function won't work properly

4.  React only create state var (useState) once ie duringfirst time component rendering. so
    during component re evaluations its not created again. It just updates that state as needed
    As long as the component is attached to DOM state s only updated not re created newly

    Now state updates happens through state scheduling as there could be some other performance intensive tasks that small state updates, so there is a change we might get wrong values (may get last time state schedule value instead of last time re render value), so only its recommended to use 'function form' ((prev)=> prev) incase of prev snapshot or can also use useEffect with dependencies to get state updates incase of states which depend on other states

    State batching - If we have two line of state updates one after another, react combines them and schedules them in a sync manner ie batch them and does the state update. therefore it re runs only once even if a component has many states

    useCallback - memoizing (storing) functions
    useMemo - memoizing other kinds of data

    same issue of performance getting a hit may happen as it will store the prev value and do comparison, so should use these in needed places only

related projects: react_optimization_project

12 - Class components
Only class components were able to handle side effects, state... before react v16.8
After v16.8 react hooks were introduced and using that we can handle state, side effetcs now

class based and functonal components can work together (eg) one comp can be class and another comp can be functional and our app will still work

methods can be defined as
class myClass {
myMethod () {

}
}

state:
can be defined using constructor and our state will always be an obj

instantiation (through constuctor) happens when react sees that we use that component being used like <MyComp />

and state have to grouped in this.state={}
can access state using this.setState() //setState also takes only obj
unlike useState hook the state will not be overridden, it will only be merged
(eg) this.state={
first: 'one',
second: 'two'
}
Now during calling setState to update 'first', this one will only be updated, 'second' will remain the same
Also on this.setState((st)=> return {
prop: st.val
}) //if we pass a func like this we should return the value also as an obj
In useState is overidden whereas in class its merged

when we call a constructor in a class and we extend it to another class we should also define a super constructor

life cycles: componentDidMount(), componentDidUpdate(), componentWillUnmount()
Context: we can use Consumer or static contextType
In useContext we can call multiple contexts multiple times in single component but here we cant use it like that or should wrap into another component and use it

class comp is preferred if we are going to work on error boundaries - componentDidCatch

related projects: class_based_react_project

13 - Sending Http Requests (e.g. Connecting to a Database)
We connect to DB through backend
We connect to backend (REST API) using HTTP req
We shouldn't access DB through react FE bcoz it will be compromising your data and important credentials might be exposed
Usuallt FE is only build using React but full stack is also possible using frameworks like Next JS, Remix

fetch, async await, loading states, handling errors, GET, POST, PUT, DELETE
every async fh will yield a promise
optimistic updating

convert js obj to json data - JSON.stringify()
related projects: http_reqs_project

14 - custom hooks

Rules of hooks
(1) should be called only inside react components or other hooks
(2) should only be on top level (shouldn't be inside if or for - shouldn't be nested)

custom hooks is needed in case we need to reuse a part which havs other react hooks or state manipulation in it
Need to use 'useHookName' naming convention as react imposes certain rules to those.
eg. we can't nest one hooks inside another hook - useState inside useEffect is not permitted

Now even if state updates inside custom hooks it will reflect so that state update in the react component itself
while calling custom hook in each component separate state snapshots for that particular component is created independently

await function will need a promise to be yielded
eg const var = await promiseFn

About bind - bind copies the function which we add bind to and preconfigures it. This can be used when we have functions which has parameters and if we need to preconfigure those so that js won't throw undefined error
eg, in a function which executes onClick of button and has args
function has bind because intrinsically in js function is an obj
fn.bind(if we use this keyword, first param, second param, default param in last(eg: event)
)
related projects: custom_hooks_project

14 - Handling forms

How to avoid page load on submission:

1. onSubmit - e.preventDefault() will default form behaviour of page load //preferred
2. assign type='button' for button html component

Get values:

1. using state
2. using refs // not recommended as resetting DOM values is not encouraged
3. Using native browser APIs - FormData(), we need name prop for that to be added in our input/ select fields
   const fd = new FormData(e.target)
   fd.get('email') //to get specific field
   fd.getAll('checkboxgroups') // to get group with same name value
   Object.fromEntries(fd.entries()) // to get all the values present

Can use button type='reset' to reset the form values, using useState also we can reset; stateVal='', in refs, curret.target.value = ''//not recommended; in FormData, event.target.reset()

Validation:

1. onkeystroke - we can achieve using onChange and state // but UX is bad as this doesn't allow the user to complete valid value (too early)
2. onFocus - we can achieve using onBlur //this alone might lead to error message displaying for long time (too long)

good UX - combining validation and keystroke and resetting validation on onFocus is good UX

3. onSubmit also can be achieved using onSubmit and state //adding validation on formSubmission alomg with onChange and onBlur can be a very good UX

4. we can use 'required' to implement simple validation too. we have required, minlength, maxlength unbuilt form validation attributes also to leverage. We can combine our custom validation and inbuilt form validations together also

Can use 3rd party libraries like formik, react hook form
