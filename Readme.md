## 1.
** getElementById : Used to get an element from dom by its id
   getElementsByClassName : Get the elements from document through same class name and returns a array like object
   querySelector : Used to get any item from document by id classname or any other given custom property and also when more than one items from same query it selects only the first one matching the query 
   querySelectorAll : used for selection of items more than one throug classname or any custom property and returns a array like object 

   ## 2.
   There is two ways to do that first is using innerHTML method and concat it to the written html code inside backtics(``) . Example: element.innerHTML = `<p> Hello World`;
   Another way is to create an element by using createElement method then append it to any parent from document. Example:
   let child = document.createElement('p')
   element.appendChild(child)  

   ## 3.
   