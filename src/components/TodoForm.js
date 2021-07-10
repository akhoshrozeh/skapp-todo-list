import React, { useState, useEffect, useRef } from 'react';
import {
 Segment, Grid
} from 'semantic-ui-react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
    
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input
    });
    setInput('');
    console.log("handleSubmit called!!");
  };

  return (
      <div>
           <Segment>
            <Grid>
                <Grid.Column textAlign="center">
                <form onSubmit={handleSubmit} className='todo-form'>
                    {props.edit ? (
                        <>
                        <input
                            placeholder='Update your item'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            ref={inputRef}
                            className='todo-input edit'
                        />
                        <button onClick={handleSubmit} className='todo-button edit'>
                            Update
                        </button>
                        </>
                    ) : (
                        <>
                        <input 
                            placeholder='Add a todo'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            className='todo-input'
                            ref={inputRef}
                        />
                        <button onClick={handleSubmit} className='todo-button'>
                            Add todo
                        </button>
                        </>
                    )}
                </form>
                </Grid.Column>
            </Grid>
            </Segment>

      </div>
    
  );
}

export default TodoForm;