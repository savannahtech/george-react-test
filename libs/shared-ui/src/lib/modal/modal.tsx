'use client';

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ModalProps {
  autoClose?: boolean;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  title: string;
  centered?: boolean;
  style?: string;
  opacity?: string;
}

const Modal = ({
  autoClose = true,
  children,
  isOpen,
  setIsOpen,
  title,
  centered=true,
  style='w-full sm:w-1/2 md:w-64',
  opacity='bg-opacity-25'
} : ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        open={isOpen}
        onClose={() => { if (autoClose) setIsOpen(false) }}
        className={`overflow-y-hidden ${style}`}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={`fixed inset-0 z-[1000] bg-black backdrop-blur-sm ${opacity}`} aria-hidden="true"></div>
        </Transition.Child>

        <div className={`fixed inset-0 z-[1009] py-5 overflow-y-auto ${centered ? 'flex items-center justify-center' : ''}`}>
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-700 transform-gpu"
            enterFrom="translate-y-[5%] opacity-70"
            enterTo="translate-y-0 opacity-100"
            leave="transition ease-in duration-700 transform-gpu"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-[5%] opacity-70"
          >
            <Dialog.Panel className="">
              <Dialog.Title>{title}</Dialog.Title>
              <Dialog.Description as="div">{children}</Dialog.Description>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal;
