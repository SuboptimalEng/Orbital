import { ITheme } from '../types';
import { createTheme } from './utils';

export const gruvboxTheme: ITheme = createTheme({
  activityBg: '#070808',
  activityFg: '#ebdbb2',
  activityHover: '#282828',
  // orange
  activityActive: '#fe8019',

  editorBg: '#131414',
  editorFg: '#ebdbb2',
  editorHover: '#282828',
  editorBorder: '#ebdbb2',

  // editorBg: '#202020',
  // editorFg: '#ebdbb2',
  // editorHover: '#282828',
  // editorBorder: '#ebdbb2',

  statusBg: '#070808',
  statusFg: '#ebdbb2',
  statusHover: '#282828',

  // orange
  hyperlink: '#fe8019',

  // hover
  scrollbarBg: '#282828',
  // dark
  scrollbarFg: '#070808',

  red: '#cc241d',
  blue: '#458588',
  pink: '#d3869b',
  green: '#98971a',
  orange: '#fe8019',
  purple: '#b16286',
  yellow: '#d79921',
});
