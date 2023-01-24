import { gql, useMutation } from "@apollo/client";
import React, { Dispatch, FC, SetStateAction, useState } from "react";

type propType = {
  mediaId: string;
};

const CREATE_NOTE = gql`
  mutation CreateNote($mediaId: String!, $content: String!) {
    createNote(mediaId: $mediaId, content: $content) {
      code
      message
      success
      note {
        content
        id
      }
    }
  }
`;

const ReviewForm: FC<propType> = ({ mediaId }) => {
  const [review, setReview] = useState("");
  const [createNote] = useMutation(CREATE_NOTE, {
    variables: { mediaId, content: review },
    onCompleted: (data) => {
      console.log(data);
    },
  });
  return (
    <div className="flex flex-col justify-between mb-4 gap-4">
      <h1>Write your thoughts:</h1>
      <textarea
        className="resize-none w-full border mb-2 p-2"
        onChange={(e) => setReview(e.target.value)}
        value={review}
      ></textarea>
      <button
        className="self-start bg-slate-900 text-white px-2 py-1 rounded-lg"
        onClick={() => createNote()}
      >
        Submit
      </button>
    </div>
  );
};

export default ReviewForm;
