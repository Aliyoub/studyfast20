// store/slices/ttsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
// import { update } from './tts/ttsVolumeSlice';

export interface TtsState {
  value: any
  // value: number;
}

const initialState: TtsState = {
  // value: [{ volume: 0.5, rate: 1.0, pitch: 1.0, numberOfLoops:1, voice:"fr-FR-default"}]
  // value: [{ volume: 0.5}]
  value: [],
};

// export const ttsSlice = createSlice({
//   name: 'tts',
//   initialState,
//   reducers: {

//     update: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

export const ttsSlice = createSlice({
  name: 'tts',
  // initialState,
  initialState: [{ volume: 0.5, rate: 1.0, pitch: 1.0, numberOfLoops:1, voice:"fr-FR-default"}],
  reducers: {
    ttsUpdate: (state: any, action) => {
      // Ici, je n'utilise pas state.push ...
      // ... pour éviter d'ajouter les valeurs initiales aux nouvelles
      // j'utilise donc le return; en effet, il s'agit ici d'une mise à jour et non d'un ajout de valeurs
      console.log('action.payload', action)
      return [{
        volume: action.payload.volume,
        rate: action.payload.rate,
        pitch: action.payload.pitch,
        numberOfLoops: action.payload.numberOfLoops,
        voice: action.payload.voice,
      }]
    },
  },
});


export const { ttsUpdate } = ttsSlice.actions;

export default ttsSlice.reducer;
