import React from 'react';

ListItem = () => (props) {
  return (
    <div>
      <ul className='todo__list'>
        {props.map(t => (
          <li key={t.id} className='todo__item'>
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
