
#!/bin/bash

echo "Ajoutez une entrée"
read x 

if [ ! -d ./store/slices/$x ]; then
    mkdir ./store/slices/$x
    if [ ! -d ./store/slices/$x/$x.ts ]; then
    cat <<EOF > ./store/slices/$x/${x}Slice.ts

import { createSlice } from '@reduxjs/toolkit';

export interface ${x}State {
  value: number; // A adapter
}

const initialState: {$x}State = {
  value: 1.0, // A adapter
};

export const ${x}Slice = createSlice({
  name: '${x}',
  initialState,
  reducers: {
    ${x}: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { $x } = ${x}Slice.actions;

export default ${x}Slice.reducer;

EOF
    fi
fi

#  ==============================================================

if [ ! -f ./store/store.ts ]; then

cat <<EOF > ./store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

// import slices => Ne pas supprimer !!!


export const store = configureStore({
  reducer: {
// configureStore => Ne pas supprimer !!!
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

EOF

else
# On attend que le file ./store/store.ts existe avant d'executer la commande sed
    # sleep 2
sed -i -e \
"s#// import slices => Ne pas supprimer !!!#\
import ${x}Reducer from './slices/$x/${x}Slice';\
\n\
// import slices => Ne pas supprimer !!!#g\
; 
s#// configureStore => Ne pas supprimer !!!#\
\t\
$x: ${x}Reducer,\
\n\
// configureStore => Ne pas supprimer !!!#g" \
./store/store.ts
fi

# On attend que le file ./store/store.ts existe avant d'executer la commande sed
# while [ ! -f ./store/store.ts ]; do
# sleep 2
# done
# sed -i -e \
# "s#// import slices => Ne pas supprimer !!!#\
# import $x from './slices/$x/$xSlice';\
# \n\
# // import slices => Ne pas supprimer !!!#g\
# ; 
# s#// configureStore => Ne pas supprimer !!!#\
# \t\
# $x: $xReducer,\
# \n\
# //configureStore => Ne pas supprimer !!!#g"\
#  ./store/store.ts


