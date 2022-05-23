import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';

interface JournalContentProps {
  content: string;
}

const JournalContent: FC<JournalContentProps> = function JournalContent({
  content,
}) {
  return (
    <div className="journal-content">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default JournalContent;
