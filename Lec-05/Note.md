1. Is JSX is Manadatory? : No

2. Is ES6 is Manadatory? : No

3. Planning For Build Food Villa

4. JSX Expressions Have Only One Parent Element.
   React.Fragment : It is a Component which is exported by react.
   - React.Fragment look like a empty tag i.e <></>.

5. join items in array JavaScript : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

6. Props : Properties i.e Pass some data or properties into my functional component
  * Pass Multiple props : Yes

7. Argument and Parameters
  Ex : 
       function fn(param1, param2){

       };

       Call function : fn("abc","xyz");
   * You pass an argument then you receive a parameter.

8. .map is best way to do functional programming.

9. What is Virtual DOM?
Ans : A representation of a DOM with us is known as Virtual DOM.

10. Why need in React?
Ans : We need for Reconciliation of in react.
     React uses ALgorithm i.e DIff algo to find out the difference between trees(DOM and Virtual DOM) and then it's find out what needs to be updated.and just update at small portion of things.

11. Why do we use key?
Ans : Suppose there are four div and then one extra div is add to it. then react did't know which div is add to it so rerender each and every thing. But if add id to every div element then react know each and every div.after that add any div element then react ony rerender that div boz react know the other div element.So that's y react uses `KEY` to know the details of each and every element.

12. React Fiber(Home Work) : New Reconciliation Engine in React16.
* Link : https://github.com/acdlite/react-fiber-architecture
* Home Work : Never used index as a key?
* Link : https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/