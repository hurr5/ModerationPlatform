import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { List } from "./components/list/List";
import { Item } from "./components/item/Item";
import { Stats } from "./components/stats/Stats";

import { Provider } from "./components/ui/provider";
import { ColorModeButton } from "@/components/ui/color-mode";

export const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/list" replace />} />
          <Route path="list" element={<List />} />
          <Route path="item" element={<Item />} />
          <Route path="stats" element={<Stats />} />
        </Routes>
      </BrowserRouter>
      <div className="fixed bottom-4 right-4 z-50">
        <ColorModeButton w={25} h={25} p={5} rounded={"full"} />
      </div>
    </Provider>
  );
};
