import ListItem from './ListItem';

export default function List() {
    return (
        <div>
            <div className="grid grid-cols-[minmax(0,1fr)_10rem] items-center border-b border-gray-500 px-4 py-3 text-sm font-semibold text-gray-400">
                <span>Song</span>
                <span>Date of creation</span>
            </div>
            <ul className="flex flex-col divide-y divide-gray-500">
            <ListItem title="Item 1" />
            <ListItem title="Item 2" />
            <ListItem title="Item 3" />
            </ul>
        </div>
    );
}
