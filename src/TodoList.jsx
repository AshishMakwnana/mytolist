import React, { useState } from "react";
import List from "./List";

const Form = () => {
    const [InputList, setInputList] = useState("");
    const [inputItem, setInputItem] = useState([])

    const InputHandler = (event) => {

        // get value can be set to form data
        setInputList(event.target.value)

    };

    const AddItem = () =>{
      
        setInputItem((oldValue)=>{
            if(InputList !== ""){
                return [...oldValue,InputList]
            }else{
                return [...oldValue]
            }
        });
        setInputList("");
    };

    const deleteItem = (id) =>{
        setInputItem((ListValue)=>{
            return ListValue.filter((arrValue,index)=>{
                return index !== id;
            });
        });
    };
    
    return (
        <>
            <div className="form-container">

                <div className="input-group">
                    <input type="text" placeholder="Add a Item" name="Item" onChange={InputHandler} value={InputList} />
                    <button onClick={AddItem}>+</button>
                    <ol>
                        {inputItem.map((itmvalue,index)=>{
                            return <List text={itmvalue} key={index} id={index} onSelect={deleteItem} />    
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default Form;
