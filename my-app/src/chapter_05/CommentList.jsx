import React from 'react';
import Comment from './Comment';

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요! 😀",
    },
    {
        name: "김철수",
        comment: "리액트 재미있어요~! 😀",
    },
    {
        name: "김영희",
        comment: "저도 리액트 배워보고 싶어요!! 😄",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    )
}

export default CommentList;


