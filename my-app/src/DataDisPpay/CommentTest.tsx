import '../App.css';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

// const ExampleComment = ({ children }) => (
//     <Comment
//       actions={[<span key="comment-nested-reply-to">Reply to</span>]}
//       author={<a>Han Solo</a>}
//       avatar={
//         <Avatar
//           src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
//           alt="Han Solo"
//         />
//       }
//       content={
//         <p>
//           We supply a series of design principles, practical patterns and high quality design
//           resources (Sketch and Axure).
//         </p>
//       }
//     >
//       {children}
//     </Comment>
// );

function CommentTest() {
  
  return (
    <div className="CommentTest">
    <h3>Comment Examples-(Basic)</h3> 
    {/* <Comments/> */}
    <List></List>
    <h3>Comment Examples-(Nested)</h3> 
    {/* <ExampleComment>
        <ExampleComment>
            <ExampleComment />
            <ExampleComment />
        </ExampleComment>
    </ExampleComment> */}
    </div>
    
  );
}

export default CommentTest;