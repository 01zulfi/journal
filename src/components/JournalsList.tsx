import React, { FC, useState, useEffect } from 'react';
import Loading from './Loading';
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
    return <Loading></Loading>;
  }

  if (errorMessage !== '') {
    return <p>{errorMessage}</p>;
  }

  return (
    <section className="flex flex-col py-8 sm:w-2/3">
      {journals.map((journal) => (
        <div key={journal._id}>
          <Link to={journal.urlName}>
            <div className="flex justify-between py-6 bg-transparent hover:bg-[rgba(255,255,255,0.07)] rounded px-2">
              <h2 className="text-fg-secondary text-xl w-2/3">
                {journal.title}
              </h2>
              <p className="italic opacity-90">
                {formatDate(journal.createdAt)}
              </p>
            </div>
          </Link>
          <hr className="hr" />
        </div>
      ))}
    </section>
  );
};

export default JournalsList;
