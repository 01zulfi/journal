import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Journal from './Journal';

const JournalPage: FC = function JournalPage() {
  return (
    <section className="mt-8">
      <Link to="/" className="link text-fg-cyan opacity-80">
        Back to Home
      </Link>
      <hr className="hr my-4" />
      <Journal></Journal>
    </section>
  );
};

export default JournalPage;
