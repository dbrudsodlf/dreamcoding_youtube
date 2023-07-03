import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './SearchHeader.module.css';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <BsYoutube size={40} color="#FF0000" />
        <h1 className={styles.h1}>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.btn}>
          <BsSearch size={20} />
        </button>
      </form>
    </header>
  );
}
