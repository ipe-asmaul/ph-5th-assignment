## 1. Ans:
   getElementById : Used to get an element from dom by its id <br>
   getElementsByClassName : Get the elements from document through same class name and returns a array like object <br>
   querySelector : Used to get any item from document by id classname or any other given custom property and also when more than one items from same query it selects only the first one matching the query <br>
   querySelectorAll : used for selection of items more than one throug classname or any custom property and returns a array like object 

   ## 2. Ans:
   There is two ways to do that first is using innerHTML method and concat it to the written html code inside backtics(``) . Example: element.innerHTML = `<p> Hello World</p>`;<br>
   Another way is to create an element by using createElement method then append it to any parent from document. Example:
   let child = document.createElement('p')
   element.appendChild(child)  

   ## 3. Ans:
   When an event is triggerd in a child element of any section or div it will eventualluy trigger the event of parent and also it will move up towards higher parent element and trigger their event automatically, this is known as event bubbling and this is how it works .

   ## 4. Ans:
   Event delegation means setting event in parent element instead of setting to multiple child elements. By this when any event perform on child it bubble up to the parent then the parent element intercepts it and by using 'e.target' the child can be identified. In consequence it is useful for not repeating same event for multiple child.

   ## 5. Ans:

   preventDefault() : It prevents a HTML element doing its natural behaviour when event is triggered. For example: form element will load when submitting by default but using it we can prevent reloading of page. <br>

   stopPropagation() : It prevents bubbling up of any event from any child element or div. By this triggering the child element event will not automatically affect or trigger the parent element rather it will stop their.


   