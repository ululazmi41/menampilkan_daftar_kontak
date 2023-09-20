import React from 'react';
import ContactApp from './components/ContactApp';
import { createRoot } from 'react-dom/client';

// styling
import './styles/style.css';

const element = document.getElementById('root');
const root = createRoot(element);
root.render(<ContactApp />);