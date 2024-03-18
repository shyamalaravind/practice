import { createReducer, on } from "@ngrx/store";
import { AllEventsUpdateAction } from "./app.action";
import { GlobalState } from "./app.state";

export const appReducer = createReducer<GlobalState>({},
  on(AllEventsUpdateAction, (globalState, allEvents) => {
    return { ...globalState, ...allEvents };
  }
  )
