//Libs
import React from 'react';

//ElementalUi
import { Table, Button, Glyph } from 'elemental'

const TodoList = ({list, handleRemove, handleCheck}) => {
  return(
    <div className="List">
      <Table>
        <colgroup>
      		<col width="90%" />
          <col width="5%" />
      		<col width="5%" />
      	</colgroup>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.isDone ? <strike>{item.input}</strike> : <span>{item.input}</span>}</td>
              <td>
                <Button size="xs" type="success" onClick={e => handleCheck(e, index)}>
                  <Glyph icon="check" />
                </Button></td>
              <td>
                <Button size="xs" type="danger" onClick={e => handleRemove(e, index)}>
                  <Glyph icon="trashcan" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default TodoList
