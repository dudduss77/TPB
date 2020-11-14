//1. Co renderuje komponent?
//2. Co komponent udostępnia swoim dzieciom jako props?
//3. Jak komponent reaguje na interakcje z użytkownikiem?
//4. Co dzieje się w metodach cyklu życia komponentu?

//1. "TBP", "Time Plan Budget"
//2. Nic
//3. Nie reguje
//4. Nic się nie dzieje

import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LogoComponent from './LogoComponent'




test('render LogoComponent', () => {
  const {getByText} = render(<LogoComponent/>)

  expect(getByText('TPB')).toBeInTheDocument()
  expect(getByText('Time Plan Budget')).toBeInTheDocument()
});