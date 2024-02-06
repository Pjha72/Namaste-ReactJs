1. Imp Points : 
   1.1 : When useEffect is used with dependency array then if you render the page then call only render().
   1.2 : When useEffect is used with Not dependency array then if you render the page then call only render() & useEffect() after every rendering.
   Ex : `useEffect(()=>{
        console.log('useEffect()');
    });

    console.log('render()');`

2. React says that don't create a component inside a component. You can compose the component inside the component.

3. Never-Ever Write the useState inside the if-else and for loop.

4. useState is a Hook that react provide you to create a local variable inside yout functional component.
    4.1 : Never used useState outside your component.
    4.2 : You can create more than one useEffect.

5. Why CDN is best place to host our Images?
   5.1 : Put optimize image on to the CDN.

6. When use complex task then use package
    6.1 : Need Form : Use Formik(https://formik.org/)

7. Finding the Path - React Router Dom(https://reactrouter.com/en/main)

8. SPA : Single Page Application

9. Two Types of Routing
  9.1 : Client Side Routing : It is a way that all pages comes from the client side.
  9.2 : Server Side Routing : It is a way that all pages are comes from the server.

10 : Who develop the Link Tag : Remix developer

11. What is Nested Routing?
    Ans : 

12. All the children go into the `Outlet`.
    Outlet is a component.

13. Dynamic Routing : `useParams` is a Hooks that can read the url from the browser.