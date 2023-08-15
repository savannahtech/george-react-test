'use client';

import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { Assignee } from '@tasks-management/shared-types'
import { DownArrow } from '@tasks-management/icons';

interface DropdownListProp {
  list: Assignee[];
}

const DropdownList = ({ list }: DropdownListProp ) => {
  const [selectedPerson, setSelectedPerson] = useState(list[0])

  return (
    <Listbox as="div" className="relative" value={selectedPerson} onChange={setSelectedPerson}>
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
