const wordList = [

  // HTML (25)

  {
    word: "doctype",
    hint: "Informs the browser of the HTML version; crucial for rendering consistency.",
  },
  {
    word: "element",
    hint: "The fundamental units of an HTML document, structuring content within start and end tags.",
  },
  {
    word: "attribute",
    hint: "Modifies the behavior or provides metadata for HTML elements; appears within the start tag.",
  },
  {
    word: "heading",
    hint: "Defines the hierarchy of content on a page, influencing SEO and document structure (levels 1-6).",
  },
  {
    word: "paragraph",
    hint: "Represents a block of text, automatically adding spacing before and after for readability.",
  },
  {
    word: "anchor",
    hint: "Creates navigation links to other web pages or sections within the same page; uses the 'href' attribute.",
  },
  {
    word: "image",
    hint: "Embeds visual content into a web page; requires a source and alternative text for accessibility.",
  },
  {
    word: "list",
    hint: "Presents information in a structured format, either ordered numerically or unordered with bullet points.",
  },
  {
    word: "table",
    hint: "Organizes data in rows and columns, used for presenting structured information, but not for layout.",
  },
  {
    word: "form",
    hint: "Creates interactive controls for user input, enabling data submission to a server.",
  },
  {
    word: "input",
    hint: "A versatile form element that accepts various types of data, from text to files, controlled by the 'type' attribute.",
  },
  {
    word: "button",
    hint: "A clickable element that triggers a specific action when activated within a form or with JavaScript.",
  },
  {
    word: "header",
    hint: "Typically contains introductory content, such as a logo, navigation, and a title, at the top of a webpage.",
  },
  {
    word: "footer",
    hint: "Often found at the bottom of a webpage, containing copyright information, links, and contact details.",
  },
  {
    word: "article",
    hint: "Represents a self-contained composition in a document, like a blog post, news story, or forum entry.",
  },
  {
    word: "div",
    hint: "A generic container with no semantic meaning, useful for grouping elements and applying styles or JavaScript behavior.",
  },
  {
    word: "span",
    hint: "An inline container, often used to style or manipulate a specific section of text without breaking the flow.",
  },
  {
    word: "meta",
    hint: "Provides metadata about the HTML document, such as character set, viewport settings, and description for search engines.",
  },
  {
    word: "script",
    hint: "Embeds client-side executable code, enabling dynamic behavior and interactivity on the webpage.",
  },
  {
    word: "link",
    hint: "Defines the relationship between the current document and an external resource, most commonly used for CSS stylesheets.",
  },
  {
    word: "nav",
    hint: "Represents a section of a page dedicated to navigation links, improving accessibility and site structure.",
  },
  {
    word: "aside",
    hint: "Defines content aside from the main content of the page, such as related information, advertisements, or a sidebar.",
  },
  {
    word: "main",
    hint: "Specifies the dominant content of the document, excluding headers, footers, and sidebars.",
  },
  {
    word: "section",
    hint: "A thematic grouping of content, typically with a heading, defining a distinct part of the document.",
  },
  {
    word: "iframe",
    hint: "Embeds another HTML document within the current document, often used for displaying content from external sources.",
  },

  // CSS (25)

  {
    word: "selector",
    hint: "Patterns used to target specific HTML elements for styling, based on tag name, class, ID, or attributes.",
  },
  {
    word: "property",
    hint: "Characteristics that define the visual presentation of an HTML element, such as color, font, or size.",
  },
  {
    word: "value",
    hint: "Specifies the setting for a CSS property, determining its effect on the selected HTML element.",
  },
  {
    word: "declaration",
    hint: "A pairing of a CSS property and its corresponding value, enclosed within curly braces.",
  },
  {
    word: "rule",
    hint: "A complete set of styles that apply to a selected HTML element, consisting of a selector and one or more declarations.",
  },
  {
    word: "margin",
    hint: "Creates space around an element's outer edge, separating it from neighboring elements.",
  },
  {
    word: "padding",
    hint: "Creates space between an element's content and its border, influencing its visual size.",
  },
  {
    word: "border",
    hint: "A line that surrounds an element, adding visual separation and defining its boundaries.",
  },
  {
    word: "font",
    hint: "Controls the appearance of text, including typeface, size, weight, and style.",
  },
  {
    word: "color",
    hint: "Specifies the hue of text, backgrounds, borders, and other elements, using named colors, hexadecimal codes, or RGB values.",
  },
  {
    word: "background",
    hint: "Determines the visual surface behind content, allowing for colors, images, gradients, or patterns.",
  },
  {
    word: "display",
    hint: "Controls how an element is rendered in the layout, influencing its participation in the box model and flow of the document.",
  },
  {
    word: "position",
    hint: "Specifies how an element is placed within its container, using values like static, relative, absolute, fixed, or sticky.",
  },
  {
    word: "float",
    hint: "Positions an element to the left or right side of its container, allowing other content to flow around it.",
  },
  {
    word: "responsive",
    hint: "Adapting a website's layout to different screen sizes and devices, using techniques like media queries and flexible grids.",
  },
  {
    word: "class",
    hint: "A reusable attribute that allows you to apply the same styles to multiple elements in an HTML document.",
  },
  {
    word: "id",
    hint: "A unique identifier for an HTML element, used for specific styling or JavaScript manipulation. Must be unique within the document.",
  },
  {
    word: "pseudoclass",
    hint: "A keyword added to a selector that specifies a special state of the selected element(s).",
  },
  {
    word: "specificity",
    hint: "The algorithm that the browser uses to determine which CSS rule takes precedence when multiple rules apply.",
  },
  {
    word: "inheritance",
    hint: "A mechanism where certain CSS property values applied to an element are passed down to its descendant elements.",
  },
  {
    word: "boxmodel",
    hint: "A conceptual model that describes the space that an HTML element takes up, including content, padding, border, and margin.",
  },
  {
    word: "grid",
    hint: "A two-dimensional layout system in CSS, enabling the creation of complex and responsive designs with rows and columns.",
  },
  {
    word: "flexbox",
    hint: "A one-dimensional layout system in CSS, enabling easy alignment and distribution of items within a container.",
  },
  {
    word: "mediaquery",
    hint: "A CSS technique that uses different styles for different media types or devices.",
  },
  {
    word: "transform",
    hint: "A CSS property that allows you to rotate, scale, move, skew, etc., elements.",
  },

  // JavaScript (25)

  {
    word: "variable",
    hint: "A named storage location in memory, used to hold data that can be modified during program execution.",
  },
  {
    word: "function",
    hint: "A reusable block of code that performs a specific task, accepting inputs and potentially returning a value.",
  },
  {
    word: "array",
    hint: "A data structure that stores an ordered collection of items, accessible by their numerical index.",
  },
  {
    word: "object",
    hint: "A collection of key-value pairs, representing entities with properties and methods.",
  },
  {
    word: "loop",
    hint: "A control flow statement that allows a block of code to be executed repeatedly, based on a condition.",
  },
  {
    word: "conditional",
    hint: "A statement that executes different code blocks based on whether a condition is true or false.",
  },
  {
    word: "event",
    hint: "An action or occurrence in the browser that triggers a response, such as a user click or a page load.",
  },
  {
    word: "dom",
    hint: "A programming interface for HTML and XML documents, representing the page as a tree-like structure.",
  },
  {
    word: "api",
    hint: "A set of rules and specifications that software programs can follow to communicate with each other.",
  },
  {
    word: "callback",
    hint: "A function passed as an argument to another function, to be executed after an event or operation is completed.",
  },
  {
    word: "promise",
    hint: "An object representing the eventual completion (or failure) of an asynchronous operation, allowing for cleaner code than callbacks.",
  },
  {
    word: "async",
    hint: "A keyword used before a function declaration to indicate that the function will operate asynchronously.",
  },
  {
    word: "await",
    hint: "An operator used inside an async function to pause execution until a Promise is resolved or rejected.",
  },
  {
    word: "closure",
    hint: "The ability of a function to remember and access variables from its surrounding scope, even after the outer function has finished executing.",
  },
  {
    word: "scope",
    hint: "The context in which variables and functions are accessible, determining their visibility and lifetime.",
  },
  {
    word: "hoisting",
    hint: "A JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.",
  },
  {
    word: "prototype",
    hint: "A property of JavaScript functions where inheritance is possible and objects can inherit properties and methods from another object.",
  },
  {
    word: "this",
    hint: "In JavaScript, a keyword that refers to the object it is currently in.",
  },
  {
    word: "class",
    hint: "A blueprint for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).",
  },
  {
    word: "module",
    hint: "A JavaScript file containing reusable code, which can be imported into other JavaScript files or applications.",
  },
  {
    word: "json",
    hint: "A lightweight format for storing and transporting data, often used when data is sent from a server to a web page.",
  },
  {
    word: "fetch",
    hint: "A function that starts the process of fetching a resource from the network.",
  },
  {
    word: "localstorage",
    hint: "A web storage object used to store data with no expiration date.",
  },
  {
    word: "sessionstorage",
    hint: "A web storage object used to store data only for one session.",
  },
  {
    word: "timeout",
    hint: "A function that executes a code snippet or function after a specified delay.",
  },

  // React (25)
  
  {
    word: "component",
    hint: "A self-contained, reusable building block in React, managing its own state and rendering a user interface.",
  },
  {
    word: "jsx",
    hint: "A syntax extension to JavaScript that allows you to write HTML-like code within JavaScript files, making it easier to create React components.",
  },
  {
    word: "props",
    hint: "Data passed from a parent component to a child component, allowing for dynamic and reusable components.",
  },
  {
    word: "state",
    hint: "Data that is managed within a component and can change over time, triggering re-renders to update the user interface.",
  },
  {
    word: "hooks",
    hint: "Functions that let you 'hook into' React state and lifecycle features from function components, enabling state management and side effects.",
  },
  {
    word: "render",
    hint: "The process of creating the user interface based on the component's data and state, updating the DOM to reflect changes.",
  },
  {
    word: "virtualdom",
    hint: "A lightweight in-memory representation of the actual DOM, allowing React to efficiently update the user interface by minimizing direct DOM manipulations.",
  },
  {
    word: "lifecycle",
    hint: "The series of events that occur during a component's existence, from mounting to updating to unmounting, allowing you to control component behavior at different stages.",
  },
  {
    word: "redux",
    hint: "A predictable state container for JavaScript apps, often used with React to manage complex application state in a centralized and predictable way.",
  },
  {
    word: "router",
    hint: "Enables navigation between different views or pages in a React application, allowing users to move between different parts of the application.",
  },
  {
    word: "effect",
    hint: "A hook that lets you perform side effects in function components, like data fetching, subscriptions, or manually changing the DOM.",
  },
  {
    word: "context",
    hint: "A way to pass data through the component tree without having to pass props manually at every level, useful for sharing data that is considered 'global' for a tree of React components.",
  },
  {
    word: "fragment",
    hint: "A way to group a list of children without adding extra nodes to the DOM.",
  },
  {
    word: "memo",
    hint: "A higher-order component that memoizes a functional component, preventing unnecessary re-renders when the props have not changed.",
  },
  {
    word: "ref",
    hint: "A way to access a DOM node or React element created in the render method, allowing you to directly interact with the underlying DOM.",
  },
  {
    word: "useState",
    hint: "A hook that allows you to add React state to function components",
  },
  {
    word: "useEffect",
    hint: "A hook that serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined",
  },
  {
    word: "useContext",
    hint: "A hook that accepts a context object and returns the current context value for that context",
  },
  {
    word: "useRef",
    hint: "A hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue)",
  },
  {
    word: "useMemo",
    hint: "A hook that only runs when one of its dependencies changes.",
  },
  {
    word: "useCallback",
    hint: "A hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed",
  },
  {
    word: "provider",
    hint: "A React component that allows consuming components to subscribe to context changes",
  },
  {
    word: "consumer",
    hint: "A React component that subscribes to context changes",
  },
  {
    word: "hoc",
    hint: "An advanced technique in React for reusing component logic.",
  },
  {
    word: "children",
    hint: "A prop (this.props.children) that allow components to accept components as props and renders them ",
  },
];

