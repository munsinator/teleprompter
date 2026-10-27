import ListItem from './ListItem';
import { useState } from 'react'

export default function List({ songs = [] }) {
    const [selectedSong, setSelectedSong] = useState(null)

    function handleSongSelect(song) {
        setSelectedSong(current => current?.id === song.id ? null : song)
    }

    return (
        <div>
            <div className="grid grid-cols-[minmax(0,1fr)_10rem] items-center border-b border-gray-500 pl-4 pr-18 py-3 text-sm font-semibold text-gray-400">
                <span>Song</span>
                <span>Date of creation</span>
            </div>
            <ul className="flex flex-col divide-y divide-gray-500">
                {songs.map(song => (
                    <ListItem
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        createdAt={song.createdAt}
                        isSelected={selectedSong?.id === song.id}
                        onSongSelect={() => handleSongSelect(song)}
                    />
                ))}
            </ul>
        </div>
    );
}
