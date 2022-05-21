import React, { FC, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Journal: FC = function Journal() {
  const params = useParams();
  const [journal, setJournal] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://journal-rest-api.herokuapp.com/published/${params.urlName}`,
      );
      const data = await response.json();

      if (response.status === 200) {
        setJournal(data.journal);
        setErrorMessage('');
        setIsLoading(false);
        return;
      }
      setErrorMessage(data.message);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <article>
      <Link to="/">Back to Home</Link>
      <h2>{journal.title}</h2>
      <p>{journal.createdAt}</p>
      <ReactMarkdown>{journal.content}</ReactMarkdown>
    </article>
  );
};

export default Journal;
