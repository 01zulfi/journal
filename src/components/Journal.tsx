import React, { FC, useState, useEffect } from 'react';
import Loading from './Loading';
import JournalContent from './JournalContent';
import { useParams } from 'react-router-dom';
import formatDate from '../utils/format-date';
import setWebpageTitle from '../utils/set-webpage-title';

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
  }, [params.urlName]);

  useEffect(() => {
    if (!journal.title) return;
    setWebpageTitle(`${journal.title} | zulfi's journal`);
    return () => setWebpageTitle("zulfi's journal");
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <article>
      <h2 className="text-3xl tracking-wide font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-300 to-purple-400">
        {journal.title}
      </h2>
      <p className="italic my-4 mb-8">{formatDate(journal.createdAt)}</p>
      <JournalContent content={journal.content}></JournalContent>
    </article>
  );
};

export default Journal;
