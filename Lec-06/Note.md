1. React Folder : https://legacy.reactjs.org/docs/faq-structure.html

2. Two ways of exporting
  * export default filename(Default Import)
  * Named Import : import {Title} from '...';

3. React Do one Way Data Binding : 

4. Every Component in react maintains a `State`.

5. What is State?
  Ans : State in React is an object that holds data or information about the component.
  *  It can be used to store, manage, and update data within the application, which in turn allows for dynamic changes to user interfaces. A state can be used in functional and class components, but it is more commonly used in class components.

6. What & Why is Hooks?
 Ans : Hook is just a normal JavaScript Function.

7. What & Why is useState?
 Ans : To create state variables, it comes from react library and imported as a named variable.
 * useState hook returns an array. - [variable name, function to update the variable]

8. Why do we need state variable?
 Ans : Whenever you write variable in react but react don't know what happen with vaiable when the variable is change react cannor rerender the variable on the UI boz react cannot keep track of the variable.So that's y State variable is used.

9. What is the importance of config.js file?
Ans : One purpose to add config.js file is to use static data which needs to be used all over the application.
* The config.js file is a JavaScript file that is used to store configuration settings for a React application. 
* The config.js file is typically located in the root directory of the React application.
* The config.js file can be used to store both static and dynamic configuration settings.
* The config.js file can be used to store configuration settings for both development and production environments.
* The config.js file is an important part of any React application. It allows you to store all of the application's configuration settings in one place, which makes it easy to manage and update the settings.

10. What is the difference between Named Export, Default export and * as export?
Ans : 
Named Exports
 - Can export multiple values
 - MUST use the exported name when importing

Default Exports
 - Export a single value
 - Can use any name when importing

