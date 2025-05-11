import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main';

const container = document.getElementById('main');
const main = createRoot(container);
main.render(<Main />);