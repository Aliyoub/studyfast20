import { createSlice } from "@reduxjs/toolkit";

export interface ggTtsSelectedVoiceState {
  voice: {}; // A adapter
}

const initialState: ggTtsSelectedVoiceState = {
  voice: {
    "languageCode": 
        "fr-FR"
    ,
    "name": "fr-FR-Journey-D",
    "ssmlGender": "MALE",
    "naturalSampleRateHertz": 24000
}
};

// gère l'état voice qui contient l’élément sélectionné
export const ggTtsSelectedVoiceSlice = createSlice({
  name: "ggTtsSelectedVoice",
  initialState,
  reducers: {
    ggTtsSelectedVoice: (state, action) => {
      // pour sélectionner un élément
      state.voice = action.payload;
    },
    clearSelection: (state: any) => {
      // pour réinitialiser l’état.
      state.voice = null;
    },
  },
});

export const { ggTtsSelectedVoice, clearSelection } =
  ggTtsSelectedVoiceSlice.actions;

export default ggTtsSelectedVoiceSlice.reducer;
