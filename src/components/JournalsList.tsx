import React, { FC, useState, useEffect } from 'react';
import JournalInterface from '../interfaces/journal';
import { Link } from 'react-router-dom';
import formatDate from '../utils/format-date';

const JournalsList: FC = function JournalsList() {
  const [journals, setJournals] = useState<JournalInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://journal-rest-api.herokuapp.com/published',
      );
      const data = await response.json();
      if (response.status === 200) {
        setJournals(data.journals);
        setErrorMessage('');
        setIsLoading(false);
        const date = new Date(data.journals.at(-1).createdAt);
        console.log(date.toDateString());
        return;
      }
      setErrorMessage(data.message);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMessage !== '') {
    return <p>{errorMessage}</p>;
  }

  return (
    <section>
      {journals.map((journal) => (
        <div key={journal._id}>
          <h2>
            <Link to={journal.urlName}>{journal.title}</Link>
          </h2>
          <p>{formatDate(journal.createdAt)}</p>
        </div>
      ))}
    </section>
  );
};

export default JournalsList;
