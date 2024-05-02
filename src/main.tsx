import { render } from 'preact';
import { App } from './app.tsx';
import './styles/index.css';
import './styles/prisma-dracula.css';

render(<App />, document.getElementById('app')!);
