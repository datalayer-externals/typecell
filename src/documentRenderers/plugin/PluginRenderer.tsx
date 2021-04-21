import { observer } from "mobx-react-lite";
import React, { useEffect, useMemo, useRef } from "react";
import PluginEngine from "../../pluginEngine/PluginEngine";
import { getEngineForPlugin } from "../../pluginEngine/pluginSystem";
import PluginResource from "../../store/PluginResource";
import EngineWithOutput from "../../typecellEngine/EngineWithOutput";
import NotebookCell from "../notebook/NotebookCell";

type Props = {
  plugin: PluginResource;
};

const PluginRenderer: React.FC<Props> = observer((props) => {
  const engine = getEngineForPlugin(props.plugin);

  // renderLogger.log("cellList");
  return (
    <div className="cellList">
      {/* TODO: should execute in a separate sandbox? */}
      <NotebookCell
        cell={props.plugin.pluginCell}
        engine={engine}
        awareness={props.plugin.webrtcProvider.awareness}
      />
    </div>
  );
});

export default PluginRenderer;
