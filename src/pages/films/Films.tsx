import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadData } from '../../store/actions';
import { selectFilms } from '../../store/selectors';
import { EmptyList } from './EmptyList';
import { FilmCard } from './FilmCard';
import styles from './Films.module.css'

export const Films = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isSearched, setIsSearched] = useState(false);

    const dispath = useDispatch();
    const films = useSelector(selectFilms);

    type filmType = {
        Title: string
        Year: string
        imdbID: string
        Type: string
        Poster: string
    };

    const createCross = () => {
        return (
            <div className={styles.cross} onClick={() => setSearchValue('')}>
                х
            </div>
        );
    };

    const onSearch: () => void = () => {
        dispath(loadData(searchValue));
        setSearchValue('');
        setIsSearched(true);
    }

    return (
        <>
            <div className={styles.searchBar}>
                <div className={styles.inputBar}>
                    <input
                        placeholder='Enter here...'
                        className={styles.input}
                        value={searchValue}
                        onInput={(e) => setSearchValue(e.currentTarget.value)}
                    />
                    {searchValue && createCross()}
                </div>
                <div className={styles.button} onClick={onSearch}>Search</div>

            </div>
            <div className={styles.filmList}>
                {films?.length ? films.map((el:any) => (
                    <FilmCard key={el.imdbID} item={el} />
                )) :<EmptyList isSearched={isSearched}/>}
            </div>
        </>
    );
}
