import { useState } from "react";
import { Switch as HeadlessUiSwitch } from "@headlessui/react";

function Switch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <HeadlessUiSwitch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-purple-800" : "bg-purple-500"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </HeadlessUiSwitch>
  );
}

export default Switch;
