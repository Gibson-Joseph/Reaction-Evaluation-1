# 1.What is the use of refs?

It was introuced in React 16.3

Refs provide to access DOM nodes or React elements created in the render method.

# 2.How to create refs?

Refs can be created by using `React.createRef()`. It can be assigned to React elements via the ref attribute.

We can be use throughout the cource.

`useRef()` takes an initial value.

```react
const inputRef: RefObject<HTMLInputElement> = useRef(null);
 const countRef = useRef(0);

  useEffect(() => {
    console.log("useEffect call");
    countRef.current = countRef.current + 1;
    inputRef.current?.focus();
  });

  <input
        ref={inputRef}
        type="text"
        placeholder="Enter name..."
        value={value}
        onChange={handleChange}
  />
```

# 3. What are forward refs?

Ref forwarding is a technique for automatically passing ref through a component one of its children.

When a component is passed as parameter to create ref method it receives the ref attribute as its second parameter.

# 4.What are the different phases of component lifecycle?

## ComponentWillMount:

ComponentWillMount method is generly used in server-side rendering.

## ComponentDidMount:

component is rendered on the screen for the very first time.

## ComponentWillUpdate:

The method invoked immeditaly before the component is re-rendered after updating the state.

## ComponentDidUpdate:

The method invoked immeditaly after the component is re-rendered after updating the state.

## ComponentWillUnmount:

This method is invoked immediately before a component is unmounted and destroyed.

# 5.What are the lifecycle methods of React?

The three phases are,
Mounting  
Updating  
UnMounting

## Mounting:

Mounting is when React renders the component for the first time and actually builds the initial DOM from those instruction.

## Updating:

A component is updated whenever there is change in the component's state or props.

## UnMounting:

When a component is being removed from the DOM.

# 6.What is the context?

React Context is to manage state globally.

React Context is pass props from parent to child components.This is similar to redux

# 7.What are fragments in React?

React fragements allow tou to wrap or group multiple elements without adding an extra element.  
React fragement an be usefull when rendering multiple components in a single component.

### syntax:

method 1

```
<React.Fragement>
<Component />
<Component />
</React.Fragement>
```

method 2:

```
<>
<Component />
<Component />
</>
```

# 8.What is Redux?

Redux is an open-source javascript library used to manage application state.

Redux is a global state manager that allows to manage your state in a single place.

Redux is not tied to Redux. It can be used with any UserInterface and library or framework.

Can be used with React, Angular, Vue.

# 9.Are there any similarities between Redux and RxJS.

React is a javascript library for building user interfaces whereas RxJS is a javascript library for reactive programming using Observables.

Both these javascript libraries are not comparable to each other since it serve different purposes

# 10.What are the core principles of Redux?

Tese principles basically describe the Redux pattern.

## First Principle:

The first principle is the state of your whole application is etored in an object tree with in a single store.

## Second Principle:

The second principle is the only way to change the sytate is to emit an action, an object ddescribe what happend.

To update the state of your application, you need to let Redux know about that what an action.

Not allowed to directly update the state.

So the second principle state is read-only.

## Third Principle:

To specify how the state tree is transformed by action, you write pure reducers.

Pure reducers are basically pure function that takes the previous state and an action as input and return the next state.

Action are plain JavaScript object they must have a type property.
