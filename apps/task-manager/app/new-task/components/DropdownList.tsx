'use client';

import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { User } from '@tasks-management/shared-types'
import { DownArrow } from '@tasks-management/icons';

interface DropdownListProp {
  list: User[];
  type: string;
  handleSelected: (type: string, user: User) => void;
}

const DropdownList = (props: DropdownListProp ) => {
  const { list, type, handleSelected } = props;
  const [selectedPerson, setSelectedPerson] = useState(list[0])

  const handleListChange = (user: User) => {
    setSelectedPerson(user)
    handleSelected(type, user)
  }

  return (
    <Listbox as="div" className="relative" value={selectedPerson} onChange={handleListChange}>
      <Listbox.Button as="div" className="dropdown-button">
        <div className="flex justify-start items-start">
          <div className="flex justify-center items-center gap-2">
            <div className="dropdown-btn-content">{selectedPerson.name}</div>
            <DownArrow/>
          </div>
        </div>
      </Listbox.Button>

      <Listbox.Options as="ul" className="dropdown-list">
        {list.map((person) => (
          <Listbox.Option
            as="li"
            key={person.id}
            value={person}
            className="dropdown-option"
          >
            {person.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default DropdownList
