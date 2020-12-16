
    //selectors
    // const todoinput=document.querySelector(".todo-input");
    const todoinput=document.getElementsByClassName("todo-input")[0];
    const todoaddbutton=document.querySelectorAll(".todo-button")[0];
    const todolist=document.querySelector(".todo-list");

    
    /*function addtodo(event){
        alert("test");
    }*/


    //event listeners
    todoaddbutton.addEventListener('click',addtodo);
    todolist.addEventListener('click', deletecheck);


    //functions

    function deletecheck(e){
        const item=e.target;
            
        if(item.classList[0]==="trash-btn"){                        //???????
            const todoli=item.parentElement;                        //check
            todoli.remove();
        }
        if(item.classList[0]==="complete-btn"){                        //???????
            const todoli=item.parentElement;
            todoli.classList.toggle("completed");                       // toggle classlist as "completed"
        }
    }

    function addtodo(event){

        event.preventDefault();     //prevent form from submitting

        var innertextvalue=todoinput.value;
        if(innertextvalue.trim()==='')
        {
            alert("You must write something");
            todoinput.value='';   
            return;
        }
        

        const tododiv=document.createElement('div');   // Accessing todo div
        tododiv.classList.add("todo");

        const newtodo= document.createElement('li');
        newtodo.innerText=todoinput.value;
        newtodo.classList.add('todo-item');
        tododiv.appendChild(newtodo);

        // Adding check button
        const completedbutton=document.createElement('button');
        completedbutton.innerText="Done";                            //use innerHTML for adding icon <i>
        completedbutton.classList.add("complete-btn");
        tododiv.appendChild(completedbutton);

        // Adding trash button
        const trashbutton=document.createElement('button');
        trashbutton.innerText="Delete";                            //use innerHTML for adding icon
        trashbutton.classList.add("trash-btn");
        tododiv.appendChild(trashbutton);


        // Append tododiv to list
        todolist.appendChild(tododiv);                              // add todoDiv to list

        todoinput.value="";                                         //delete the value from input

    }


