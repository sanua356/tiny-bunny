import { Reducer } from "@reduxjs/toolkit";

import { GameStatuses, GameWinners } from "../lib";
import { TDeskSliceState } from "./desk.slice";

export type TDeskSliceStore = ReturnType<Reducer<{
	desk: TDeskSliceState;
}>>

export type TGameStatus = GameStatuses;

export type TWinnerGame = GameWinners;
