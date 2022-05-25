import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import nord from 'react-syntax-highlighter/dist/esm/styles/prism/nord';

interface JournalContentProps {
  content: string;
}

const JournalContent: FC<JournalContentProps> = function JournalContent({
  content,
}) {
  return (
    <div className="journal-content">
      <ReactMarkdown
        children={content}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                showLineNumbers
                style={nord}
                customStyle={{ margin: '2rem 0' }}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={`${className} inline-code`} {...props}>
                {children}
              </code>
            );
          },
        }}
      ></ReactMarkdown>
    </div>
  );
};

export default JournalContent;
