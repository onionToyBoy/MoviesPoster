import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	incrementPage,
	loadBySearchValue,
	searchFilms,
	showMoreFilms,
} from '../../store/actions';
import {
	selectFilms,
	selectPage,
	selectTotalResults,
	selectLoadingStatus,
} from '../../store/selectors';
import { checkTotalResults } from '../../utils';
import { EmptyList } from './EmptyList';
import { FilmCard } from './FilmCard';
import styles from './Films.module.css';

export const Films = () => {
	const [searchValue, setSearchValue] = useState('');
	const [isSearched, setIsSearched] = useState(false);
	const [isSortedByMaxYear, setIsSortedByMaxYear] = useState(false);
	const [isSortedByMinYear, setIsSortedByMinYear] = useState(false);

	const dispath = useDispatch();

	useEffect(() => {
		dispath(loadBySearchValue(''));
	}, []);

	const films: Array<any> = useSelector(selectFilms);
	const page = useSelector(selectPage);
	const totalResults = useSelector(selectTotalResults);
	const loadingStatus = useSelector(selectLoadingStatus);

	const createCross = () => {
		return (
			<div
				className={styles.cross}
				onClick={() => {
					setSearchValue('');
					setIsSearched(false);
					dispath(searchFilms({}));
				}}
			>
				х
			</div>
		);
	};

	const onSearch: () => void = () => {
		dispath(loadBySearchValue(searchValue));
		setIsSearched(true);
	};

	const onShowMore: () => void = () => {
		dispath(incrementPage());
		dispath(showMoreFilms(searchValue, page + 1));
	};

	const onSortByMaxYear: () => void = () => {
		if (isSortedByMaxYear) {
			setIsSortedByMaxYear(false);
		} else {
			setIsSortedByMaxYear(true);
			setIsSortedByMinYear(false);
			films.sort((a, b) => (parseInt(a.Year) < parseInt(b.Year) ? 1 : -1));
		}
	};

	const onSortByMinYear: () => void = () => {
		if (isSortedByMinYear) {
			setIsSortedByMinYear(false);
		} else {
			setIsSortedByMinYear(true);
			setIsSortedByMaxYear(false);
			films.sort((a, b) => (parseInt(a.Year) > parseInt(b.Year) ? 1 : -1));
		}
	};

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
				<div className={styles.button} onClick={onSearch}>
					Search
				</div>
			</div>
			{films?.length && (
				<div className={styles.filters}>
					<div className={styles.filter} onClick={onSortByMaxYear}>
						Sort by max year
					</div>
					<div className={styles.filter} onClick={onSortByMinYear}>
						Sort by min year
					</div>
				</div>
			)}
			<div className={styles.filmList}>
				{films?.length && searchValue
					? films.map((el: any) => <FilmCard key={el.imdbID} item={el} />)
					: loadingStatus || <EmptyList isSearched={isSearched} />}
			</div>
			{films?.length && searchValue && checkTotalResults(page, totalResults) && (
				<div className={styles.moreButton}>
					<div className={styles.button} onClick={onShowMore}>
						Show more
					</div>
				</div>
			)}
		</>
	);
};
