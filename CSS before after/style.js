import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 3 }]
  },
  // p::before {
    content: "";
    background: red;
    display: block;
    width: 15px;
    height: 15px;
}
  // p::before {
    content: "";
    display: block;
    background: url(icon.jpg) no-repeat;
    width: 20px;
    height: 20px;
    float: left;
    margin: 0 6px 0 0;
}
  // p:before {
    content: "this is";
    font-weight: bold;
    font-style: italic;
}

p:after {
    content: "that is";
    font-weight: bold;
    font-style: italic;
}
  // a {
    text-decoration: none;
    font-weight: bold;
    color: rgb(221, 46, 46);
}

a::after {
    content: "";
    display: inline-block;
    background: url("icon.jpg") no-repeat top-right;
    width: 14px;
    height: 12px;
}
  // a {
    text-decoration: none;
    font-weight: bold;
    color: #000;
}

a::after {
    content: " /";
}

a::first-child::before {
    content: " » ";
}

a::last-child::after {
    content: "";
}
  'a': {
    'float': 'left',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 100 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'p::before': {
    'content': '""',
    'display': 'block',
    'clear': 'both'
  }
});
