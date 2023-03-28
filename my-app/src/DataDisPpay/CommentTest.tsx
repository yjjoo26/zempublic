import '../App.css';
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from 'antd';
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

// 누락실수
const actions = [
  <span key="comment-basic-like">
    <Tooltip title="Like">
      <Button icon='like' type='link'/>
    </Tooltip>
    <span style={{ paddingLeft: 8, cursor: 'auto' }}>likes</span>
  </span>,
  <span key=' key="comment-basic-dislike"'>
    <Tooltip title="Dislike">
      <Button icon='dislike' type='link'/>
    </Tooltip>
    <span style={{ paddingLeft: 8, cursor: 'auto' }}>dislikes</span>
  </span>,
  <span key="comment-basic-reply-to">Reply to</span>,
];
// 누락실수
const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
];

function CommentTest() {
  
  return (
    <div className="CommentTest">
    {/* 누락실수 */}
    <h3>Comment Examples-(Basic)</h3> 
    <div style={{width:"500", textAlign:"left"}}>
      <Comment
        actions={actions}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    </div>
    {/* 누락실수 */}
    <h3>Comment Examples-(Usage with list)</h3> 
    <div style={{width:"500", textAlign:"left"}}>
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
    </div>
    {/* childern x */}
    {/* <h3>Comment Examples-(Nested)</h3>  */}
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