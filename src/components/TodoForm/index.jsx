//Libs
import React from 'react';

//ElementalUi
import { Form, InputGroup, FormInput, Button, Glyph } from 'elemental'

const TodoForm = ({handleChange, handleSubmit}) => {
    return(
      <div>
        <Form onSubmit={handleSubmit}>
          <InputGroup contiguous>
          	<InputGroup.Section grow>
          		<FormInput type="text" placeholder="New Task" onChange={handleChange} />
          	</InputGroup.Section>
          	<InputGroup.Section>
          		<Button submit type="primary"><Glyph icon="gist-new"/></Button>
          	</InputGroup.Section>
          </InputGroup>
        </Form>
      </div>
    )
}

export default TodoForm