//  Data

//    const wordList = [
//      {
//           word: "guitar",
//           hint: "A musical instrument with strings."
//      },
//      {
//           word: "oxygen",
//           hint: "A colorless, odorless gas essential for life."
//      },
//      {
//           word: "mountain",
//           hint: "A large natural elevation of the Earth's surface."
//      },
//      {
//           word: "painting",
//           hint: "An art form using colors on a surface to create images or expression."
//      },
//      {
//           word: "astronomy",
//           hint: "The scientific study of celestial objects and phenomena."
//      },
//      {
//           word: "football",
//           hint: "A popular sport played with a spherical ball."
//      },
//      {
//           word: "chocolate",
//           hint: "A sweet treat made from cocoa beans."
//      },
//      {
//           word: "butterfly",
//           hint: "An insect with colorful wings and a slender body."
//      },
//      {
//           word: "history",
//           hint: "The study of past events and human civilization."
//      },
//      {
//           word: "pizza",
//           hint: "A savory dish consisting of a round, flattened base with toppings."
//      },
//      {
//           word: "jazz",
//           hint: "A genre of music characterized by improvisation and syncopation."
//      },
//      {
//           word: "camera",
//           hint: "A device used to capture and record images or videos."
//      },
//      {
//           word: "diamond",
//           hint: "A precious gemstone known for its brilliance and hardness."
//      },
//      {
//           word: "adventure",
//           hint: "An exciting or daring experience."
//      },
//      {
//           word: "science",
//           hint: "The systematic study of the structure and behavior of the physical and natural world."
//      },
//      {
//           word: "bicycle",
//           hint: "A human-powered vehicle with two wheels."
//      },
//      {
//           word: "sunset",
//           hint: "The daily disappearance of the sun below the horizon."
//      },
//      {
//           word: "coffee",
//           hint: "A popular caffeinated beverage made from roasted coffee beans."
//      },
//      {
//           word: "dance",
//           hint: "A rhythmic movement of the body often performed to music."
//      },
//      {
//           word: "galaxy",
//           hint: "A vast system of stars, gas, and dust held together by gravity."
//      },
//      {
//           word: "orchestra",
//           hint: "A large ensemble of musicians playing various instruments."
//      },
//      {
//           word: "volcano",
//           hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
//      },
//      {
//           word: "novel",
//           hint: "A long work of fiction, typically with a complex plot and characters."
//      },
//      {
//           word: "sculpture",
//           hint: "A three-dimensional art form created by shaping or combining materials."
//      },
//      {
//           word: "symphony",
//           hint: "A long musical composition for a full orchestra, typically in multiple movements."
//      },
//      {
//           word: "architecture",
//           hint: "The art and science of designing and constructing buildings."
//      },
//      {
//           word: "ballet",
//           hint: "A classical dance form characterized by precise and graceful movements."
//      },
//      {
//           word: "astronaut",
//           hint: "A person trained to travel and work in space."
//      },
//      {
//           word: "waterfall",
//           hint: "A cascade of water falling from a height."
//      },
//      {
//           word: "technology",
//           hint: "The application of scientific knowledge for practical purposes."
//      },
//      {
//           word: "rainbow",
//           hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
//      },
//      {
//           word: "universe",
//           hint: "All existing matter, space, and time as a whole."
//      },
//      {
//           word: "piano",
//           hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
//      },
//      {
//           word: "vacation",
//           hint: "A period of time devoted to pleasure, rest, or relaxation."
//      },
//      {
//           word: "rainforest",
//           hint: "A dense forest characterized by high rainfall and biodiversity."
//      },
//      {
//           word: "theater",
//           hint: "A building or outdoor area in which plays, movies, or other performances are staged."
//      },
//      {
//           word: "telephone",
//           hint: "A device used to transmit sound over long distances."
//      },
//      {
//           word: "language",
//           hint: "A system of communication consisting of words, gestures, and syntax."
//      },
//      {
//           word: "desert",
//           hint: "A barren or arid land with little or no precipitation."
//      },
//      {
//           word: "sunflower",
//           hint: "A tall plant with a large yellow flower head."
//      },
//      {
//           word: "fantasy",
//           hint: "A genre of imaginative fiction involving magic and supernatural elements."
//      },
//      {
//           word: "telescope",
//           hint: "An optical instrument used to view distant objects in space."
//      },
//      {
//           word: "breeze",
//           hint: "A gentle wind."
//      },
//      {
//           word: "oasis",
//           hint: "A fertile spot in a desert where water is found."
//      },
//      {
//           word: "photography",
//           hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
//      },
//      {
//           word: "safari",
//           hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
//      },
//      {
//           word: "planet",
//           hint: "A celestial body that orbits a star and does not produce light of its own."
//      },
//      {
//           word: "river",
//           hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
//      },
//      {
//           word: "tropical",
//           hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
//      },
//      {
//           word: "mysterious",
//           hint: "Difficult or impossible to understand, explain, or identify."
//      },
//      {
//           word: "enigma",
//           hint: "Something that is mysterious, puzzling, or difficult to understand."
//      },
//      {
//           word: "paradox",
//           hint: "A statement or situation that contradicts itself or defies intuition."
//      },
//      {
//           word: "puzzle",
//           hint: "A game, toy, or problem designed to test ingenuity or knowledge."
//      },
//      {
//           word: "whisper",
//           hint: "To speak very softly or quietly, often in a secretive manner."
//      },
//      {
//           word: "shadow",
//           hint: "A dark area or shape produced by an object blocking the light."
//      },
//      {
//           word: "secret",
//           hint: "Something kept hidden or unknown to others."
//      },
//      {
//           word: "curiosity",
//           hint: "A strong desire to know or learn something."
//      },
//      {
//           word: "unpredictable",
//           hint: "Not able to be foreseen or known beforehand; uncertain."
//      },
//      {
//           word: "obfuscate",
//           hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
//      },
//      {
//           word: "unveil",
//           hint: "To make known or reveal something previously secret or unknown."
//      },
//      {
//           word: "illusion",
//           hint: "A false perception or belief; a deceptive appearance or impression."
//      },
//      {
//           word: "moonlight",
//           hint: "The light from the moon."
//      },
//      {
//           word: "vibrant",
//           hint: "Full of energy, brightness, and life."
//      },
//      {
//           word: "nostalgia",
//           hint: "A sentimental longing or wistful affection for the past."
//      },
//      {
//           word: "brilliant",
//           hint: "Exceptionally clever, talented, or impressive."
//      },
// ];
