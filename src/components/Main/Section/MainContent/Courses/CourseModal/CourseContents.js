import './CourseContents.css'
import Card from 'react-bootstrap/Card';

function CourseContents(props){
return(
  <> 
      <Card.Body className={`${props.darkMode ? 'dark' : ""}`} >
        <p></p>
          {props.thisCourseData.title.match('ython') !== null &&<Card.Text>
        <table className='contentTable'>
          <tr className='TrOfContent'>
            <th className='ThOfContent'>Module #1 : Learn Python 3	</th>
            <th className='ThOfContent'>Module #2 : Business Intelligence Data Analyst	</th>
            <th className='ThOfContent'>Module #3 : Build a Machine Learning Model with Python	</th>
            <th className='ThOfContent'>Module #4 : Analyze Data with Python</th>
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 01: Visualize Data with Python</td>
            <td className='TdOfContent'>Class 06: Analyze Financial Data with Python</td>
            <td className='TdOfContent'>Class 11: Build Chatbots with Python</td>
            <td className='TdOfContent'>Class 16: Build Python Web Apps with Flask</td>
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 02: Build Deep Learning Models with TensorFlow</td>
            <td className='TdOfContent'>Class 07: Master Statistics with Python</td>
            <td className='TdOfContent'>Class 12: Pass the Technical Interview with Python</td>
            <td className='TdOfContent'>Class 17: Apply Natural Language Processing with Python</td>            
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 03: Build Python Web Apps with Django</td>
            <td className='TdOfContent'>Class 08: Data Analyst Interview Preparation</td>
            <td className='TdOfContent'>Class 13: Data Scientist Interview Preparation</td>
            <td className='TdOfContent'>Class 18: Fundamental Math for Data Science</td>            
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 04: Feature Engineering</td>
            <td className='TdOfContent'>Class 09: Software Engineering for Data Scientists</td>
            <td className='TdOfContent'>Class 14: Machine Learning and AI Fundamentals</td>
            <td className='TdOfContent'>Class 19: Intermediate Machine Learning</td>            
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 05: Learn Machine Learning</td>
            <td className='TdOfContent'>Class 10: Getting Started with Python for Data Science</td>
            <td className='TdOfContent'>Class 15: Learn Data Visualization with Python</td>
            <td className='TdOfContent'>Class 20: Machine Learning: Introduction with Regression</td>            
          </tr>
        </table>
          </Card.Text>}

          {props.thisCourseData.title.match('cript') !== null &&<Card.Text>
        <table className='contentTable'>
          <tr className='TrOfContent'>
            <th className='ThOfContent'>Module #1 : HTML, CSS, Javascript	</th>
            <th className='ThOfContent'>Module #2 : Javascript	</th>
            <th className='ThOfContent'>Module #3 : Full-Stack Development	</th>
            <th className='ThOfContent'>Module #4 : Full-Stack Development</th>
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 01: Git, GitHub and, Terminal</td>
            <td className='TdOfContent'>Class 06: Javascript: Loops and Functions</td>
            <td className='TdOfContent'>Class 11: React: Introduction</td>
            <td className='TdOfContent'>Class 16: CRUD</td>
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 02: GitHub Branches and Wireframes</td>
            <td className='TdOfContent'>Class 07: Javascript: Hoisting, Objects and, DOM</td>
            <td className='TdOfContent'>Class 12: Routing, Conditional Rendering, Events and, State</td>
            <td className='TdOfContent'>Class 17: Backend Deployment</td>            
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 03: HTML</td>
            <td className='TdOfContent'>Class 08: Javascript: DOM Manipulation and Events</td>
            <td className='TdOfContent'>Class 13: Building a Server</td>
            <td className='TdOfContent'>Class 18: Hooks and Linking Frontend with Backend</td>            
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 04: CSS</td>
            <td className='TdOfContent'>Class 09: Local Storage and JSON</td>
            <td className='TdOfContent'>Class 14: 3rd Party API</td>
            <td className='TdOfContent'>Class 19: Frontend Deployment</td>            
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 05: Javascript: Introduction</td>
            <td className='TdOfContent'>Class 10: Recursive Function and Regex</td>
            <td className='TdOfContent'>Class 15: Databases</td>
            <td className='TdOfContent'>Class 20: Installation</td>            
          </tr>
        </table>
          </Card.Text>}
          {props.thisCourseData.title == "java" &&<Card.Text>
        <table className='contentTable'>
          <tr className='TrOfContent'>
            <th className='ThOfContent'>Module #1 : Introduction to Java
Programming – Part 1	</th>
            <th className='ThOfContent'>Module #2 : Introduction to
Object-Oriented
Programming with Java…	</th>
            <th className='ThOfContent'>Module #3 :Introduction to Java
Programming: Starting to
code in Java
	</th>
            <th className='ThOfContent'>Module #4 : Introduction to Java
Programming:
Fundamental Data Stru…
</th>
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 01: AP Computer Science A:
Java Programming</td>
            <td className='TdOfContent'>Class 06: Java Programming: Basic
Skills</td>
            <td className='TdOfContent'>Class 11: Java Programming
Fundamentals</td>
            <td className='TdOfContent'>Class 16: CS50's Mobile App
Development with React
Native</td>
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 02: Fundamentals of Java EE
Development</td>
            <td className='TdOfContent'>Class 07: CS50's Web Programming
with Python and
JavaScript</td>
            <td className='TdOfContent'>Class 12: CS50's Introduction to
Computer Science</td>
            <td className='TdOfContent'>Class 17: Introduction to
Object-Oriented
Programming with Java </td>            
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 03: Data Structures &
Algorithms I: ArrayLists,
LinkedLists and Stacks 
</td>
            <td className='TdOfContent'>Class 08: Introduction to Web
Development with
HTML5, CSS3, and Java</td>
            <td className='TdOfContent'>Class 13: Guided Project:
Containerize Java
Microservices </td>
            <td className='TdOfContent'>Class 18: Introduction to
Object-Oriented
Programming with Java</td>            
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 04:AP Computer Science A:
Java Programming
Polymorphism </td>
            <td className='TdOfContent'>Class 09: Google AI for Java
developers with
TensorFlow</td>
            <td className='TdOfContent'>Class 14: Machine Learning and AI Fundamentals</td>
            <td className='TdOfContent'>Class 19: Intermediate Machine Learning</td>            
          </tr>
          <tr className='TrOfContent'>
            <td className='TdOfContent'>Class 05: Learn Machine Learning</td>
            <td className='TdOfContent'>Class 10: Getting Started with java for Data Science</td>
            <td className='TdOfContent'>Class 15: Learn Data Visualization with java</td>
            <td className='TdOfContent'>Class 20: Machine Learning: Introduction with Regression</td>            
          </tr>
        </table>
          </Card.Text>}
      </Card.Body>
     
      </>
)}
export default CourseContents