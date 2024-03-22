import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { DropdownProps } from ".";

function Dropdown({ label, options }: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center rounded-md bg-purple-600 hover:bg-purple-700 transition-colors ease-in-out duration-300 px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        {label}
        <ChevronDownIcon
          className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          {options.map((option, idx) => (
            <div className="px-1 py-1" key={`option-${idx}`}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-600 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors ease-in-out duration-300`}
                  >
                    {option}
                  </button>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
