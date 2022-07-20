# React First Evaluation:

## 1. What is React?

React is a JavaScript Library for bulding user interface.  
it's not a framwork.

## 2. What are the major features of React?

- JSX
- Virtual Dom
- Components
- Performance
- Reausable code

## 3.What is JSX?

- JavaScript XML (JSX) —> Extension to the JavaScript language syntax.
- JSX allows us to write HTML in React.
- JSX converts HTML tags into react elements.
- JSX converts HTML tags into react elements.
- JSX ultimately transpires to pure javascript which is understood by the browser.
- JSX makes your code simpler and more elegant.

## 4.What is the difference between Element and Component?

### Element:

It is the basic building block in a react application, it is an object representation of a virtual DOM node.

### Component:

In react a component represent a part of the user interface.  
Component code is usually placed in a javascript file.  
Componebts are reusable codes.

### Component Type:

- Function Component.
- Class Component.

### Function Component:

Function components are literally javascript functions that return HTML which describes the UI.

### Class Component:

- A class component muust include the extends react.component statement.
- The component also required render method.
- The render method returns the HTML element.

## 5.How to create components in React?

create a new file with FileName.js file extension and put the code inside it: Note that the filename must start with an uppercase character.

## 6.What are props in React?

“Props” refers to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters. A component receiving props is not allowed to modify those props. They are “immutable”

## 7.What is the difference between state and props?

### Props:

- Props are immutable.
- Props allow you to pass data from one component to another component as an argument.
- Props make component reusable.

### State:

- State mutable.
- State holdes information about the component. cannot access outside of the components.
- State can not make component reusable.

## 8.What is Virtual DOM?

- DOM stands for Document Object Model.
- In simple words, virtual DOM is just a copy of the original DOM kept in the memory and synced with the real DOM by libraries such as ReactDOM.

## 9.How Virtual DOM works?

When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.

## 10.What is the difference between Shadow DOM and Virtual DOM?

### Shadow Dom:

- Virtual DOM is creating a copy of the whole DOM object
- Shadow DOM is a tool used to build component-based apps and websites.

### Virtual Dom:

- Shadow DOM creates small pieces of the DOM object
