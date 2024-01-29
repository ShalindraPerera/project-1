import React from 'react';
import A380 from './Assets/A380.jpg';
const Content = () => {
return (
<section>
<p>Welcome to my website! This is some sample content.</p>
{/* Adding an image */}
<img src={A380} alt="A380" />
 {/* Adding a list */}
 <ul>
 <li>Item 1</li>
 <li>Item 2</li>
 <li>Item 3</li>
 </ul>
 {/* Adding a header */}
 <h2>This is a subheading</h2>
 {/* Adding another paragraph */}
 <p>More content goes here...</p>
 {/* Adding a link */}
 <a href="https://www.example.com">Visit Example Website</a>

</section>
);
};
export default Content;