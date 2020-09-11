import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url(http://fonts.googleapis.com/css?family=Open+Sans:300,400&subset=latin,latin-ext)',
  'body': {
    'overflowY': 'scroll'
  },
  'wrap': {
    'marin': '0 auto'
  },
  'ultabs': {
    'width': [{ 'unit': 'px', 'value': 390 }],
    'height': [{ 'unit': 'px', 'value': 80 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'listStyle': 'none',
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ultabs li': {
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 130 }]
  },
  'ultabs li a': {
    'position': 'relative',
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'marginTop': [{ 'unit': 'px', 'value': 40 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'textAlign': 'center',
    'textDecoration': 'none',
    'color': '#ffffff',
    'background': '#6edeef',
    'WebkitBoxShadow': '8px 12px 25px 2px rgba(0,0,0,0.4)',
    'MozBoxShadow': '8px 12px 25px 2px rgba(0,0,0,0.4)',
    'boxShadow': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.4)' }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000000' }],
    'WebkitTransition': 'padding 0.2s ease, margin 0.2s ease',
    'MozTransition': 'padding 0.2s ease, margin 0.2s ease',
    'OTransition': 'padding 0.2s ease, margin 0.2s ease',
    'MsTransition': 'padding 0.2s ease, margin 0.2s ease',
    'transition': 'padding 0.2s ease, margin 0.2s ease'
  },
  'tabs li:first-child a': {
    'zIndex': '3',
    'WebkitBorderTopLeftRadius': '8px',
    'MozBorderRadiusTopleft': '8px',
    'borderTopLeftRadius': '8px'
  },
  'tabs li:nth-child(2) a': {
    'zIndex': '2'
  },
  'tabs li:last-child a': {
    'zIndex': '1',
    'WebkitBoxShadow': '2px 8px 25px -2px rgba(0,0,0,0.3)',
    'MozBoxShadow': '2px 8px 25px -2px rgba(0,0,0,0.3)',
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': -2 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.3)' }],
    'WebkitBorderTopRightRadius': '8px',
    'MozBorderRadiusTopright': '8px',
    'borderTopRightRadius': '8px'
  },
  'ultabs li a:hover': {
    'margin': [{ 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'ultabs li aactive': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'background': '#545f60',
    'color': '#6edeef',
    // color: #ff6831;
    'zIndex': '4',
    'outline': 'none'
  },
  'group:before': {
    'content': '" "',
    // 1
    'display': 'table',
    // 2
  },
  'group:after': {
    'content': '" "',
    // 1
    'display': 'table',
    // 2
  },
  'group:after': {
    'clear': 'both'
  },
  '#content': {
    'width': [{ 'unit': 'px', 'value': 390 }],
    // width: 780px;
    'height': [{ 'unit': 'px', 'value': 300 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'background': '#545f60',
    'WebkitBoxShadow': '2px 8px 25px -2px rgba(0,0,0,0.3)',
    'MozBoxShadow': '2px 8px 25px -2px rgba(0,0,0,0.3)',
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': -2 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.3)' }],
    'WebkitBorderBottomRightRadius': '8px',
    'WebkitBorderBottomLeftRadius': '8px',
    'MozBorderRadiusBottomright': '8px',
    'MozBorderRadiusBottomleft': '8px',
    'borderBottomRightRadius': '8px',
    'borderBottomLeftRadius': '8px'
  },
  'p': {
    // font-family: 'Open Sans', sans-serif;
    'fontFamily': 'sans-serif',
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 40 }],
    'color': '#ffffff',
    'lineHeight': [{ 'unit': 'px', 'value': 26 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#one': {
  },
  '#two': {
  },
  '#three': {
  },
  '#four': {
  },
  '#five': {
  }
});
