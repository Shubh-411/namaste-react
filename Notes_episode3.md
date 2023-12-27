# To run the project we keep on writing -

- npx parcel index.html
- But, it is not much visible. So, we will set script to package.json file -
  "scripts":{
  "start": "parcel index.html",
  }
- So, after setting this script we will run the project by using :-
  npm run start

# To build the project there is command -

- npx parcel build index.html
- So, to build we will add script to package.json:
  "scripts":{
  "start": "parcel index.html",
  "build": "parcel build index.html"
  }
- Here we skip writing "npx" in cmd, because npx=npm and it is executing package without downloading it.
- To build the project now we will write command:
  npm run build

# Parcel/Babel doesn't remove console.logs automatically, we need to configure project to remove it.

- To remove console.logs there is babel-plugin, "npm i -D babel-plugin-transform-remove-console"
- Still it won't work, because we haven't configured it in project, by just installing package.
- We need to configure "babel-plugin-transform-remove-console --save-dev"
- To configure it we need to create (.babelrc) file for babel configuration.
  // with options
  {
  "plugins": [ ["transform-remove-console", { "exclude": [ "error", "warn"] }] ]
  }
- paste above code in .babelrc, it will remove all console.log in dist folder except errors and warnings

# Reconciliation :- React Reconciliation is a process in which react updates the Browser-DOM by creating a Virtual-DOM and compairing it with the Current-DOM.

# Render: means updating something in the DOM is known as Render.

# Why do we need "key" in the child element?

- Because if there is multiple child element :
 <ul>
   <li>Shivam</li>
   <li>Satyam</li>
 </ul>
 But we add one more element in the top, 
 <ul>
   <li>Shubham</li> // Here react doesn't know, where to place new li element. Because it doesn't have key prop here. 
   <li>Shivam</li>
   <li>Satyam</li>
 </ul>
Then, React has to do alot of efforts, it will re-render the whole list. So, it will not give good performance.
- But if you give "keys" to the elements:
<ul>
  <li key="1998">Shivam</li>
  <li key="2000">Satyam</li>
</ul>
 <!--=======================  -->
 And we add new element with the key, then react has to do very less work. It will enhance performance.So, we should always use key when we have multiple children.
<ul>
  <li key="1996">Shubham</li>
  <li key="1998">Shivam</li>
  <li key="2000">Satyam</li>
</ul>
- Also key should be uniquely identified.
- Should never have same key for different element. It should always be unique.
- React keeps the track of key in the element.

# JSX : is html like syntax but not HTML. It uses React.createElement and convert it to HTML-DOM

# Advantages:-

- Readability
- developer experiences
- syntactical sugar
- less code
- maintainability
- easy to maintain

# There is two package-lock.json in react project one inside node_modules and one outside which is visible normally.

- inside node_module-> package-lock.json, it maintains and keeps track of node_module's packages versions.
- transitive dependencies - so the versions of transitive dependencies are stored inside the node_module's folder package_lock.json.

# Babel :- comes as a dependency along with parcel.

# React Component :- Every thing is a component in React.

- Functional Component (New way of writing code)
- Class based Component (Old way of writing code)

# Functional Component : is nothing but js function that returns some piece of JSX, or React element(createElement) or Composition of react element, or Component itself.

- Name of Component starts with Capital Letter.
- When we have to render the functional component we have to write like :
  ===> root.render(<HeaderComponent />);
- If we have a function that returns a jsx component will become a Functinoal Component.
- We can use react element inside jsx by using curly brackets{} :
  {element}
- To use function component inside JSX use it as tag:
  const Title = () => <h1>Title react component</h1>;
  --------------------- Using title below----------------------------------
  const HeaderComponent = () => (
    <Title /> // use it as Tag 
    OR - can also be called as function
    {Title()}
  )

# Cross-site scripting attact XSS - Hackers put malicious js scripting in our code.

- JSX is secure and it sanitizes the code called sanitization. It secures it from XSS.

# Component Composition: If we have to write component inside component i.e. component composition. or Nested components.

- const Title = () => <h1>Title</h1> // this is functional component;
- <div> <Title/></div> // here it is component composition.

# React element : is just a normal variable which has some JSX assigned to it.

? When we have react element why do we need functional component?

- Because we need to pass props to it but in react element we can't pass.

# Why does 302 redirect happens when we import react from cdn?
