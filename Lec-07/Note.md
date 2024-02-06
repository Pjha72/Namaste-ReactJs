1. whenever the change in node the tree is modified.

2. Industry Concept : MicroServices
  - Larger Application
     - Monolith : All the things wrap into one project.
     - MicroService : Make it small small different project and hosted on different port.
         - Advantage : 1. Easier to test
                       2. Easy to maintain
         - How to connect all application : 
            Connect on different different port

3. There the Two Approach to loads the Page in React : 
   - First Approach : Loads -> API call -> Render page
   - Second Aaproach : Loads -> render initial page -> API Call -> Update the UI => Using `useEffect Hooks`

4. useEffect(()=>{
        console.log("Call this when dependency is changed!!");
    },[seartchText]);
    In useEffect two component is there : one => callback function
    Second : Dependency array
 - If not pass any depenedecy array or empty dependency array in useEffect at  that  time useEffect call only one times. But When it call : it call after initial render.
 - If dependency array is [searchText] then once after initial render and everytime after render(my searchText changes)

5. What is cors?
Ans: 

6. Shimmer design UI : https://medium.com/lattice-what-is/shimmer-ui-a-better-way-to-show-loading-states-aa1f4e563d17

7. Difference between JavaScript Expression and Statement?
Ans : console.log() : Expression : It works
      But a=10; console.log(a) : Not work

Link : https://react.dev/learn/javascript-in-jsx-with-curly-braces

8. Diff algo is basically is CORE of React.

9. Why do we use JSON after the fetch?
Ans : 

