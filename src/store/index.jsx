import { useState } from "react";
import { createStore } from "hox";

export const [useSelectTabStore, SelectTabStoreProvider] = createStore(() => {
  const [selectTab, setSeletTab] = useState("/pages/home/index");

  return {
    selectTab,
    setSeletTab,
  };
});
