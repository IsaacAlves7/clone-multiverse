import React from "react";

export interface IGameContextProps {};

const defaultState: IGameContextProps = {};

export default React.createContext(defaultState);