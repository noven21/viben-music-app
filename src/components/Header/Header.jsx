import React from 'react';
import './Header.css';

export const HeaderDiscover = () => (
	<div className='discover-header md:mt-4 bg-black text-white flex items-center justify-center h-[300px] '>
		<h2 className='text-4xl font-bold text-center'>
			Discover Trending Music
		</h2>
	</div>
);

export const HeaderAroundYou = () => (
	<div className='discover-header md:mt-4 bg-red-300 text-white flex items-center justify-center h-[300px] '>
		<h2 className='text-4xl font-bold text-center'>
			Discover Popular Music Around You!
		</h2>
	</div>
);

export const HeaderTopArtists = () => (
	<div className='discover-header md:mt-4 bg-orange-300 text-white flex items-center justify-center h-[300px] '>
		<h2 className='text-4xl font-bold text-center'>
			Discover Popular Artists
		</h2>
	</div>
);

export const HeaderTopCharts = () => (
	<div className='discover-header md:mt-4 bg-cyan-300 text-white flex items-center justify-center h-[300px] '>
		<h2 className='text-4xl font-bold text-center'>
			Discover Top Hits of the week!
		</h2>
	</div>
);

export const HeaderSongDetails = () => (
	<div className='discover-header md:mt-4 bg-teal-400 text-white flex items-center justify-center h-[300px] '>
		<h2 className='text-4xl font-bold text-center'>
			Song Details of your picks!
		</h2>
	</div>
);

export const HeaderArtistDetails = () => (
	<div className='discover-header md:mt-4 bg-pink-400 text-white flex items-center justify-center h-[300px] '>
		<h2 className='text-4xl font-bold text-center'>
			Artist Details of your picks!
		</h2>
	</div>
);
