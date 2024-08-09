import { Reducer } from "@reduxjs/toolkit";

import { TSoundSliceState } from "./sound.slice";

export type TSoundSliceStore = ReturnType<Reducer<{
	sound: TSoundSliceState;
}>>
