import * as React from 'react';
import { AuthProvider, AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';

// ##########################################################################
type SupportedAuthProvider = 'google' | 'facebook' | 'github' | 'twitter';
const providers: AuthProvider[] = [
  { id: 'google', name: 'Google' },
  { id: 'facebook', name: 'Facebook' }
];



const signIn: (provider: AuthProvider) => void = async (provider) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function SignIn() {
  const theme = useTheme();
  return (
    // preview-start
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn}  providers={providers} />
    </AppProvider>
    // preview-end
  );
}
